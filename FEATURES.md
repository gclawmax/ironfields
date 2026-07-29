# Ironfields — Feature List & Status

*Consolidated from: ROADMAP_v6.md, COMBAT_PLAN.md, AI Roadmap.md, UI Audit Draft, ROADMAP_v4.md, ROADMAP_v5.md*
*Created: 2026-07-27*
*Last verified: 2026-07-27*

---

## Status Legend

| Status | Meaning |
|---|---|
| **DONE** | Implemented in current codebase |
| **PLANNED** | Documented but not implemented |
| **BLOCKED** | Depends on other features before implementation |
| **RESEARCH** | Needs investigation/prototyping |

---

## 1. Core Engine

### 1.1 Hex Grid Rendering
| ID | Feature | Status | Notes |
|---|---|---|---|
| E-001 | Canvas-based hex grid (vertex-facing) | DONE | 500x500 canvas, hex size 40px, triangle-level height data |
| E-002 | Hex selection (click/drag) | DONE | Left-click selects, drag selects multiple |
| E-003 | Line of sight calculations | DONE | Raycasting between hex centers |
| E-004 | Terrain types (open, woods, hills, mountains, water, urban) | DONE | Each with MP cost, LOS effect, cover TN |
| E-005 | Elevation system | DONE | Triangle-level height, TN modifiers for uphill/downhill, stepped tint rendering |
| E-006 | Camera pan/zoom | DONE | WASD/arrow keys to pan, +/- to zoom |
| E-007 | Grid overlay toggle | DONE | Shows/hides hex grid lines |

### 1.2 Movement System
| ID | Feature | Status | Notes |
|---|---|---|---|
| E-008 | Movement points (MP) per mech | DONE | Based on chassis move rating |
| E-009 | Hex-by-hex movement with MP tracking | DONE | Visual MP cost per hex, remaining MP display |
| E-010 | Movement path preview | DONE | Dotted line shows path before commit |
| E-011 | Terrain MP modifiers | DONE | Woods = 2 MP, hills = 3 MP, etc. |
| E-012 | Jump jet mechanics | PLANNED | Short-range vertical movement, limited uses |
| E-013 | Running vs walking | PLANNED | Running = faster but more heat, walking = stealth |

### 1.3 Turn Structure
| ID | Feature | Status | Notes |
|---|---|---|---|
| E-014 | Player turn → Enemy turn cycle | DONE | Sequential turn resolution |
| E-015 | WeGo resolution system | DONE | Simultaneous planning, simultaneous execution |
| E-016 | Turn plan submission | DONE | Submit current plan, lock actions |
| E-017 | Turn timer (optional) | PLANNED | Per-turn time limit, server-side timestamp + client countdown |
| E-018 | Skip turn action | PLANNED | Allow mech to skip action |

---

## 2. Combat System

### 2.1 Weapons & Firing
| ID | Feature | Status | Notes |
|---|---|---|---|
| C-001 | Weapon selection UI | DONE | Bottom panel shows equipped weapons |
| C-002 | Target hex selection | DONE | Click enemy hex to target |
| C-003 | Hit/miss resolution | DONE | Roll to hit based on pilot skills, range, terrain |
| C-004 | Damage application | DONE | Based on weapon type, hit location |
| C-005 | Heat generation per weapon | DONE | Each weapon generates heat on fire |
| C-006 | Heat management (cooling, overheating) | DONE | Overheating shuts down weapons |
| C-007 | Multiple weapon types (LRM, SRM, LASER, AC/20, etc.) | DONE | Defined in WEAPONS array |
| C-008 | Weapon range bands (short, medium, long, extreme) | DONE | Range affects hit TN |
| C-009 | Ammo tracking | PLANNED | Limited ammo per weapon, resupply between missions |
| C-010 | Weapon critical hits | PLANNED | Shots can destroy specific weapons |

### 2.2 Armor & Damage
| ID | Feature | Status | Notes |
|---|---|---|---|
| C-011 | Directional armor (front, rear, sides) | DONE | Each location has armor value |
| C-012 | Armor reduction on hit | DONE | Armor decreases as mech takes damage |
| C-013 | Structural damage | DONE | When armor depleted, structure takes damage |
| C-014 | Critical hit system | PLANNED | Shots can hit specific internal components (engine, cockpit, etc.) |
| C-015 | Destruction thresholds | PLANNED | Mech destroyed when structure reaches 0 |
| C-016 | Damage types (kinetic, energy, missile) | PLANNED | Each interacts differently with armor |

