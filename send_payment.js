var ripple = require('ripple-lib')
var remote = new ripple.Remote({
  // see the API Reference for available options
  servers: [ 'wss://s1.ripple.com:443' ]
})
remote.connect(function() {
  /* remote connected */
  remote.requestServerInfo(function(err, info) {
    // process err and info
  });
});

function send_payment(account, secret, destination, amount){
 remote.setSecret(account, secret);
    var transaction = remote.createTransaction('Payment', {
      account: account,
      destination: destination,
      amount:  amount
    });
    transaction.on('resubmitted', function() {
    });
    transaction.submit(function(err, res) {
         if (err){
        console.log(err) 
         }
         else console.log(res);
    });
}

exports.send_payment = send_payment