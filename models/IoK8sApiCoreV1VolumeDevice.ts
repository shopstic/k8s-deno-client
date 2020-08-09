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
* volumeDevice describes a mapping of a raw block device within a container.
*/
export class IoK8sApiCoreV1VolumeDevice {
    /**
    * devicePath is the path inside of the container that the device will be mapped to.
    */
    'devicePath': string;
    /**
    * name must match the name of a persistentVolumeClaim in the pod
    */
    'name': string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "devicePath",
            "baseName": "devicePath",
            "type": "string",
            "format": ""
        },
        {
            "name": "name",
            "baseName": "name",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return IoK8sApiCoreV1VolumeDevice.attributeTypeMap;
    }
    
    public constructor() {
    }
}