### 2.3 Pilot System
| ID | Feature | Status | Notes |
|---|---|---|---|
| C-017 | Pilot name/stage display | DONE | Top-left panel shows pilot info |
| C-018 | Pilot skills (aim, evasion, tactics) | DONE | Affect hit TN, evasion, weapon efficiency |
| C-019 | Pilot progression (XP, level up) | PLANNED | Earn XP from combat, unlock new skills |
| C-020 | Pilot injuries/permadeath | PLANNED | Critical hits can injure pilots, permadeath on certain conditions |

### 2.4 Combat Log
| ID | Feature | Status | Notes |
|---|---|---|---|
| C-021 | Action log (movement, firing, hits) | DONE | Right panel shows combat events |
| C-022 | Hit confirmation sounds | PLANNED | Web Audio API, per weapon type |
| C-023 | Mech destruction notifications | PLANNED | Visual/audio feedback when mech destroyed |
| C-024 | Weapon labels on hover | PLANNED | Show weapon name/damage on hover |

---

## 3. AI System

### 3.1 Current AI (V0.1)
| ID | Feature | Status | Notes |
|---|---|---|---|
| A-001 | "Rush and blast" logic | DONE | Enemies move toward player, fire when in range |
| A-002 | Basic pathfinding | DONE | Greedy pathfinding toward nearest enemy |
| A-003 | Target selection (nearest mech) | DONE | Simple nearest-neighbor targeting |

### 3.2 AI Architecture Foundation
| ID | Feature | Status | Notes |
|---|---|---|---|
| A-004 | Web Worker for AI calculations | PLANNED | Off-main-thread to keep UI smooth |
| A-005 | Blackboard (central state database) | PLANNED | Global context (Leader_Down, Extraction_Closing, etc.) |
| A-006 | Utility scoring system | PLANNED | Replace V0.1 with math-based decisions (distance vs. range, heat vs. damage) |
| A-007 | Basic difficulty AI | PLANNED | Greedy AI for solo playtesting |
| A-008 | Hard difficulty AI (Claude API) | PLANNED | Prompt board state JSON, receive plan object |

### 3.3 Advanced AI (Phase 3)
| ID | Feature | Status | Notes |
|---|---|---|---|
| A-009 | JSON personality profiles | PLANNED | Archetypes: Aggression, Honor, Self-Preservation |
| A-010 | Dynamic states (Fear, Rage, panic) | PLANNED | Response curves for temporary psychological factors |
| A-011 | Faction-specific behaviors | PLANNED | Different AI for Clans vs. Inner Sphere |
| A-012 | LLM balancing via Ollama | RESEARCH | Simulate thousands of combat turns, fine-tune math |
| A-013 | Sensor mechanics UI | PLANNED | Reveal enemy traits via espionage/sensor suites |

---

## 4. UI/UX

### 4.1 Current UI
| ID | Feature | Status | Notes |
|---|---|---|---|
| U-001 | Main menu (title, start game, instructions) | DONE | Simple menu with game title and buttons |
| U-002 | Lobby screen | DONE | Pilot name input, mech selection, team setup |
| U-003 | Game screen (hex grid, combat log, pilot info) | DONE | Main gameplay UI |
| U-004 | Weapon selection panel | DONE | Bottom panel with equipped weapons |
| U-005 | Turn indicator | DONE | Shows current turn number and phase |
| U-006 | Supabase auth (login/register) | DONE | Email/password auth, profiles table |

