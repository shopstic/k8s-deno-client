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
* Represents a Glusterfs mount that lasts the lifetime of a pod. Glusterfs volumes do not support ownership management or SELinux relabeling.
*/
export class IoK8sApiCoreV1GlusterfsVolumeSource {
  /**
    * EndpointsName is the endpoint name that details Glusterfs topology. More info: https://examples.k8s.io/volumes/glusterfs/README.md#create-a-pod
    */
  "endpoints": string;
  /**
    * Path is the Glusterfs volume path. More info: https://examples.k8s.io/volumes/glusterfs/README.md#create-a-pod
    */
  "path": string;
  /**
    * ReadOnly here will force the Glusterfs volume to be mounted with read-only permissions. Defaults to false. More info: https://examples.k8s.io/volumes/glusterfs/README.md#create-a-pod
    */
  "readOnly"?: boolean;

  static readonly discriminator: string | undefined = undefined;

  static readonly attributeTypeMap: Array<
    { name: string; baseName: string; type: string; format: string }
  > = [
    {
      "name": "endpoints",
      "baseName": "endpoints",
      "type": "string",
      "format": "",
    },
    {
      "name": "path",
      "baseName": "path",
      "type": "string",
      "format": "",
    },
    {
      "name": "readOnly",
      "baseName": "readOnly",
      "type": "boolean",
      "format": "",
    },
  ];

  static getAttributeTypeMap() {
    return IoK8sApiCoreV1GlusterfsVolumeSource.attributeTypeMap;
  }

  public constructor() {
  }
}
