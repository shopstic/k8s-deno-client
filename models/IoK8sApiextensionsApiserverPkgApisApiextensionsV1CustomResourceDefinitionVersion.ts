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

import { IoK8sApiextensionsApiserverPkgApisApiextensionsV1CustomResourceColumnDefinition } from "./IoK8sApiextensionsApiserverPkgApisApiextensionsV1CustomResourceColumnDefinition.ts";
import { IoK8sApiextensionsApiserverPkgApisApiextensionsV1CustomResourceSubresources } from "./IoK8sApiextensionsApiserverPkgApisApiextensionsV1CustomResourceSubresources.ts";
import { IoK8sApiextensionsApiserverPkgApisApiextensionsV1CustomResourceValidation } from "./IoK8sApiextensionsApiserverPkgApisApiextensionsV1CustomResourceValidation.ts";
import { HttpFile } from "../http/http.ts";

/**
* CustomResourceDefinitionVersion describes a version for CRD.
*/
export class IoK8sApiextensionsApiserverPkgApisApiextensionsV1CustomResourceDefinitionVersion {
  /**
    * additionalPrinterColumns specifies additional columns returned in Table output. See https://kubernetes.io/docs/reference/using-api/api-concepts/#receiving-resources-as-tables for details. If no columns are specified, a single column displaying the age of the custom resource is used.
    */
  "additionalPrinterColumns"?: Array<
    IoK8sApiextensionsApiserverPkgApisApiextensionsV1CustomResourceColumnDefinition
  >;
  /**
    * deprecated indicates this version of the custom resource API is deprecated. When set to true, API requests to this version receive a warning header in the server response. Defaults to false.
    */
  "deprecated"?: boolean;
  /**
    * deprecationWarning overrides the default warning returned to API clients. May only be set when `deprecated` is true. The default warning indicates this version is deprecated and recommends use of the newest served version of equal or greater stability, if one exists.
    */
  "deprecationWarning"?: string;
  /**
    * name is the version name, e.g. “v1”, “v2beta1”, etc. The custom resources are served under this version at `/apis/<group>/<version>/...` if `served` is true.
    */
  "name": string;
  "schema"?:
    IoK8sApiextensionsApiserverPkgApisApiextensionsV1CustomResourceValidation;
  /**
    * served is a flag enabling/disabling this version from being served via REST APIs
    */
  "served": boolean;
  /**
    * storage indicates this version should be used when persisting custom resources to storage. There must be exactly one version with storage=true.
    */
  "storage": boolean;
  "subresources"?:
    IoK8sApiextensionsApiserverPkgApisApiextensionsV1CustomResourceSubresources;

  static readonly discriminator: string | undefined = undefined;

  static readonly attributeTypeMap: Array<
    { name: string; baseName: string; type: string; format: string }
  > = [
    {
      "name": "additionalPrinterColumns",
      "baseName": "additionalPrinterColumns",
      "type":
        "Array<IoK8sApiextensionsApiserverPkgApisApiextensionsV1CustomResourceColumnDefinition>",
      "format": "",
    },
    {
      "name": "deprecated",
      "baseName": "deprecated",
      "type": "boolean",
      "format": "",
    },
    {
      "name": "deprecationWarning",
      "baseName": "deprecationWarning",
      "type": "string",
      "format": "",
    },
    {
      "name": "name",
      "baseName": "name",
      "type": "string",
      "format": "",
    },
    {
      "name": "schema",
      "baseName": "schema",
      "type":
        "IoK8sApiextensionsApiserverPkgApisApiextensionsV1CustomResourceValidation",
      "format": "",
    },
    {
      "name": "served",
      "baseName": "served",
      "type": "boolean",
      "format": "",
    },
    {
      "name": "storage",
      "baseName": "storage",
      "type": "boolean",
      "format": "",
    },
    {
      "name": "subresources",
      "baseName": "subresources",
      "type":
        "IoK8sApiextensionsApiserverPkgApisApiextensionsV1CustomResourceSubresources",
      "format": "",
    },
  ];

  static getAttributeTypeMap() {
    return IoK8sApiextensionsApiserverPkgApisApiextensionsV1CustomResourceDefinitionVersion
      .attributeTypeMap;
  }

  public constructor() {
  }
}
