/**
 * Download TikTok video using public APIs
 * This uses multiple fallback methods to ensure reliability
 */

export async function downloadTikTokVideo(tiktokUrl) {
  try {
    // Normalize URL
    const url = normalizeTikTokUrl(tiktokUrl);

    if (!url) {
      return {
        success: false,
        error: 'Invalid TikTok URL format',
      };
    }

    // Try multiple methods
    const methods = [
      () => downloadViaSnaptik(url),
      () => downloadViaTikmate(url),
      () => downloadViaFleek(url),
    ];

    for (const method of methods) {
      try {
        const result = await method();
        if (result.success) {
          return result;
        }
      } catch (error) {
        console.warn(`Download method failed: ${error.message}`);
        continue;
      }
    }

    return {
      success: false,
      error: 'Could not download video from all available sources',
    };
  } catch (error) {
    return {
      success: false,
      error: error.message,
    };
  }
}

/**
 * Normalize TikTok URL
 */
function normalizeTikTokUrl(url) {
  try {
    // Handle various TikTok URL formats
    if (url.includes('vm.tiktok.com') || url.includes('vt.tiktok.com')) {
      // Short URL - extract video ID
      return url;
    }
    
    if (url.includes('tiktok.com/@')) {
      // Full URL
      return url;
    }

    return null;
  } catch (error) {
    return null;
  }
}

/**
 * Download via Snaptik API
 */
async function downloadViaSnaptik(tiktokUrl) {
  try {
    const response = await fetch('https://snaptik.app/api/download', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ url: tiktokUrl }),
    });

    if (!response.ok) {
      throw new Error(`Snaptik API error: ${response.status}`);
    }

    const data = await response.json();

    if (data.status === 'ok' && data.data) {
      return {
        success: true,
        videoUrl: data.data.video,
        audioUrl: data.data.audio || null,
        author: data.data.author || 'Unknown',
      };
    }

    throw new Error('No download link found');
  } catch (error) {
    throw error;
  }
}

/**
 * Download via Tikmate API
 */
async function downloadViaTikmate(tiktokUrl) {
  try {
    const formData = new FormData();
    formData.append('url', tiktokUrl);

    const response = await fetch('https://tikmate.app/api/download', {
      method: 'POST',
      body: formData,
    });

    if (!response.ok) {
      throw new Error(`Tikmate API error: ${response.status}`);
    }

    const data = await response.json();

    if (data.success && data.data) {
      return {
        success: true,
        videoUrl: data.data.video || data.data.url,
        audioUrl: data.data.audio || null,
        author: data.data.author || 'Unknown',
      };
    }

    throw new Error('No download link found');
  } catch (error) {
    throw error;
  }
}

/**
 * Download via Fleek API
 */
async function downloadViaFleek(tiktokUrl) {
  try {
    const encodedUrl = encodeURIComponent(tiktokUrl);
    const response = await fetch(
      `https://api.fleek.dev/tiktok/download?url=${encodedUrl}`,
      {
        method: 'GET',
        headers: {
          'User-Agent': 'Mozilla/5.0',
        },
      }
    );

    if (!response.ok) {
      throw new Error(`Fleek API error: ${response.status}`);
    }

    const data = await response.json();

    if (data.success && data.data) {
      return {
        success: true,
        videoUrl: data.data.downloadUrl || data.data.video,
        audioUrl: data.data.audio || null,
        author: data.data.author || 'Unknown',
      };
    }

    throw new Error('No download link found');
  } catch (error) {
    throw error;
  }
}

/**
 * Get video metadata
 */
export async function getVideoMetadata(tiktokUrl) {
  try {
    const response = await fetch(`https://www.tiktok.com/oembed?url=${encodeURIComponent(tiktokUrl)}`);
    
    if (!response.ok) {
      throw new Error('Failed to fetch metadata');
    }

    return await response.json();
  } catch (error) {
    console.warn('Could not fetch metadata:', error);
    return null;
  }
}
