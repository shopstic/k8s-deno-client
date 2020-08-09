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

import { IoK8sApiNetworkingV1beta1HTTPIngressRuleValue } from './IoK8sApiNetworkingV1beta1HTTPIngressRuleValue.ts';
import { HttpFile } from '../http/http.ts';

/**
* IngressRule represents the rules mapping the paths under a specified host to the related backend services. Incoming requests are first evaluated for a host match, then routed to the backend associated with the matching IngressRuleValue.
*/
export class IoK8sApiNetworkingV1beta1IngressRule {
    /**
    * Host is the fully qualified domain name of a network host, as defined by RFC 3986. Note the following deviations from the \"host\" part of the URI as defined in RFC 3986: 1. IPs are not allowed. Currently an IngressRuleValue can only apply to    the IP in the Spec of the parent Ingress. 2. The `:` delimiter is not respected because ports are not allowed.    Currently the port of an Ingress is implicitly :80 for http and    :443 for https. Both these may change in the future. Incoming requests are matched against the host before the IngressRuleValue. If the host is unspecified, the Ingress routes all traffic based on the specified IngressRuleValue.  Host can be \"precise\" which is a domain name without the terminating dot of a network host (e.g. \"foo.bar.com\") or \"wildcard\", which is a domain name prefixed with a single wildcard label (e.g. \"*.foo.com\"). The wildcard character '*' must appear by itself as the first DNS label and matches only a single label. You cannot have a wildcard label by itself (e.g. Host == \"*\"). Requests will be matched against the Host field in the following way: 1. If Host is precise, the request matches this rule if the http host header is equal to Host. 2. If Host is a wildcard, then the request matches this rule if the http host header is to equal to the suffix (removing the first label) of the wildcard rule.
    */
    'host'?: string;
    'http'?: IoK8sApiNetworkingV1beta1HTTPIngressRuleValue;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "host",
            "baseName": "host",
            "type": "string",
            "format": ""
        },
        {
            "name": "http",
            "baseName": "http",
            "type": "IoK8sApiNetworkingV1beta1HTTPIngressRuleValue",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return IoK8sApiNetworkingV1beta1IngressRule.attributeTypeMap;
    }
    
    public constructor() {
    }
}

