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

import { IoK8sApiAuthorizationV1beta1NonResourceAttributes } from './IoK8sApiAuthorizationV1beta1NonResourceAttributes.ts';
import { IoK8sApiAuthorizationV1beta1ResourceAttributes } from './IoK8sApiAuthorizationV1beta1ResourceAttributes.ts';
import { HttpFile } from '../http/http.ts';

/**
* SubjectAccessReviewSpec is a description of the access request.  Exactly one of ResourceAuthorizationAttributes and NonResourceAuthorizationAttributes must be set
*/
export class IoK8sApiAuthorizationV1beta1SubjectAccessReviewSpec {
    /**
    * Extra corresponds to the user.Info.GetExtra() method from the authenticator.  Since that is input to the authorizer it needs a reflection here.
    */
    'extra'?: { [key: string]: Array<string>; };
    /**
    * Groups is the groups you're testing for.
    */
    'group'?: Array<string>;
    'nonResourceAttributes'?: IoK8sApiAuthorizationV1beta1NonResourceAttributes;
    'resourceAttributes'?: IoK8sApiAuthorizationV1beta1ResourceAttributes;
    /**
    * UID information about the requesting user.
    */
    'uid'?: string;
    /**
    * User is the user you're testing for. If you specify \"User\" but not \"Group\", then is it interpreted as \"What if User were not a member of any groups
    */
    'user'?: string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "extra",
            "baseName": "extra",
            "type": "{ [key: string]: Array<string>; }",
            "format": ""
        },
        {
            "name": "group",
            "baseName": "group",
            "type": "Array<string>",
            "format": ""
        },
        {
            "name": "nonResourceAttributes",
            "baseName": "nonResourceAttributes",
            "type": "IoK8sApiAuthorizationV1beta1NonResourceAttributes",
            "format": ""
        },
        {
            "name": "resourceAttributes",
            "baseName": "resourceAttributes",
            "type": "IoK8sApiAuthorizationV1beta1ResourceAttributes",
            "format": ""
        },
        {
            "name": "uid",
            "baseName": "uid",
            "type": "string",
            "format": ""
        },
        {
            "name": "user",
            "baseName": "user",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return IoK8sApiAuthorizationV1beta1SubjectAccessReviewSpec.attributeTypeMap;
    }
    
    public constructor() {
    }
}

