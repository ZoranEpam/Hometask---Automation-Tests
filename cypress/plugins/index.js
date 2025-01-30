const fs = require('fs');
const path = require('path');

module.exports = (on, config) => {
  on('task', {
    findDownloadedFile({ filename, extension }) {
      const downloadsPath = path.join(config.downloadsFolder);
      const files = fs.readdirSync(downloadsPath);
      const fileExists = files.some(file => {
        return file === filename && path.extname(file) === `.${extension}`;
      });
      return fileExists;
    }
  });
  
  on('task', {
    clearDownloads() {
      const downloadsPath = path.join(config.downloadsFolder);
      fs.rmdirSync(downloadsPath, { recursive: true });
      fs.mkdirSync(downloadsPath);
      return null;
    }
  });

  
};

