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

import { IoK8sApiNetworkingV1IPBlock } from "./IoK8sApiNetworkingV1IPBlock.ts";
import { IoK8sApimachineryPkgApisMetaV1LabelSelector } from "./IoK8sApimachineryPkgApisMetaV1LabelSelector.ts";
import { HttpFile } from "../http/http.ts";

/**
* NetworkPolicyPeer describes a peer to allow traffic to/from. Only certain combinations of fields are allowed
*/
export class IoK8sApiNetworkingV1NetworkPolicyPeer {
  "ipBlock"?: IoK8sApiNetworkingV1IPBlock;
  "namespaceSelector"?: IoK8sApimachineryPkgApisMetaV1LabelSelector;
  "podSelector"?: IoK8sApimachineryPkgApisMetaV1LabelSelector;

  static readonly discriminator: string | undefined = undefined;

  static readonly attributeTypeMap: Array<
    { name: string; baseName: string; type: string; format: string }
  > = [
    {
      "name": "ipBlock",
      "baseName": "ipBlock",
      "type": "IoK8sApiNetworkingV1IPBlock",
      "format": "",
    },
    {
      "name": "namespaceSelector",
      "baseName": "namespaceSelector",
      "type": "IoK8sApimachineryPkgApisMetaV1LabelSelector",
      "format": "",
    },
    {
      "name": "podSelector",
      "baseName": "podSelector",
      "type": "IoK8sApimachineryPkgApisMetaV1LabelSelector",
      "format": "",
    },
  ];

  static getAttributeTypeMap() {
    return IoK8sApiNetworkingV1NetworkPolicyPeer.attributeTypeMap;
  }

  public constructor() {
  }
}
