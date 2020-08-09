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
* AttachedVolume describes a volume attached to a node
*/
export class IoK8sApiCoreV1AttachedVolume {
    /**
    * DevicePath represents the device path where the volume should be available
    */
    'devicePath': string;
    /**
    * Name of the attached volume
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
        return IoK8sApiCoreV1AttachedVolume.attributeTypeMap;
    }
    
    public constructor() {
    }
}
