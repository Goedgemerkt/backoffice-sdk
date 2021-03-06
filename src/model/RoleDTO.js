/**
 * Packing API
 * API for creating packing slips
 *
 * OpenAPI spec version: 0.1
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';

/**
* The RoleDTO model module.
* @module model/RoleDTO
* @version 0.1.3
*/
export default class RoleDTO {
    /**
    * Constructs a new <code>RoleDTO</code>.
    * @alias module:model/RoleDTO
    * @class
    * @param name {String} 
    * @param scopes {Array.<String>} 
    */

    constructor(name, scopes) {
        
        
        this['name'] = name;
        this['scopes'] = scopes;
        
    }

    /**
    * Constructs a <code>RoleDTO</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/RoleDTO} obj Optional instance to populate.
    * @return {module:model/RoleDTO} The populated <code>RoleDTO</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new RoleDTO();
                        
            
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('scopes')) {
                obj['scopes'] = ApiClient.convertToType(data['scopes'], ['String']);
            }
        }
        return obj;
    }

    /**
    * @member {String} name
    */
    name = undefined;
    /**
    * @member {Array.<String>} scopes
    */
    scopes = undefined;




}
