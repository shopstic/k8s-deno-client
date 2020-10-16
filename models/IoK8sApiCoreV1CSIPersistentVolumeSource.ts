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

import { IoK8sApiCoreV1SecretReference } from "./IoK8sApiCoreV1SecretReference.ts";
import { HttpFile } from "../http/http.ts";

/**
* Represents storage that is managed by an external CSI volume driver (Beta feature)
*/
export class IoK8sApiCoreV1CSIPersistentVolumeSource {
  "controllerExpandSecretRef"?: IoK8sApiCoreV1SecretReference;
  "controllerPublishSecretRef"?: IoK8sApiCoreV1SecretReference;
  /**
    * Driver is the name of the driver to use for this volume. Required.
    */
  "driver": string;
  /**
    * Filesystem type to mount. Must be a filesystem type supported by the host operating system. Ex. \"ext4\", \"xfs\", \"ntfs\".
    */
  "fsType"?: string;
  "nodePublishSecretRef"?: IoK8sApiCoreV1SecretReference;
  "nodeStageSecretRef"?: IoK8sApiCoreV1SecretReference;
  /**
    * Optional: The value to pass to ControllerPublishVolumeRequest. Defaults to false (read/write).
    */
  "readOnly"?: boolean;
  /**
    * Attributes of the volume to publish.
    */
  "volumeAttributes"?: { [key: string]: string };
  /**
    * VolumeHandle is the unique volume name returned by the CSI volume plugin’s CreateVolume to refer to the volume on all subsequent calls. Required.
    */
  "volumeHandle": string;

  static readonly discriminator: string | undefined = undefined;

  static readonly attributeTypeMap: Array<
    { name: string; baseName: string; type: string; format: string }
  > = [
    {
      "name": "controllerExpandSecretRef",
      "baseName": "controllerExpandSecretRef",
      "type": "IoK8sApiCoreV1SecretReference",
      "format": "",
    },
    {
      "name": "controllerPublishSecretRef",
      "baseName": "controllerPublishSecretRef",
      "type": "IoK8sApiCoreV1SecretReference",
      "format": "",
    },
    {
      "name": "driver",
      "baseName": "driver",
      "type": "string",
      "format": "",
    },
    {
      "name": "fsType",
      "baseName": "fsType",
      "type": "string",
      "format": "",
    },
    {
      "name": "nodePublishSecretRef",
      "baseName": "nodePublishSecretRef",
      "type": "IoK8sApiCoreV1SecretReference",
      "format": "",
    },
    {
      "name": "nodeStageSecretRef",
      "baseName": "nodeStageSecretRef",
      "type": "IoK8sApiCoreV1SecretReference",
      "format": "",
    },
    {
      "name": "readOnly",
      "baseName": "readOnly",
      "type": "boolean",
      "format": "",
    },
    {
      "name": "volumeAttributes",
      "baseName": "volumeAttributes",
      "type": "{ [key: string]: string; }",
      "format": "",
    },
    {
      "name": "volumeHandle",
      "baseName": "volumeHandle",
      "type": "string",
      "format": "",
    },
  ];

  static getAttributeTypeMap() {
    return IoK8sApiCoreV1CSIPersistentVolumeSource.attributeTypeMap;
  }

  public constructor() {
  }
}
