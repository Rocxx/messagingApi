var db = require('../dbconnection');
//Task object constructor
var MastersObj = function(master){
    this.table = master.table;
    this.columnKey = master.columnKey;
    this.id = master.id;
    this.created_at = new Date();
};
var packages = [];
exports.getAllDataFromTable = function(requestParams,result) { 
    
    db.query('SELECT * from '+requestParams.table, function(err, rows,fields)   {
        if(err) {
            result(null, err);
        }
        else{
          result(null,rows)
        }
    });
}
exports.getAllSources = function(requestParams,result) { 
    if(requestParams.vid != undefined)
    sql = 'SELECT source_id as id,source_name as name from '+requestParams.table+' where vid='+requestParams.vid;
    else  
    sql= 'SELECT * from '+requestParams.table;
  
    db.query(sql, function(err, rows,fields)   {
        if(err) {
            result(null, err);
        }
        else{
          result(null,rows)
        }
    });
}
exports.getAllDivisions = function(requestParams,result) { 
   if(requestParams.company_id != undefined)
    sql = 'SELECT d.id,d.name from ev_divisions d where d.company_id='+requestParams.company_id;
    else  
    sql= 'SELECT c.name as company_name,d.* from ev_divisions d inner join ev_companies c on d.company_id=c.id';
  
    db.query(sql, function(err, rows,fields)   {
   
        if(err) {
            result(err, null);
        }
        else{
          result(null,rows)
        }
    });
}
exports.getAllEntities = function(requestParams,result) { 
    if(requestParams.division_id != undefined)
    sql = 'SELECT e.id,e.name from ev_entities e where e.division_id='+requestParams.division_id;
    else  
    sql= 'SELECT d.name as division_name,e.* from ev_entities e left join ev_divisions d on e.division_id=d.id';
    
    db.query(sql, function(err, rows,fields)   {
        if(err) {
            result(null, err);
        }
        else{
          result(null,rows)
        }
    });
}
exports.getSmsConfigs = function(requestParams,result) { 
    
    sql= 'SELECT g.id,g.status,g.sms_type,c.name as company,d.name as division,e.name as entity, ';
    sql += ' s.source_name,v.vendor_name,sen.sender_label';
    sql += ' FROM testusers.ev_sms_config g ';
    sql += ' left join ev_companies c on g.company_id=c.id ';
    sql += ' left join ev_divisions d on g.division_id=d.id';
    sql += ' left join ev_entities e on g.entity_id=e.id';
    sql += ' left join sms_sources s on g.source_id=s.source_id';
    sql += ' left join ev_sms_vendors v on g.vendor_id_first=v.vid';
    sql += ' left join ev_sms_senders sen on g.sender_id=sen.sid';
    
    db.query(sql, function(err, rows,fields)   {
        if(err) {
            result(null, err);
        }
        else{
          result(null,rows)
        }
    });
}

exports.getDataFromID = function(requestParams,result) { 
    var colkey = 'id';
   if(global.tablesMap.APP_SMS_SOURCE == requestParams.table){
    var colkey = 'source_id';
   }else if(global.tablesMap.APP_SMS_VENDOR == requestParams.table){
    var colkey = 'vid';
   }else if(global.tablesMap.APP_SMS_SENDER == requestParams.table){
    var colkey = 'sid';
   }
    db.query('SELECT * from '+requestParams.table+' where '+colkey+'='+requestParams.id, function(err, rows,fields)   {
        if(err) {
            result(err, null);
        }
        else{
          result(null,rows)
        }
    });
}
//module.exports= MastersObj;