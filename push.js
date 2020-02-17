var push = require('web-push');

//console.log(push.generateVAPIDKeys());

endpoint = { publicKey:
    'BDYWCaTK_92ro04adwa-gwZ1BIJUnXGVwneH0dZ52BAlW3xfOB--ScUu08nCk7ACo0MDep-3opoFQ-ZH0qk1VEc',
   privateKey: 'qtvYxmnfRrJVeiTL-klUCXpTTknSZ_1ovOWJ4_uUKVk' };

push.setVapidDetails('fetusmaxwell7@gmail.com', endpoint.publicKey, endpoint.privateKey);

sub = {}

push.sendNotification(sub, 'this is awesome');
