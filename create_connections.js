var ripple = require('ripple-lib')
var Amount = require('ripple-lib').Amount;
var VaultClient = new ripple.VaultClient()
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
var mongojs = require("mongojs")
var db = mongojs("mongodb://guest:guest@ds049150.mongolab.com:49150/basicincome_co");   




var ACCOUNT = "rhWLSyUd1mpkjL1DsreSg2hZJAvnVdqfkd"
var SECRET = "snNpKwUeVRtnZenjPtp2QHX1BUwjf"

db.getCollectionNames(function(err,res){
        for(var i =0;i<res.length;i++){
            if(res[i] !== 'test-accounts' && res[i] !== 'system.indexes' && res[i] !== ACCOUNT){
                console.log(res[i])
                send_payment(res[i])
            }
        }
        
        
    })
    


function send_payment(destination){
    console.log(destination)
    remote.setSecret(ACCOUNT, SECRET);
    var transaction = remote.createTransaction('Payment', {
      account: ACCOUNT,
      destination: destination,
      amount:  {currency: "RES", value: String(Math.floor( Math.random() * 20 )), issuer: ACCOUNT}
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
