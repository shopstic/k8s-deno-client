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

import { IoK8sApiextensionsApiserverPkgApisApiextensionsV1JSONSchemaProps } from './IoK8sApiextensionsApiserverPkgApisApiextensionsV1JSONSchemaProps.ts';
import { HttpFile } from '../http/http.ts';

/**
* CustomResourceValidation is a list of validation methods for CustomResources.
*/
export class IoK8sApiextensionsApiserverPkgApisApiextensionsV1CustomResourceValidation {
    'openAPIV3Schema'?: IoK8sApiextensionsApiserverPkgApisApiextensionsV1JSONSchemaProps;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "openAPIV3Schema",
            "baseName": "openAPIV3Schema",
            "type": "IoK8sApiextensionsApiserverPkgApisApiextensionsV1JSONSchemaProps",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return IoK8sApiextensionsApiserverPkgApisApiextensionsV1CustomResourceValidation.attributeTypeMap;
    }
    
    public constructor() {
    }
}

