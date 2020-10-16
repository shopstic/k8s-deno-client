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

import { IoK8sApiCoreV1ClientIPConfig } from "./IoK8sApiCoreV1ClientIPConfig.ts";
import { HttpFile } from "../http/http.ts";

/**
* SessionAffinityConfig represents the configurations of session affinity.
*/
export class IoK8sApiCoreV1SessionAffinityConfig {
  "clientIP"?: IoK8sApiCoreV1ClientIPConfig;

  static readonly discriminator: string | undefined = undefined;

  static readonly attributeTypeMap: Array<
    { name: string; baseName: string; type: string; format: string }
  > = [
    {
      "name": "clientIP",
      "baseName": "clientIP",
      "type": "IoK8sApiCoreV1ClientIPConfig",
      "format": "",
    },
  ];

  static getAttributeTypeMap() {
    return IoK8sApiCoreV1SessionAffinityConfig.attributeTypeMap;
  }

  public constructor() {
  }
}
