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
* NodeCondition contains condition information for a node.
*/
export class IoK8sApiCoreV1NodeCondition {
  /**
    * Time is a wrapper around time.Time which supports correct marshaling to YAML and JSON.  Wrappers are provided for many of the factory methods that the time package offers.
    */
  "lastHeartbeatTime"?: Date;
  /**
    * Time is a wrapper around time.Time which supports correct marshaling to YAML and JSON.  Wrappers are provided for many of the factory methods that the time package offers.
    */
  "lastTransitionTime"?: Date;
  /**
    * Human readable message indicating details about last transition.
    */
  "message"?: string;
  /**
    * (brief) reason for the condition's last transition.
    */
  "reason"?: string;
  /**
    * Status of the condition, one of True, False, Unknown.
    */
  "status": string;
  /**
    * Type of node condition.
    */
  "type": string;

  static readonly discriminator: string | undefined = undefined;

  static readonly attributeTypeMap: Array<
    { name: string; baseName: string; type: string; format: string }
  > = [
    {
      "name": "lastHeartbeatTime",
      "baseName": "lastHeartbeatTime",
      "type": "Date",
      "format": "date-time",
    },
    {
      "name": "lastTransitionTime",
      "baseName": "lastTransitionTime",
      "type": "Date",
      "format": "date-time",
    },
    {
      "name": "message",
      "baseName": "message",
      "type": "string",
      "format": "",
    },
    {
      "name": "reason",
      "baseName": "reason",
      "type": "string",
      "format": "",
    },
    {
      "name": "status",
      "baseName": "status",
      "type": "string",
      "format": "",
    },
    {
      "name": "type",
      "baseName": "type",
      "type": "string",
      "format": "",
    },
  ];

  static getAttributeTypeMap() {
    return IoK8sApiCoreV1NodeCondition.attributeTypeMap;
  }

  public constructor() {
  }
}