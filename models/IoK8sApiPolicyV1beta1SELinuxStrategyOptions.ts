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

import { IoK8sApiCoreV1SELinuxOptions } from './IoK8sApiCoreV1SELinuxOptions.ts';
import { HttpFile } from '../http/http.ts';

/**
* SELinuxStrategyOptions defines the strategy type and any options used to create the strategy.
*/
export class IoK8sApiPolicyV1beta1SELinuxStrategyOptions {
    /**
    * rule is the strategy that will dictate the allowable labels that may be set.
    */
    'rule': string;
    'seLinuxOptions'?: IoK8sApiCoreV1SELinuxOptions;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "rule",
            "baseName": "rule",
            "type": "string",
            "format": ""
        },
        {
            "name": "seLinuxOptions",
            "baseName": "seLinuxOptions",
            "type": "IoK8sApiCoreV1SELinuxOptions",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return IoK8sApiPolicyV1beta1SELinuxStrategyOptions.attributeTypeMap;
    }
    
    public constructor() {
    }
}

