/**
 * ORY Hydra - Cloud Native OAuth 2.0 and OpenID Connect Server
 * Welcome to the ORY Hydra HTTP API documentation. You will find documentation for all HTTP APIs here. Keep in mind that this document reflects the latest branch, always. Support for versioned documentation is coming in the future.
 *
 * OpenAPI spec version: Latest
 * Contact: hi@ory.am
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.2.3
 *
 * Do not edit the class manually.
 *
 */

;(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/JsonWebKeySet'], factory)
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(
      require('../ApiClient'),
      require('./JsonWebKeySet')
    )
  } else {
    // Browser globals (root is window)
    if (!root.OryHydraCloudNativeOAuth20AndOpenIdConnectServer) {
      root.OryHydraCloudNativeOAuth20AndOpenIdConnectServer = {}
    }
    root.OryHydraCloudNativeOAuth20AndOpenIdConnectServer.SwaggerJwkUpdateSet = factory(
      root.OryHydraCloudNativeOAuth20AndOpenIdConnectServer.ApiClient,
      root.OryHydraCloudNativeOAuth20AndOpenIdConnectServer.JsonWebKeySet
    )
  }
})(this, function(ApiClient, JsonWebKeySet) {
  'use strict'

  /**
   * The SwaggerJwkUpdateSet model module.
   * @module model/SwaggerJwkUpdateSet
   * @version Latest
   */

  /**
   * Constructs a new <code>SwaggerJwkUpdateSet</code>.
   * @alias module:model/SwaggerJwkUpdateSet
   * @class
   * @param set {String} The set in: path
   */
  var exports = function(set) {
    var _this = this

    _this['set'] = set
  }

  /**
   * Constructs a <code>SwaggerJwkUpdateSet</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/SwaggerJwkUpdateSet} obj Optional instance to populate.
   * @return {module:model/SwaggerJwkUpdateSet} The populated <code>SwaggerJwkUpdateSet</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports()

      if (data.hasOwnProperty('Body')) {
        obj['Body'] = JsonWebKeySet.constructFromObject(data['Body'])
      }
      if (data.hasOwnProperty('set')) {
        obj['set'] = ApiClient.convertToType(data['set'], 'String')
      }
    }
    return obj
  }

  /**
   * @member {module:model/JsonWebKeySet} Body
   */
  exports.prototype['Body'] = undefined
  /**
   * The set in: path
   * @member {String} set
   */
  exports.prototype['set'] = undefined

  return exports
})
