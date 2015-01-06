//make sure that every account has all database stuff, so that stuff doesn´t bug

var mongojs = require("mongojs")
var db = mongojs("mongodb://guest:guest@ds049150.mongolab.com:49150/basicincome_co");   

var get_all_collections = require("./get_all_collections.js")

get_all_collections.get_all_collections(function(res){
    console.log(res)
for(var i =0;i<res.length;i++){
upsert_everything_with_zero(res[i])
    
}
    
})

var destination = "rhWLSyUd1mpkjL1DsreSg2hZJAvnVdqfkd"
function upsert_everything_with_zero(account){
   
   
   // upsert safety net (sum of all safety_net_pathways)
 // upsert dividend_pathways
    db.collection(destination).findAndModify({
        query: {type: "dividend_pathway", account: account, currency: "RES", taxRate: 0.02}, 
        update:{$inc:{total_pathway:5}}, 
        upsert: true,
        new: true
        
    }, 
        function(err,doc){
            console.log(doc)
        })
        
    // upsert safety_net pathway (mirror of dividend pathway)
    db.collection(account).findAndModify({
        query: {type: "safety_net_pathway", account: destination, currency: "RES", taxRate: 0.02}, 
        update:{$inc:{total_pathway:5}}, 
        upsert: true,
        new: true
        
    }, 
        function(err,doc){
            console.log(doc)
        })
        
   // upsert safety net (sum of all safety_net_pathways)
    db.collection(account).findAndModify({
        query: {type: "total_safety_net", currency: "RES", taxRate: 0.02}, 
        update:{$inc:{total_pathway:5}}, 
        upsert: true,
        new: true
        
    }, 
        function(err,doc){
            console.log(doc)
        })
   
  /* 
   // upsert safety net (sum of all safety_net_pathways)
    db.collection(account).findAndModify({
        query: {type: "consumption_outside_network", currency: "RES", taxRate: 0.02}, 
        update:{$inc:{total_amount:0}}, 
        upsert: true,
        new: true
        
    }, 
        function(err,doc){
            console.log(doc)
  db.collection(account).findAndModify({
        query: {type: "tax_blob", currency: "RES", taxRate: 0.02}, 
        update:{$inc:{total_amount:0}}, 
        upsert: true,
        new: true
        
    }, 
        function(err,doc){
            console.log(doc)

        })
        })
     */   
}