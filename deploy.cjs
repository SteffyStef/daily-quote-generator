const path = require('path');
const ghpages = require('gh-pages');

ghpages.publish(
  path.join(__dirname, 'dist'),
  {
    branch: 'gh-pages',
    repo: 'https://github.com/SteffyStef/daily-quote-generator.git',
    message: '🚀 Deploy to GitHub Pages',
    dotfiles: true,
    user: {
      name: 'SteffyStef',
      email: 'snsteph82@gmail.com'
    }
  },
  (err) => {
    if (err) {
      console.error('❌ Deployment failed:', err);
    } else {
      console.log('✅ Successfully deployed!');
    }
  }
);



