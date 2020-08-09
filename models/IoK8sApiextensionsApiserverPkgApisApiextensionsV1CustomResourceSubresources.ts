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

import { IoK8sApiextensionsApiserverPkgApisApiextensionsV1CustomResourceSubresourceScale } from './IoK8sApiextensionsApiserverPkgApisApiextensionsV1CustomResourceSubresourceScale.ts';
import { HttpFile } from '../http/http.ts';

/**
* CustomResourceSubresources defines the status and scale subresources for CustomResources.
*/
export class IoK8sApiextensionsApiserverPkgApisApiextensionsV1CustomResourceSubresources {
    'scale'?: IoK8sApiextensionsApiserverPkgApisApiextensionsV1CustomResourceSubresourceScale;
    /**
    * CustomResourceSubresourceStatus defines how to serve the status subresource for CustomResources. Status is represented by the `.status` JSON path inside of a CustomResource. When set, * exposes a /status subresource for the custom resource * PUT requests to the /status subresource take a custom resource object, and ignore changes to anything except the status stanza * PUT/POST/PATCH requests to the custom resource ignore changes to the status stanza
    */
    'status'?: any;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "scale",
            "baseName": "scale",
            "type": "IoK8sApiextensionsApiserverPkgApisApiextensionsV1CustomResourceSubresourceScale",
            "format": ""
        },
        {
            "name": "status",
            "baseName": "status",
            "type": "any",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return IoK8sApiextensionsApiserverPkgApisApiextensionsV1CustomResourceSubresources.attributeTypeMap;
    }
    
    public constructor() {
    }
}

