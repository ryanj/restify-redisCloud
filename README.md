Redis Cloud on OpenShift in 5 Minutes
-------------------------------------

This git repository contains some basic setup and usage examples for Redis Cloud with Nodejs.

###Create your application###

1. Create an account at http://openshift.redhat.com/ and set up you local machine with the client tools.
2. Sign up for a free account at http://redis-cloud.com
3. Create a redis instance, noting the connection details
4. Clone and Deploy on OpenShift, supplying your redis host, port, and password as application configuration details.  

```
    rhc app create rediscloud nodejs-0.10 --from-code git://github.com/ryanj/restify-redisCloud.git --env REDISCLOUD_URL=YOUR_REDISCLOUD_HOSTNAME --env REDISCLOUD_PORT=YOUR_REDISCLOUD_DB_PORT --env=REDISCLOUD_PASSWORD=YOUR_REDISCLOUD_DB_PASSWORD
```
I've uesed "rediscloud" as my application name in the above example. I've also supplied an application source url, as well as several configuration details.
If the `--from-code` option is not recognized, update your `rhc` gem.  You can include your RedisCloud connection details as a part of the application creation process, or reconfigure your app after deploying.

###View your app###

```
    http://rediscloud-$yournamespace.rhcloud.com
```

For additional information on using environment variables, type `rhc env help`.  You may need to run `rhc app reload` in order for changes to the application environment to be recognised.

Next, try interacting with your application's sample API, or modifying your `server.js` source.

More Information
----------------------------

For Redis-Clouds's developer resources visit http://redis-cloud.com/redis/developers

For general information about using redis see http://redis.io

For info on using redis with other programming languages visit: http://redis.io/clients

For more information on Redis-Cloud visit http://redis-cloud.com
