># 🚀 TikTok Downloader Bot - Setup Guide

## အဆင့် ၁: Prerequisites ကို အကောင်းဆုံး ထည့်သွင်းပါ

### လိုအပ်သည့်သည်များ:
- Node.js v16+ ([ဒାວ်းလုဒ်](https://nodejs.org/))
- Git
- Cloudflare Account ([https://www.cloudflare.com/](https://www.cloudflare.com/))
- Telegram Bot Token ([ဖန်တီးအနည်းအစ](https://t.me/botfather))

---

## အဆင့် ၂: Repository Clone လုပ်ပါ

```bash
git clone https://github.com/Cxan2006/tiktok-downloader-bot.git
cd tiktok-downloader-bot
```

---

## အဆင့် ၃: Dependencies ထည့်သွင်းပါ

```bash
npm install
```

---

## အဆင့် ၄: Environment Variables သတ်မှတ်ပါ

### `.env.example` ကို `.env` အဖြစ်複製 လုပ်ပါ:

```bash
cp .env.example .env
```

### `.env` ဖိုင်ကို Edit ပြုလုပ်ပါ:

```env
# Telegram Bot Token ထည့်သွင်းပါ
TELEGRAM_BOT_TOKEN=your_bot_token_here

# Webhook URL (deployment အနောက်မှာ ပြည့်စုံဖြစ်သည်)
WEBHOOK_URL=https://tiktok-downloader-bot.your-username.workers.dev
```

---

## အဆင့် ၅: Telegram Bot Token ရယူပါ

### BotFather မှ Bot Token ရယူခြင်း:

1. Telegram ထဲတွင် [@BotFather](https://t.me/botfather) ကို ရွှေ့ပါ
2. `/newbot` command ပေးပါ
3. ရွေးချယ်ခြင်းအတိုင်း လိုက်နာပါ
4. Bot Token ကို ကူးယူပါ
5. `.env` ဖိုင်ထဲတွင် ထည့်သွင်းပါ

---

## အဆင့် ၆: Cloudflare Workers Deploy လုပ်ပါ

### Wrangler CLI Login လုပ်ပါ:

```bash
npx wrangler login
```

### Deploy လုပ်ပါ:

```bash
npm run deploy
```

### Deployment အနောက်မှ URL ကူးယူပါ:
```
https://tiktok-downloader-bot.your-username.workers.dev
```

---

## အဆင့် ၇: Webhook Set လုပ်ပါ

### ရွေးချယ်မှု ၁: Script အသုံးပြု

```bash
npm run setup-webhook
```

### ရွေးချယ်မှု ၂: Manually (cURL)

```bash
curl -X POST https://api.telegram.org/bot{YOUR_BOT_TOKEN}/setWebhook \
  -H "Content-Type: application/json" \
  -d '{"url": "https://tiktok-downloader-bot.your-username.workers.dev"}'
```

### ရွေးချယ်မှု ၃: Webhook Status စစ်ပါ

```bash
curl https://api.telegram.org/bot{YOUR_BOT_TOKEN}/getWebhookInfo
```

---

## အဆင့် ၈: Bot စမ်းသပ်ပါ

### Telegram ထဲတွင် Bot ရှာပါ:
1. သင်၏ Bot Name ကို ရှာပါ
2. `/start` command ပေးပါ
3. TikTok URL ကို စမ်းပါ

---

## ✅ ဖြေရှင်းချက်များ

### Bot မတုံ့ပြန်ပါက:

```bash
# Webhook Status စစ်ပါ
curl https://api.telegram.org/bot{YOUR_BOT_TOKEN}/getWebhookInfo

# Cloudflare Worker Logs ကြည့်ပါ
npx wrangler tail
```

### Download မြန်မြစ်ပါက:

```bash
# Development Mode မှာ စမ်းပါ
npm run dev
```

---

## 🔧 Advanced Configuration

### Environment Variables အပြည့်အစုံ:

```env
# Telegram
TELEGRAM_BOT_TOKEN=xxx

# Cloudflare
CLOUDFLARE_ACCOUNT_ID=xxx
CLOUDFLARE_API_TOKEN=xxx

# Configuration
WEBHOOK_URL=https://...
ENVIRONMENT=production
LOG_LEVEL=info
```

### Production Deploy:

```bash
npm run deploy:prod
```

---

## 📋 Troubleshooting

| ပြဿနာ | ချွတ်မှားမှု |
|------|-----------|
| Bot တုံ့ပြန်မည | Webhook set မထားသည် |
| Download မြန်မြစ်သည် | TikTok URL မှားသည် |
| Timeout Error | Video အကြီးလွန်သည် |

---

## 📚 အဆင့်မြင့်အသုံးပြုခွင့်

### Local Development:
```bash
npm run dev
```

### Lint Code:
```bash
npm run lint
```

### Tests:
```bash
npm test
```

---

## 🤝 Support

- 📧 GitHub Issues: [ဖွင့်ပါ](https://github.com/Cxan2006/tiktok-downloader-bot/issues)
- 💬 Telegram: [@Cxan2006](https://t.me/Cxan2006)

---

**Happy downloading! 🎵**
