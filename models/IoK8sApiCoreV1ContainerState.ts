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

import { IoK8sApiCoreV1ContainerStateRunning } from './IoK8sApiCoreV1ContainerStateRunning.ts';
import { IoK8sApiCoreV1ContainerStateTerminated } from './IoK8sApiCoreV1ContainerStateTerminated.ts';
import { IoK8sApiCoreV1ContainerStateWaiting } from './IoK8sApiCoreV1ContainerStateWaiting.ts';
import { HttpFile } from '../http/http.ts';

/**
* ContainerState holds a possible state of container. Only one of its members may be specified. If none of them is specified, the default one is ContainerStateWaiting.
*/
export class IoK8sApiCoreV1ContainerState {
    'running'?: IoK8sApiCoreV1ContainerStateRunning;
    'terminated'?: IoK8sApiCoreV1ContainerStateTerminated;
    'waiting'?: IoK8sApiCoreV1ContainerStateWaiting;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "running",
            "baseName": "running",
            "type": "IoK8sApiCoreV1ContainerStateRunning",
            "format": ""
        },
        {
            "name": "terminated",
            "baseName": "terminated",
            "type": "IoK8sApiCoreV1ContainerStateTerminated",
            "format": ""
        },
        {
            "name": "waiting",
            "baseName": "waiting",
            "type": "IoK8sApiCoreV1ContainerStateWaiting",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return IoK8sApiCoreV1ContainerState.attributeTypeMap;
    }
    
    public constructor() {
    }
}

