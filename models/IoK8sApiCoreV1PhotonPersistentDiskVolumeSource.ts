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
* Represents a Photon Controller persistent disk resource.
*/
export class IoK8sApiCoreV1PhotonPersistentDiskVolumeSource {
    /**
    * Filesystem type to mount. Must be a filesystem type supported by the host operating system. Ex. \"ext4\", \"xfs\", \"ntfs\". Implicitly inferred to be \"ext4\" if unspecified.
    */
    'fsType'?: string;
    /**
    * ID that identifies Photon Controller persistent disk
    */
    'pdID': string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "fsType",
            "baseName": "fsType",
            "type": "string",
            "format": ""
        },
        {
            "name": "pdID",
            "baseName": "pdID",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return IoK8sApiCoreV1PhotonPersistentDiskVolumeSource.attributeTypeMap;
    }
    
    public constructor() {
    }
}