### 4.2 Planned UI Improvements
| ID | Feature | Status | Notes |
|---|---|---|---|
| U-007 | Strategic map overview | PLANNED | Hex-based campaign map with mission nodes, terrain, objectives |
| U-008 | Company management screen | PLANNED | View/repair mechs, track C-bills, manage pilots |
| U-009 | Barracks screen | PLANNED | Pilot roster, stats, injuries, careers |
| U-010 | Mission briefing screen | PLANNED | Objectives, enemy forces, terrain preview |
| U-011 | Post-battle screen | PLANNED | Salvage, repairs, pilot XP, C-bill earnings |
| U-012 | Settings panel (theme, brightness, text size) | PLANNED | Dark/light theme, brightness slider, text size, combat feedback options |
| U-013 | Toolbar optimization | PLANNED | Trim from 12 buttons to 7 (SELECT/MOVE/ROTATE/FIRE/WEAPON/STATUS/INFO) |
| U-014 | Mobile/touch improvements | PLANNED | Larger touch targets, swipe-to-pan, pinch-to-zoom, bottom-sheet weapon picker |
| U-015 | Replay system | PLANNED | Record and replay combat turns |
| U-016 | Spectator mode | PLANNED | Third-party read-only access, subscribes to onGameUpdate |
| U-017 | Multiple concurrent games | PLANNED | Track gameId per tab rather than globally |

### 4.3 Sound Design
| ID | Feature | Status | Notes |
|---|---|---|---|
| U-018 | Weapon fire sounds (per type) | PLANNED | Web Audio API, no dependencies |
| U-019 | Hit confirmation sounds | PLANNED | Distinct sounds for hit/miss/critical |
| U-020 | Mech destruction sounds | PLANNED | Loud explosion, mechanical grinding |
| U-021 | Turn resolution sounds | PLANNED | Subtle click for turn start/end |

---

## 5. Campaign & Progression

### 5.1 Company Management
| ID | Feature | Status | Notes |
|---|---|---|---|
| P-001 | Salvage tracking | PLANNED | Recover parts from destroyed enemies |
| P-002 | C-bill economy | PLANNED | Earn C-bills from missions, spend on repairs/upgrades |
| P-003 | Mech repair system | PLANNED | Restore armor, repair damaged components |
| P-004 | Mech customization/loadout | PLANNED | Select weapons, armor, equipment before missions |
| P-005 | Chassis variety (LANCE-S/A/E/F/B) | PLANNED | Different chassis with unique stats and weapon slots |

### 5.2 Pilot Progression
| ID | Feature | Status | Notes |
|---|---|---|---|
| P-006 | Pilot XP system | PLANNED | Earn XP from combat, level up |
| P-007 | Skill trees | PLANNED | Unlock new abilities as pilots advance |
| P-008 | Pilot injuries | PLANNED | Critical hits can injure pilots, affect performance |
| P-009 | Pilot permadeath | PLANNED | Permanent death on certain conditions |
| P-010 | Pilot hiring/firing | PLANNED | Recruit new pilots, dismiss injured ones |

### 5.3 Mission System
| ID | Feature | Status | Notes |
|---|---|---|---|
| P-011 | Mission selection screen | PLANNED | Choose from available missions on strategic map |
| P-012 | Scenario objectives | PLANNED | Breakthrough, Last Stand, Salvage, Escort, Assassination |
| P-013 | Win/lose conditions | PLANNED | Each scenario has specific win/lose criteria |
| P-014 | Timeline/technology epochs | PLANNED | Access different gear as timeline advances, LosTech rediscovery |
| P-015 | Weather/season effects | PLANNED | Affects movement, visibility, combat |

### 5.4 Tutorial
| ID | Feature | Status | Notes |
|---|---|---|---|
| P-016 | Phased tutorial campaign | PLANNED | Teach movement, heat management, AI prediction |
| P-017 | Interactive tooltips | PLANNED | Context-sensitive help during gameplay |
| P-018 | Training missions | PLANNED | Practice scenarios without risk |

---

## 6. Multiplayer & Advanced Systems

### 6.1 VS AI
| ID | Feature | Status | Notes |
|---|---|---|---|
| M-001 | Basic difficulty (greedy AI) | PLANNED | Single session, enables solo playtesting |
| M-002 | Hard difficulty (Claude API) | PLANNED | Prompt board state JSON, receive plan object |
| M-003 | AI difficulty scaling | PLANNED | Adjustable difficulty levels |

