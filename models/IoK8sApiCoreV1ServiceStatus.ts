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

import { IoK8sApiCoreV1LoadBalancerStatus } from './IoK8sApiCoreV1LoadBalancerStatus.ts';
import { HttpFile } from '../http/http.ts';

/**
* ServiceStatus represents the current status of a service.
*/
export class IoK8sApiCoreV1ServiceStatus {
    'loadBalancer'?: IoK8sApiCoreV1LoadBalancerStatus;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "loadBalancer",
            "baseName": "loadBalancer",
            "type": "IoK8sApiCoreV1LoadBalancerStatus",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return IoK8sApiCoreV1ServiceStatus.attributeTypeMap;
    }
    
    public constructor() {
    }
}

