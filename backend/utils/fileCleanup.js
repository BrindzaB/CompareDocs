import fs from 'fs/promises';
import path from 'path';

export async function cleanupTempFiles() {
  try {
    const tempDir = './temp';
    const files = await fs.readdir(tempDir);
    
    for (const file of files) {
      const filePath = path.join(tempDir, file);
      const stats = await fs.stat(filePath);
      const now = Date.now();
      const fileAge = now - stats.mtimeMs;
      
      if (fileAge > 3600000) {
        await fs.unlink(filePath);
        console.log(`Cleaned up old temp file: ${file}`);
      }
    }
  } catch (error) {
    console.error('Cleanup failed:', error);
  }
}