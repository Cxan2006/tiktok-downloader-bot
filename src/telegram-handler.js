import { downloadTikTokVideo } from './tiktok-downloader.js';
import { sendMessage, sendVideo, sendDocument } from './telegram-api.js';

const TELEGRAM_BOT_TOKEN = 'YOUR_BOT_TOKEN_HERE';

export async function handleTelegramUpdate(update, env) {
  try {
    const botToken = env.TELEGRAM_BOT_TOKEN || TELEGRAM_BOT_TOKEN;
    
    // Handle message
    if (update.message) {
      const chatId = update.message.chat.id;
      const text = update.message.text;
      const messageId = update.message.message_id;

      // Start command
      if (text === '/start') {
        await sendMessage(chatId, 
          '👋 Welcome to TikTok Downloader Bot!\n\n' +
          '📤 Send me a TikTok URL and I will download the video for you.\n\n' +
          '💡 Example:\n' +
          'https://www.tiktok.com/@username/video/1234567890\n\n' +
          '⚠️ Note: Processing may take 30-60 seconds.',
          botToken
        );
        return;
      }

      // Help command
      if (text === '/help') {
        await sendMessage(chatId,
          '❓ How to use:\n\n' +
          '1️⃣ Copy a TikTok video URL\n' +
          '2️⃣ Send the URL to this bot\n' +
          '3️⃣ Wait for the video to download\n' +
          '4️⃣ Receive the video file\n\n' +
          '📝 Supported formats: MP4, MP3\n' +
          '⏱️ Timeout: 60 seconds',
          botToken
        );
        return;
      }

      // Check if message is a URL
      if (text && (text.includes('tiktok.com') || text.includes('vm.tiktok.com'))) {
        // Send processing message
        await sendMessage(chatId, '⏳ Processing your TikTok video... Please wait.', botToken);

        try {
          const videoData = await downloadTikTokVideo(text);

          if (videoData.success) {
            if (videoData.videoUrl) {
              // Send video
              await sendVideo(
                chatId,
                videoData.videoUrl,
                `TikTok Video by @${videoData.author}`,
                botToken
              );
            } else if (videoData.audioUrl) {
              // Send audio
              await sendDocument(
                chatId,
                videoData.audioUrl,
                `${videoData.author}_audio.mp3`,
                botToken
              );
            }
          } else {
            await sendMessage(chatId, `❌ Error: ${videoData.error}`, botToken);
          }
        } catch (error) {
          console.error('Download error:', error);
          await sendMessage(chatId, `❌ Failed to download video: ${error.message}`, botToken);
        }
        return;
      }

      // Invalid input
      if (text && !text.startsWith('/')) {
        await sendMessage(chatId, 
          '❌ Invalid URL!\n\n' +
          '📎 Please send a valid TikTok URL:\n' +
          'https://www.tiktok.com/@username/video/1234567890\n\n' +
          'Or use /help for more information.',
          botToken
        );
      }
    }

    // Handle callback query (if using inline buttons)
    if (update.callback_query) {
      const callbackQuery = update.callback_query;
      const chatId = callbackQuery.message.chat.id;
      // Handle callback logic here
    }
  } catch (error) {
    console.error('Error handling Telegram update:', error);
  }
}
