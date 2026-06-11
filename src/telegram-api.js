/**
 * Telegram Bot API functions
 */

const TELEGRAM_API_URL = 'https://api.telegram.org/bot';

/**
 * Send a text message
 */
export async function sendMessage(chatId, text, botToken, options = {}) {
  try {
    const url = `${TELEGRAM_API_URL}${botToken}/sendMessage`;
    
    const payload = {
      chat_id: chatId,
      text: text,
      parse_mode: 'HTML',
      disable_web_page_preview: true,
      ...options,
    };

    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      throw new Error(`Telegram API error: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error('Error sending message:', error);
    throw error;
  }
}

/**
 * Send a video file
 */
export async function sendVideo(chatId, videoUrl, caption, botToken) {
  try {
    const url = `${TELEGRAM_API_URL}${botToken}/sendVideo`;
    
    const payload = {
      chat_id: chatId,
      video: videoUrl,
      caption: caption,
      parse_mode: 'HTML',
      supports_streaming: true,
    };

    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(`Telegram API error: ${errorData.description}`);
    }

    return await response.json();
  } catch (error) {
    console.error('Error sending video:', error);
    throw error;
  }
}

/**
 * Send an audio file
 */
export async function sendAudio(chatId, audioUrl, title, botToken) {
  try {
    const url = `${TELEGRAM_API_URL}${botToken}/sendAudio`;
    
    const payload = {
      chat_id: chatId,
      audio: audioUrl,
      title: title,
      parse_mode: 'HTML',
    };

    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      throw new Error(`Telegram API error: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error('Error sending audio:', error);
    throw error;
  }
}

/**
 * Send a document file
 */
export async function sendDocument(chatId, documentUrl, filename, botToken) {
  try {
    const url = `${TELEGRAM_API_URL}${botToken}/sendDocument`;
    
    const payload = {
      chat_id: chatId,
      document: documentUrl,
      filename: filename,
      parse_mode: 'HTML',
    };

    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      throw new Error(`Telegram API error: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error('Error sending document:', error);
    throw error;
  }
}

/**
 * Edit message text
 */
export async function editMessage(chatId, messageId, text, botToken) {
  try {
    const url = `${TELEGRAM_API_URL}${botToken}/editMessageText`;
    
    const payload = {
      chat_id: chatId,
      message_id: messageId,
      text: text,
      parse_mode: 'HTML',
    };

    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      throw new Error(`Telegram API error: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error('Error editing message:', error);
    throw error;
  }
}

/**
 * Set webhook for Telegram Bot
 */
export async function setWebhook(webhookUrl, botToken) {
  try {
    const url = `${TELEGRAM_API_URL}${botToken}/setWebhook`;
    
    const payload = {
      url: webhookUrl,
      allowed_updates: ['message', 'callback_query'],
    };

    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      throw new Error(`Telegram API error: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error('Error setting webhook:', error);
    throw error;
  }
}

/**
 * Get webhook info
 */
export async function getWebhookInfo(botToken) {
  try {
    const url = `${TELEGRAM_API_URL}${botToken}/getWebhookInfo`;

    const response = await fetch(url, {
      method: 'GET',
    });

    if (!response.ok) {
      throw new Error(`Telegram API error: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error('Error getting webhook info:', error);
    throw error;
  }
}
