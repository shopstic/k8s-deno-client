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

import { IoK8sApiRbacV1beta1AggregationRule } from './IoK8sApiRbacV1beta1AggregationRule.ts';
import { IoK8sApiRbacV1beta1PolicyRule } from './IoK8sApiRbacV1beta1PolicyRule.ts';
import { IoK8sApimachineryPkgApisMetaV1ObjectMeta } from './IoK8sApimachineryPkgApisMetaV1ObjectMeta.ts';
import { HttpFile } from '../http/http.ts';

/**
* ClusterRole is a cluster level, logical grouping of PolicyRules that can be referenced as a unit by a RoleBinding or ClusterRoleBinding. Deprecated in v1.17 in favor of rbac.authorization.k8s.io/v1 ClusterRole, and will no longer be served in v1.22.
*/
export class IoK8sApiRbacV1beta1ClusterRole {
    'aggregationRule'?: IoK8sApiRbacV1beta1AggregationRule;
    /**
    * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
    */
    'apiVersion'?: string;
    /**
    * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
    */
    'kind'?: string;
    'metadata'?: IoK8sApimachineryPkgApisMetaV1ObjectMeta;
    /**
    * Rules holds all the PolicyRules for this ClusterRole
    */
    'rules'?: Array<IoK8sApiRbacV1beta1PolicyRule>;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "aggregationRule",
            "baseName": "aggregationRule",
            "type": "IoK8sApiRbacV1beta1AggregationRule",
            "format": ""
        },
        {
            "name": "apiVersion",
            "baseName": "apiVersion",
            "type": "string",
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
        },
        {
            "name": "rules",
            "baseName": "rules",
            "type": "Array<IoK8sApiRbacV1beta1PolicyRule>",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return IoK8sApiRbacV1beta1ClusterRole.attributeTypeMap;
    }
    
    public constructor() {
    }
}

