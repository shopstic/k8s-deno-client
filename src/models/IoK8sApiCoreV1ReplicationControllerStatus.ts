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

import { IoK8sApiCoreV1ReplicationControllerCondition } from "./IoK8sApiCoreV1ReplicationControllerCondition.ts";
import { HttpFile } from "../http/http.ts";

/**
* ReplicationControllerStatus represents the current status of a replication controller.
*/
export class IoK8sApiCoreV1ReplicationControllerStatus {
  /**
    * The number of available replicas (ready for at least minReadySeconds) for this replication controller.
    */
  "availableReplicas"?: number;
  /**
    * Represents the latest available observations of a replication controller's current state.
    */
  "conditions"?: Array<IoK8sApiCoreV1ReplicationControllerCondition>;
  /**
    * The number of pods that have labels matching the labels of the pod template of the replication controller.
    */
  "fullyLabeledReplicas"?: number;
  /**
    * ObservedGeneration reflects the generation of the most recently observed replication controller.
    */
  "observedGeneration"?: number;
  /**
    * The number of ready replicas for this replication controller.
    */
  "readyReplicas"?: number;
  /**
    * Replicas is the most recently oberved number of replicas. More info: https://kubernetes.io/docs/concepts/workloads/controllers/replicationcontroller#what-is-a-replicationcontroller
    */
  "replicas": number;

  static readonly discriminator: string | undefined = undefined;

  static readonly attributeTypeMap: Array<
    { name: string; baseName: string; type: string; format: string }
  > = [
    {
      "name": "availableReplicas",
      "baseName": "availableReplicas",
      "type": "number",
      "format": "int32",
    },
    {
      "name": "conditions",
      "baseName": "conditions",
      "type": "Array<IoK8sApiCoreV1ReplicationControllerCondition>",
      "format": "",
    },
    {
      "name": "fullyLabeledReplicas",
      "baseName": "fullyLabeledReplicas",
      "type": "number",
      "format": "int32",
    },
    {
      "name": "observedGeneration",
      "baseName": "observedGeneration",
      "type": "number",
      "format": "int64",
    },
    {
      "name": "readyReplicas",
      "baseName": "readyReplicas",
      "type": "number",
      "format": "int32",
    },
    {
      "name": "replicas",
      "baseName": "replicas",
      "type": "number",
      "format": "int32",
    },
  ];

  static getAttributeTypeMap() {
    return IoK8sApiCoreV1ReplicationControllerStatus.attributeTypeMap;
  }

  public constructor() {
  }
}