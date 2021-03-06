// TODO: better import syntax?
import { BaseAPIRequestFactory, RequiredError } from "./baseapi.ts";
import { Configuration } from "../configuration.ts";
import {
  HttpFile,
  HttpMethod,
  RequestContext,
  ResponseContext,
} from "../http/http.ts";
import { ObjectSerializer } from "../models/ObjectSerializer.ts";
import { ApiException } from "./exception.ts";
import { isCodeInRange } from "../util.ts";

import { IoK8sApiAuthorizationV1beta1LocalSubjectAccessReview } from "../models/IoK8sApiAuthorizationV1beta1LocalSubjectAccessReview.ts";
import { IoK8sApiAuthorizationV1beta1SelfSubjectAccessReview } from "../models/IoK8sApiAuthorizationV1beta1SelfSubjectAccessReview.ts";
import { IoK8sApiAuthorizationV1beta1SelfSubjectRulesReview } from "../models/IoK8sApiAuthorizationV1beta1SelfSubjectRulesReview.ts";
import { IoK8sApiAuthorizationV1beta1SubjectAccessReview } from "../models/IoK8sApiAuthorizationV1beta1SubjectAccessReview.ts";
import { IoK8sApimachineryPkgApisMetaV1APIResourceList } from "../models/IoK8sApimachineryPkgApisMetaV1APIResourceList.ts";

/**
 * no description
 */