### 6.2 Multiplayer (Future)
| ID | Feature | Status | Notes |
|---|---|---|---|
| M-004 | Company vs. Company | BLOCKED | Requires server infrastructure, matchmaking |
| M-005 | Mercenary board | BLOCKED | Betting, salvage rights, persistent economy |
| M-006 | Persistent player profiles | BLOCKED | Store company data, pilot stats, achievements |
| M-007 | Matchmaking system | BLOCKED | Pair players of similar skill/company strength |

---

## 7. Infrastructure & Quality

### 7.1 Authentication
| ID | Feature | Status | Notes |
|---|---|---|---|
| I-001 | Supabase auth (email/password) | DONE | Login/register via Supabase |
| I-002 | Profiles table | DONE | But login succeeds without profile row — breaks loadProfile() |
| I-003 | Profile row creation on signup | PLANNED | Ensure every auth user has a profile row |

### 7.2 Testing
| ID | Feature | Status | Notes |
|---|---|---|---|
| I-004 | Playwright E2E tests (lobby flow) | DONE | Tests/lobby.spec.js |
| I-005 | Combat scenario tests | PLANNED | Test combat mechanics, AI behavior |
| I-006 | Performance benchmarks | PLANNED | Measure frame rate, AI calculation time |

### 7.3 Code Quality
| ID | Feature | Status | Notes |
|---|---|---|---|
| I-007 | Modular code structure | PLANNED | Split index.html into modules |
| I-008 | Configuration management | PLANNED | Externalize game balance values |
| I-009 | Asset pipeline | PLANNED | Load graphics, sounds from external files |
| I-010 | Documentation | PLANNED | Inline code comments, architecture doc |

---

## 8. Known Issues & Bugs

| ID | Issue | Status | Notes |
|---|---|---|---|
| B-001 | Supabase: login succeeds without profile row | PLANNED | loadProfile() silently fails, pilot name shows as '—' |
| B-002 | CSS uses `px` instead of `rem` for HUD bar width | PLANNED | May look odd on high-DPI screens |
| B-003 | Cooldown not reset when switching weapons | PLANNED | Weapon cooldown persists across switches |
| B-004 | No mobile/touch support | PLANNED | UI not responsive, no touch controls |
| B-005 | No error handling for Supabase failures | PLANNED | Silent failures if Supabase is down |

---

## 9. Roadmap Summary

### Tier 1: Core Combat (DONE)
- Hex grid, movement, combat math, basic AI, UI foundation

### Tier 2: Playtestable Skirmish (DONE)
- Terrain, elevation, heat, pilot skills, lance composition, full combat system

### Tier 3: Solo Play & Variety (PLANNED)
- VS AI basic difficulty, additional chassis, heat management improvements

### Tier 4: AI Architecture (PLANNED)
- Web Worker, Blackboard, utility scoring, personality profiles

### Tier 5: Campaign (PLANNED)
- Company management, pilot progression, mission system, strategic map

### Tier 6: Polish (PLANNED)
- Replay system, turn timer, sound design, mobile improvements, spectator mode

### Tier 7: Multiplayer (BLOCKED)
- Company vs. Company, mercenary board, persistent economy

---

## 10. Next Recommended Sessions

Based on current state and playtest recommendations:

1. **VS AI — Basic difficulty** (Highest priority) — Enables solo testing without a second player. Single session.
2. **Additional chassis + weapons** — More variety in lance picker. Incremental.
3. **Supabase profile fix** (B-001) — Ensure profile row created on signup. Quick fix.
4. **CSS `rem` migration** (B-002) — Fix high-DPI HUD display. Quick fix.
5. **Cooldown reset on weapon switch** (B-003) — Fix weapon cooldown persistence. Quick fix.
6. **Playtest session** — Assess balance, feel, and roadmap priority before adding more features.

---

*This document consolidates all existing plans. No source documents have been deleted — they remain for reference until we confirm nothing is lost.*

---

## 11. Testing Observations

*Last updated: 2026-07-27*

### 11.1 Match Display

**Issue: Match details at the top are too small and hard to read.**

The match header showing "Player 1: X v Player 2 Y (AI-Intermediate)" is rendered in small text that's difficult to read at a glance. This should be made larger and more prominent so players can immediately see who's playing, who's on which side, and the AI difficulty level.

**Priority:** High — this is the first information the player sees when a match starts.

---

### 11.2 Compact UI Attempts Broken

