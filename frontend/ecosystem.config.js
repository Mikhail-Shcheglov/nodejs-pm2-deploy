require('dotenv').config();

const {
  DEPLOY_HOST,
  DEPLOY_PATH,
  DEPLOY_REF,
  DEPLOY_USER,
} = process.env;

module.exports = {
  deploy: {
    production: {
      user: DEPLOY_USER,
      host: DEPLOY_HOST,
      ref: DEPLOY_REF,
      repo: 'https://github.com/Mikhail-Shcheglov/nodejs-pm2-deploy.git',
      path: DEPLOY_PATH,
      'post-deploy': `npm i && npm run build`,
    },
  },
};
