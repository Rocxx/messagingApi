var formModel = require('../model/formsModel');
var masterModel = require('../model/masterModel');
var return_result ={status:false,error:'',message:'',response:'',data:{}};
var main_table =  global.tablesMap.APP_COMPANY;

var requestMapToTables = {
    company: global.tablesMap.APP_COMPANY,
    division: global.tablesMap.APP_DIVISION,
    entity: global.tablesMap.APP_ENTITIES,
    source: global.tablesMap.APP_SMS_SOURCE,
    sender: global.tablesMap.APP_SMS_SENDER,
    vendor: global.tablesMap.APP_SMS_VENDOR,
    config: global.tablesMap.APP_SMS_CONFIG
    
}
// Display list of all books.
exports.insertCompany = function(req, res) {
    
    var params ={table: main_table};
    let colField = [];
    let colValue =  [];
    for (var key in req.body) {
        if (req.body.hasOwnProperty(key)) {
            colField.push(key);
            colValue.push(req.body[key]);
        }
      }
      colField.push('updated_by');
      colValue.push('9999');
      colField.push('date_added');
      colValue.push(new Date());
      
    params.modelData = {fields:colField,values:colValue};
    formModel.insertToDB(params,function(err, results) {

        if(results>0){
            return_result.status=true;
            return_result.response='success';
            return_result.message='data inserted successfully';
            return_result.data=results;
        }else{
            return_result.status=true;
            return_result.response='error';
            return_result.message='Unable to insert data';
            return_result.data=err;
        }
       res.json(return_result)

    });
}
exports.updateCompany = function(req, res) {
    var reqpath = req.originalUrl.split('/')[1];
    if(!requestMapToTables[reqpath]){
       return_result.response='error';
       return_result.message='No map matching';
       res.json(return_result)
    }
    var params ={table: requestMapToTables[reqpath], id: req.params.seqId};
    console.log(params)
    let colField = [];
    let colValue =  [];
    for (var key in req.body) {
        if (req.body.hasOwnProperty(key)) {
            colField.push(key);
            colValue.push(req.body[key]);
        }
      }
      //colField.push('updated_by');
      //colValue.push('9999');
     // colField.push('date_added');
     // colValue.push(new Date());
      
    params.modelData = {fields:colField,values:colValue};
    formModel.updateToDb(params,function(err, results) {

        if(results>0){
            return_result.status=true;
            return_result.response='success';
            return_result.message='data has been updated successfully';
            return_result.data=results;
        }else{
            return_result.status=true;
            return_result.response='error';
            return_result.message='Unable to insert data';
            return_result.data=err;
        }
       res.json(return_result)

    });
}
exports.getRecordFromID = function(req, res) {
    var reqpath = req.originalUrl.split('/')[1];
    if(!requestMapToTables[reqpath]){
       return_result.response='error';
       return_result.message='No map matching';
       res.json(return_result)
    }
    var params ={table: requestMapToTables[reqpath] ,id: req.params.seqId};
    masterModel.getDataFromID(params,function(err, results) {
        if(results.length>0){
            return_result.status=true;
            return_result.response='success';
            return_result.message='data fetched successfully';
            return_result.data=results;
        }else{
            return_result.status=true;
            return_result.response='empty';
            return_result.message='No rows found';
        }
       res.json(return_result)
      }) 
};
exports.insertDivision = function(req, res) {
    var reqpath = req.originalUrl.split('/')[1];
    if(!requestMapToTables[reqpath]){
       return_result.response='error';
       return_result.message='No map matching';
       res.json(return_result)
    }
    var params ={table: requestMapToTables[reqpath]};
    let colField = [];
    let colValue =  [];
    for (var key in req.body) {
        if (req.body.hasOwnProperty(key)) {
            colField.push(key);
            colValue.push(req.body[key]);
        }
      }
      colField.push('updated_by');
      colValue.push('9999');
      
      colField.push('sys_saved_date');
      colValue.push(new Date());
      colField.push('date_added');
      colValue.push(new Date());
      colField.push('city_id');
      colValue.push('9999');
      
    params.modelData = {fields:colField,values:colValue};
    formModel.insertToDB(params,function(err, results) {

        if(results>0){
            return_result.status=true;
            return_result.response='success';
            return_result.message='data inserted successfully';
            return_result.data=results;
        }else{
            return_result.status=true;
            return_result.response='error';
            return_result.message='Unable to insert data';
            return_result.data=err;
        }
       res.json(return_result)

    });
}
exports.insertEntity = function(req, res) {
    var reqpath = req.originalUrl.split('/')[1];
    if(!requestMapToTables[reqpath]){
       return_result.response='error';
       return_result.message='No map matching';
       res.json(return_result)
    }
    var params ={table: requestMapToTables[reqpath]};
    let colField = [];
    let colValue =  [];
    for (var key in req.body) {
        if (req.body.hasOwnProperty(key)) {
            colField.push(key);
            colValue.push(req.body[key]);
        }
      }
      colField.push('updated_by');
      colValue.push('9999');
      
     // colField.push('sys_saved_date');
      //colValue.push(new Date());
      colField.push('date_added');
      colValue.push(new Date());
      colField.push('city_id');
      colValue.push('9999');
      
    params.modelData = {fields:colField,values:colValue};
    formModel.insertToDB(params,function(err, results) {

        if(results>0){
            return_result.status=true;
            return_result.response='success';
            return_result.message='data inserted successfully';
            return_result.data=results;
        }else{
            return_result.status=true;
            return_result.response='error';
            return_result.message='Unable to insert data';
            return_result.data=err;
        }
       res.json(return_result)

    });
}
exports.insertSource = function(req, res) {
    var reqpath = req.originalUrl.split('/')[1];
    if(!requestMapToTables[reqpath]){
       return_result.response='error';
       return_result.message='No map matching';
       res.json(return_result)
    }
    var params ={table: requestMapToTables[reqpath]};
    let colField = [];
    let colValue =  [];
    for (var key in req.body) {
        if (req.body.hasOwnProperty(key)) {
            colField.push(key);
            colValue.push(req.body[key]);
        }
      }
      colField.push('created_date');
      colValue.push(new Date());
      colField.push('created_by');
      colValue.push('9999');
      
      
    params.modelData = {fields:colField,values:colValue};
    formModel.insertToDB(params,function(err, results) {

        if(results>0){
            return_result.status=true;
            return_result.response='success';
            return_result.message='data inserted successfully';
            return_result.data=results;
        }else{
            return_result.status=true;
            return_result.response='error';
            return_result.message='Unable to insert data';
            return_result.data=err;
        }
       res.json(return_result)

    });
}
exports.insertSender = function(req, res) {
    var reqpath = req.originalUrl.split('/')[1];
    if(!requestMapToTables[reqpath]){
       return_result.response='error';
       return_result.message='No map matching';
       res.json(return_result)
    }
    var params ={table: requestMapToTables[reqpath]};
    let colField = [];
    let colValue =  [];
    for (var key in req.body) {
        if (req.body.hasOwnProperty(key)) {
            colField.push(key);
            colValue.push(req.body[key]);
        }
      }
      colField.push('created_date');
      colValue.push(new Date());
      colField.push('created_by');
      colValue.push('9999');
      
      
    params.modelData = {fields:colField,values:colValue};
    formModel.insertToDB(params,function(err, results) {

        if(results>0){
            return_result.status=true;
            return_result.response='success';
            return_result.message='data inserted successfully';
            return_result.data=results;
        }else{
            return_result.status=true;
            return_result.response='error';
            return_result.message='Unable to insert data';
            return_result.data=err;
        }
       res.json(return_result)

    });
}
exports.insertVendor = function(req, res) {
    var reqpath = req.originalUrl.split('/')[1];
    if(!requestMapToTables[reqpath]){
       return_result.response='error';
       return_result.message='No map matching';
       res.json(return_result)
    }
    var params ={table: requestMapToTables[reqpath]};
    let colField = [];
    let colValue =  [];
    for (var key in req.body) {
        if (req.body.hasOwnProperty(key)) {
            colField.push(key);
            colValue.push(req.body[key]);
        }
      }
      colField.push('created_date');
      colValue.push(new Date());
      colField.push('created_by');
      colValue.push('9999');
      
      
    params.modelData = {fields:colField,values:colValue};
    formModel.insertToDB(params,function(err, results) {

        if(results>0){
            return_result.status=true;
            return_result.response='success';
            return_result.message='data inserted successfully';
            return_result.data=results;
        }else{
            return_result.status=true;
            return_result.response='error';
            return_result.message='Unable to insert data';
            return_result.data=err;
        }
       res.json(return_result)

    });
}
exports.insertConfig = function(req, res) {
    var reqpath = req.originalUrl.split('/')[1];
    if(!requestMapToTables[reqpath]){
       return_result.response='error';
       return_result.message='No map matching';
       res.json(return_result)
    }
    var params ={table: requestMapToTables[reqpath]};
    let colField = [];
    let colValue =  [];
    for (var key in req.body) {
        if (req.body.hasOwnProperty(key)) {
            colField.push(key);
            colValue.push(req.body[key]);
        }
      }
      colField.push('date_added');
      colValue.push(new Date());
      
    params.modelData = {fields:colField,values:colValue};
    formModel.insertToDB(params,function(err, results) {

        if(results>0){
            return_result.status=true;
            return_result.response='success';
            return_result.message='data inserted successfully';
            return_result.data=results;
        }else{
            return_result.status=true;
            return_result.response='error';
            return_result.message='Unable to insert data';
            return_result.data=err;
        }
       res.json(return_result)

    });
}