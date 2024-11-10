// @ts-check
const {email, password} = require('../auth');
import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://netology.ru/');
  await page.getByRole('link', { name: 'Войти' }).click();
  await page.getByPlaceholder('Email').fill(email);
  await page.getByPlaceholder('Пароль').fill(password);
  await page.getByTestId('login-submit-btn').click();
  await expect(page).toHaveURL(new RegExp('https://netology\\.ru/profile/.*'));
});