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

import { HttpFile } from "../http/http.ts";

/**
* VolumeNodeResources is a set of resource limits for scheduling of volumes.
*/
export class IoK8sApiStorageV1beta1VolumeNodeResources {
  /**
    * Maximum number of unique volumes managed by the CSI driver that can be used on a node. A volume that is both attached and mounted on a node is considered to be used once, not twice. The same rule applies for a unique volume that is shared among multiple pods on the same node. If this field is nil, then the supported number of volumes on this node is unbounded.
    */
  "count"?: number;

  static readonly discriminator: string | undefined = undefined;

  static readonly attributeTypeMap: Array<
    { name: string; baseName: string; type: string; format: string }
  > = [
    {
      "name": "count",
      "baseName": "count",
      "type": "number",
      "format": "int32",
    },
  ];

  static getAttributeTypeMap() {
    return IoK8sApiStorageV1beta1VolumeNodeResources.attributeTypeMap;
  }

  public constructor() {
  }
}
