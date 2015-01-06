var TrustLine = require('ripple-trust-line');
var load_accounts = require('./load_test_accounts.js')
var LOADER = new load_accounts.load_accounts()

var ENV = require('./PROCESS.ENV.js')

/*
LOADER.load_accounts(function(res){
    console.log(res)
 for(var i =0;i<res.length;i++){
        trustLine(res[i].account, res[i].secret)

    }
    
})
*/

//rGHrLJzyd29ZHPQqRhthFUo5MoTu5zCQBg

//let a-capitalist hold IOUs for you
//trustLine("rV5NprzV7G53ow8HUxddazZdk39nJf5pK","sn5qLsyzsr8QhuKqT2vP8XoFujXVT", ENV.CAPITAL_NODE)

var account = "rGHrLJzyd29ZHPQqRhthFUo5MoTu5zCQBg"
var counterparty = ENV.CAPITAL_NODE

LOADER.get_secret_key(account, function(secret){trustLine(account, secret, counterparty)})


function trustLine(account, secret, counterparty){
var trustLine = new TrustLine({
    account: account,
    counterparty: counterparty,
    currency: 'RES',
    amount: 2000000,
    noRipple: false,
});

trustLine.sign(secret).submit({
    success: console.log,
    error: console.log
});
}