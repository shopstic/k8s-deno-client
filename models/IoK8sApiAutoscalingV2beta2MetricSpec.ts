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

import { IoK8sApiAutoscalingV2beta2ExternalMetricSource } from "./IoK8sApiAutoscalingV2beta2ExternalMetricSource.ts";
import { IoK8sApiAutoscalingV2beta2ObjectMetricSource } from "./IoK8sApiAutoscalingV2beta2ObjectMetricSource.ts";
import { IoK8sApiAutoscalingV2beta2PodsMetricSource } from "./IoK8sApiAutoscalingV2beta2PodsMetricSource.ts";
import { IoK8sApiAutoscalingV2beta2ResourceMetricSource } from "./IoK8sApiAutoscalingV2beta2ResourceMetricSource.ts";
import { HttpFile } from "../http/http.ts";

/**
* MetricSpec specifies how to scale based on a single metric (only `type` and one other matching field should be set at once).
*/
export class IoK8sApiAutoscalingV2beta2MetricSpec {
  "external"?: IoK8sApiAutoscalingV2beta2ExternalMetricSource;
  "object"?: IoK8sApiAutoscalingV2beta2ObjectMetricSource;
  "pods"?: IoK8sApiAutoscalingV2beta2PodsMetricSource;
  "resource"?: IoK8sApiAutoscalingV2beta2ResourceMetricSource;
  /**
    * type is the type of metric source.  It should be one of \"Object\", \"Pods\" or \"Resource\", each mapping to a matching field in the object.
    */
  "type": string;

  static readonly discriminator: string | undefined = undefined;

  static readonly attributeTypeMap: Array<
    { name: string; baseName: string; type: string; format: string }
  > = [
    {
      "name": "external",
      "baseName": "external",
      "type": "IoK8sApiAutoscalingV2beta2ExternalMetricSource",
      "format": "",
    },
    {
      "name": "object",
      "baseName": "object",
      "type": "IoK8sApiAutoscalingV2beta2ObjectMetricSource",
      "format": "",
    },
    {
      "name": "pods",
      "baseName": "pods",
      "type": "IoK8sApiAutoscalingV2beta2PodsMetricSource",
      "format": "",
    },
    {
      "name": "resource",
      "baseName": "resource",
      "type": "IoK8sApiAutoscalingV2beta2ResourceMetricSource",
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
    return IoK8sApiAutoscalingV2beta2MetricSpec.attributeTypeMap;
  }

  public constructor() {
  }
}
