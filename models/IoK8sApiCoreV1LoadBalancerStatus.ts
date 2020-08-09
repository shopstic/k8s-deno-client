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

import { IoK8sApiCoreV1LoadBalancerIngress } from './IoK8sApiCoreV1LoadBalancerIngress.ts';
import { HttpFile } from '../http/http.ts';

/**
* LoadBalancerStatus represents the status of a load-balancer.
*/
export class IoK8sApiCoreV1LoadBalancerStatus {
    /**
    * Ingress is a list containing ingress points for the load-balancer. Traffic intended for the service should be sent to these ingress points.
    */
    'ingress'?: Array<IoK8sApiCoreV1LoadBalancerIngress>;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "ingress",
            "baseName": "ingress",
            "type": "Array<IoK8sApiCoreV1LoadBalancerIngress>",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return IoK8sApiCoreV1LoadBalancerStatus.attributeTypeMap;
    }
    
    public constructor() {
    }
}

