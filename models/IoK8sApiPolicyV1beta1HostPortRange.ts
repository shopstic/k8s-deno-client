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
* HostPortRange defines a range of host ports that will be enabled by a policy for pods to use.  It requires both the start and end to be defined.
*/
export class IoK8sApiPolicyV1beta1HostPortRange {
    /**
    * max is the end of the range, inclusive.
    */
    'max': number;
    /**
    * min is the start of the range, inclusive.
    */
    'min': number;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "max",
            "baseName": "max",
            "type": "number",
            "format": "int32"
        },
        {
            "name": "min",
            "baseName": "min",
            "type": "number",
            "format": "int32"
        }    ];

    static getAttributeTypeMap() {
        return IoK8sApiPolicyV1beta1HostPortRange.attributeTypeMap;
    }
    
    public constructor() {
    }
}

