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

import { IoK8sApiStorageV1beta1CSIDriverSpec } from "./IoK8sApiStorageV1beta1CSIDriverSpec.ts";
import { IoK8sApimachineryPkgApisMetaV1ObjectMeta } from "./IoK8sApimachineryPkgApisMetaV1ObjectMeta.ts";
import { HttpFile } from "../http/http.ts";

/**
* CSIDriver captures information about a Container Storage Interface (CSI) volume driver deployed on the cluster. CSI drivers do not need to create the CSIDriver object directly. Instead they may use the cluster-driver-registrar sidecar container. When deployed with a CSI driver it automatically creates a CSIDriver object representing the driver. Kubernetes attach detach controller uses this object to determine whether attach is required. Kubelet uses this object to determine whether pod information needs to be passed on mount. CSIDriver objects are non-namespaced.
*/
export class IoK8sApiStorageV1beta1CSIDriver {
  /**
    * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
    */
  "apiVersion"?: string;
  /**
    * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
    */
  "kind"?: string;
  "metadata"?: IoK8sApimachineryPkgApisMetaV1ObjectMeta;
  "spec": IoK8sApiStorageV1beta1CSIDriverSpec;

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
      "name": "kind",
      "baseName": "kind",
      "type": "string",
      "format": "",
    },
    {
      "name": "metadata",
      "baseName": "metadata",
      "type": "IoK8sApimachineryPkgApisMetaV1ObjectMeta",
      "format": "",
    },
    {
      "name": "spec",
      "baseName": "spec",
      "type": "IoK8sApiStorageV1beta1CSIDriverSpec",
      "format": "",
    },
  ];

  static getAttributeTypeMap() {
    return IoK8sApiStorageV1beta1CSIDriver.attributeTypeMap;
  }

  public constructor() {
  }
}
