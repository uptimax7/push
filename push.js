var push = require('web-push');

//let keys = push.generateVAPIDKeys();

endpoint = { publicKey:
    'BDPGfy5CLOxEPO-EVEbBpgT-WtSdWvBPJa4tt_LlZKtSAeeYUi5k0hpMHy7pFv3L5lYX4sh2T_fg61D9rK-OryM',
   privateKey: 'Zspc_H_67-R9sxfs3DVfwmbtiGL4q2r3sp9eJngglTA' };

push.setVapidDetails('uptimax7@gmail.com', endpoint.publicKey, endpoint.privateKey);

sub = {};

push.sendNotification(sub, 'this is awesome');
