require('dotenv').config();

const {
  DATABASE_HOST,
  DATABASE_USER,
  DATABASE_PASSWORD,
  DEPLOY_HOST,
  DEPLOY_PATH,
  DEPLOY_REF,
  DEPLOY_USER,
} = process.env;

module.exports = {
  apps: [{
    name: 'backend',
    script: './src/app.ts',
    env_production: {
      NODE_ENV: 'production',
      DATABASE_HOST,
      DATABASE_USER,
      DATABASE_PASSWORD,
      PORT: 3000,
    },
    env_development: {
      NODE_ENV: 'production',
      DATABASE_HOST: 'localhost',
      DATABASE_USER: 'test-user',
      DATABASE_PASSWORD: 'test-user-password',
    },
    env_testing: {
      NODE_ENV: 'production',
      DATABASE_HOST,
      DATABASE_USER,
      DATABASE_PASSWORD,
    },
  }],

  // Настройка деплоя
  deploy: {
    production: {
      user: DEPLOY_USER,
      host: DEPLOY_HOST,
      ref: DEPLOY_REF,
      repo: 'https://github.com/Mikhail-Shcheglov/nodejs-pm2-deploy.git',
      path: DEPLOY_PATH,
      'pre-deploy': `scp ./.env ${DEPLOY_USER}@${DEPLOY_HOST}:${DEPLOY_PATH}`,
      'post-deploy': 'npm i && npm run build',
    },
  },
};
