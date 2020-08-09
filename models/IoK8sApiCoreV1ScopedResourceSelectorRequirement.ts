/**
 * Kubernetes
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * OpenAPI spec version: unversioned
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { HttpFile } from '../http/http.ts';

/**
* A scoped-resource selector requirement is a selector that contains values, a scope name, and an operator that relates the scope name and values.
*/
export class IoK8sApiCoreV1ScopedResourceSelectorRequirement {
    /**
    * Represents a scope's relationship to a set of values. Valid operators are In, NotIn, Exists, DoesNotExist.
    */
    'operator': string;
    /**
    * The name of the scope that the selector applies to.
    */
    'scopeName': string;
    /**
    * An array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. This array is replaced during a strategic merge patch.
    */
    'values'?: Array<string>;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "operator",
            "baseName": "operator",
            "type": "string",
            "format": ""
        },
        {
            "name": "scopeName",
            "baseName": "scopeName",
            "type": "string",
            "format": ""
        },
        {
            "name": "values",
            "baseName": "values",
            "type": "Array<string>",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return IoK8sApiCoreV1ScopedResourceSelectorRequirement.attributeTypeMap;
    }
    
    public constructor() {
    }
}