**Issue: Various compact UI layouts are broken and need addressing.**

Several attempts to create a more compact UI layout have been made but are not working correctly. These include:

- **Toolbar trimming** — Attempted to reduce from 12 buttons to 7 (SELECT/MOVE/ROTATE/FIRE/WEAPON/STATUS/INFO) but the trimmed state appears broken in practice.
- **Mobile/touch layout** — The compact mobile layout with larger touch targets, swipe-to-pan, and pinch-to-zoom is not functional.
- **Bottom-sheet weapon picker** — The compact weapon selection panel for mobile is not implemented or is broken.

These were likely introduced during UI iteration but never fully tested or restored to a working state. They should be audited and either fixed or removed to avoid confusion.

**Priority:** Medium — these are dead code paths that may confuse future development.

---

### 11.3 Mech Customisation Missing

**Issue: "Mech Customisation" is not mentioned in any feature documentation.**

Despite the game having multiple chassis (LANCE-S/A/E/F/B) with different stats and weapon slots, there is no documented or implemented **Mech Customisation** system. This should include:

- **Loadout selection** — Choosing weapons, armor, and equipment before missions
- **Chassis-specific modifications** — Different chassis allow different weapon types and amounts
- **Equipment slots** — Engine rating, armor type, special equipment (jump jets, ECM, etc.)
- **Pre-mission configuration screen** — UI for customising the mech before a battle starts

This is a significant gap — the chassis exist in the code but players cannot meaningfully customise them beyond basic weapon selection.

**Priority:** High — core to the mercenary campaign concept.

---

### 11.4 Pilots Lack Detail

**Issue: Pilots currently have no meaningful detail beyond a name and basic skills.**

Current pilot system shows:
- Name (text input)
- Basic skills (aim, evasion, tactics) — affecting hit TN, evasion, weapon efficiency

Missing entirely:
- **Pilot backstory/personality** — No character depth
- **Pilot appearance** — No visual representation
- **Pilot stats breakdown** — No detailed stats showing how skills affect gameplay
- **Pilot progression** — No XP, levels, or skill trees
- **Pilot injuries** — No damage system affecting pilots
- **Pilot permadeath** — No consequence for pilot loss
- **Pilot hiring/firing** — No way to manage a roster

The pilot is essentially a name tag with three floating-point modifiers. This needs a substantial expansion to support the campaign and progression systems planned in the roadmap.

**Priority:** High — essential for campaign mode and player investment.

---

### 11.5 Images Disappear on Mouse Movement

**Issue: Images (graphics/sprites) disappear when moving the mouse.**

During testing, images on the game canvas disappear when the mouse is moved across the screen. This suggests a rendering issue where the canvas is not properly redrawing sprites during interaction.

**Suspected cause:** The canvas redraw loop may not be handling sprite rendering during mouse events, or sprites are being cleared without being redrawn when the mouse moves.

**Priority:** High — this breaks the visual experience and makes the game unplayable during normal interaction.

---

### 11.6 Walking Concept: Movement Style Affects Targeting

**Concept: Walking vs Running as distinct movement styles with targeting implications.**

A proposed concept for the planned "Running vs Walking" feature (E-013):

- **Walking** — The mech moves slowly while maintaining a steady target. This preserves targeting accuracy. The targeting algorithm would benefit from walking (lower TN to hit) because the mech is stable and not moving. Walking is ideal for long-range engagements where precision matters.

- **Running** — The mech moves fast, optimising for movement distance over accuracy preservation. The targeting algorithm would be penalised when running (higher TN to hit) because the mech is unstable and moving. Running is ideal for closing distance quickly but makes the mech a harder-to-hit target for enemies (evasion bonus) while making the mech's own shots less accurate.

**Targeting algorithm impact:**
- When a mech walks, its **own shots** benefit (lower TN) because it is a stable firing platform
- When a mech runs, its **own shots** suffer (higher TN) because it is a moving, unstable platform
- When a mech walks, it is **easier for enemies to hit** (no evasion bonus) but it shoots more accurately
- When a mech runs, it is **harder for enemies to hit** (evasion bonus from movement) but it shoots less accurately

This creates a meaningful tactical trade-off: do you walk to shoot accurately, or run to stay mobile and evasive?