export class AuthorizationV1beta1ApiRequestFactory
  extends BaseAPIRequestFactory {
  /**
     * create a LocalSubjectAccessReview
     * @param namespace object name and auth scope, such as for teams and projects
     * @param body 
     * @param dryRun When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed
     * @param fieldManager fieldManager is a name associated with the actor or entity that is making these changes. The value must be less than or 128 characters long, and only contain printable characters, as defined by https://golang.org/pkg/unicode/#IsPrint.
     * @param pretty If &#39;true&#39;, then the output is pretty printed.
     */
  public async createAuthorizationV1beta1NamespacedLocalSubjectAccessReview(
    namespace: string,
    body: IoK8sApiAuthorizationV1beta1LocalSubjectAccessReview,
    dryRun?: string,
    fieldManager?: string,
    pretty?: string,
    options?: Configuration,
  ): Promise<RequestContext> {
    let config = options || this.configuration;

    // verify required parameter 'namespace' is not null or undefined
    if (namespace === null || namespace === undefined) {
      throw new RequiredError(
        "Required parameter namespace was null or undefined when calling createAuthorizationV1beta1NamespacedLocalSubjectAccessReview.",
      );
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError(
        "Required parameter body was null or undefined when calling createAuthorizationV1beta1NamespacedLocalSubjectAccessReview.",
      );
    }

    // Path Params
    const localVarPath =
      "/apis/authorization.k8s.io/v1beta1/namespaces/{namespace}/localsubjectaccessreviews"
        .replace(
          "{" + "namespace" + "}",
          encodeURIComponent(String(namespace)),
        );

    // Make Request Context
    const requestContext = config.baseServer.makeRequestContext(
      localVarPath,
      HttpMethod.POST,
    );
    requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8");

    // Query Params
    if (dryRun !== undefined) {
      requestContext.setQueryParam(
        "dryRun",
        ObjectSerializer.serialize(dryRun, "string", ""),
      );
    }
    if (fieldManager !== undefined) {
      requestContext.setQueryParam(
        "fieldManager",
        ObjectSerializer.serialize(fieldManager, "string", ""),
      );
    }
    if (pretty !== undefined) {
      requestContext.setQueryParam(
        "pretty",
        ObjectSerializer.serialize(pretty, "string", ""),
      );
    }

    // Header Params

    // Form Params

    // Body Params
    const contentType = ObjectSerializer.getPreferredMediaType([]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = ObjectSerializer.stringify(
      ObjectSerializer.serialize(
        body,
        "IoK8sApiAuthorizationV1beta1LocalSubjectAccessReview",
        "",
      ),
      contentType,
    );
    requestContext.setBody(serializedBody);

    let authMethod = null;
    // Apply auth methods
    authMethod = config.authMethods["BearerToken"];
    if (authMethod) {
      await authMethod.applySecurityAuthentication(requestContext);
    }

    return requestContext;
  }

  /**
     * create a SelfSubjectAccessReview
     * @param body 
     * @param dryRun When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed
     * @param fieldManager fieldManager is a name associated with the actor or entity that is making these changes. The value must be less than or 128 characters long, and only contain printable characters, as defined by https://golang.org/pkg/unicode/#IsPrint.
     * @param pretty If &#39;true&#39;, then the output is pretty printed.
     */
  public async createAuthorizationV1beta1SelfSubjectAccessReview(
    body: IoK8sApiAuthorizationV1beta1SelfSubjectAccessReview,
    dryRun?: string,
    fieldManager?: string,
    pretty?: string,
    options?: Configuration,
  ): Promise<RequestContext> {
    let config = options || this.configuration;

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError(
        "Required parameter body was null or undefined when calling createAuthorizationV1beta1SelfSubjectAccessReview.",
      );
    }

    // Path Params
    const localVarPath =
      "/apis/authorization.k8s.io/v1beta1/selfsubjectaccessreviews";

    // Make Request Context
    const requestContext = config.baseServer.makeRequestContext(
      localVarPath,
      HttpMethod.POST,
    );
    requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8");

    // Query Params
    if (dryRun !== undefined) {
      requestContext.setQueryParam(
        "dryRun",
        ObjectSerializer.serialize(dryRun, "string", ""),
      );
    }
    if (fieldManager !== undefined) {
      requestContext.setQueryParam(
        "fieldManager",
        ObjectSerializer.serialize(fieldManager, "string", ""),
      );
    }
    if (pretty !== undefined) {
      requestContext.setQueryParam(
        "pretty",
        ObjectSerializer.serialize(pretty, "string", ""),
      );
    }

    // Header Params

    // Form Params

    // Body Params
    const contentType = ObjectSerializer.getPreferredMediaType([]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = ObjectSerializer.stringify(
      ObjectSerializer.serialize(
        body,
        "IoK8sApiAuthorizationV1beta1SelfSubjectAccessReview",
        "",
      ),
      contentType,
    );
    requestContext.setBody(serializedBody);

    let authMethod = null;
    // Apply auth methods
    authMethod = config.authMethods["BearerToken"];
    if (authMethod) {
      await authMethod.applySecurityAuthentication(requestContext);
    }

    return requestContext;
  }

  /**
     * create a SelfSubjectRulesReview
     * @param body 
     * @param dryRun When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed
     * @param fieldManager fieldManager is a name associated with the actor or entity that is making these changes. The value must be less than or 128 characters long, and only contain printable characters, as defined by https://golang.org/pkg/unicode/#IsPrint.
     * @param pretty If &#39;true&#39;, then the output is pretty printed.
     */
  public async createAuthorizationV1beta1SelfSubjectRulesReview(
    body: IoK8sApiAuthorizationV1beta1SelfSubjectRulesReview,
    dryRun?: string,
    fieldManager?: string,
    pretty?: string,
    options?: Configuration,
  ): Promise<RequestContext> {
    let config = options || this.configuration;

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError(
        "Required parameter body was null or undefined when calling createAuthorizationV1beta1SelfSubjectRulesReview.",
      );
    }

    // Path Params
    const localVarPath =
      "/apis/authorization.k8s.io/v1beta1/selfsubjectrulesreviews";

    // Make Request Context
    const requestContext = config.baseServer.makeRequestContext(
      localVarPath,
      HttpMethod.POST,
    );
    requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8");

    // Query Params
    if (dryRun !== undefined) {
      requestContext.setQueryParam(
        "dryRun",
        ObjectSerializer.serialize(dryRun, "string", ""),
      );
    }
    if (fieldManager !== undefined) {
      requestContext.setQueryParam(
        "fieldManager",
        ObjectSerializer.serialize(fieldManager, "string", ""),
      );
    }
    if (pretty !== undefined) {
      requestContext.setQueryParam(
        "pretty",
        ObjectSerializer.serialize(pretty, "string", ""),
      );
    }

    // Header Params

    // Form Params

    // Body Params
    const contentType = ObjectSerializer.getPreferredMediaType([]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = ObjectSerializer.stringify(
      ObjectSerializer.serialize(
        body,
        "IoK8sApiAuthorizationV1beta1SelfSubjectRulesReview",
        "",
      ),
      contentType,
    );
    requestContext.setBody(serializedBody);

    let authMethod = null;
    // Apply auth methods
    authMethod = config.authMethods["BearerToken"];
    if (authMethod) {
      await authMethod.applySecurityAuthentication(requestContext);
    }

    return requestContext;
  }

  /**
     * create a SubjectAccessReview
     * @param body 
     * @param dryRun When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed
     * @param fieldManager fieldManager is a name associated with the actor or entity that is making these changes. The value must be less than or 128 characters long, and only contain printable characters, as defined by https://golang.org/pkg/unicode/#IsPrint.
     * @param pretty If &#39;true&#39;, then the output is pretty printed.
     */
  public async createAuthorizationV1beta1SubjectAccessReview(
    body: IoK8sApiAuthorizationV1beta1SubjectAccessReview,
    dryRun?: string,
    fieldManager?: string,
    pretty?: string,
    options?: Configuration,
  ): Promise<RequestContext> {
    let config = options || this.configuration;

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError(
        "Required parameter body was null or undefined when calling createAuthorizationV1beta1SubjectAccessReview.",
      );
    }

    // Path Params
    const localVarPath =
      "/apis/authorization.k8s.io/v1beta1/subjectaccessreviews";

    // Make Request Context
    const requestContext = config.baseServer.makeRequestContext(
      localVarPath,
      HttpMethod.POST,
    );
    requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8");

    // Query Params
    if (dryRun !== undefined) {
      requestContext.setQueryParam(
        "dryRun",
        ObjectSerializer.serialize(dryRun, "string", ""),
      );
    }
    if (fieldManager !== undefined) {
      requestContext.setQueryParam(
        "fieldManager",
        ObjectSerializer.serialize(fieldManager, "string", ""),
      );
    }
    if (pretty !== undefined) {
      requestContext.setQueryParam(
        "pretty",
        ObjectSerializer.serialize(pretty, "string", ""),
      );
    }

    // Header Params

    // Form Params

    // Body Params
    const contentType = ObjectSerializer.getPreferredMediaType([]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = ObjectSerializer.stringify(
      ObjectSerializer.serialize(
        body,
        "IoK8sApiAuthorizationV1beta1SubjectAccessReview",
        "",
      ),
      contentType,
    );
    requestContext.setBody(serializedBody);

    let authMethod = null;
    // Apply auth methods
    authMethod = config.authMethods["BearerToken"];
    if (authMethod) {
      await authMethod.applySecurityAuthentication(requestContext);
    }

    return requestContext;
  }

  /**
     * get available resources
     */
  public async getAuthorizationV1beta1APIResources(
    options?: Configuration,
  ): Promise<RequestContext> {
    let config = options || this.configuration;

    // Path Params
    const localVarPath = "/apis/authorization.k8s.io/v1beta1/";

    // Make Request Context
    const requestContext = config.baseServer.makeRequestContext(
      localVarPath,
      HttpMethod.GET,
    );
    requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8");

    // Query Params

    // Header Params

    // Form Params

    // Body Params

    let authMethod = null;
    // Apply auth methods
    authMethod = config.authMethods["BearerToken"];
    if (authMethod) {
      await authMethod.applySecurityAuthentication(requestContext);
    }

    return requestContext;
  }
}

export class AuthorizationV1beta1ApiResponseProcessor {
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to createAuthorizationV1beta1NamespacedLocalSubjectAccessReview
     * @throws ApiException if the response code was not in [200, 299]
     */
  public async createAuthorizationV1beta1NamespacedLocalSubjectAccessReview(
    response: ResponseContext,
  ): Promise<IoK8sApiAuthorizationV1beta1LocalSubjectAccessReview> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"],
    );
    if (isCodeInRange("200", response.httpStatusCode)) {
      const body: IoK8sApiAuthorizationV1beta1LocalSubjectAccessReview =
        ObjectSerializer.deserialize(
          ObjectSerializer.parse(await response.body.text(), contentType),
          "IoK8sApiAuthorizationV1beta1LocalSubjectAccessReview",
          "",
        ) as IoK8sApiAuthorizationV1beta1LocalSubjectAccessReview;
      return body;
    }
    if (isCodeInRange("201", response.httpStatusCode)) {
      const body: IoK8sApiAuthorizationV1beta1LocalSubjectAccessReview =
        ObjectSerializer.deserialize(
          ObjectSerializer.parse(await response.body.text(), contentType),
          "IoK8sApiAuthorizationV1beta1LocalSubjectAccessReview",
          "",
        ) as IoK8sApiAuthorizationV1beta1LocalSubjectAccessReview;
      return body;
    }
    if (isCodeInRange("202", response.httpStatusCode)) {
      const body: IoK8sApiAuthorizationV1beta1LocalSubjectAccessReview =
        ObjectSerializer.deserialize(
          ObjectSerializer.parse(await response.body.text(), contentType),
          "IoK8sApiAuthorizationV1beta1LocalSubjectAccessReview",
          "",
        ) as IoK8sApiAuthorizationV1beta1LocalSubjectAccessReview;
      return body;
    }
    if (isCodeInRange("401", response.httpStatusCode)) {
      throw new ApiException<string>(response.httpStatusCode, "Unauthorized");
    }

    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body: IoK8sApiAuthorizationV1beta1LocalSubjectAccessReview =
        ObjectSerializer.deserialize(
          ObjectSerializer.parse(await response.body.text(), contentType),
          "IoK8sApiAuthorizationV1beta1LocalSubjectAccessReview",
          "",
        ) as IoK8sApiAuthorizationV1beta1LocalSubjectAccessReview;
      return body;
    }

    let body = response.body || "";
    throw new ApiException<string>(
      response.httpStatusCode,
      'Unknown API Status Code!\nBody: "' + body + '"',
    );
  }

  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to createAuthorizationV1beta1SelfSubjectAccessReview
     * @throws ApiException if the response code was not in [200, 299]
     */
  public async createAuthorizationV1beta1SelfSubjectAccessReview(
    response: ResponseContext,
  ): Promise<IoK8sApiAuthorizationV1beta1SelfSubjectAccessReview> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"],
    );
    if (isCodeInRange("200", response.httpStatusCode)) {
      const body: IoK8sApiAuthorizationV1beta1SelfSubjectAccessReview =
        ObjectSerializer.deserialize(
          ObjectSerializer.parse(await response.body.text(), contentType),
          "IoK8sApiAuthorizationV1beta1SelfSubjectAccessReview",
          "",
        ) as IoK8sApiAuthorizationV1beta1SelfSubjectAccessReview;
      return body;
    }
    if (isCodeInRange("201", response.httpStatusCode)) {
      const body: IoK8sApiAuthorizationV1beta1SelfSubjectAccessReview =
        ObjectSerializer.deserialize(
          ObjectSerializer.parse(await response.body.text(), contentType),
          "IoK8sApiAuthorizationV1beta1SelfSubjectAccessReview",
          "",
        ) as IoK8sApiAuthorizationV1beta1SelfSubjectAccessReview;
      return body;
    }
    if (isCodeInRange("202", response.httpStatusCode)) {
      const body: IoK8sApiAuthorizationV1beta1SelfSubjectAccessReview =
        ObjectSerializer.deserialize(
          ObjectSerializer.parse(await response.body.text(), contentType),
          "IoK8sApiAuthorizationV1beta1SelfSubjectAccessReview",
          "",
        ) as IoK8sApiAuthorizationV1beta1SelfSubjectAccessReview;
      return body;
    }
    if (isCodeInRange("401", response.httpStatusCode)) {
      throw new ApiException<string>(response.httpStatusCode, "Unauthorized");
    }

    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body: IoK8sApiAuthorizationV1beta1SelfSubjectAccessReview =
        ObjectSerializer.deserialize(
          ObjectSerializer.parse(await response.body.text(), contentType),
          "IoK8sApiAuthorizationV1beta1SelfSubjectAccessReview",
          "",
        ) as IoK8sApiAuthorizationV1beta1SelfSubjectAccessReview;
      return body;
    }

    let body = response.body || "";
    throw new ApiException<string>(
      response.httpStatusCode,
      'Unknown API Status Code!\nBody: "' + body + '"',
    );
  }

  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to createAuthorizationV1beta1SelfSubjectRulesReview
     * @throws ApiException if the response code was not in [200, 299]
     */
  public async createAuthorizationV1beta1SelfSubjectRulesReview(
    response: ResponseContext,
  ): Promise<IoK8sApiAuthorizationV1beta1SelfSubjectRulesReview> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"],
    );
    if (isCodeInRange("200", response.httpStatusCode)) {
      const body: IoK8sApiAuthorizationV1beta1SelfSubjectRulesReview =
        ObjectSerializer.deserialize(
          ObjectSerializer.parse(await response.body.text(), contentType),
          "IoK8sApiAuthorizationV1beta1SelfSubjectRulesReview",
          "",
        ) as IoK8sApiAuthorizationV1beta1SelfSubjectRulesReview;
      return body;
    }
    if (isCodeInRange("201", response.httpStatusCode)) {
      const body: IoK8sApiAuthorizationV1beta1SelfSubjectRulesReview =
        ObjectSerializer.deserialize(
          ObjectSerializer.parse(await response.body.text(), contentType),
          "IoK8sApiAuthorizationV1beta1SelfSubjectRulesReview",
          "",
        ) as IoK8sApiAuthorizationV1beta1SelfSubjectRulesReview;
      return body;
    }
    if (isCodeInRange("202", response.httpStatusCode)) {
      const body: IoK8sApiAuthorizationV1beta1SelfSubjectRulesReview =
        ObjectSerializer.deserialize(
          ObjectSerializer.parse(await response.body.text(), contentType),
          "IoK8sApiAuthorizationV1beta1SelfSubjectRulesReview",
          "",
        ) as IoK8sApiAuthorizationV1beta1SelfSubjectRulesReview;
      return body;
    }
    if (isCodeInRange("401", response.httpStatusCode)) {
      throw new ApiException<string>(response.httpStatusCode, "Unauthorized");
    }

    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body: IoK8sApiAuthorizationV1beta1SelfSubjectRulesReview =
        ObjectSerializer.deserialize(
          ObjectSerializer.parse(await response.body.text(), contentType),
          "IoK8sApiAuthorizationV1beta1SelfSubjectRulesReview",
          "",
        ) as IoK8sApiAuthorizationV1beta1SelfSubjectRulesReview;
      return body;
    }

    let body = response.body || "";
    throw new ApiException<string>(
      response.httpStatusCode,
      'Unknown API Status Code!\nBody: "' + body + '"',
    );
  }

  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to createAuthorizationV1beta1SubjectAccessReview
     * @throws ApiException if the response code was not in [200, 299]
     */
  public async createAuthorizationV1beta1SubjectAccessReview(
    response: ResponseContext,
  ): Promise<IoK8sApiAuthorizationV1beta1SubjectAccessReview> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"],
    );
    if (isCodeInRange("200", response.httpStatusCode)) {
      const body: IoK8sApiAuthorizationV1beta1SubjectAccessReview =
        ObjectSerializer.deserialize(
          ObjectSerializer.parse(await response.body.text(), contentType),
          "IoK8sApiAuthorizationV1beta1SubjectAccessReview",
          "",
        ) as IoK8sApiAuthorizationV1beta1SubjectAccessReview;
      return body;
    }
    if (isCodeInRange("201", response.httpStatusCode)) {
      const body: IoK8sApiAuthorizationV1beta1SubjectAccessReview =
        ObjectSerializer.deserialize(
          ObjectSerializer.parse(await response.body.text(), contentType),
          "IoK8sApiAuthorizationV1beta1SubjectAccessReview",
          "",
        ) as IoK8sApiAuthorizationV1beta1SubjectAccessReview;
      return body;
    }
    if (isCodeInRange("202", response.httpStatusCode)) {
      const body: IoK8sApiAuthorizationV1beta1SubjectAccessReview =
        ObjectSerializer.deserialize(
          ObjectSerializer.parse(await response.body.text(), contentType),
          "IoK8sApiAuthorizationV1beta1SubjectAccessReview",
          "",
        ) as IoK8sApiAuthorizationV1beta1SubjectAccessReview;
      return body;
    }
    if (isCodeInRange("401", response.httpStatusCode)) {
      throw new ApiException<string>(response.httpStatusCode, "Unauthorized");
    }

    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body: IoK8sApiAuthorizationV1beta1SubjectAccessReview =
        ObjectSerializer.deserialize(
          ObjectSerializer.parse(await response.body.text(), contentType),
          "IoK8sApiAuthorizationV1beta1SubjectAccessReview",
          "",
        ) as IoK8sApiAuthorizationV1beta1SubjectAccessReview;
      return body;
    }

    let body = response.body || "";
    throw new ApiException<string>(
      response.httpStatusCode,
      'Unknown API Status Code!\nBody: "' + body + '"',
    );
  }

  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getAuthorizationV1beta1APIResources
     * @throws ApiException if the response code was not in [200, 299]
     */
  public async getAuthorizationV1beta1APIResources(
    response: ResponseContext,
  ): Promise<IoK8sApimachineryPkgApisMetaV1APIResourceList> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"],
    );
    if (isCodeInRange("200", response.httpStatusCode)) {
      const body: IoK8sApimachineryPkgApisMetaV1APIResourceList =
        ObjectSerializer.deserialize(
          ObjectSerializer.parse(await response.body.text(), contentType),
          "IoK8sApimachineryPkgApisMetaV1APIResourceList",
          "",
        ) as IoK8sApimachineryPkgApisMetaV1APIResourceList;
      return body;
    }
    if (isCodeInRange("401", response.httpStatusCode)) {
      throw new ApiException<string>(response.httpStatusCode, "Unauthorized");
    }

    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body: IoK8sApimachineryPkgApisMetaV1APIResourceList =
        ObjectSerializer.deserialize(
          ObjectSerializer.parse(await response.body.text(), contentType),
          "IoK8sApimachineryPkgApisMetaV1APIResourceList",
          "",
        ) as IoK8sApimachineryPkgApisMetaV1APIResourceList;
      return body;
    }

    let body = response.body || "";
    throw new ApiException<string>(
      response.httpStatusCode,
      'Unknown API Status Code!\nBody: "' + body + '"',
    );
  }
}
