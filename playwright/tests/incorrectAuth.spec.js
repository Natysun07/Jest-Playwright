// @ts-check
import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://netology.ru/');
  await page.getByRole('link', { name: 'Войти' }).click();
  await page.getByPlaceholder('Email').fill("sampleemail@smth.smth");
  await page.getByPlaceholder('Пароль').fill('samplepsw');
  await page.getByTestId('login-submit-btn').click();
  await expect(page).toHaveURL(new RegExp('https://netology\\.ru/profile/.*'));
});