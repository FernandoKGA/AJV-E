const Ajv = require('ajv');
const nested_objects_json_schema = require('../schemas/nested_objects_json_schema.json');

//Create ajv validator
var ajv = new Ajv({allErrors: true, jsonPointers: true});
    
//Add your desired meta schema
ajv.addMetaSchema(require('ajv/lib/refs/json-schema-draft-06.json'));
    
//Add ajv errors to custom error messages
require('ajv-errors')(ajv);

// Get the schema you want to verify
var validate = ajv.compile(nested_objects_json_schema);

let json = {
    user: {
        username: "human"
    }
};

var valid = validate(json); //false
if(!valid) console.log(validate.errors[0].message);
//Output: Password is required.
/**
 * Checks if the password property in user object is present, if isn't an error will be thrown.
 */