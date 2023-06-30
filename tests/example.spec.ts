import { test, expect } from "@playwright/test";

test("has title", async ({ page }) => {
  await page.goto("http://localhost:3000/materials");

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle("Building Inventory");
});

test("access Pedidos page", async ({ page }) => {
  await page.goto("http://localhost:3000/materials/");

  // Click the get started link.
  await page.getByRole("link", { name: "Pedidos" }).click();

  // Expects the URL to contain intro.
  await expect(page).toHaveURL(/.*orders/);
});