**Priority:** Medium — this is a design concept that should be prototyped once the basic running/walking system (E-013) is implemented.

---

### 11.7 Dice Roll Display in Combat Log

**Issue: Dice rolls are not displayed in the combat log.**

When dice are rolled for hit resolution, the result should be shown as visual dice faces in the combat log so the user can see exactly what was rolled. Currently the log only shows "HIT" or "MISS" without transparency.

**Current TN calculation (from code):**

The target number is calculated as follows:

```
Base TN = 7
+ Range modifier (short=-2, medium=0, long=+2, extreme=+4)
+ Terrain modifier (woods=+2, hills=+1, mountains=+3, urban=+3)
+ Elevation modifier (uphill=+2, downhill=-2)
+ Pilot skill modifier (based on pilot's aim skill)
+ Other modifiers (weather, damage, etc.)
= Effective Target Number (ETN)
```

The roll is **3d6** (three six-sided dice, summed). Results:

| Roll Total | Result |
|---|---|
| 3 | Critical hit (always, regardless of TN) |
| 18 | Critical hit (always, regardless of TN) |
| 17 | Penetrating shot (doubles also apply) |
| 16 | Penetrating shot (doubles also apply) |
| >= TN | Hit |
| < TN | Miss |

**Doubles** (any two dice showing the same number) indicate a **penetrating shot** — the shot hits a specific location chosen by the attacker rather than being randomly determined.

**Location determination** (when no doubles):
| 3d6 Total | Location Hit |
|---|---|
| 3-4 | HEAD |
| 5-8 | CENTRE TORSO |
| 9-11 | LEFT TORSO |
| 12-14 | RIGHT TORSO |
| 15-16 | LEFT LEG |
| 17-18 | RIGHT LEG |

**What the combat log should show:**

Each combat log entry for a firing action should display:
- The weapon used
- The effective target number (ETN)
- The three individual dice values (e.g., "Rolled 4+5+3 = 12")
- Whether doubles were present (for penetrating shots)
- The final result (HIT/MISS) with location if hit
- Any modifiers applied

Example log entry:
```
[Turn 3] Player 1 - Archer fires LRM-20 at enemy Black Hawk (Range: Long)
  TN: 7 + 2 (long) + 2 (woods) - 1 (pilot aim) = 10
  Rolled: 4 + 5 + 3 = 12 (HIT)
  Hit location: LEFT TORSO
  Damage: 10 kinetic to 15 armor remaining
```

This provides full transparency and helps players understand why shots hit or missed, which is crucial for tactical decision-making.

**Priority:** High — this is a core gameplay transparency issue. Players need to see the math to learn and improve.

---

### 11.8 Summary of Testing Priorities

| Priority | Issue | Impact |
|---|---|---|
| **Critical** | Images disappear on mouse movement | Game visually broken during play |
| **High** | Match details too small to read | Poor UX from the start |
| **High** | Dice rolls not shown in combat log | Players can't understand outcomes |
| **High** | Mech Customisation missing | Core campaign feature absent |
| **High** | Pilots lack detail | No player investment in characters |
| **Medium** | Compact UI attempts broken | Dead code, future confusion |
|| **Medium** | Walking/Running targeting concept | Design concept, needs prototyping |

---

### 11.9 Campaign & Career Mode (Planned)

Campaign and Career modes would add a layer of progression and narrative structure on top of the existing battle engine. **Key insight: the battle engine doesn't need to change** — it's metadata *around* the existing system, just extra tables linking battles together with progression data.

#### Campaign Mode — Scripted Missions

A campaign is a **container** for multiple battles with narrative structure.

**Proposed database tables:**

| Table | Purpose | Key Fields |
|---|---|---|
| `campaigns` | The campaign itself | `id`, `user_id`, `title`, `description`, `scenario_count`, `status` (planning/active/completed), `current_scenario_index` |
| `campaign_scenarios` | Individual mission definitions | `id`, `campaign_id`, `scenario_number`, `title`, `description`, `map_preset`, `enemy_lance_config` (JSON), `victory_conditions` (JSON), `rewards` (JSON) |
| `campaign_progress` | Player's campaign save | `id`, `user_id`, `campaign_id`, `completed_scenarios` (JSON array), `current_scenario_id`, `campaign_stats` (total battles, wins, losses, total heat, etc.) |

