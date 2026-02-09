// ecosystem.config.js
module.exports = {
  apps: [{
    name: 'VinceHub',
    script: 'npm',
    args: 'start',
    instances: 1,
    autorestart: true,
    watch: false,
    max_memory_restart: '4G',
    env: {
      NODE_ENV: 'production',
      PORT: 6014
    },
    env_production: {
      NODE_ENV: 'production',
      PORT: 6014
    }
  }]
}
