const Ajv = require('ajv');
const properties_json_schema = require('../schemas/required_json_schema.json');

//Create ajv validator
var ajv = new Ajv({allErrors: true, jsonPointers: true});
    
//Add your desired meta schema
ajv.addMetaSchema(require('ajv/lib/refs/json-schema-draft-06.json'));
    
//Add ajv errors to custom error messages
require('ajv-errors')(ajv);

// Get the schema you want to verify
var validate = ajv.compile(properties_json_schema);

let json = {};

var valid = validate(json); //false
if(!valid) console.log(validate.errors[0].message);
//Output: User is required.
/**
 * Checks if the user property is present, if not, will throw an error.
 */