**How it works:**
- Player creates or loads a campaign → `current_scenario_index` tells you which mission to load next
- On mission completion, update `campaign_progress.completed_scenarios` and advance `current_scenario_id`
- Victory conditions are defined in the scenario JSON: "destroy all enemy mechs", "survive 10 turns", "reach objective point"
- Rewards (XP, salvage, new weapons) are awarded on scenario completion and persist to the next mission
- Each scenario is just another game in `ironfield_games` (same state JSON structure), linked via a new `campaign_id` foreign key

**Integration:** Existing save/load logic works — just add one extra query to fetch the scenario config before starting the battle. No changes to the battle rendering, movement, or combat engine.

#### Career Mode — Randomized/Fluid

Career is like a campaign but **procedurally generated** — no scripted scenarios upfront.

**Proposed database tables:**

| Table | Purpose | Key Fields |
|---|---|---|
| `career_profiles` | The player's career | `id`, `user_id`, `name`, `rank`, `xp`, `credits`, `total_battles`, `wins`, `losses`, `streak`, `created_at`, `updated_at` |
| `career_pilots` | Individual pilot records | `id`, `career_id`, `pilot_name`, `callsign`, `rank`, `kills`, `battles_fought`, `survival_rate`, `specializations` (JSON), `injuries` (JSON), `status` (active/deceased/retired/MIA) |
| `career_lances` | Player's lance roster | `id`, `career_id`, `mech_class`, `mech_name`, `callsign`, `pilot_id` (FK), `armour`, `structure`, `weapons` (JSON), `heat_rating`, `status` (battle-ready/damaged/destroyed/salvaged) |
| `career_salvage` | Weapons/tech salvaged | `id`, `career_id`, `weapon_name`, `tier`, `rarity`, `source_battle_id` (FK), `acquired_at` |
| `career_battles` | Battle records (extends `ironfield_games`) | `id` (FK to ironfield_games), `career_id`, `result` (win/loss/draw), `turns_fought`, `damage_dealt`, `damage_taken`, `enemy_strength` (rating), `rewards_earned` (JSON), `salvage_loot` (JSON) |

**How it works:**
- Career is a **persistent character file** that survives between battles
- Each battle (even casual 1v1s) can optionally be logged to career via a `career_id` flag
- Before each battle, generate an **opponent lance** procedurally based on career rank (easier opponents when low-ranked, harder when high)
- After each battle: log result to `career_battles`, award XP/credits based on opponent strength and result, allow salvage of weapons from destroyed enemy mechs, let the player repair/upgrade their lances using credits, advance career rank when XP thresholds are hit
- `career_id` as a new column on `ironfield_games` links battles to careers
- The `state` JSON blob already contains all mech data — extract what you need (`mechs[].pilotName`, `mechs[].armour`, etc.)

#### Recommended Implementation Order

1. **`campaigns` + `campaign_scenarios`** — scripted missions first (easier to design, more satisfying for single-player)
2. **`career_profiles` + `career_pilots`** — persistent pilot progression (gives battles meaning beyond the match)
3. **`career_lances` + `career_salvage`** — equipment management (building your fleet over time)
4. **`career_battles`** — battle logging (just extend `ironfield_games` with a `career_id` column)

#### Key Design Principles

- **No battle engine changes required** — campaign/career is metadata around the existing system
- **Re-use the existing `state` JSON blob** — it already contains mech, terrain, and turn data
- **Progressive disclosure** — add one layer at a time; players don't need to see all features at once
- **Optional integration** — casual 1v1s work normally; career/campaign is opt-in via UI toggle
- **Data portability** — campaign progress and career data should be queryable/exportable independently

#### Future Considerations

- Pilot injury/death mechanics (permanent consequences)
- Pilot specialization trees (gunnery, piloting, tactics, engineering perks)
- Mech customization tiers (common → rare → unique → prototype)
- Multi-campaign management (multiple active campaigns, saved games)
- Leaderboards (fastest clear times, highest score, most wins)
- Scenario editor (let players create their own campaigns)
- AI difficulty scaling within campaigns (adjust enemy lance strength per scenario)
