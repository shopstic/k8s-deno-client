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
* ServiceAccountSubject holds detailed information for service-account-kind subject.
*/
export class IoK8sApiFlowcontrolV1alpha1ServiceAccountSubject {
    /**
    * `name` is the name of matching ServiceAccount objects, or \"*\" to match regardless of name. Required.
    */
    'name': string;
    /**
    * `namespace` is the namespace of matching ServiceAccount objects. Required.
    */
    'namespace': string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "name",
            "baseName": "name",
            "type": "string",
            "format": ""
        },
        {
            "name": "namespace",
            "baseName": "namespace",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return IoK8sApiFlowcontrolV1alpha1ServiceAccountSubject.attributeTypeMap;
    }
    
    public constructor() {
    }
}

