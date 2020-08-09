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

import { IoK8sApiCoreV1DownwardAPIVolumeFile } from './IoK8sApiCoreV1DownwardAPIVolumeFile.ts';
import { HttpFile } from '../http/http.ts';

/**
* Represents downward API info for projecting into a projected volume. Note that this is identical to a downwardAPI volume source without the default mode.
*/
export class IoK8sApiCoreV1DownwardAPIProjection {
    /**
    * Items is a list of DownwardAPIVolume file
    */
    'items'?: Array<IoK8sApiCoreV1DownwardAPIVolumeFile>;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "items",
            "baseName": "items",
            "type": "Array<IoK8sApiCoreV1DownwardAPIVolumeFile>",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return IoK8sApiCoreV1DownwardAPIProjection.attributeTypeMap;
    }
    
    public constructor() {
    }
}
