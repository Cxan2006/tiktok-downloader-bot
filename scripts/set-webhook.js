#!/usr/bin/env node

import 'dotenv/config.js';
import { setWebhook } from '../src/telegram-api.js';

async function main() {
  const botToken = process.env.TELEGRAM_BOT_TOKEN;
  const webhookUrl = process.env.WEBHOOK_URL;

  if (!botToken) {
    console.error('❌ Error: TELEGRAM_BOT_TOKEN not found in .env file');
    process.exit(1);
  }

  if (!webhookUrl) {
    console.error('❌ Error: WEBHOOK_URL not found in .env file');
    process.exit(1);
  }

  try {
    console.log('🔄 Setting webhook...');
    console.log(`📍 Webhook URL: ${webhookUrl}`);
    
    const result = await setWebhook(webhookUrl, botToken);
    
    if (result.ok) {
      console.log('✅ Webhook set successfully!');
      console.log(`📝 Description: ${result.description}`);
    } else {
      console.error('❌ Failed to set webhook:', result.description);
      process.exit(1);
    }
  } catch (error) {
    console.error('❌ Error:', error.message);
    process.exit(1);
  }
}

main();
