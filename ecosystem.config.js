// this is used just for development : pm2 start
module.exports = {
  apps : [
    {
      name: 'pulpo',
      script: 'index.js',
      instances: 3,
      autorestart: true,
      watch: true,
      ignore_watch : ['node_modules', 'storage', 'maintenance', '.git', 'migrations'],
      max_memory_restart: '1G',
    },
  ]
};
