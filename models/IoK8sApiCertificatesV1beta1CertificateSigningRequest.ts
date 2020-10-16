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

import { IoK8sApiCertificatesV1beta1CertificateSigningRequestSpec } from "./IoK8sApiCertificatesV1beta1CertificateSigningRequestSpec.ts";
import { IoK8sApiCertificatesV1beta1CertificateSigningRequestStatus } from "./IoK8sApiCertificatesV1beta1CertificateSigningRequestStatus.ts";
import { IoK8sApimachineryPkgApisMetaV1ObjectMeta } from "./IoK8sApimachineryPkgApisMetaV1ObjectMeta.ts";
import { HttpFile } from "../http/http.ts";

/**
* Describes a certificate signing request
*/
export class IoK8sApiCertificatesV1beta1CertificateSigningRequest {
  /**
    * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
    */
  "apiVersion"?: string;
  /**
    * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
    */
  "kind"?: string;
  "metadata"?: IoK8sApimachineryPkgApisMetaV1ObjectMeta;
  "spec"?: IoK8sApiCertificatesV1beta1CertificateSigningRequestSpec;
  "status"?: IoK8sApiCertificatesV1beta1CertificateSigningRequestStatus;

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
      "type": "IoK8sApiCertificatesV1beta1CertificateSigningRequestSpec",
      "format": "",
    },
    {
      "name": "status",
      "baseName": "status",
      "type": "IoK8sApiCertificatesV1beta1CertificateSigningRequestStatus",
      "format": "",
    },
  ];

  static getAttributeTypeMap() {
    return IoK8sApiCertificatesV1beta1CertificateSigningRequest
      .attributeTypeMap;
  }

  public constructor() {
  }
}
