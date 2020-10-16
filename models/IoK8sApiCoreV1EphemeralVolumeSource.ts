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

import { IoK8sApiCoreV1PersistentVolumeClaimTemplate } from "./IoK8sApiCoreV1PersistentVolumeClaimTemplate.ts";
import { HttpFile } from "../http/http.ts";

/**
* Represents an ephemeral volume that is handled by a normal storage driver.
*/
export class IoK8sApiCoreV1EphemeralVolumeSource {
  /**
    * Specifies a read-only configuration for the volume. Defaults to false (read/write).
    */
  "readOnly"?: boolean;
  "volumeClaimTemplate"?: IoK8sApiCoreV1PersistentVolumeClaimTemplate;

  static readonly discriminator: string | undefined = undefined;

  static readonly attributeTypeMap: Array<
    { name: string; baseName: string; type: string; format: string }
  > = [
    {
      "name": "readOnly",
      "baseName": "readOnly",
      "type": "boolean",
      "format": "",
    },
    {
      "name": "volumeClaimTemplate",
      "baseName": "volumeClaimTemplate",
      "type": "IoK8sApiCoreV1PersistentVolumeClaimTemplate",
      "format": "",
    },
  ];

  static getAttributeTypeMap() {
    return IoK8sApiCoreV1EphemeralVolumeSource.attributeTypeMap;
  }

  public constructor() {
  }
}
