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

import { IoK8sApiCoreV1PodAffinityTerm } from "./IoK8sApiCoreV1PodAffinityTerm.ts";
import { HttpFile } from "../http/http.ts";

/**
* The weights of all of the matched WeightedPodAffinityTerm fields are added per-node to find the most preferred node(s)
*/
export class IoK8sApiCoreV1WeightedPodAffinityTerm {
  "podAffinityTerm": IoK8sApiCoreV1PodAffinityTerm;
  /**
    * weight associated with matching the corresponding podAffinityTerm, in the range 1-100.
    */
  "weight": number;

  static readonly discriminator: string | undefined = undefined;

  static readonly attributeTypeMap: Array<
    { name: string; baseName: string; type: string; format: string }
  > = [
    {
      "name": "podAffinityTerm",
      "baseName": "podAffinityTerm",
      "type": "IoK8sApiCoreV1PodAffinityTerm",
      "format": "",
    },
    {
      "name": "weight",
      "baseName": "weight",
      "type": "number",
      "format": "int32",
    },
  ];

  static getAttributeTypeMap() {
    return IoK8sApiCoreV1WeightedPodAffinityTerm.attributeTypeMap;
  }

  public constructor() {
  }
}