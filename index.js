'use strict'

module.exports = () => {
  const nowClient = require('now-client');
  const now = nowClient();
  return new Promise((res, rej) => {
	  now.getDeployments().then(deployments => {
		  res(Array.from(new Set(deployments.map(deployment => `https://${deployment.name}.now.sh`))));
		}).catch(err => {
			rej(err);
		});
	});
}
