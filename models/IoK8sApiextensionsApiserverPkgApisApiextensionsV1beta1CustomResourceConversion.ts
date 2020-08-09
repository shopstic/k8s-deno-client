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

import { IoK8sApiextensionsApiserverPkgApisApiextensionsV1beta1WebhookClientConfig } from './IoK8sApiextensionsApiserverPkgApisApiextensionsV1beta1WebhookClientConfig.ts';
import { HttpFile } from '../http/http.ts';

/**
* CustomResourceConversion describes how to convert different versions of a CR.
*/
export class IoK8sApiextensionsApiserverPkgApisApiextensionsV1beta1CustomResourceConversion {
    /**
    * conversionReviewVersions is an ordered list of preferred `ConversionReview` versions the Webhook expects. The API server will use the first version in the list which it supports. If none of the versions specified in this list are supported by API server, conversion will fail for the custom resource. If a persisted Webhook configuration specifies allowed versions and does not include any versions known to the API Server, calls to the webhook will fail. Defaults to `[\"v1beta1\"]`.
    */
    'conversionReviewVersions'?: Array<string>;
    /**
    * strategy specifies how custom resources are converted between versions. Allowed values are: - `None`: The converter only change the apiVersion and would not touch any other field in the custom resource. - `Webhook`: API Server will call to an external webhook to do the conversion. Additional information   is needed for this option. This requires spec.preserveUnknownFields to be false, and spec.conversion.webhookClientConfig to be set.
    */
    'strategy': string;
    'webhookClientConfig'?: IoK8sApiextensionsApiserverPkgApisApiextensionsV1beta1WebhookClientConfig;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "conversionReviewVersions",
            "baseName": "conversionReviewVersions",
            "type": "Array<string>",
            "format": ""
        },
        {
            "name": "strategy",
            "baseName": "strategy",
            "type": "string",
            "format": ""
        },
        {
            "name": "webhookClientConfig",
            "baseName": "webhookClientConfig",
            "type": "IoK8sApiextensionsApiserverPkgApisApiextensionsV1beta1WebhookClientConfig",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return IoK8sApiextensionsApiserverPkgApisApiextensionsV1beta1CustomResourceConversion.attributeTypeMap;
    }
    
    public constructor() {
    }
}

