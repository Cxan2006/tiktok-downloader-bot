# 🎵 TikTok Downloader Bot

TikTok Video Downloader Telegram Bot powered by **Cloudflare Workers**. Download TikTok videos directly through Telegram without watermarks!

## ✨ Features

- ✅ Download TikTok videos as MP4
- ✅ Download TikTok audio as MP3
- ✅ Remove watermarks
- ✅ Fast processing (powered by Cloudflare Workers)
- ✅ No size limits
- ✅ User-friendly Telegram interface
- ✅ Multiple fallback download methods
- ✅ Support for short URLs (vm.tiktok.com, vt.tiktok.com)

## 🚀 Quick Start

### Prerequisites

- [Node.js](https://nodejs.org/) (v16 or higher)
- [Wrangler CLI](https://developers.cloudflare.com/workers/wrangler/)
- Telegram Bot Token from [@BotFather](https://t.me/botfather)
- Cloudflare account

### Installation

1. **Clone this repository**

```bash
git clone https://github.com/Cxan2006/tiktok-downloader-bot.git
cd tiktok-downloader-bot
```

2. **Install dependencies**

```bash
npm install
```

3. **Create `.env` file**

```bash
cp .env.example .env
```

Edit `.env` and add your Telegram Bot Token:

```
TELEGRAM_BOT_TOKEN=your_bot_token_here
WEBHOOK_URL=https://your-worker.your-subdomain.workers.dev
```

### 🔧 Configuration

#### 1. Get Your Bot Token

- Open Telegram and search for [@BotFather](https://t.me/botfather)
- Send `/newbot` command
- Follow the instructions to create a new bot
- Copy the token provided

#### 2. Deploy to Cloudflare Workers

```bash
# Login to Cloudflare
wrangler login

# Deploy the worker
wrangler deploy
```

After deployment, you'll get a URL like: `https://tiktok-downloader-bot.your-username.workers.dev`

#### 3. Set Webhook

```bash
# Set webhook URL in Telegram
curl -X POST https://api.telegram.org/bot{YOUR_BOT_TOKEN}/setWebhook \
  -H "Content-Type: application/json" \
  -d '{"url": "https://tiktok-downloader-bot.your-username.workers.dev"}'
```

Or use this command:

```bash
node scripts/set-webhook.js
```

## 📖 Usage

1. **Start the bot in Telegram**
   - Search for your bot name
   - Send `/start` command

2. **Send a TikTok URL**
   - Copy any TikTok video link:
     - Full URL: `https://www.tiktok.com/@username/video/1234567890`
     - Short URL: `https://vm.tiktok.com/XXXXXX`
   - Send it to the bot

3. **Wait for download**
   - Bot will process the video (30-60 seconds)
   - Receive the video without watermark

## 📁 Project Structure

```
tiktok-downloader-bot/
├── src/
│   ├── index.js                 # Main Cloudflare Worker entry point
│   ├── telegram-handler.js      # Telegram message handler
│   ├── tiktok-downloader.js     # TikTok download logic
│   └── telegram-api.js          # Telegram API functions
├── scripts/
│   └── set-webhook.js           # Webhook setup script
├── package.json                 # Dependencies
├── wrangler.toml               # Cloudflare Workers config
├── .env.example                # Environment variables template
├── .gitignore                  # Git ignore file
└── README.md                   # This file
```

## 🔌 API Endpoints

### Download Methods

The bot uses multiple fallback methods to ensure reliable downloads:

1. **Snaptik API** - Primary method
2. **Tikmate API** - Fallback method
3. **Fleek API** - Secondary fallback

## 🛠️ Troubleshooting

### Bot not responding

1. Check webhook is set correctly:
```bash
curl -s https://api.telegram.org/bot{YOUR_BOT_TOKEN}/getWebhookInfo | jq
```

2. Check Cloudflare Worker logs:
```bash
wrangler tail
```

### Video download fails

- The TikTok URL might be invalid or expired
- Try sending the short URL instead (vm.tiktok.com)
- Some videos may have region restrictions

### Timeout errors

- Videos processing can take 30-60 seconds
- Larger videos may timeout with Cloudflare Workers
- Consider upgrading to paid Cloudflare plan for longer execution time

## 🔐 Environment Variables

Create `.env` file with:

```env
TELEGRAM_BOT_TOKEN=your_token_here
WEBHOOK_URL=https://your-worker-url.workers.dev
```

## 📝 Commands

- `/start` - Show welcome message
- `/help` - Show help information
- Send any TikTok URL - Download the video

## 🚨 Limitations

- Cloudflare Workers timeout: 30 seconds (free) / 600 seconds (paid)
- Maximum file size depends on Telegram limits (50 MB for video)
- Some videos may have regional restrictions
- Rate limiting: Check Cloudflare and Telegram API limits

## 🌐 Supported Platforms

- ✅ TikTok (all regions)
- ✅ Cloudflare Workers (free and paid)
- ✅ Telegram Bot API

## 🔄 Updates & Maintenance

The bot uses multiple download APIs as fallbacks:

- If one API fails, it tries the next one automatically
- Download methods are checked in this order:
  1. Snaptik
  2. Tikmate
  3. Fleek

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## ⚠️ Disclaimer

This tool is for educational purposes only. Respect copyright laws and TikTok's Terms of Service. Users are responsible for how they use downloaded content.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 💬 Support

For issues or questions, please:
1. Check existing GitHub issues
2. Create a new issue with detailed information
3. Include error messages and logs

## 📞 Contact

- GitHub: [@Cxan2006](https://github.com/Cxan2006)
- Telegram: [@Cxan2006](https://t.me/Cxan2006)

---

**Made with ❤️ by Cxan2006**

**Happy downloading! 🎵📥**
