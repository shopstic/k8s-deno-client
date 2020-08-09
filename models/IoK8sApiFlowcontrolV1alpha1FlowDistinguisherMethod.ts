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
* FlowDistinguisherMethod specifies the method of a flow distinguisher.
*/
export class IoK8sApiFlowcontrolV1alpha1FlowDistinguisherMethod {
    /**
    * `type` is the type of flow distinguisher method The supported types are \"ByUser\" and \"ByNamespace\". Required.
    */
    'type': string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "type",
            "baseName": "type",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return IoK8sApiFlowcontrolV1alpha1FlowDistinguisherMethod.attributeTypeMap;
    }
    
    public constructor() {
    }
}

