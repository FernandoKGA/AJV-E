const Ajv = require('ajv');
const type_json_schema = require('../schemas/type_json_schema.json');

//Create ajv validator
var ajv = new Ajv({allErrors: true, jsonPointers: true});
    
//Add your desired meta schema
ajv.addMetaSchema(require('ajv/lib/refs/json-schema-draft-06.json'));
    
//Add ajv errors to custom error messages
require('ajv-errors')(ajv);

// Get the schema you want to verify
var validate = ajv.compile(type_json_schema);

let json = [];

var valid = validate(json); //false
if(!valid) console.log(validate.errors[0].message);
//Output: This JSON must be an object.