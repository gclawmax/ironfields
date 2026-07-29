# Campaign & Career Mode — Design Notes

## Overview

Ironfields currently handles single battles (1v1, 2v2, etc.) with no persistence between matches. Campaign and Career modes would add a layer of progression and narrative structure on top of the existing battle engine.

**Key insight: the battle engine doesn't need to change.** Campaign/Career is metadata *around* the existing system — just extra tables linking battles together with progression data.

---

## Campaign Mode — Scripted Missions

A campaign is a **container** for multiple battles with narrative structure.

### Proposed Database Schema

| Table | Purpose | Key Fields |
|---|---|---|
| `campaigns` | The campaign itself | `id`, `user_id`, `title`, `description`, `scenario_count`, `status` (planning/active/completed), `current_scenario_index` |
| `campaign_scenarios` | Individual mission definitions | `id`, `campaign_id`, `scenario_number`, `title`, `description`, `map_preset`, `enemy_lance_config` (JSON), `victory_conditions` (JSON), `rewards` (JSON) |
| `campaign_progress` | Player's campaign save | `id`, `user_id`, `campaign_id`, `completed_scenarios` (JSON array), `current_scenario_id`, `campaign_stats` (total battles, wins, losses, total heat, etc.) |

### How It Works

- Player creates or loads a campaign → `current_scenario_index` tells you which mission to load next
- On mission completion, update `campaign_progress.completed_scenarios` and advance `current_scenario_id`
- Victory conditions are defined in the scenario JSON: "destroy all enemy mechs", "survive 10 turns", "reach objective point"
- Rewards (XP, salvage, new weapons) are awarded on scenario completion and persist to the next mission

### Integration with Existing Code

- Each scenario is just another game in `ironfield_games` (same state JSON structure)
- Link it via a new `campaign_id` foreign key on `ironfield_games`
- Existing save/load logic works — just add one extra query to fetch the scenario config before starting the battle
- No changes to the battle rendering, movement, or combat engine

---

## Career Mode — Randomized/Fluid

Career is like a campaign but **procedurally generated** — no scripted scenarios upfront.

### Proposed Database Schema

| Table | Purpose | Key Fields |
|---|---|---|
| `career_profiles` | The player's career | `id`, `user_id`, `name`, `rank`, `xp`, `credits`, `total_battles`, `wins`, `losses`, `streak`, `created_at`, `updated_at` |
| `career_pilots` | Individual pilot records | `id`, `career_id`, `pilot_name`, `callsign`, `rank`, `kills`, `battles_fought`, `survival_rate`, `specializations` (JSON), `injuries` (JSON), `status` (active/deceased/retired/MIA) |
| `career_lances` | Player's lance roster | `id`, `career_id`, `mech_class`, `mech_name`, `callsign`, `pilot_id` (FK), `armour`, `structure`, `weapons` (JSON), `heat_rating`, `status` (battle-ready/damaged/destroyed/salvaged) |
| `career_salvage` | Weapons/tech salvaged | `id`, `career_id`, `weapon_name`, `tier`, `rarity`, `source_battle_id` (FK), `acquired_at` |
| `career_battles` | Battle records (extends `ironfield_games`) | `id` (FK to ironfield_games), `career_id`, `result` (win/loss/draw), `turns_fought`, `damage_dealt`, `damage_taken`, `enemy_strength` (rating), `rewards_earned` (JSON), `salvage_loot` (JSON) |

### How It Works

- Career is a **persistent character file** that survives between battles
- Each battle (even casual 1v1s) can optionally be logged to career via a `career_id` flag
- Before each battle, generate an **opponent lance** procedurally based on career rank (easier opponents when low-ranked, harder when high)
- After each battle:
  1. Log result to `career_battles`
  2. Award XP/credits based on opponent strength and result
  3. Allow salvage of weapons from destroyed enemy mechs (stored in `career_salvage`)
  4. Let the player repair/upgrade their lances using credits
  5. Advance career rank when XP thresholds are hit

### Integration with Existing Code

- `career_id` as a new column on `ironfield_games` links battles to careers
- The `state` JSON blob already contains all mech data — extract what you need (`mechs[].pilotName`, `mechs[].armour`, etc.)
- `career_salvage.weapon_data` could store the same JSON structure already used for weapons

---

## Recommended Implementation Order

1. **`campaigns` + `campaign_scenarios`** — scripted missions first (easier to design, more satisfying for single-player)
2. **`career_profiles` + `career_pilots`** — persistent pilot progression (gives battles meaning beyond the match)
3. **`career_lances` + `career_salvage`** — equipment management (building your fleet over time)
4. **`career_battles`** — battle logging (just extend `ironfield_games` with a `career_id` column)

## Key Design Principles

- **No battle engine changes required** — campaign/career is metadata around the existing system
- **Re-use the existing `state` JSON blob** — it already contains mech, terrain, and turn data
- **Progressive disclosure** — add one layer at a time; players don't need to see all features at once
- **Optional integration** — casual 1v1s work normally; career/campaign is opt-in via UI toggle
- **Data portability** — campaign progress and career data should be queryable/exportable independently

## Future Considerations

- Pilot injury/death mechanics (permanent consequences)
- Pilot specialization trees (gunnery, piloting, tactics, engineering perks)
- Mech customization tiers (common → rare → unique → prototype)
- Multi-campaign management (multiple active campaigns, saved games)
- Leaderboards (fastest clear times, highest score, most wins)
- Scenario editor (let players create their own campaigns)
- AI difficulty scaling within campaigns (adjust enemy lance strength per scenario)
