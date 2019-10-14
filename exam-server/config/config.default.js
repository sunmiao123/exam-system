'use strict';

module.exports = appInfo => {
  /**
	 * built-in config
	 * @type {Egg.EggAppConfig}
	 **/
  const config = (exports = {});

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1567150761158_5243';

  // add your middleware config here
  config.middleware = [ 'routes' ];

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };

  config.bodyParser = {
    enable: true,
    encoding: 'utf8',
    formLimit: '100kb',
    jsonLimit: '100kb',
    strict: true,
    onerror(err) {
      err.message += ', check bodyParser config';
      throw err;
    },
  };

  config.mysql = {
    client: {
      host: '127.0.0.1',
      port: 3306,
      user: 'root',
      password: '123321',
      database: 'user-1701g1',
    },
  };
  config.security = {
    csrf: {
      enable: false,
    },
  };

  return {
    ...config,
    ...userConfig,
  };
};
