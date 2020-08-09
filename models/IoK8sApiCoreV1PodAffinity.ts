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

import { IoK8sApiCoreV1PodAffinityTerm } from './IoK8sApiCoreV1PodAffinityTerm.ts';
import { IoK8sApiCoreV1WeightedPodAffinityTerm } from './IoK8sApiCoreV1WeightedPodAffinityTerm.ts';
import { HttpFile } from '../http/http.ts';

/**
* Pod affinity is a group of inter pod affinity scheduling rules.
*/
export class IoK8sApiCoreV1PodAffinity {
    /**
    * The scheduler will prefer to schedule pods to nodes that satisfy the affinity expressions specified by this field, but it may choose a node that violates one or more of the expressions. The node that is most preferred is the one with the greatest sum of weights, i.e. for each node that meets all of the scheduling requirements (resource request, requiredDuringScheduling affinity expressions, etc.), compute a sum by iterating through the elements of this field and adding \"weight\" to the sum if the node has pods which matches the corresponding podAffinityTerm; the node(s) with the highest sum are the most preferred.
    */
    'preferredDuringSchedulingIgnoredDuringExecution'?: Array<IoK8sApiCoreV1WeightedPodAffinityTerm>;
    /**
    * If the affinity requirements specified by this field are not met at scheduling time, the pod will not be scheduled onto the node. If the affinity requirements specified by this field cease to be met at some point during pod execution (e.g. due to a pod label update), the system may or may not try to eventually evict the pod from its node. When there are multiple elements, the lists of nodes corresponding to each podAffinityTerm are intersected, i.e. all terms must be satisfied.
    */
    'requiredDuringSchedulingIgnoredDuringExecution'?: Array<IoK8sApiCoreV1PodAffinityTerm>;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "preferredDuringSchedulingIgnoredDuringExecution",
            "baseName": "preferredDuringSchedulingIgnoredDuringExecution",
            "type": "Array<IoK8sApiCoreV1WeightedPodAffinityTerm>",
            "format": ""
        },
        {
            "name": "requiredDuringSchedulingIgnoredDuringExecution",
            "baseName": "requiredDuringSchedulingIgnoredDuringExecution",
            "type": "Array<IoK8sApiCoreV1PodAffinityTerm>",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return IoK8sApiCoreV1PodAffinity.attributeTypeMap;
    }
    
    public constructor() {
    }
}

