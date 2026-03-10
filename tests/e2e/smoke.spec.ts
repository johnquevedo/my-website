import { expect, test } from "@playwright/test";

test("home page renders recruiter-critical content", async ({ page }) => {
  await page.goto("/");

  await expect(page.getByRole("heading", { name: "John Quevedo" })).toBeVisible();
  await expect(page.getByRole("heading", { name: "Featured Projects" })).toBeVisible();
  await expect(page.getByRole("heading", { name: "Experience" })).toBeVisible();
  await expect(page.getByRole("link", { name: "Resume PDF" })).toBeVisible();
});
