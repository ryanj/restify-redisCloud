module.exports = {
  port: process.env.PORT || process.env.OPENSHIFT_NODEJS_PORT || 8080,
  ip: process.env.OPENSHIFT_NODEJS_IP || '127.0.0.1',
  redisCloud: {
    host: process.env.REDISCLOUD_URL,
    port: process.env.REDISCLOUD_PORT,
    password: process.env.REDISCLOUD_PASSWORD
  }
}
