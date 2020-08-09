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

import { IoK8sKubeAggregatorPkgApisApiregistrationV1APIServiceCondition } from './IoK8sKubeAggregatorPkgApisApiregistrationV1APIServiceCondition.ts';
import { HttpFile } from '../http/http.ts';

/**
* APIServiceStatus contains derived information about an API server
*/
export class IoK8sKubeAggregatorPkgApisApiregistrationV1APIServiceStatus {
    /**
    * Current service state of apiService.
    */
    'conditions'?: Array<IoK8sKubeAggregatorPkgApisApiregistrationV1APIServiceCondition>;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "conditions",
            "baseName": "conditions",
            "type": "Array<IoK8sKubeAggregatorPkgApisApiregistrationV1APIServiceCondition>",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return IoK8sKubeAggregatorPkgApisApiregistrationV1APIServiceStatus.attributeTypeMap;
    }
    
    public constructor() {
    }
}

