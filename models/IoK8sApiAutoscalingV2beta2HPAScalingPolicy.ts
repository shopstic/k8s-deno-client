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
* HPAScalingPolicy is a single policy which must hold true for a specified past interval.
*/
export class IoK8sApiAutoscalingV2beta2HPAScalingPolicy {
  /**
    * PeriodSeconds specifies the window of time for which the policy should hold true. PeriodSeconds must be greater than zero and less than or equal to 1800 (30 min).
    */
  "periodSeconds": number;
  /**
    * Type is used to specify the scaling policy.
    */
  "type": string;
  /**
    * Value contains the amount of change which is permitted by the policy. It must be greater than zero
    */
  "value": number;

  static readonly discriminator: string | undefined = undefined;

  static readonly attributeTypeMap: Array<
    { name: string; baseName: string; type: string; format: string }
  > = [
    {
      "name": "periodSeconds",
      "baseName": "periodSeconds",
      "type": "number",
      "format": "int32",
    },
    {
      "name": "type",
      "baseName": "type",
      "type": "string",
      "format": "",
    },
    {
      "name": "value",
      "baseName": "value",
      "type": "number",
      "format": "int32",
    },
  ];

  static getAttributeTypeMap() {
    return IoK8sApiAutoscalingV2beta2HPAScalingPolicy.attributeTypeMap;
  }

  public constructor() {
  }
}
