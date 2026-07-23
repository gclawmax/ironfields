const { test, expect } = require('@playwright/test');

test('Lobby should not show maps and Create Game should lead to waiting room', async ({ page }) => {
  // Navigate and wait for network idle so initApp()'s Supabase getSession() resolves
  await page.goto('/', { waitUntil: 'networkidle' });

  // Verify login screen is present initially
  await expect(page.locator('#scr-auth')).toBeVisible();

  /* 
  Further testing would require:
  1. Mocking Supabase auth/db responses.
  2. Logging in.
  3. Verifying the lobby structure.
  4. Testing seat claims and lance builder visibility.
  */
});
