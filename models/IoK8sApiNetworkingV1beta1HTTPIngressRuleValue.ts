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

import { IoK8sApiNetworkingV1beta1HTTPIngressPath } from "./IoK8sApiNetworkingV1beta1HTTPIngressPath.ts";
import { HttpFile } from "../http/http.ts";

/**
* HTTPIngressRuleValue is a list of http selectors pointing to backends. In the example: http://<host>/<path>?<searchpart> -> backend where where parts of the url correspond to RFC 3986, this resource will be used to match against everything after the last '/' and before the first '?' or '#'.
*/
export class IoK8sApiNetworkingV1beta1HTTPIngressRuleValue {
  /**
    * A collection of paths that map requests to backends.
    */
  "paths": Array<IoK8sApiNetworkingV1beta1HTTPIngressPath>;

  static readonly discriminator: string | undefined = undefined;

  static readonly attributeTypeMap: Array<
    { name: string; baseName: string; type: string; format: string }
  > = [
    {
      "name": "paths",
      "baseName": "paths",
      "type": "Array<IoK8sApiNetworkingV1beta1HTTPIngressPath>",
      "format": "",
    },
  ];

  static getAttributeTypeMap() {
    return IoK8sApiNetworkingV1beta1HTTPIngressRuleValue.attributeTypeMap;
  }

  public constructor() {
  }
}
