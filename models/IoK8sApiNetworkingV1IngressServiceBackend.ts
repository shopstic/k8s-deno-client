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

import { IoK8sApiNetworkingV1ServiceBackendPort } from './IoK8sApiNetworkingV1ServiceBackendPort.ts';
import { HttpFile } from '../http/http.ts';

/**
* IngressServiceBackend references a Kubernetes Service as a Backend.
*/
export class IoK8sApiNetworkingV1IngressServiceBackend {
    /**
    * Name is the referenced service. The service must exist in the same namespace as the Ingress object.
    */
    'name': string;
    'port'?: IoK8sApiNetworkingV1ServiceBackendPort;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "name",
            "baseName": "name",
            "type": "string",
            "format": ""
        },
        {
            "name": "port",
            "baseName": "port",
            "type": "IoK8sApiNetworkingV1ServiceBackendPort",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return IoK8sApiNetworkingV1IngressServiceBackend.attributeTypeMap;
    }
    
    public constructor() {
    }
}

