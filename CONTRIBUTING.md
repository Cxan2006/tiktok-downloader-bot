# Contributing Guide

TikTok Downloader Bot သည် open-source project ဖြစ်သည်။ အကူအညီကို ကျေးဇူးတင်ပါသည်။

## 🎯 Contribution အမျိုးအစားများ

### 1. Bug Report
- GitHub Issues တွင် အသေးစိတ်ဖြင့် အစီရင်ခံပါ
- ပြန်လည်ပြုလုပ်နိုင်သည့် အဆင့်များ ပေးပါ
- Screenshot/Logs ပွဲများခြင်း

### 2. Features တင်ပြခြင်း
- သင်၏ အယူအဆကို အသေးစိတ်ဖြင့် ရေးသားပါ
- အဘယ်အရာ ပြုလုပ်သင့်သည်ကို ရှင်းလင်းပါ
- အဖြေများ ပေးပါ

### 3. Code Contributions

```bash
# 1. Fork repository
git clone https://github.com/your-username/tiktok-downloader-bot.git

# 2. Create feature branch
git checkout -b feature/your-feature-name

# 3. Make changes
# ... အပြောင်းအလဲများ လုပ်ဆောင်ပါ

# 4. Commit
git commit -m "feat: add your feature description"

# 5. Push
git push origin feature/your-feature-name

# 6. Create Pull Request
```

## 📋 Code Style

### Naming Convention
```javascript
// Functions
async function downloadTikTokVideo() {}
function isTikTokUrl() {}

// Variables
const userRateLimits = new Map();
let botToken = '';

// Constants
const TELEGRAM_API_URL = 'https://api.telegram.org';
const MAX_REQUESTS_PER_MINUTE = 5;
```

### JSDoc Comments
```javascript
/**
 * Download TikTok video
 * @param {string} url - TikTok URL
 * @returns {Promise<Object>} Download result
 */
export async function downloadTikTokVideo(url) {
  // ...
}
```

## ✅ Commit Message Format

```
type(scope): subject

body

footer
```

Types:
- `feat`: নতুန feature
- `fix`: bug fix
- `docs`: documentation
- `style`: formatting
- `refactor`: code restructuring
- `test`: testing
- `chore`: build tasks

Example:
```
feat(downloader): add Snaptik API support

Added Snaptik as primary download method with fallback to Tikmate

Fixes #123
```

## 🧪 Testing

```bash
# Run tests
npm test

# Lint code
npm run lint

# Development mode
npm run dev
```

## 📚 Documentation

သင်၏ code အတွင်း အလုံး အသုံးပြုချက်များ မှတ်တမ်းတင်ပါ။

## 🎓 Community

- 💬 [Telegram Channel](https://t.me/Cxan2006)
- 🐛 [GitHub Issues](https://github.com/Cxan2006/tiktok-downloader-bot/issues)
- 📖 [Documentation](https://github.com/Cxan2006/tiktok-downloader-bot)

အကူအညီ ကျေးဇူးတင်ပါသည်! 🙏
