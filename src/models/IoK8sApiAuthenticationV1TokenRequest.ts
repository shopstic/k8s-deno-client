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

import { IoK8sApiAuthenticationV1TokenRequestSpec } from "./IoK8sApiAuthenticationV1TokenRequestSpec.ts";
import { IoK8sApiAuthenticationV1TokenRequestStatus } from "./IoK8sApiAuthenticationV1TokenRequestStatus.ts";
import { IoK8sApimachineryPkgApisMetaV1ObjectMeta } from "./IoK8sApimachineryPkgApisMetaV1ObjectMeta.ts";
import { HttpFile } from "../http/http.ts";

/**
* TokenRequest requests a token for a given service account.
*/
export class IoK8sApiAuthenticationV1TokenRequest {
  /**
    * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
    */
  "apiVersion"?: string;
  /**
    * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
    */
  "kind"?: string;
  "metadata"?: IoK8sApimachineryPkgApisMetaV1ObjectMeta;
  "spec": IoK8sApiAuthenticationV1TokenRequestSpec;
  "status"?: IoK8sApiAuthenticationV1TokenRequestStatus;

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
      "type": "IoK8sApiAuthenticationV1TokenRequestSpec",
      "format": "",
    },
    {
      "name": "status",
      "baseName": "status",
      "type": "IoK8sApiAuthenticationV1TokenRequestStatus",
      "format": "",
    },
  ];

  static getAttributeTypeMap() {
    return IoK8sApiAuthenticationV1TokenRequest.attributeTypeMap;
  }

  public constructor() {
  }
}