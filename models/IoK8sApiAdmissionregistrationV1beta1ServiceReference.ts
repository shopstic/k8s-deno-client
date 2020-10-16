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
* ServiceReference holds a reference to Service.legacy.k8s.io
*/
export class IoK8sApiAdmissionregistrationV1beta1ServiceReference {
  /**
    * `name` is the name of the service. Required
    */
  "name": string;
  /**
    * `namespace` is the namespace of the service. Required
    */
  "namespace": string;
  /**
    * `path` is an optional URL path which will be sent in any request to this service.
    */
  "path"?: string;
  /**
    * If specified, the port on the service that hosting webhook. Default to 443 for backward compatibility. `port` should be a valid port number (1-65535, inclusive).
    */
  "port"?: number;

  static readonly discriminator: string | undefined = undefined;

  static readonly attributeTypeMap: Array<
    { name: string; baseName: string; type: string; format: string }
  > = [
    {
      "name": "name",
      "baseName": "name",
      "type": "string",
      "format": "",
    },
    {
      "name": "namespace",
      "baseName": "namespace",
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
      "name": "port",
      "baseName": "port",
      "type": "number",
      "format": "int32",
    },
  ];

  static getAttributeTypeMap() {
    return IoK8sApiAdmissionregistrationV1beta1ServiceReference
      .attributeTypeMap;
  }

  public constructor() {
  }
}
