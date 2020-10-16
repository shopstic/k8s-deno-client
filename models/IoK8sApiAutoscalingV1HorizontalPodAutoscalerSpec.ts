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

import { IoK8sApiAutoscalingV1CrossVersionObjectReference } from "./IoK8sApiAutoscalingV1CrossVersionObjectReference.ts";
import { HttpFile } from "../http/http.ts";

/**
* specification of a horizontal pod autoscaler.
*/
export class IoK8sApiAutoscalingV1HorizontalPodAutoscalerSpec {
  /**
    * upper limit for the number of pods that can be set by the autoscaler; cannot be smaller than MinReplicas.
    */
  "maxReplicas": number;
  /**
    * minReplicas is the lower limit for the number of replicas to which the autoscaler can scale down.  It defaults to 1 pod.  minReplicas is allowed to be 0 if the alpha feature gate HPAScaleToZero is enabled and at least one Object or External metric is configured.  Scaling is active as long as at least one metric value is available.
    */
  "minReplicas"?: number;
  "scaleTargetRef": IoK8sApiAutoscalingV1CrossVersionObjectReference;
  /**
    * target average CPU utilization (represented as a percentage of requested CPU) over all the pods; if not specified the default autoscaling policy will be used.
    */
  "targetCPUUtilizationPercentage"?: number;

  static readonly discriminator: string | undefined = undefined;

  static readonly attributeTypeMap: Array<
    { name: string; baseName: string; type: string; format: string }
  > = [
    {
      "name": "maxReplicas",
      "baseName": "maxReplicas",
      "type": "number",
      "format": "int32",
    },
    {
      "name": "minReplicas",
      "baseName": "minReplicas",
      "type": "number",
      "format": "int32",
    },
    {
      "name": "scaleTargetRef",
      "baseName": "scaleTargetRef",
      "type": "IoK8sApiAutoscalingV1CrossVersionObjectReference",
      "format": "",
    },
    {
      "name": "targetCPUUtilizationPercentage",
      "baseName": "targetCPUUtilizationPercentage",
      "type": "number",
      "format": "int32",
    },
  ];

  static getAttributeTypeMap() {
    return IoK8sApiAutoscalingV1HorizontalPodAutoscalerSpec.attributeTypeMap;
  }

  public constructor() {
  }
}
