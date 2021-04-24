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

import { IoK8sApiStorageV1CSINodeDriver } from "./IoK8sApiStorageV1CSINodeDriver.ts";
import { HttpFile } from "../http/http.ts";

/**
* CSINodeSpec holds information about the specification of all CSI drivers installed on a node
*/
export class IoK8sApiStorageV1CSINodeSpec {
  /**
    * drivers is a list of information of all CSI Drivers existing on a node. If all drivers in the list are uninstalled, this can become empty.
    */
  "drivers": Array<IoK8sApiStorageV1CSINodeDriver>;

  static readonly discriminator: string | undefined = undefined;

  static readonly attributeTypeMap: Array<
    { name: string; baseName: string; type: string; format: string }
  > = [
    {
      "name": "drivers",
      "baseName": "drivers",
      "type": "Array<IoK8sApiStorageV1CSINodeDriver>",
      "format": "",
    },
  ];

  static getAttributeTypeMap() {
    return IoK8sApiStorageV1CSINodeSpec.attributeTypeMap;
  }

  public constructor() {
  }
}