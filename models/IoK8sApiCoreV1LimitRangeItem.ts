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
* LimitRangeItem defines a min/max usage limit for any resource that matches on kind.
*/
export class IoK8sApiCoreV1LimitRangeItem {
    /**
    * Default resource requirement limit value by resource name if resource limit is omitted.
    */
    '_default'?: { [key: string]: string; };
    /**
    * DefaultRequest is the default resource requirement request value by resource name if resource request is omitted.
    */
    'defaultRequest'?: { [key: string]: string; };
    /**
    * Max usage constraints on this kind by resource name.
    */
    'max'?: { [key: string]: string; };
    /**
    * MaxLimitRequestRatio if specified, the named resource must have a request and limit that are both non-zero where limit divided by request is less than or equal to the enumerated value; this represents the max burst for the named resource.
    */
    'maxLimitRequestRatio'?: { [key: string]: string; };
    /**
    * Min usage constraints on this kind by resource name.
    */
    'min'?: { [key: string]: string; };
    /**
    * Type of resource that this limit applies to.
    */
    'type': string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "_default",
            "baseName": "default",
            "type": "{ [key: string]: string; }",
            "format": ""
        },
        {
            "name": "defaultRequest",
            "baseName": "defaultRequest",
            "type": "{ [key: string]: string; }",
            "format": ""
        },
        {
            "name": "max",
            "baseName": "max",
            "type": "{ [key: string]: string; }",
            "format": ""
        },
        {
            "name": "maxLimitRequestRatio",
            "baseName": "maxLimitRequestRatio",
            "type": "{ [key: string]: string; }",
            "format": ""
        },
        {
            "name": "min",
            "baseName": "min",
            "type": "{ [key: string]: string; }",
            "format": ""
        },
        {
            "name": "type",
            "baseName": "type",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return IoK8sApiCoreV1LimitRangeItem.attributeTypeMap;
    }
    
    public constructor() {
    }
}

