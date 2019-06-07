var masterModel = require('../model/masterModel');
var return_result ={status:false,error:'',message:'',response:'',data:{}};
// Display list of all books.
exports.country_list = function(req, res) {
    var params ={table:global.tablesMap.APP_COMPANY};
    masterModel.getAllDataFromTable(params,function(err, results) {
        if(results.length>0){
            return_result.status=true;
            return_result.response='success';
            return_result.message='data fetched successfully';
            return_result.data=results;
        }else{
            return_result.status=true;
            return_result.response='empty';
            return_result.message='No rows found';
            return_result.data=null;
        }
        res.json(return_result)
      
      })
      //res.send("data from listinf");   
};
exports.divisions_list = function(req, res) {
    
    var params ={table:global.tablesMap.APP_DIVISION,company_id:req.params.company_id};
    masterModel.getAllDivisions(params,function(err, results) {
        if(err== null){
            return_result.status=true;
            return_result.response='success';
            return_result.message='data fetched successfully';
            return_result.data=results;
        }else{
            return_result.status=true;
            return_result.response='empty';
            return_result.message='No rows found';
            return_result.data=null;
        }
       res.json(return_result)
      })
    }
 exports.entities_list = function(req, res) {
        var params ={table:global.tablesMap.APP_ENTITIES, division_id: req.params.division_id};
        masterModel.getAllEntities(params,function(err, results) {
            if(results.length>0){
                return_result.status=true;
                return_result.response='success';
                return_result.message='data fetched successfully';
                return_result.data=results;
            }else{
                return_result.status=true;
                return_result.response='empty';
                return_result.message='No rows found';
                return_result.data=null;
            }
           res.json(return_result)
          })
      
      //res.send("data from listinf");   
};
exports.source_list = function(req, res) {
    var params ={table: global.tablesMap.APP_SMS_SOURCE,vid: req.params.vid};
    masterModel.getAllSources(params,function(err, results) {
        if(results.length>0){
            return_result.status=true;
            return_result.response='success';
            return_result.message='data fetched successfully';
            return_result.data=results;
        }else{
            return_result.status=true;
            return_result.response='empty';
            return_result.message='No rows found';
            return_result.data=null;
        }
       res.json(return_result)
      }) 
};
exports.vendor_list = function(req, res) {
    var params ={table: global.tablesMap.APP_SMS_VENDOR};
    masterModel.getAllDataFromTable(params,function(err, results) {
        if(results.length>0){
            return_result.status=true;
            return_result.response='success';
            return_result.message='data fetched successfully';
            return_result.data=results;
        }else{
            return_result.status=true;
            return_result.response='empty';
            return_result.message='No rows found';
            return_result.data=null;
        }
       res.json(return_result)
      }) 
};
exports.sender_list = function(req, res) {
    var params ={table: global.tablesMap.APP_SMS_SENDER};
    masterModel.getAllDataFromTable(params,function(err, results) {
        if(results.length>0){
            return_result.status=true;
            return_result.response='success';
            return_result.message='data fetched successfully';
            return_result.data=results;
        }else{
            return_result.status=true;
            return_result.response='empty';
            return_result.message='No rows found';
            return_result.data=null;
        }
       res.json(return_result)
      }) 
};
exports.config_list = function(req, res) {
    var params ={table: global.tablesMap.APP_SMS_CONFIG};
    masterModel.getSmsConfigs(params,function(err, results) {
        if(results.length>0){
            return_result.status=true;
            return_result.response='success';
            return_result.message='data fetched successfully';
            return_result.data=results;
        }else{
            return_result.status=true;
            return_result.response='empty';
            return_result.message='No rows found';
            return_result.data=null;
        }
       res.json(return_result)
      }) 
};
exports.getRecordFromID = function(req, res) {
    var params ={table:'ev_divisions'};
    console.log(req);
    // masterModel.getAllEntities(params,function(err, results) {
    //     if(results.length>0){
    //         return_result.status=true;
    //         return_result.response='success';
    //         return_result.message='data fetched successfully';
    //         return_result.data=results;
    //     }else{
    //         return_result.status=true;
    //         return_result.response='empty';
    //         return_result.message='No rows found';
    //     }
    //    res.json(return_result)
    //   }) 
};