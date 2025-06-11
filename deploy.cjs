const path = require('path');
const ghpages = require('gh-pages');

// Absolute path to your local repo
const repoPath = path.resolve(__dirname);

ghpages.publish(
  path.join(repoPath, 'dist'), // <- folder to publish
  {
    repo: 'https://github.com/SteffyStef/daily-quote-generator.git',
    branch: 'gh-pages',
    dotfiles: true,
    message: '🚀 Deploy from Windows',
    user: {
      name: 'SteffyStef',
      email: 'snsteph82@gmail.com',
    },
  },
  function (err) {
    if (err) {
      console.error('❌ Deployment failed:', err);
    } else {
      console.log('✅ Deployed successfully to GitHub Pages!');
    }
  }
);






