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
* Maps a string key to a path within a volume.
*/
export class IoK8sApiCoreV1KeyToPath {
    /**
    * The key to project.
    */
    'key': string;
    /**
    * Optional: mode bits used to set permissions on this file. Must be an octal value between 0000 and 0777 or a decimal value between 0 and 511. YAML accepts both octal and decimal values, JSON requires decimal values for mode bits. If not specified, the volume defaultMode will be used. This might be in conflict with other options that affect the file mode, like fsGroup, and the result can be other mode bits set.
    */
    'mode'?: number;
    /**
    * The relative path of the file to map the key to. May not be an absolute path. May not contain the path element '..'. May not start with the string '..'.
    */
    'path': string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "key",
            "baseName": "key",
            "type": "string",
            "format": ""
        },
        {
            "name": "mode",
            "baseName": "mode",
            "type": "number",
            "format": "int32"
        },
        {
            "name": "path",
            "baseName": "path",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return IoK8sApiCoreV1KeyToPath.attributeTypeMap;
    }
    
    public constructor() {
    }
}

