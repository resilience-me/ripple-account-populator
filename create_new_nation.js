var s = require('./create_accounts.js')

var mongojs = require("mongojs")
var db = mongojs("mongodb://guest:guest@ds049150.mongolab.com:49150/basicincome_co");   


var NAME = "olofharaldsson"
var EMAIL = "emailsareo.bsolete@gmail.com"

//s.exported_script(NAME, EMAIL, e)
function reset_database(){
    db.getCollectionNames(function(err,res){
        var collections=[]
        // spare these collections:
        for(var i =0;i<res.length;i++){
            if(res[i] !== 'test-accounts'){
                
                collections.push(res[i])
            }
            console.log(collections)
        }

        for(var i =0;i<collections.length;i++){
            db.collection(collections[i]).drop(function(err,res){console.log(res)})

        }
        
            new_nation()

                    //var db = mongojs("mongodb://guest:guest@ds049150.mongolab.com:49150/basicincome_co", ["rMH6AWKFUruAgXXAhyEbA8NGoYqYX7rw5d"]);
        //db.collection.drop(function(err,res){console.log(res)})
        
    }
    )
}

function new_nation(){
    db.collection("test-accounts").find(function(err,res){
        
        for(var i=0;i<res.length;i++){
            e(res[i].account)
            
        }

    })
}

function e(address){
    
    db.collection(address).save({
    "type": "contract",
    "currency": "RES",
    "taxRate": 0.02
        
    })
    
    db.collection(address).save({
    "type": "passport",
    "network": "bitnation"

    })
    console.log(address)
}



reset_database()






//to clear an entire nation / database:


function l(){
 db.collection("test-accounts").save(
     
     { account: "rBGAr1toXNm2iXxQXyifVPYUbGsDJFo7M4", secret: "sniLJKxNeBBww217imeD6Gji31QK4", username:"kaptenKlas", password:"asd123"}, 
        function(err,doc){
            console.log(doc)
        }) 
}
