import fs from 'fs/promises';
import path from 'path';

export async function cleanupTempFiles() {
  try {
    const folders = ['./temp', './documents'];
    const now = Date.now();
    const ONE_HOUR = 3600000;

    for (const folder of folders) {
      try {
        const files = await fs.readdir(folder);

        for (const file of files) {
          const filePath = path.join(folder, file);
          const stats = await fs.stat(filePath);
          const fileAge = now - stats.mtimeMs;

          if (fileAge > ONE_HOUR) {
            await fs.unlink(filePath);
          }
        }
      } catch (folderError) {
        console.warn(`Could not clean folder "${folder}":`, folderError.message);
      }
    }
  } catch (error) {
    console.error('Cleanup failed:', error);
  }
}