var get_all_collections = require("./get_all_collections.js")
var send_payment = require("./send_payment.js")
var Amount = require('ripple-lib').Amount;



var ENV = require('./PROCESS.ENV.js')

console.log(ENV.CAPITAL_NODE + "hej")


var load_accounts = require("./load_test_accounts.js")
var LOADER = new load_accounts.load_accounts()

//get_all_collections.get_all_collections(function(res){console.log(res)})
var secret
var account = "rhWLSyUd1mpkjL1DsreSg2hZJAvnVdqfkd"


var amount = Amount.from_human('50XRP');
//{currency: "RES", value: String(Math.floor( Math.random() * 20 )), issuer: ENV.CAPITAL_NODE}


LOADER.get_secret_key(account, function(res){
    secret = res
    console.log(res)
    send_payment.send_payment(ENV.CAPITAL_NODE, ENV.CAPITAL_SECRET,"rGHrLJzyd29ZHPQqRhthFUo5MoTu5zCQBg", amount)
})

