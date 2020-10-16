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

import { IoK8sApiCoreV1Event } from "./IoK8sApiCoreV1Event.ts";
import { IoK8sApimachineryPkgApisMetaV1ListMeta } from "./IoK8sApimachineryPkgApisMetaV1ListMeta.ts";
import { HttpFile } from "../http/http.ts";

/**
* EventList is a list of events.
*/
export class IoK8sApiCoreV1EventList {
  /**
    * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
    */
  "apiVersion"?: string;
  /**
    * List of events
    */
  "items": Array<IoK8sApiCoreV1Event>;
  /**
    * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
    */
  "kind"?: string;
  "metadata"?: IoK8sApimachineryPkgApisMetaV1ListMeta;

  static readonly discriminator: string | undefined = undefined;

  static readonly attributeTypeMap: Array<
    { name: string; baseName: string; type: string; format: string }
  > = [
    {
      "name": "apiVersion",
      "baseName": "apiVersion",
      "type": "string",
      "format": "",
    },
    {
      "name": "items",
      "baseName": "items",
      "type": "Array<IoK8sApiCoreV1Event>",
      "format": "",
    },
    {
      "name": "kind",
      "baseName": "kind",
      "type": "string",
      "format": "",
    },
    {
      "name": "metadata",
      "baseName": "metadata",
      "type": "IoK8sApimachineryPkgApisMetaV1ListMeta",
      "format": "",
    },
  ];

  static getAttributeTypeMap() {
    return IoK8sApiCoreV1EventList.attributeTypeMap;
  }

  public constructor() {
  }
}
