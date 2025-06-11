const ghpages = require('gh-pages');

ghpages.publish('dist', {
  branch: 'gh-pages',
  repo: 'https://github.com/SteffyStef/daily-quote-generator.git',
  dotfiles: true,
  message: '🚀 Auto-deploy from GitHub Actions'
}, function (err) {
  if (err) {
    console.error('❌ Deployment failed:', err);
  } else {
    console.log('✅ Successfully deployed!');
  }
});







