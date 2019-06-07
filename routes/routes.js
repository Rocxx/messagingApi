
var routes = express.Router(); //create instance of express routes
//var userValidator = require('./../validation/user.validation'); //path to the validation/user.validation.js
//var userController = require('./../controller/user.controller'); //path to the controller/user.controller.js
// Require controller modules.
var master_controller = require('./../controllers/masterController');
var form_controller = require('./../controllers/formsController');
// define a simple route
routes.get('/', (req, res) => {
    res.json({"message": "Welcome to EasyNotes routeslication. Take notes quickly. Organize and keep track of all your notes."});
});
routes.get('/master/country-list', master_controller.country_list)
routes.get('/master/division-list', master_controller.divisions_list)
routes.get('/master/division-list/:company_id?', master_controller.divisions_list)
routes.get('/master/entities-list/:division_id?', master_controller.entities_list)
routes.get('/master/source-list/:vid?', master_controller.source_list)
routes.get('/master/sender-list', master_controller.sender_list)
routes.get('/master/vendor-list', master_controller.vendor_list)
routes.get('/master/sms-config-list', master_controller.config_list)

routes.post('/company/addnew', form_controller.insertCompany);
routes.get('/company/getRecordById/:seqId', form_controller.getRecordFromID);
routes.put('/company/update/:seqId', form_controller.updateCompany);

routes.get('/division/getRecordById/:seqId', form_controller.getRecordFromID);
routes.post('/division/addnew', form_controller.insertDivision);
routes.put('/division/update/:seqId', form_controller.updateCompany);

routes.get('/entity/getRecordById/:seqId', form_controller.getRecordFromID);
routes.post('/entity/addnew', form_controller.insertEntity);
routes.put('/entity/update/:seqId', form_controller.updateCompany);

routes.get('/source/getRecordById/:seqId', form_controller.getRecordFromID);
routes.post('/source/addnew', form_controller.insertSource);
routes.put('/source/update/:seqId', form_controller.updateCompany);

routes.get('/sender/getRecordById/:seqId', form_controller.getRecordFromID);
routes.post('/sender/addnew', form_controller.insertSender);
routes.put('/sender/update/:seqId', form_controller.updateCompany);

routes.get('/vendor/getRecordById/:seqId', form_controller.getRecordFromID);
routes.post('/vendor/addnew', form_controller.insertVendor);
routes.put('/vendor/update/:seqId', form_controller.updateCompany);

routes.get('/config/getRecordById/:seqId', form_controller.getRecordFromID);
routes.post('/config/addnew', form_controller.insertConfig);
routes.put('/config/update/:seqId', form_controller.updateCompany);
routes.get('*', function(req, res){
    res.status(404).json({'message': "Invalid Request"});
  });


// //create the routes
// routes.post('/your-route-name',
//     [
//       userValidator.validateAddUser, //function that validate request using express-validator
//       userValidator.checkValidationResult,
//     ],
//     userController.createUser
// );

//export express routes
module.exports = routes;
