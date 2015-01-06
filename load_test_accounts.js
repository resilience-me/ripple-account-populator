var mongojs = require("mongojs")
var db = mongojs("mongodb://guest:guest@ds049150.mongolab.com:49150/basicincome_co");   

function load_accounts(){

}


load_accounts.prototype.load_accounts = function(callback){
    
db.collection('test-accounts').find(function(err,res){
callback(res)
})
}


load_accounts.prototype.get_secret_key = function(account, callback){
    console.log(account)
    db.collection('test-accounts').findOne({account:account},function(err,res){
callback(res.secret)
})
}
    

exports.load_accounts = load_accounts