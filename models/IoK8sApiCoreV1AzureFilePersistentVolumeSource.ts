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
* AzureFile represents an Azure File Service mount on the host and bind mount to the pod.
*/
export class IoK8sApiCoreV1AzureFilePersistentVolumeSource {
  /**
    * Defaults to false (read/write). ReadOnly here will force the ReadOnly setting in VolumeMounts.
    */
  "readOnly"?: boolean;
  /**
    * the name of secret that contains Azure Storage Account Name and Key
    */
  "secretName": string;
  /**
    * the namespace of the secret that contains Azure Storage Account Name and Key default is the same as the Pod
    */
  "secretNamespace"?: string;
  /**
    * Share Name
    */
  "shareName": string;

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
      "name": "secretName",
      "baseName": "secretName",
      "type": "string",
      "format": "",
    },
    {
      "name": "secretNamespace",
      "baseName": "secretNamespace",
      "type": "string",
      "format": "",
    },
    {
      "name": "shareName",
      "baseName": "shareName",
      "type": "string",
      "format": "",
    },
  ];

  static getAttributeTypeMap() {
    return IoK8sApiCoreV1AzureFilePersistentVolumeSource.attributeTypeMap;
  }

  public constructor() {
  }
}
