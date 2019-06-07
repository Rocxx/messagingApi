var db = require('../dbconnection');
//Task object constructor
var MastersObj = function(master){
    this.table = master.table;
    this.columnKey = master.columnKey;
    this.id = master.id;
    this.created_at = new Date();
};
exports.insertToDB = function(requestParams,results) { 
   console.log("======service=======")
   var columnFields = requestParams.modelData.fields.join(',');
   var columnValues = requestParams.modelData.values.join(',');
   var sql = 'insert into '+requestParams.table+ '('+ columnFields +') VALUES ?';
   db.query(sql, [[requestParams.modelData.values]], function (err, result) {  
    if (err) {
        results(err, null);
        console.log("Error inserted: " + err);  
    }else{
        results(null, result.affectedRows);
    }
    
    });  
}
exports.updateToDb = function(requestParams,results) { 
    console.log("======service=======")
    var columnFields = requestParams.modelData.fields.join('=?,');
    console.log(columnFields+'=?');
    columnFields+='=?';
    var columnValues = requestParams.modelData.values.join(',');
    requestParams.modelData.values.push(requestParams.id);
    var colkey = 'id';
    if(global.tablesMap.APP_SMS_SOURCE == requestParams.table){
        var colkey = 'source_id';
       }else if(global.tablesMap.APP_SMS_VENDOR == requestParams.table){
        var colkey = 'vid';
       }else if(global.tablesMap.APP_SMS_SENDER == requestParams.table){
        var colkey = 'sid';
       }
    var sql = 'UPDATE '+requestParams.table+ ' SET '+ columnFields +' where  '+colkey+'= ?';
    console.log(sql,requestParams.modelData.values);
    db.query(sql, requestParams.modelData.values, function (err, result) {  
     if (err) {
         results(err, null);
         console.log("Error inserted: " + err);  
     }else{
         results(null, result.affectedRows);
     }
     
     });  
 }

