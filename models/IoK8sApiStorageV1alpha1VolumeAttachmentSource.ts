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

import { IoK8sApiCoreV1PersistentVolumeSpec } from './IoK8sApiCoreV1PersistentVolumeSpec.ts';
import { HttpFile } from '../http/http.ts';

/**
* VolumeAttachmentSource represents a volume that should be attached. Right now only PersistenVolumes can be attached via external attacher, in future we may allow also inline volumes in pods. Exactly one member can be set.
*/
export class IoK8sApiStorageV1alpha1VolumeAttachmentSource {
    'inlineVolumeSpec'?: IoK8sApiCoreV1PersistentVolumeSpec;
    /**
    * Name of the persistent volume to attach.
    */
    'persistentVolumeName'?: string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "inlineVolumeSpec",
            "baseName": "inlineVolumeSpec",
            "type": "IoK8sApiCoreV1PersistentVolumeSpec",
            "format": ""
        },
        {
            "name": "persistentVolumeName",
            "baseName": "persistentVolumeName",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return IoK8sApiStorageV1alpha1VolumeAttachmentSource.attributeTypeMap;
    }
    
    public constructor() {
    }
}
