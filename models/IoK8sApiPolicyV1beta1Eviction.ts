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

import { IoK8sApimachineryPkgApisMetaV1DeleteOptions } from './IoK8sApimachineryPkgApisMetaV1DeleteOptions.ts';
import { IoK8sApimachineryPkgApisMetaV1ObjectMeta } from './IoK8sApimachineryPkgApisMetaV1ObjectMeta.ts';
import { HttpFile } from '../http/http.ts';

/**
* Eviction evicts a pod from its node subject to certain policies and safety constraints. This is a subresource of Pod.  A request to cause such an eviction is created by POSTing to .../pods/<pod name>/evictions.
*/
export class IoK8sApiPolicyV1beta1Eviction {
    /**
    * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
    */
    'apiVersion'?: string;
    'deleteOptions'?: IoK8sApimachineryPkgApisMetaV1DeleteOptions;
    /**
    * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
    */
    'kind'?: string;
    'metadata'?: IoK8sApimachineryPkgApisMetaV1ObjectMeta;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "apiVersion",
            "baseName": "apiVersion",
            "type": "string",
            "format": ""
        },
        {
            "name": "deleteOptions",
            "baseName": "deleteOptions",
            "type": "IoK8sApimachineryPkgApisMetaV1DeleteOptions",
            "format": ""
        },
        {
            "name": "kind",
            "baseName": "kind",
            "type": "string",
            "format": ""
        },
        {
            "name": "metadata",
            "baseName": "metadata",
            "type": "IoK8sApimachineryPkgApisMetaV1ObjectMeta",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return IoK8sApiPolicyV1beta1Eviction.attributeTypeMap;
    }
    
    public constructor() {
    }
}

