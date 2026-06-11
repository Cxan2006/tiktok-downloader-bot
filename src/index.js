import { handleTelegramUpdate } from './telegram-handler.js';

export default {
  async fetch(request, env, ctx) {
    try {
      // Handle Telegram webhook
      if (request.method === 'POST') {
        const update = await request.json();
        ctx.waitUntil(handleTelegramUpdate(update, env));
        return new Response('OK');
      }

      // Health check
      if (request.method === 'GET') {
        return new Response(JSON.stringify({ status: 'Bot is running' }), {
          headers: { 'Content-Type': 'application/json' },
        });
      }

      return new Response('Method Not Allowed', { status: 405 });
    } catch (error) {
      console.error('Error:', error);
      return new Response(JSON.stringify({ error: error.message }), {
        status: 500,
        headers: { 'Content-Type': 'application/json' },
      });
    }
  },
};
