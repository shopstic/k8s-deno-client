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

import { IoK8sApiFlowcontrolV1beta1FlowSchema } from "../models/IoK8sApiFlowcontrolV1beta1FlowSchema.ts";
import { IoK8sApiFlowcontrolV1beta1FlowSchemaList } from "../models/IoK8sApiFlowcontrolV1beta1FlowSchemaList.ts";
import { IoK8sApiFlowcontrolV1beta1PriorityLevelConfiguration } from "../models/IoK8sApiFlowcontrolV1beta1PriorityLevelConfiguration.ts";
import { IoK8sApiFlowcontrolV1beta1PriorityLevelConfigurationList } from "../models/IoK8sApiFlowcontrolV1beta1PriorityLevelConfigurationList.ts";
import { IoK8sApimachineryPkgApisMetaV1APIResourceList } from "../models/IoK8sApimachineryPkgApisMetaV1APIResourceList.ts";
import { IoK8sApimachineryPkgApisMetaV1DeleteOptions } from "../models/IoK8sApimachineryPkgApisMetaV1DeleteOptions.ts";
import { IoK8sApimachineryPkgApisMetaV1Status } from "../models/IoK8sApimachineryPkgApisMetaV1Status.ts";
import { IoK8sApimachineryPkgApisMetaV1WatchEvent } from "../models/IoK8sApimachineryPkgApisMetaV1WatchEvent.ts";

/**
 * no description
 */
export class FlowcontrolApiserverV1beta1ApiRequestFactory
  extends BaseAPIRequestFactory {
  /**
     * create a FlowSchema
     * @param body 
     * @param pretty If &#39;true&#39;, then the output is pretty printed.
     * @param dryRun When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed
     * @param fieldManager fieldManager is a name associated with the actor or entity that is making these changes. The value must be less than or 128 characters long, and only contain printable characters, as defined by https://golang.org/pkg/unicode/#IsPrint.
     */
  public async createFlowcontrolApiserverV1beta1FlowSchema(
    body: IoK8sApiFlowcontrolV1beta1FlowSchema,
    pretty?: string,
    dryRun?: string,
    fieldManager?: string,
    options?: Configuration,
  ): Promise<RequestContext> {
    let config = options || this.configuration;

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError(
        "Required parameter body was null or undefined when calling createFlowcontrolApiserverV1beta1FlowSchema.",
      );
    }

    // Path Params
    const localVarPath =
      "/apis/flowcontrol.apiserver.k8s.io/v1beta1/flowschemas";

    // Make Request Context
    const requestContext = config.baseServer.makeRequestContext(
      localVarPath,
      HttpMethod.POST,
    );
    requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8");

    // Query Params
    if (pretty !== undefined) {
      requestContext.setQueryParam(
        "pretty",
        ObjectSerializer.serialize(pretty, "string", ""),
      );
    }
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

    // Header Params

    // Form Params

    // Body Params
    const contentType = ObjectSerializer.getPreferredMediaType([]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = ObjectSerializer.stringify(
      ObjectSerializer.serialize(
        body,
        "IoK8sApiFlowcontrolV1beta1FlowSchema",
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
     * create a PriorityLevelConfiguration
     * @param body 
     * @param pretty If &#39;true&#39;, then the output is pretty printed.
     * @param dryRun When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed
     * @param fieldManager fieldManager is a name associated with the actor or entity that is making these changes. The value must be less than or 128 characters long, and only contain printable characters, as defined by https://golang.org/pkg/unicode/#IsPrint.
     */
  public async createFlowcontrolApiserverV1beta1PriorityLevelConfiguration(
    body: IoK8sApiFlowcontrolV1beta1PriorityLevelConfiguration,
    pretty?: string,
    dryRun?: string,
    fieldManager?: string,
    options?: Configuration,
  ): Promise<RequestContext> {
    let config = options || this.configuration;

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError(
        "Required parameter body was null or undefined when calling createFlowcontrolApiserverV1beta1PriorityLevelConfiguration.",
      );
    }

    // Path Params
    const localVarPath =
      "/apis/flowcontrol.apiserver.k8s.io/v1beta1/prioritylevelconfigurations";

    // Make Request Context
    const requestContext = config.baseServer.makeRequestContext(
      localVarPath,
      HttpMethod.POST,
    );
    requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8");

    // Query Params
    if (pretty !== undefined) {
      requestContext.setQueryParam(
        "pretty",
        ObjectSerializer.serialize(pretty, "string", ""),
      );
    }
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

    // Header Params

    // Form Params

    // Body Params
    const contentType = ObjectSerializer.getPreferredMediaType([]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = ObjectSerializer.stringify(
      ObjectSerializer.serialize(
        body,
        "IoK8sApiFlowcontrolV1beta1PriorityLevelConfiguration",
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
     * delete collection of FlowSchema
     * @param pretty If &#39;true&#39;, then the output is pretty printed.
     * @param _continue The continue option should be set when retrieving more results from the server. Since this value is server defined, clients may only use the continue value from a previous query result with identical query parameters (except for the value of continue) and the server may reject a continue value it does not recognize. If the specified continue value is no longer valid whether due to expiration (generally five to fifteen minutes) or a configuration change on the server, the server will respond with a 410 ResourceExpired error together with a continue token. If the client needs a consistent list, it must restart their list without the continue field. Otherwise, the client may send another list request with the token received with the 410 error, the server will respond with a list starting from the next key, but from the latest snapshot, which is inconsistent from the previous list results - objects that are created, modified, or deleted after the first list request will be included in the response, as long as their keys are after the \&quot;next key\&quot;.  This field is not supported when watch is true. Clients may start a watch from the last resourceVersion value returned by the server and not miss any modifications.
     * @param dryRun When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed
     * @param fieldSelector A selector to restrict the list of returned objects by their fields. Defaults to everything.
     * @param gracePeriodSeconds The duration in seconds before the object should be deleted. Value must be non-negative integer. The value zero indicates delete immediately. If this value is nil, the default grace period for the specified type will be used. Defaults to a per object value if not specified. zero means delete immediately.
     * @param labelSelector A selector to restrict the list of returned objects by their labels. Defaults to everything.
     * @param limit limit is a maximum number of responses to return for a list call. If more items exist, the server will set the &#x60;continue&#x60; field on the list metadata to a value that can be used with the same initial query to retrieve the next set of results. Setting a limit may return fewer than the requested amount of items (up to zero items) in the event all requested objects are filtered out and clients should only use the presence of the continue field to determine whether more results are available. Servers may choose not to support the limit argument and will return all of the available results. If limit is specified and the continue field is empty, clients may assume that no more results are available. This field is not supported if watch is true.  The server guarantees that the objects returned when using continue will be identical to issuing a single list call without a limit - that is, no objects created, modified, or deleted after the first request is issued will be included in any subsequent continued requests. This is sometimes referred to as a consistent snapshot, and ensures that a client that is using limit to receive smaller chunks of a very large result can ensure they see all possible objects. If objects are updated during a chunked list the version of the object that was present at the time the first list result was calculated is returned.
     * @param orphanDependents Deprecated: please use the PropagationPolicy, this field will be deprecated in 1.7. Should the dependent objects be orphaned. If true/false, the \&quot;orphan\&quot; finalizer will be added to/removed from the object&#39;s finalizers list. Either this field or PropagationPolicy may be set, but not both.
     * @param propagationPolicy Whether and how garbage collection will be performed. Either this field or OrphanDependents may be set, but not both. The default policy is decided by the existing finalizer set in the metadata.finalizers and the resource-specific default policy. Acceptable values are: &#39;Orphan&#39; - orphan the dependents; &#39;Background&#39; - allow the garbage collector to delete the dependents in the background; &#39;Foreground&#39; - a cascading policy that deletes all dependents in the foreground.
     * @param resourceVersion resourceVersion sets a constraint on what resource versions a request may be served from. See https://kubernetes.io/docs/reference/using-api/api-concepts/#resource-versions for details.  Defaults to unset
     * @param resourceVersionMatch resourceVersionMatch determines how resourceVersion is applied to list calls. It is highly recommended that resourceVersionMatch be set for list calls where resourceVersion is set See https://kubernetes.io/docs/reference/using-api/api-concepts/#resource-versions for details.  Defaults to unset
     * @param timeoutSeconds Timeout for the list/watch call. This limits the duration of the call, regardless of any activity or inactivity.
     * @param body 
     */
  public async deleteFlowcontrolApiserverV1beta1CollectionFlowSchema(
    pretty?: string,
    _continue?: string,
    dryRun?: string,
    fieldSelector?: string,
    gracePeriodSeconds?: number,
    labelSelector?: string,
    limit?: number,
    orphanDependents?: boolean,
    propagationPolicy?: string,
    resourceVersion?: string,
    resourceVersionMatch?: string,
    timeoutSeconds?: number,
    body?: IoK8sApimachineryPkgApisMetaV1DeleteOptions,
    options?: Configuration,
  ): Promise<RequestContext> {
    let config = options || this.configuration;

    // Path Params
    const localVarPath =
      "/apis/flowcontrol.apiserver.k8s.io/v1beta1/flowschemas";

    // Make Request Context
    const requestContext = config.baseServer.makeRequestContext(
      localVarPath,
      HttpMethod.DELETE,
    );
    requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8");

    // Query Params
    if (pretty !== undefined) {
      requestContext.setQueryParam(
        "pretty",
        ObjectSerializer.serialize(pretty, "string", ""),
      );
    }
    if (_continue !== undefined) {
      requestContext.setQueryParam(
        "continue",
        ObjectSerializer.serialize(_continue, "string", ""),
      );
    }
    if (dryRun !== undefined) {
      requestContext.setQueryParam(
        "dryRun",
        ObjectSerializer.serialize(dryRun, "string", ""),
      );
    }
    if (fieldSelector !== undefined) {
      requestContext.setQueryParam(
        "fieldSelector",
        ObjectSerializer.serialize(fieldSelector, "string", ""),
      );
    }
    if (gracePeriodSeconds !== undefined) {
      requestContext.setQueryParam(
        "gracePeriodSeconds",
        ObjectSerializer.serialize(gracePeriodSeconds, "number", ""),
      );
    }
    if (labelSelector !== undefined) {
      requestContext.setQueryParam(
        "labelSelector",
        ObjectSerializer.serialize(labelSelector, "string", ""),
      );
    }
    if (limit !== undefined) {
      requestContext.setQueryParam(
        "limit",
        ObjectSerializer.serialize(limit, "number", ""),
      );
    }
    if (orphanDependents !== undefined) {
      requestContext.setQueryParam(
        "orphanDependents",
        ObjectSerializer.serialize(orphanDependents, "boolean", ""),
      );
    }
    if (propagationPolicy !== undefined) {
      requestContext.setQueryParam(
        "propagationPolicy",
        ObjectSerializer.serialize(propagationPolicy, "string", ""),
      );
    }
    if (resourceVersion !== undefined) {
      requestContext.setQueryParam(
        "resourceVersion",
        ObjectSerializer.serialize(resourceVersion, "string", ""),
      );
    }
    if (resourceVersionMatch !== undefined) {
      requestContext.setQueryParam(
        "resourceVersionMatch",
        ObjectSerializer.serialize(resourceVersionMatch, "string", ""),
      );
    }
    if (timeoutSeconds !== undefined) {
      requestContext.setQueryParam(
        "timeoutSeconds",
        ObjectSerializer.serialize(timeoutSeconds, "number", ""),
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
        "IoK8sApimachineryPkgApisMetaV1DeleteOptions",
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
     * delete collection of PriorityLevelConfiguration
     * @param pretty If &#39;true&#39;, then the output is pretty printed.
     * @param _continue The continue option should be set when retrieving more results from the server. Since this value is server defined, clients may only use the continue value from a previous query result with identical query parameters (except for the value of continue) and the server may reject a continue value it does not recognize. If the specified continue value is no longer valid whether due to expiration (generally five to fifteen minutes) or a configuration change on the server, the server will respond with a 410 ResourceExpired error together with a continue token. If the client needs a consistent list, it must restart their list without the continue field. Otherwise, the client may send another list request with the token received with the 410 error, the server will respond with a list starting from the next key, but from the latest snapshot, which is inconsistent from the previous list results - objects that are created, modified, or deleted after the first list request will be included in the response, as long as their keys are after the \&quot;next key\&quot;.  This field is not supported when watch is true. Clients may start a watch from the last resourceVersion value returned by the server and not miss any modifications.
     * @param dryRun When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed
     * @param fieldSelector A selector to restrict the list of returned objects by their fields. Defaults to everything.
     * @param gracePeriodSeconds The duration in seconds before the object should be deleted. Value must be non-negative integer. The value zero indicates delete immediately. If this value is nil, the default grace period for the specified type will be used. Defaults to a per object value if not specified. zero means delete immediately.
     * @param labelSelector A selector to restrict the list of returned objects by their labels. Defaults to everything.
     * @param limit limit is a maximum number of responses to return for a list call. If more items exist, the server will set the &#x60;continue&#x60; field on the list metadata to a value that can be used with the same initial query to retrieve the next set of results. Setting a limit may return fewer than the requested amount of items (up to zero items) in the event all requested objects are filtered out and clients should only use the presence of the continue field to determine whether more results are available. Servers may choose not to support the limit argument and will return all of the available results. If limit is specified and the continue field is empty, clients may assume that no more results are available. This field is not supported if watch is true.  The server guarantees that the objects returned when using continue will be identical to issuing a single list call without a limit - that is, no objects created, modified, or deleted after the first request is issued will be included in any subsequent continued requests. This is sometimes referred to as a consistent snapshot, and ensures that a client that is using limit to receive smaller chunks of a very large result can ensure they see all possible objects. If objects are updated during a chunked list the version of the object that was present at the time the first list result was calculated is returned.
     * @param orphanDependents Deprecated: please use the PropagationPolicy, this field will be deprecated in 1.7. Should the dependent objects be orphaned. If true/false, the \&quot;orphan\&quot; finalizer will be added to/removed from the object&#39;s finalizers list. Either this field or PropagationPolicy may be set, but not both.
     * @param propagationPolicy Whether and how garbage collection will be performed. Either this field or OrphanDependents may be set, but not both. The default policy is decided by the existing finalizer set in the metadata.finalizers and the resource-specific default policy. Acceptable values are: &#39;Orphan&#39; - orphan the dependents; &#39;Background&#39; - allow the garbage collector to delete the dependents in the background; &#39;Foreground&#39; - a cascading policy that deletes all dependents in the foreground.
     * @param resourceVersion resourceVersion sets a constraint on what resource versions a request may be served from. See https://kubernetes.io/docs/reference/using-api/api-concepts/#resource-versions for details.  Defaults to unset
     * @param resourceVersionMatch resourceVersionMatch determines how resourceVersion is applied to list calls. It is highly recommended that resourceVersionMatch be set for list calls where resourceVersion is set See https://kubernetes.io/docs/reference/using-api/api-concepts/#resource-versions for details.  Defaults to unset
     * @param timeoutSeconds Timeout for the list/watch call. This limits the duration of the call, regardless of any activity or inactivity.
     * @param body 
     */
  public async deleteFlowcontrolApiserverV1beta1CollectionPriorityLevelConfiguration(
    pretty?: string,
    _continue?: string,
    dryRun?: string,
    fieldSelector?: string,
    gracePeriodSeconds?: number,
    labelSelector?: string,
    limit?: number,
    orphanDependents?: boolean,
    propagationPolicy?: string,
    resourceVersion?: string,
    resourceVersionMatch?: string,
    timeoutSeconds?: number,
    body?: IoK8sApimachineryPkgApisMetaV1DeleteOptions,
    options?: Configuration,
  ): Promise<RequestContext> {
    let config = options || this.configuration;

    // Path Params
    const localVarPath =
      "/apis/flowcontrol.apiserver.k8s.io/v1beta1/prioritylevelconfigurations";

    // Make Request Context
    const requestContext = config.baseServer.makeRequestContext(
      localVarPath,
      HttpMethod.DELETE,
    );
    requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8");

    // Query Params
    if (pretty !== undefined) {
      requestContext.setQueryParam(
        "pretty",
        ObjectSerializer.serialize(pretty, "string", ""),
      );
    }
    if (_continue !== undefined) {
      requestContext.setQueryParam(
        "continue",
        ObjectSerializer.serialize(_continue, "string", ""),
      );
    }
    if (dryRun !== undefined) {
      requestContext.setQueryParam(
        "dryRun",
        ObjectSerializer.serialize(dryRun, "string", ""),
      );
    }
    if (fieldSelector !== undefined) {
      requestContext.setQueryParam(
        "fieldSelector",
        ObjectSerializer.serialize(fieldSelector, "string", ""),
      );
    }
    if (gracePeriodSeconds !== undefined) {
      requestContext.setQueryParam(
        "gracePeriodSeconds",
        ObjectSerializer.serialize(gracePeriodSeconds, "number", ""),
      );
    }
    if (labelSelector !== undefined) {
      requestContext.setQueryParam(
        "labelSelector",
        ObjectSerializer.serialize(labelSelector, "string", ""),
      );
    }
    if (limit !== undefined) {
      requestContext.setQueryParam(
        "limit",
        ObjectSerializer.serialize(limit, "number", ""),
      );
    }
    if (orphanDependents !== undefined) {
      requestContext.setQueryParam(
        "orphanDependents",
        ObjectSerializer.serialize(orphanDependents, "boolean", ""),
      );
    }
    if (propagationPolicy !== undefined) {
      requestContext.setQueryParam(
        "propagationPolicy",
        ObjectSerializer.serialize(propagationPolicy, "string", ""),
      );
    }
    if (resourceVersion !== undefined) {
      requestContext.setQueryParam(
        "resourceVersion",
        ObjectSerializer.serialize(resourceVersion, "string", ""),
      );
    }
    if (resourceVersionMatch !== undefined) {
      requestContext.setQueryParam(
        "resourceVersionMatch",
        ObjectSerializer.serialize(resourceVersionMatch, "string", ""),
      );
    }
    if (timeoutSeconds !== undefined) {
      requestContext.setQueryParam(
        "timeoutSeconds",
        ObjectSerializer.serialize(timeoutSeconds, "number", ""),
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
        "IoK8sApimachineryPkgApisMetaV1DeleteOptions",
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
     * delete a FlowSchema
     * @param name name of the FlowSchema
     * @param pretty If &#39;true&#39;, then the output is pretty printed.
     * @param dryRun When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed
     * @param gracePeriodSeconds The duration in seconds before the object should be deleted. Value must be non-negative integer. The value zero indicates delete immediately. If this value is nil, the default grace period for the specified type will be used. Defaults to a per object value if not specified. zero means delete immediately.
     * @param orphanDependents Deprecated: please use the PropagationPolicy, this field will be deprecated in 1.7. Should the dependent objects be orphaned. If true/false, the \&quot;orphan\&quot; finalizer will be added to/removed from the object&#39;s finalizers list. Either this field or PropagationPolicy may be set, but not both.
     * @param propagationPolicy Whether and how garbage collection will be performed. Either this field or OrphanDependents may be set, but not both. The default policy is decided by the existing finalizer set in the metadata.finalizers and the resource-specific default policy. Acceptable values are: &#39;Orphan&#39; - orphan the dependents; &#39;Background&#39; - allow the garbage collector to delete the dependents in the background; &#39;Foreground&#39; - a cascading policy that deletes all dependents in the foreground.
     * @param body 
     */
  public async deleteFlowcontrolApiserverV1beta1FlowSchema(
    name: string,
    pretty?: string,
    dryRun?: string,
    gracePeriodSeconds?: number,
    orphanDependents?: boolean,
    propagationPolicy?: string,
    body?: IoK8sApimachineryPkgApisMetaV1DeleteOptions,
    options?: Configuration,
  ): Promise<RequestContext> {
    let config = options || this.configuration;

    // verify required parameter 'name' is not null or undefined
    if (name === null || name === undefined) {
      throw new RequiredError(
        "Required parameter name was null or undefined when calling deleteFlowcontrolApiserverV1beta1FlowSchema.",
      );
    }

    // Path Params
    const localVarPath =
      "/apis/flowcontrol.apiserver.k8s.io/v1beta1/flowschemas/{name}"
        .replace("{" + "name" + "}", encodeURIComponent(String(name)));

    // Make Request Context
    const requestContext = config.baseServer.makeRequestContext(
      localVarPath,
      HttpMethod.DELETE,
    );
    requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8");

    // Query Params
    if (pretty !== undefined) {
      requestContext.setQueryParam(
        "pretty",
        ObjectSerializer.serialize(pretty, "string", ""),
      );
    }
    if (dryRun !== undefined) {
      requestContext.setQueryParam(
        "dryRun",
        ObjectSerializer.serialize(dryRun, "string", ""),
      );
    }
    if (gracePeriodSeconds !== undefined) {
      requestContext.setQueryParam(
        "gracePeriodSeconds",
        ObjectSerializer.serialize(gracePeriodSeconds, "number", ""),
      );
    }
    if (orphanDependents !== undefined) {
      requestContext.setQueryParam(
        "orphanDependents",
        ObjectSerializer.serialize(orphanDependents, "boolean", ""),
      );
    }
    if (propagationPolicy !== undefined) {
      requestContext.setQueryParam(
        "propagationPolicy",
        ObjectSerializer.serialize(propagationPolicy, "string", ""),
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
        "IoK8sApimachineryPkgApisMetaV1DeleteOptions",
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
     * delete a PriorityLevelConfiguration
     * @param name name of the PriorityLevelConfiguration
     * @param pretty If &#39;true&#39;, then the output is pretty printed.
     * @param dryRun When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed
     * @param gracePeriodSeconds The duration in seconds before the object should be deleted. Value must be non-negative integer. The value zero indicates delete immediately. If this value is nil, the default grace period for the specified type will be used. Defaults to a per object value if not specified. zero means delete immediately.
     * @param orphanDependents Deprecated: please use the PropagationPolicy, this field will be deprecated in 1.7. Should the dependent objects be orphaned. If true/false, the \&quot;orphan\&quot; finalizer will be added to/removed from the object&#39;s finalizers list. Either this field or PropagationPolicy may be set, but not both.
     * @param propagationPolicy Whether and how garbage collection will be performed. Either this field or OrphanDependents may be set, but not both. The default policy is decided by the existing finalizer set in the metadata.finalizers and the resource-specific default policy. Acceptable values are: &#39;Orphan&#39; - orphan the dependents; &#39;Background&#39; - allow the garbage collector to delete the dependents in the background; &#39;Foreground&#39; - a cascading policy that deletes all dependents in the foreground.
     * @param body 
     */
  public async deleteFlowcontrolApiserverV1beta1PriorityLevelConfiguration(
    name: string,
    pretty?: string,
    dryRun?: string,
    gracePeriodSeconds?: number,
    orphanDependents?: boolean,
    propagationPolicy?: string,
    body?: IoK8sApimachineryPkgApisMetaV1DeleteOptions,
    options?: Configuration,
  ): Promise<RequestContext> {
    let config = options || this.configuration;

    // verify required parameter 'name' is not null or undefined
    if (name === null || name === undefined) {
      throw new RequiredError(
        "Required parameter name was null or undefined when calling deleteFlowcontrolApiserverV1beta1PriorityLevelConfiguration.",
      );
    }

    // Path Params
    const localVarPath =
      "/apis/flowcontrol.apiserver.k8s.io/v1beta1/prioritylevelconfigurations/{name}"
        .replace("{" + "name" + "}", encodeURIComponent(String(name)));

    // Make Request Context
    const requestContext = config.baseServer.makeRequestContext(
      localVarPath,
      HttpMethod.DELETE,
    );
    requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8");

    // Query Params
    if (pretty !== undefined) {
      requestContext.setQueryParam(
        "pretty",
        ObjectSerializer.serialize(pretty, "string", ""),
      );
    }
    if (dryRun !== undefined) {
      requestContext.setQueryParam(
        "dryRun",
        ObjectSerializer.serialize(dryRun, "string", ""),
      );
    }
    if (gracePeriodSeconds !== undefined) {
      requestContext.setQueryParam(
        "gracePeriodSeconds",
        ObjectSerializer.serialize(gracePeriodSeconds, "number", ""),
      );
    }
    if (orphanDependents !== undefined) {
      requestContext.setQueryParam(
        "orphanDependents",
        ObjectSerializer.serialize(orphanDependents, "boolean", ""),
      );
    }
    if (propagationPolicy !== undefined) {
      requestContext.setQueryParam(
        "propagationPolicy",
        ObjectSerializer.serialize(propagationPolicy, "string", ""),
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
        "IoK8sApimachineryPkgApisMetaV1DeleteOptions",
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
  public async getFlowcontrolApiserverV1beta1APIResources(
    options?: Configuration,
  ): Promise<RequestContext> {
    let config = options || this.configuration;

    // Path Params
    const localVarPath = "/apis/flowcontrol.apiserver.k8s.io/v1beta1/";

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

  /**
     * list or watch objects of kind FlowSchema
     * @param pretty If &#39;true&#39;, then the output is pretty printed.
     * @param allowWatchBookmarks allowWatchBookmarks requests watch events with type \&quot;BOOKMARK\&quot;. Servers that do not implement bookmarks may ignore this flag and bookmarks are sent at the server&#39;s discretion. Clients should not assume bookmarks are returned at any specific interval, nor may they assume the server will send any BOOKMARK event during a session. If this is not a watch, this field is ignored. If the feature gate WatchBookmarks is not enabled in apiserver, this field is ignored.
     * @param _continue The continue option should be set when retrieving more results from the server. Since this value is server defined, clients may only use the continue value from a previous query result with identical query parameters (except for the value of continue) and the server may reject a continue value it does not recognize. If the specified continue value is no longer valid whether due to expiration (generally five to fifteen minutes) or a configuration change on the server, the server will respond with a 410 ResourceExpired error together with a continue token. If the client needs a consistent list, it must restart their list without the continue field. Otherwise, the client may send another list request with the token received with the 410 error, the server will respond with a list starting from the next key, but from the latest snapshot, which is inconsistent from the previous list results - objects that are created, modified, or deleted after the first list request will be included in the response, as long as their keys are after the \&quot;next key\&quot;.  This field is not supported when watch is true. Clients may start a watch from the last resourceVersion value returned by the server and not miss any modifications.
     * @param fieldSelector A selector to restrict the list of returned objects by their fields. Defaults to everything.
     * @param labelSelector A selector to restrict the list of returned objects by their labels. Defaults to everything.
     * @param limit limit is a maximum number of responses to return for a list call. If more items exist, the server will set the &#x60;continue&#x60; field on the list metadata to a value that can be used with the same initial query to retrieve the next set of results. Setting a limit may return fewer than the requested amount of items (up to zero items) in the event all requested objects are filtered out and clients should only use the presence of the continue field to determine whether more results are available. Servers may choose not to support the limit argument and will return all of the available results. If limit is specified and the continue field is empty, clients may assume that no more results are available. This field is not supported if watch is true.  The server guarantees that the objects returned when using continue will be identical to issuing a single list call without a limit - that is, no objects created, modified, or deleted after the first request is issued will be included in any subsequent continued requests. This is sometimes referred to as a consistent snapshot, and ensures that a client that is using limit to receive smaller chunks of a very large result can ensure they see all possible objects. If objects are updated during a chunked list the version of the object that was present at the time the first list result was calculated is returned.
     * @param resourceVersion resourceVersion sets a constraint on what resource versions a request may be served from. See https://kubernetes.io/docs/reference/using-api/api-concepts/#resource-versions for details.  Defaults to unset
     * @param resourceVersionMatch resourceVersionMatch determines how resourceVersion is applied to list calls. It is highly recommended that resourceVersionMatch be set for list calls where resourceVersion is set See https://kubernetes.io/docs/reference/using-api/api-concepts/#resource-versions for details.  Defaults to unset
     * @param timeoutSeconds Timeout for the list/watch call. This limits the duration of the call, regardless of any activity or inactivity.
     * @param watch Watch for changes to the described resources and return them as a stream of add, update, and remove notifications. Specify resourceVersion.
     */
  public async listFlowcontrolApiserverV1beta1FlowSchema(
    pretty?: string,
    allowWatchBookmarks?: boolean,
    _continue?: string,
    fieldSelector?: string,
    labelSelector?: string,
    limit?: number,
    resourceVersion?: string,
    resourceVersionMatch?: string,
    timeoutSeconds?: number,
    watch?: boolean,
    options?: Configuration,
  ): Promise<RequestContext> {
    let config = options || this.configuration;

    // Path Params
    const localVarPath =
      "/apis/flowcontrol.apiserver.k8s.io/v1beta1/flowschemas";

    // Make Request Context
    const requestContext = config.baseServer.makeRequestContext(
      localVarPath,
      HttpMethod.GET,
    );
    requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8");

    // Query Params
    if (pretty !== undefined) {
      requestContext.setQueryParam(
        "pretty",
        ObjectSerializer.serialize(pretty, "string", ""),
      );
    }
    if (allowWatchBookmarks !== undefined) {
      requestContext.setQueryParam(
        "allowWatchBookmarks",
        ObjectSerializer.serialize(allowWatchBookmarks, "boolean", ""),
      );
    }
    if (_continue !== undefined) {
      requestContext.setQueryParam(
        "continue",
        ObjectSerializer.serialize(_continue, "string", ""),
      );
    }
    if (fieldSelector !== undefined) {
      requestContext.setQueryParam(
        "fieldSelector",
        ObjectSerializer.serialize(fieldSelector, "string", ""),
      );
    }
    if (labelSelector !== undefined) {
      requestContext.setQueryParam(
        "labelSelector",
        ObjectSerializer.serialize(labelSelector, "string", ""),
      );
    }
    if (limit !== undefined) {
      requestContext.setQueryParam(
        "limit",
        ObjectSerializer.serialize(limit, "number", ""),
      );
    }
    if (resourceVersion !== undefined) {
      requestContext.setQueryParam(
        "resourceVersion",
        ObjectSerializer.serialize(resourceVersion, "string", ""),
      );
    }
    if (resourceVersionMatch !== undefined) {
      requestContext.setQueryParam(
        "resourceVersionMatch",
        ObjectSerializer.serialize(resourceVersionMatch, "string", ""),
      );
    }
    if (timeoutSeconds !== undefined) {
      requestContext.setQueryParam(
        "timeoutSeconds",
        ObjectSerializer.serialize(timeoutSeconds, "number", ""),
      );
    }
    if (watch !== undefined) {
      requestContext.setQueryParam(
        "watch",
        ObjectSerializer.serialize(watch, "boolean", ""),
      );
    }

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

  /**
     * list or watch objects of kind PriorityLevelConfiguration
     * @param pretty If &#39;true&#39;, then the output is pretty printed.
     * @param allowWatchBookmarks allowWatchBookmarks requests watch events with type \&quot;BOOKMARK\&quot;. Servers that do not implement bookmarks may ignore this flag and bookmarks are sent at the server&#39;s discretion. Clients should not assume bookmarks are returned at any specific interval, nor may they assume the server will send any BOOKMARK event during a session. If this is not a watch, this field is ignored. If the feature gate WatchBookmarks is not enabled in apiserver, this field is ignored.
     * @param _continue The continue option should be set when retrieving more results from the server. Since this value is server defined, clients may only use the continue value from a previous query result with identical query parameters (except for the value of continue) and the server may reject a continue value it does not recognize. If the specified continue value is no longer valid whether due to expiration (generally five to fifteen minutes) or a configuration change on the server, the server will respond with a 410 ResourceExpired error together with a continue token. If the client needs a consistent list, it must restart their list without the continue field. Otherwise, the client may send another list request with the token received with the 410 error, the server will respond with a list starting from the next key, but from the latest snapshot, which is inconsistent from the previous list results - objects that are created, modified, or deleted after the first list request will be included in the response, as long as their keys are after the \&quot;next key\&quot;.  This field is not supported when watch is true. Clients may start a watch from the last resourceVersion value returned by the server and not miss any modifications.
     * @param fieldSelector A selector to restrict the list of returned objects by their fields. Defaults to everything.
     * @param labelSelector A selector to restrict the list of returned objects by their labels. Defaults to everything.
     * @param limit limit is a maximum number of responses to return for a list call. If more items exist, the server will set the &#x60;continue&#x60; field on the list metadata to a value that can be used with the same initial query to retrieve the next set of results. Setting a limit may return fewer than the requested amount of items (up to zero items) in the event all requested objects are filtered out and clients should only use the presence of the continue field to determine whether more results are available. Servers may choose not to support the limit argument and will return all of the available results. If limit is specified and the continue field is empty, clients may assume that no more results are available. This field is not supported if watch is true.  The server guarantees that the objects returned when using continue will be identical to issuing a single list call without a limit - that is, no objects created, modified, or deleted after the first request is issued will be included in any subsequent continued requests. This is sometimes referred to as a consistent snapshot, and ensures that a client that is using limit to receive smaller chunks of a very large result can ensure they see all possible objects. If objects are updated during a chunked list the version of the object that was present at the time the first list result was calculated is returned.
     * @param resourceVersion resourceVersion sets a constraint on what resource versions a request may be served from. See https://kubernetes.io/docs/reference/using-api/api-concepts/#resource-versions for details.  Defaults to unset
     * @param resourceVersionMatch resourceVersionMatch determines how resourceVersion is applied to list calls. It is highly recommended that resourceVersionMatch be set for list calls where resourceVersion is set See https://kubernetes.io/docs/reference/using-api/api-concepts/#resource-versions for details.  Defaults to unset
     * @param timeoutSeconds Timeout for the list/watch call. This limits the duration of the call, regardless of any activity or inactivity.
     * @param watch Watch for changes to the described resources and return them as a stream of add, update, and remove notifications. Specify resourceVersion.
     */
  public async listFlowcontrolApiserverV1beta1PriorityLevelConfiguration(
    pretty?: string,
    allowWatchBookmarks?: boolean,
    _continue?: string,
    fieldSelector?: string,
    labelSelector?: string,
    limit?: number,
    resourceVersion?: string,
    resourceVersionMatch?: string,
    timeoutSeconds?: number,
    watch?: boolean,
    options?: Configuration,
  ): Promise<RequestContext> {
    let config = options || this.configuration;

    // Path Params
    const localVarPath =
      "/apis/flowcontrol.apiserver.k8s.io/v1beta1/prioritylevelconfigurations";

    // Make Request Context
    const requestContext = config.baseServer.makeRequestContext(
      localVarPath,
      HttpMethod.GET,
    );
    requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8");

    // Query Params
    if (pretty !== undefined) {
      requestContext.setQueryParam(
        "pretty",
        ObjectSerializer.serialize(pretty, "string", ""),
      );
    }
    if (allowWatchBookmarks !== undefined) {
      requestContext.setQueryParam(
        "allowWatchBookmarks",
        ObjectSerializer.serialize(allowWatchBookmarks, "boolean", ""),
      );
    }
    if (_continue !== undefined) {
      requestContext.setQueryParam(
        "continue",
        ObjectSerializer.serialize(_continue, "string", ""),
      );
    }
    if (fieldSelector !== undefined) {
      requestContext.setQueryParam(
        "fieldSelector",
        ObjectSerializer.serialize(fieldSelector, "string", ""),
      );
    }
    if (labelSelector !== undefined) {
      requestContext.setQueryParam(
        "labelSelector",
        ObjectSerializer.serialize(labelSelector, "string", ""),
      );
    }
    if (limit !== undefined) {
      requestContext.setQueryParam(
        "limit",
        ObjectSerializer.serialize(limit, "number", ""),
      );
    }
    if (resourceVersion !== undefined) {
      requestContext.setQueryParam(
        "resourceVersion",
        ObjectSerializer.serialize(resourceVersion, "string", ""),
      );
    }
    if (resourceVersionMatch !== undefined) {
      requestContext.setQueryParam(
        "resourceVersionMatch",
        ObjectSerializer.serialize(resourceVersionMatch, "string", ""),
      );
    }
    if (timeoutSeconds !== undefined) {
      requestContext.setQueryParam(
        "timeoutSeconds",
        ObjectSerializer.serialize(timeoutSeconds, "number", ""),
      );
    }
    if (watch !== undefined) {
      requestContext.setQueryParam(
        "watch",
        ObjectSerializer.serialize(watch, "boolean", ""),
      );
    }

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

  /**
     * partially update the specified FlowSchema
     * @param name name of the FlowSchema
     * @param body 
     * @param pretty If &#39;true&#39;, then the output is pretty printed.
     * @param dryRun When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed
     * @param fieldManager fieldManager is a name associated with the actor or entity that is making these changes. The value must be less than or 128 characters long, and only contain printable characters, as defined by https://golang.org/pkg/unicode/#IsPrint. This field is required for apply requests (application/apply-patch) but optional for non-apply patch types (JsonPatch, MergePatch, StrategicMergePatch).
     * @param force Force is going to \&quot;force\&quot; Apply requests. It means user will re-acquire conflicting fields owned by other people. Force flag must be unset for non-apply patch requests.
     */
  public async patchFlowcontrolApiserverV1beta1FlowSchema(
    name: string,
    body: any,
    pretty?: string,
    dryRun?: string,
    fieldManager?: string,
    force?: boolean,
    options?: Configuration,
  ): Promise<RequestContext> {
    let config = options || this.configuration;

    // verify required parameter 'name' is not null or undefined
    if (name === null || name === undefined) {
      throw new RequiredError(
        "Required parameter name was null or undefined when calling patchFlowcontrolApiserverV1beta1FlowSchema.",
      );
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError(
        "Required parameter body was null or undefined when calling patchFlowcontrolApiserverV1beta1FlowSchema.",
      );
    }

    // Path Params
    const localVarPath =
      "/apis/flowcontrol.apiserver.k8s.io/v1beta1/flowschemas/{name}"
        .replace("{" + "name" + "}", encodeURIComponent(String(name)));

    // Make Request Context
    const requestContext = config.baseServer.makeRequestContext(
      localVarPath,
      HttpMethod.PATCH,
    );
    requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8");

    // Query Params
    if (pretty !== undefined) {
      requestContext.setQueryParam(
        "pretty",
        ObjectSerializer.serialize(pretty, "string", ""),
      );
    }
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
    if (force !== undefined) {
      requestContext.setQueryParam(
        "force",
        ObjectSerializer.serialize(force, "boolean", ""),
      );
    }

    // Header Params

    // Form Params

    // Body Params
    const contentType = ObjectSerializer.getPreferredMediaType([
      "application/json-patch+json",

      "application/merge-patch+json",

      "application/strategic-merge-patch+json",

      "application/apply-patch+yaml",
    ]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = ObjectSerializer.stringify(
      ObjectSerializer.serialize(body, "any", ""),
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
     * partially update status of the specified FlowSchema
     * @param name name of the FlowSchema
     * @param body 
     * @param pretty If &#39;true&#39;, then the output is pretty printed.
     * @param dryRun When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed
     * @param fieldManager fieldManager is a name associated with the actor or entity that is making these changes. The value must be less than or 128 characters long, and only contain printable characters, as defined by https://golang.org/pkg/unicode/#IsPrint. This field is required for apply requests (application/apply-patch) but optional for non-apply patch types (JsonPatch, MergePatch, StrategicMergePatch).
     * @param force Force is going to \&quot;force\&quot; Apply requests. It means user will re-acquire conflicting fields owned by other people. Force flag must be unset for non-apply patch requests.
     */
  public async patchFlowcontrolApiserverV1beta1FlowSchemaStatus(
    name: string,
    body: any,
    pretty?: string,
    dryRun?: string,
    fieldManager?: string,
    force?: boolean,
    options?: Configuration,
  ): Promise<RequestContext> {
    let config = options || this.configuration;

    // verify required parameter 'name' is not null or undefined
    if (name === null || name === undefined) {
      throw new RequiredError(
        "Required parameter name was null or undefined when calling patchFlowcontrolApiserverV1beta1FlowSchemaStatus.",
      );
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError(
        "Required parameter body was null or undefined when calling patchFlowcontrolApiserverV1beta1FlowSchemaStatus.",
      );
    }

    // Path Params
    const localVarPath =
      "/apis/flowcontrol.apiserver.k8s.io/v1beta1/flowschemas/{name}/status"
        .replace("{" + "name" + "}", encodeURIComponent(String(name)));

    // Make Request Context
    const requestContext = config.baseServer.makeRequestContext(
      localVarPath,
      HttpMethod.PATCH,
    );
    requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8");

    // Query Params
    if (pretty !== undefined) {
      requestContext.setQueryParam(
        "pretty",
        ObjectSerializer.serialize(pretty, "string", ""),
      );
    }
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
    if (force !== undefined) {
      requestContext.setQueryParam(
        "force",
        ObjectSerializer.serialize(force, "boolean", ""),
      );
    }

    // Header Params

    // Form Params

    // Body Params
    const contentType = ObjectSerializer.getPreferredMediaType([
      "application/json-patch+json",

      "application/merge-patch+json",

      "application/strategic-merge-patch+json",

      "application/apply-patch+yaml",
    ]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = ObjectSerializer.stringify(
      ObjectSerializer.serialize(body, "any", ""),
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
     * partially update the specified PriorityLevelConfiguration
     * @param name name of the PriorityLevelConfiguration
     * @param body 
     * @param pretty If &#39;true&#39;, then the output is pretty printed.
     * @param dryRun When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed
     * @param fieldManager fieldManager is a name associated with the actor or entity that is making these changes. The value must be less than or 128 characters long, and only contain printable characters, as defined by https://golang.org/pkg/unicode/#IsPrint. This field is required for apply requests (application/apply-patch) but optional for non-apply patch types (JsonPatch, MergePatch, StrategicMergePatch).
     * @param force Force is going to \&quot;force\&quot; Apply requests. It means user will re-acquire conflicting fields owned by other people. Force flag must be unset for non-apply patch requests.
     */
  public async patchFlowcontrolApiserverV1beta1PriorityLevelConfiguration(
    name: string,
    body: any,
    pretty?: string,
    dryRun?: string,
    fieldManager?: string,
    force?: boolean,
    options?: Configuration,
  ): Promise<RequestContext> {
    let config = options || this.configuration;

    // verify required parameter 'name' is not null or undefined
    if (name === null || name === undefined) {
      throw new RequiredError(
        "Required parameter name was null or undefined when calling patchFlowcontrolApiserverV1beta1PriorityLevelConfiguration.",
      );
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError(
        "Required parameter body was null or undefined when calling patchFlowcontrolApiserverV1beta1PriorityLevelConfiguration.",
      );
    }

    // Path Params
    const localVarPath =
      "/apis/flowcontrol.apiserver.k8s.io/v1beta1/prioritylevelconfigurations/{name}"
        .replace("{" + "name" + "}", encodeURIComponent(String(name)));

    // Make Request Context
    const requestContext = config.baseServer.makeRequestContext(
      localVarPath,
      HttpMethod.PATCH,
    );
    requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8");

    // Query Params
    if (pretty !== undefined) {
      requestContext.setQueryParam(
        "pretty",
        ObjectSerializer.serialize(pretty, "string", ""),
      );
    }
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
    if (force !== undefined) {
      requestContext.setQueryParam(
        "force",
        ObjectSerializer.serialize(force, "boolean", ""),
      );
    }

    // Header Params

    // Form Params

    // Body Params
    const contentType = ObjectSerializer.getPreferredMediaType([
      "application/json-patch+json",

      "application/merge-patch+json",

      "application/strategic-merge-patch+json",

      "application/apply-patch+yaml",
    ]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = ObjectSerializer.stringify(
      ObjectSerializer.serialize(body, "any", ""),
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
     * partially update status of the specified PriorityLevelConfiguration
     * @param name name of the PriorityLevelConfiguration
     * @param body 
     * @param pretty If &#39;true&#39;, then the output is pretty printed.
     * @param dryRun When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed
     * @param fieldManager fieldManager is a name associated with the actor or entity that is making these changes. The value must be less than or 128 characters long, and only contain printable characters, as defined by https://golang.org/pkg/unicode/#IsPrint. This field is required for apply requests (application/apply-patch) but optional for non-apply patch types (JsonPatch, MergePatch, StrategicMergePatch).
     * @param force Force is going to \&quot;force\&quot; Apply requests. It means user will re-acquire conflicting fields owned by other people. Force flag must be unset for non-apply patch requests.
     */
  public async patchFlowcontrolApiserverV1beta1PriorityLevelConfigurationStatus(
    name: string,
    body: any,
    pretty?: string,
    dryRun?: string,
    fieldManager?: string,
    force?: boolean,
    options?: Configuration,
  ): Promise<RequestContext> {
    let config = options || this.configuration;

    // verify required parameter 'name' is not null or undefined
    if (name === null || name === undefined) {
      throw new RequiredError(
        "Required parameter name was null or undefined when calling patchFlowcontrolApiserverV1beta1PriorityLevelConfigurationStatus.",
      );
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError(
        "Required parameter body was null or undefined when calling patchFlowcontrolApiserverV1beta1PriorityLevelConfigurationStatus.",
      );
    }

    // Path Params
    const localVarPath =
      "/apis/flowcontrol.apiserver.k8s.io/v1beta1/prioritylevelconfigurations/{name}/status"
        .replace("{" + "name" + "}", encodeURIComponent(String(name)));

    // Make Request Context
    const requestContext = config.baseServer.makeRequestContext(
      localVarPath,
      HttpMethod.PATCH,
    );
    requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8");

    // Query Params
    if (pretty !== undefined) {
      requestContext.setQueryParam(
        "pretty",
        ObjectSerializer.serialize(pretty, "string", ""),
      );
    }
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
    if (force !== undefined) {
      requestContext.setQueryParam(
        "force",
        ObjectSerializer.serialize(force, "boolean", ""),
      );
    }

    // Header Params

    // Form Params

    // Body Params
    const contentType = ObjectSerializer.getPreferredMediaType([
      "application/json-patch+json",

      "application/merge-patch+json",

      "application/strategic-merge-patch+json",

      "application/apply-patch+yaml",
    ]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = ObjectSerializer.stringify(
      ObjectSerializer.serialize(body, "any", ""),
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
     * read the specified FlowSchema
     * @param name name of the FlowSchema
     * @param pretty If &#39;true&#39;, then the output is pretty printed.
     */
  public async readFlowcontrolApiserverV1beta1FlowSchema(
    name: string,
    pretty?: string,
    options?: Configuration,
  ): Promise<RequestContext> {
    let config = options || this.configuration;

    // verify required parameter 'name' is not null or undefined
    if (name === null || name === undefined) {
      throw new RequiredError(
        "Required parameter name was null or undefined when calling readFlowcontrolApiserverV1beta1FlowSchema.",
      );
    }

    // Path Params
    const localVarPath =
      "/apis/flowcontrol.apiserver.k8s.io/v1beta1/flowschemas/{name}"
        .replace("{" + "name" + "}", encodeURIComponent(String(name)));

    // Make Request Context
    const requestContext = config.baseServer.makeRequestContext(
      localVarPath,
      HttpMethod.GET,
    );
    requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8");

    // Query Params
    if (pretty !== undefined) {
      requestContext.setQueryParam(
        "pretty",
        ObjectSerializer.serialize(pretty, "string", ""),
      );
    }

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

  /**
     * read status of the specified FlowSchema
     * @param name name of the FlowSchema
     * @param pretty If &#39;true&#39;, then the output is pretty printed.
     */
  public async readFlowcontrolApiserverV1beta1FlowSchemaStatus(
    name: string,
    pretty?: string,
    options?: Configuration,
  ): Promise<RequestContext> {
    let config = options || this.configuration;

    // verify required parameter 'name' is not null or undefined
    if (name === null || name === undefined) {
      throw new RequiredError(
        "Required parameter name was null or undefined when calling readFlowcontrolApiserverV1beta1FlowSchemaStatus.",
      );
    }

    // Path Params
    const localVarPath =
      "/apis/flowcontrol.apiserver.k8s.io/v1beta1/flowschemas/{name}/status"
        .replace("{" + "name" + "}", encodeURIComponent(String(name)));

    // Make Request Context
    const requestContext = config.baseServer.makeRequestContext(
      localVarPath,
      HttpMethod.GET,
    );
    requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8");

    // Query Params
    if (pretty !== undefined) {
      requestContext.setQueryParam(
        "pretty",
        ObjectSerializer.serialize(pretty, "string", ""),
      );
    }

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

  /**
     * read the specified PriorityLevelConfiguration
     * @param name name of the PriorityLevelConfiguration
     * @param pretty If &#39;true&#39;, then the output is pretty printed.
     */
  public async readFlowcontrolApiserverV1beta1PriorityLevelConfiguration(
    name: string,
    pretty?: string,
    options?: Configuration,
  ): Promise<RequestContext> {
    let config = options || this.configuration;

    // verify required parameter 'name' is not null or undefined
    if (name === null || name === undefined) {
      throw new RequiredError(
        "Required parameter name was null or undefined when calling readFlowcontrolApiserverV1beta1PriorityLevelConfiguration.",
      );
    }

    // Path Params
    const localVarPath =
      "/apis/flowcontrol.apiserver.k8s.io/v1beta1/prioritylevelconfigurations/{name}"
        .replace("{" + "name" + "}", encodeURIComponent(String(name)));

    // Make Request Context
    const requestContext = config.baseServer.makeRequestContext(
      localVarPath,
      HttpMethod.GET,
    );
    requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8");

    // Query Params
    if (pretty !== undefined) {
      requestContext.setQueryParam(
        "pretty",
        ObjectSerializer.serialize(pretty, "string", ""),
      );
    }

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

  /**
     * read status of the specified PriorityLevelConfiguration
     * @param name name of the PriorityLevelConfiguration
     * @param pretty If &#39;true&#39;, then the output is pretty printed.
     */
  public async readFlowcontrolApiserverV1beta1PriorityLevelConfigurationStatus(
    name: string,
    pretty?: string,
    options?: Configuration,
  ): Promise<RequestContext> {
    let config = options || this.configuration;

    // verify required parameter 'name' is not null or undefined
    if (name === null || name === undefined) {
      throw new RequiredError(
        "Required parameter name was null or undefined when calling readFlowcontrolApiserverV1beta1PriorityLevelConfigurationStatus.",
      );
    }

    // Path Params
    const localVarPath =
      "/apis/flowcontrol.apiserver.k8s.io/v1beta1/prioritylevelconfigurations/{name}/status"
        .replace("{" + "name" + "}", encodeURIComponent(String(name)));

    // Make Request Context
    const requestContext = config.baseServer.makeRequestContext(
      localVarPath,
      HttpMethod.GET,
    );
    requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8");

    // Query Params
    if (pretty !== undefined) {
      requestContext.setQueryParam(
        "pretty",
        ObjectSerializer.serialize(pretty, "string", ""),
      );
    }

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

  /**
     * replace the specified FlowSchema
     * @param name name of the FlowSchema
     * @param body 
     * @param pretty If &#39;true&#39;, then the output is pretty printed.
     * @param dryRun When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed
     * @param fieldManager fieldManager is a name associated with the actor or entity that is making these changes. The value must be less than or 128 characters long, and only contain printable characters, as defined by https://golang.org/pkg/unicode/#IsPrint.
     */
  public async replaceFlowcontrolApiserverV1beta1FlowSchema(
    name: string,
    body: IoK8sApiFlowcontrolV1beta1FlowSchema,
    pretty?: string,
    dryRun?: string,
    fieldManager?: string,
    options?: Configuration,
  ): Promise<RequestContext> {
    let config = options || this.configuration;

    // verify required parameter 'name' is not null or undefined
    if (name === null || name === undefined) {
      throw new RequiredError(
        "Required parameter name was null or undefined when calling replaceFlowcontrolApiserverV1beta1FlowSchema.",
      );
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError(
        "Required parameter body was null or undefined when calling replaceFlowcontrolApiserverV1beta1FlowSchema.",
      );
    }

    // Path Params
    const localVarPath =
      "/apis/flowcontrol.apiserver.k8s.io/v1beta1/flowschemas/{name}"
        .replace("{" + "name" + "}", encodeURIComponent(String(name)));

    // Make Request Context
    const requestContext = config.baseServer.makeRequestContext(
      localVarPath,
      HttpMethod.PUT,
    );
    requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8");

    // Query Params
    if (pretty !== undefined) {
      requestContext.setQueryParam(
        "pretty",
        ObjectSerializer.serialize(pretty, "string", ""),
      );
    }
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

    // Header Params

    // Form Params

    // Body Params
    const contentType = ObjectSerializer.getPreferredMediaType([]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = ObjectSerializer.stringify(
      ObjectSerializer.serialize(
        body,
        "IoK8sApiFlowcontrolV1beta1FlowSchema",
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
     * replace status of the specified FlowSchema
     * @param name name of the FlowSchema
     * @param body 
     * @param pretty If &#39;true&#39;, then the output is pretty printed.
     * @param dryRun When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed
     * @param fieldManager fieldManager is a name associated with the actor or entity that is making these changes. The value must be less than or 128 characters long, and only contain printable characters, as defined by https://golang.org/pkg/unicode/#IsPrint.
     */
  public async replaceFlowcontrolApiserverV1beta1FlowSchemaStatus(
    name: string,
    body: IoK8sApiFlowcontrolV1beta1FlowSchema,
    pretty?: string,
    dryRun?: string,
    fieldManager?: string,
    options?: Configuration,
  ): Promise<RequestContext> {
    let config = options || this.configuration;

    // verify required parameter 'name' is not null or undefined
    if (name === null || name === undefined) {
      throw new RequiredError(
        "Required parameter name was null or undefined when calling replaceFlowcontrolApiserverV1beta1FlowSchemaStatus.",
      );
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError(
        "Required parameter body was null or undefined when calling replaceFlowcontrolApiserverV1beta1FlowSchemaStatus.",
      );
    }

    // Path Params
    const localVarPath =
      "/apis/flowcontrol.apiserver.k8s.io/v1beta1/flowschemas/{name}/status"
        .replace("{" + "name" + "}", encodeURIComponent(String(name)));

    // Make Request Context
    const requestContext = config.baseServer.makeRequestContext(
      localVarPath,
      HttpMethod.PUT,
    );
    requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8");

    // Query Params
    if (pretty !== undefined) {
      requestContext.setQueryParam(
        "pretty",
        ObjectSerializer.serialize(pretty, "string", ""),
      );
    }
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

    // Header Params

    // Form Params

    // Body Params
    const contentType = ObjectSerializer.getPreferredMediaType([]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = ObjectSerializer.stringify(
      ObjectSerializer.serialize(
        body,
        "IoK8sApiFlowcontrolV1beta1FlowSchema",
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
     * replace the specified PriorityLevelConfiguration
     * @param name name of the PriorityLevelConfiguration
     * @param body 
     * @param pretty If &#39;true&#39;, then the output is pretty printed.
     * @param dryRun When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed
     * @param fieldManager fieldManager is a name associated with the actor or entity that is making these changes. The value must be less than or 128 characters long, and only contain printable characters, as defined by https://golang.org/pkg/unicode/#IsPrint.
     */
  public async replaceFlowcontrolApiserverV1beta1PriorityLevelConfiguration(
    name: string,
    body: IoK8sApiFlowcontrolV1beta1PriorityLevelConfiguration,
    pretty?: string,
    dryRun?: string,
    fieldManager?: string,
    options?: Configuration,
  ): Promise<RequestContext> {
    let config = options || this.configuration;

    // verify required parameter 'name' is not null or undefined
    if (name === null || name === undefined) {
      throw new RequiredError(
        "Required parameter name was null or undefined when calling replaceFlowcontrolApiserverV1beta1PriorityLevelConfiguration.",
      );
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError(
        "Required parameter body was null or undefined when calling replaceFlowcontrolApiserverV1beta1PriorityLevelConfiguration.",
      );
    }

    // Path Params
    const localVarPath =
      "/apis/flowcontrol.apiserver.k8s.io/v1beta1/prioritylevelconfigurations/{name}"
        .replace("{" + "name" + "}", encodeURIComponent(String(name)));

    // Make Request Context
    const requestContext = config.baseServer.makeRequestContext(
      localVarPath,
      HttpMethod.PUT,
    );
    requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8");

    // Query Params
    if (pretty !== undefined) {
      requestContext.setQueryParam(
        "pretty",
        ObjectSerializer.serialize(pretty, "string", ""),
      );
    }
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

    // Header Params

    // Form Params

    // Body Params
    const contentType = ObjectSerializer.getPreferredMediaType([]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = ObjectSerializer.stringify(
      ObjectSerializer.serialize(
        body,
        "IoK8sApiFlowcontrolV1beta1PriorityLevelConfiguration",
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
     * replace status of the specified PriorityLevelConfiguration
     * @param name name of the PriorityLevelConfiguration
     * @param body 
     * @param pretty If &#39;true&#39;, then the output is pretty printed.
     * @param dryRun When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed
     * @param fieldManager fieldManager is a name associated with the actor or entity that is making these changes. The value must be less than or 128 characters long, and only contain printable characters, as defined by https://golang.org/pkg/unicode/#IsPrint.
     */
  public async replaceFlowcontrolApiserverV1beta1PriorityLevelConfigurationStatus(
    name: string,
    body: IoK8sApiFlowcontrolV1beta1PriorityLevelConfiguration,
    pretty?: string,
    dryRun?: string,
    fieldManager?: string,
    options?: Configuration,
  ): Promise<RequestContext> {
    let config = options || this.configuration;

    // verify required parameter 'name' is not null or undefined
    if (name === null || name === undefined) {
      throw new RequiredError(
        "Required parameter name was null or undefined when calling replaceFlowcontrolApiserverV1beta1PriorityLevelConfigurationStatus.",
      );
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError(
        "Required parameter body was null or undefined when calling replaceFlowcontrolApiserverV1beta1PriorityLevelConfigurationStatus.",
      );
    }

    // Path Params
    const localVarPath =
      "/apis/flowcontrol.apiserver.k8s.io/v1beta1/prioritylevelconfigurations/{name}/status"
        .replace("{" + "name" + "}", encodeURIComponent(String(name)));

    // Make Request Context
    const requestContext = config.baseServer.makeRequestContext(
      localVarPath,
      HttpMethod.PUT,
    );
    requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8");

    // Query Params
    if (pretty !== undefined) {
      requestContext.setQueryParam(
        "pretty",
        ObjectSerializer.serialize(pretty, "string", ""),
      );
    }
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

    // Header Params

    // Form Params

    // Body Params
    const contentType = ObjectSerializer.getPreferredMediaType([]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = ObjectSerializer.stringify(
      ObjectSerializer.serialize(
        body,
        "IoK8sApiFlowcontrolV1beta1PriorityLevelConfiguration",
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
     * watch changes to an object of kind FlowSchema. deprecated: use the 'watch' parameter with a list operation instead, filtered to a single item with the 'fieldSelector' parameter.
     * @param name name of the FlowSchema
     * @param allowWatchBookmarks allowWatchBookmarks requests watch events with type \&quot;BOOKMARK\&quot;. Servers that do not implement bookmarks may ignore this flag and bookmarks are sent at the server&#39;s discretion. Clients should not assume bookmarks are returned at any specific interval, nor may they assume the server will send any BOOKMARK event during a session. If this is not a watch, this field is ignored. If the feature gate WatchBookmarks is not enabled in apiserver, this field is ignored.
     * @param _continue The continue option should be set when retrieving more results from the server. Since this value is server defined, clients may only use the continue value from a previous query result with identical query parameters (except for the value of continue) and the server may reject a continue value it does not recognize. If the specified continue value is no longer valid whether due to expiration (generally five to fifteen minutes) or a configuration change on the server, the server will respond with a 410 ResourceExpired error together with a continue token. If the client needs a consistent list, it must restart their list without the continue field. Otherwise, the client may send another list request with the token received with the 410 error, the server will respond with a list starting from the next key, but from the latest snapshot, which is inconsistent from the previous list results - objects that are created, modified, or deleted after the first list request will be included in the response, as long as their keys are after the \&quot;next key\&quot;.  This field is not supported when watch is true. Clients may start a watch from the last resourceVersion value returned by the server and not miss any modifications.
     * @param fieldSelector A selector to restrict the list of returned objects by their fields. Defaults to everything.
     * @param labelSelector A selector to restrict the list of returned objects by their labels. Defaults to everything.
     * @param limit limit is a maximum number of responses to return for a list call. If more items exist, the server will set the &#x60;continue&#x60; field on the list metadata to a value that can be used with the same initial query to retrieve the next set of results. Setting a limit may return fewer than the requested amount of items (up to zero items) in the event all requested objects are filtered out and clients should only use the presence of the continue field to determine whether more results are available. Servers may choose not to support the limit argument and will return all of the available results. If limit is specified and the continue field is empty, clients may assume that no more results are available. This field is not supported if watch is true.  The server guarantees that the objects returned when using continue will be identical to issuing a single list call without a limit - that is, no objects created, modified, or deleted after the first request is issued will be included in any subsequent continued requests. This is sometimes referred to as a consistent snapshot, and ensures that a client that is using limit to receive smaller chunks of a very large result can ensure they see all possible objects. If objects are updated during a chunked list the version of the object that was present at the time the first list result was calculated is returned.
     * @param pretty If &#39;true&#39;, then the output is pretty printed.
     * @param resourceVersion resourceVersion sets a constraint on what resource versions a request may be served from. See https://kubernetes.io/docs/reference/using-api/api-concepts/#resource-versions for details.  Defaults to unset
     * @param resourceVersionMatch resourceVersionMatch determines how resourceVersion is applied to list calls. It is highly recommended that resourceVersionMatch be set for list calls where resourceVersion is set See https://kubernetes.io/docs/reference/using-api/api-concepts/#resource-versions for details.  Defaults to unset
     * @param timeoutSeconds Timeout for the list/watch call. This limits the duration of the call, regardless of any activity or inactivity.
     * @param watch Watch for changes to the described resources and return them as a stream of add, update, and remove notifications. Specify resourceVersion.
     */
  public async watchFlowcontrolApiserverV1beta1FlowSchema(
    name: string,
    allowWatchBookmarks?: boolean,
    _continue?: string,
    fieldSelector?: string,
    labelSelector?: string,
    limit?: number,
    pretty?: string,
    resourceVersion?: string,
    resourceVersionMatch?: string,
    timeoutSeconds?: number,
    watch?: boolean,
    options?: Configuration,
  ): Promise<RequestContext> {
    let config = options || this.configuration;

    // verify required parameter 'name' is not null or undefined
    if (name === null || name === undefined) {
      throw new RequiredError(
        "Required parameter name was null or undefined when calling watchFlowcontrolApiserverV1beta1FlowSchema.",
      );
    }

    // Path Params
    const localVarPath =
      "/apis/flowcontrol.apiserver.k8s.io/v1beta1/watch/flowschemas/{name}"
        .replace("{" + "name" + "}", encodeURIComponent(String(name)));

    // Make Request Context
    const requestContext = config.baseServer.makeRequestContext(
      localVarPath,
      HttpMethod.GET,
    );
    requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8");

    // Query Params
    if (allowWatchBookmarks !== undefined) {
      requestContext.setQueryParam(
        "allowWatchBookmarks",
        ObjectSerializer.serialize(allowWatchBookmarks, "boolean", ""),
      );
    }
    if (_continue !== undefined) {
      requestContext.setQueryParam(
        "continue",
        ObjectSerializer.serialize(_continue, "string", ""),
      );
    }
    if (fieldSelector !== undefined) {
      requestContext.setQueryParam(
        "fieldSelector",
        ObjectSerializer.serialize(fieldSelector, "string", ""),
      );
    }
    if (labelSelector !== undefined) {
      requestContext.setQueryParam(
        "labelSelector",
        ObjectSerializer.serialize(labelSelector, "string", ""),
      );
    }
    if (limit !== undefined) {
      requestContext.setQueryParam(
        "limit",
        ObjectSerializer.serialize(limit, "number", ""),
      );
    }
    if (pretty !== undefined) {
      requestContext.setQueryParam(
        "pretty",
        ObjectSerializer.serialize(pretty, "string", ""),
      );
    }
    if (resourceVersion !== undefined) {
      requestContext.setQueryParam(
        "resourceVersion",
        ObjectSerializer.serialize(resourceVersion, "string", ""),
      );
    }
    if (resourceVersionMatch !== undefined) {
      requestContext.setQueryParam(
        "resourceVersionMatch",
        ObjectSerializer.serialize(resourceVersionMatch, "string", ""),
      );
    }
    if (timeoutSeconds !== undefined) {
      requestContext.setQueryParam(
        "timeoutSeconds",
        ObjectSerializer.serialize(timeoutSeconds, "number", ""),
      );
    }
    if (watch !== undefined) {
      requestContext.setQueryParam(
        "watch",
        ObjectSerializer.serialize(watch, "boolean", ""),
      );
    }

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

  /**
     * watch individual changes to a list of FlowSchema. deprecated: use the 'watch' parameter with a list operation instead.
     * @param allowWatchBookmarks allowWatchBookmarks requests watch events with type \&quot;BOOKMARK\&quot;. Servers that do not implement bookmarks may ignore this flag and bookmarks are sent at the server&#39;s discretion. Clients should not assume bookmarks are returned at any specific interval, nor may they assume the server will send any BOOKMARK event during a session. If this is not a watch, this field is ignored. If the feature gate WatchBookmarks is not enabled in apiserver, this field is ignored.
     * @param _continue The continue option should be set when retrieving more results from the server. Since this value is server defined, clients may only use the continue value from a previous query result with identical query parameters (except for the value of continue) and the server may reject a continue value it does not recognize. If the specified continue value is no longer valid whether due to expiration (generally five to fifteen minutes) or a configuration change on the server, the server will respond with a 410 ResourceExpired error together with a continue token. If the client needs a consistent list, it must restart their list without the continue field. Otherwise, the client may send another list request with the token received with the 410 error, the server will respond with a list starting from the next key, but from the latest snapshot, which is inconsistent from the previous list results - objects that are created, modified, or deleted after the first list request will be included in the response, as long as their keys are after the \&quot;next key\&quot;.  This field is not supported when watch is true. Clients may start a watch from the last resourceVersion value returned by the server and not miss any modifications.
     * @param fieldSelector A selector to restrict the list of returned objects by their fields. Defaults to everything.
     * @param labelSelector A selector to restrict the list of returned objects by their labels. Defaults to everything.
     * @param limit limit is a maximum number of responses to return for a list call. If more items exist, the server will set the &#x60;continue&#x60; field on the list metadata to a value that can be used with the same initial query to retrieve the next set of results. Setting a limit may return fewer than the requested amount of items (up to zero items) in the event all requested objects are filtered out and clients should only use the presence of the continue field to determine whether more results are available. Servers may choose not to support the limit argument and will return all of the available results. If limit is specified and the continue field is empty, clients may assume that no more results are available. This field is not supported if watch is true.  The server guarantees that the objects returned when using continue will be identical to issuing a single list call without a limit - that is, no objects created, modified, or deleted after the first request is issued will be included in any subsequent continued requests. This is sometimes referred to as a consistent snapshot, and ensures that a client that is using limit to receive smaller chunks of a very large result can ensure they see all possible objects. If objects are updated during a chunked list the version of the object that was present at the time the first list result was calculated is returned.
     * @param pretty If &#39;true&#39;, then the output is pretty printed.
     * @param resourceVersion resourceVersion sets a constraint on what resource versions a request may be served from. See https://kubernetes.io/docs/reference/using-api/api-concepts/#resource-versions for details.  Defaults to unset
     * @param resourceVersionMatch resourceVersionMatch determines how resourceVersion is applied to list calls. It is highly recommended that resourceVersionMatch be set for list calls where resourceVersion is set See https://kubernetes.io/docs/reference/using-api/api-concepts/#resource-versions for details.  Defaults to unset
     * @param timeoutSeconds Timeout for the list/watch call. This limits the duration of the call, regardless of any activity or inactivity.
     * @param watch Watch for changes to the described resources and return them as a stream of add, update, and remove notifications. Specify resourceVersion.
     */
  public async watchFlowcontrolApiserverV1beta1FlowSchemaList(
    allowWatchBookmarks?: boolean,
    _continue?: string,
    fieldSelector?: string,
    labelSelector?: string,
    limit?: number,
    pretty?: string,
    resourceVersion?: string,
    resourceVersionMatch?: string,
    timeoutSeconds?: number,
    watch?: boolean,
    options?: Configuration,
  ): Promise<RequestContext> {
    let config = options || this.configuration;

    // Path Params
    const localVarPath =
      "/apis/flowcontrol.apiserver.k8s.io/v1beta1/watch/flowschemas";

    // Make Request Context
    const requestContext = config.baseServer.makeRequestContext(
      localVarPath,
      HttpMethod.GET,
    );
    requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8");

    // Query Params
    if (allowWatchBookmarks !== undefined) {
      requestContext.setQueryParam(
        "allowWatchBookmarks",
        ObjectSerializer.serialize(allowWatchBookmarks, "boolean", ""),
      );
    }
    if (_continue !== undefined) {
      requestContext.setQueryParam(
        "continue",
        ObjectSerializer.serialize(_continue, "string", ""),
      );
    }
    if (fieldSelector !== undefined) {
      requestContext.setQueryParam(
        "fieldSelector",
        ObjectSerializer.serialize(fieldSelector, "string", ""),
      );
    }
    if (labelSelector !== undefined) {
      requestContext.setQueryParam(
        "labelSelector",
        ObjectSerializer.serialize(labelSelector, "string", ""),
      );
    }
    if (limit !== undefined) {
      requestContext.setQueryParam(
        "limit",
        ObjectSerializer.serialize(limit, "number", ""),
      );
    }
    if (pretty !== undefined) {
      requestContext.setQueryParam(
        "pretty",
        ObjectSerializer.serialize(pretty, "string", ""),
      );
    }
    if (resourceVersion !== undefined) {
      requestContext.setQueryParam(
        "resourceVersion",
        ObjectSerializer.serialize(resourceVersion, "string", ""),
      );
    }
    if (resourceVersionMatch !== undefined) {
      requestContext.setQueryParam(
        "resourceVersionMatch",
        ObjectSerializer.serialize(resourceVersionMatch, "string", ""),
      );
    }
    if (timeoutSeconds !== undefined) {
      requestContext.setQueryParam(
        "timeoutSeconds",
        ObjectSerializer.serialize(timeoutSeconds, "number", ""),
      );
    }
    if (watch !== undefined) {
      requestContext.setQueryParam(
        "watch",
        ObjectSerializer.serialize(watch, "boolean", ""),
      );
    }

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

  /**
     * watch changes to an object of kind PriorityLevelConfiguration. deprecated: use the 'watch' parameter with a list operation instead, filtered to a single item with the 'fieldSelector' parameter.
     * @param name name of the PriorityLevelConfiguration
     * @param allowWatchBookmarks allowWatchBookmarks requests watch events with type \&quot;BOOKMARK\&quot;. Servers that do not implement bookmarks may ignore this flag and bookmarks are sent at the server&#39;s discretion. Clients should not assume bookmarks are returned at any specific interval, nor may they assume the server will send any BOOKMARK event during a session. If this is not a watch, this field is ignored. If the feature gate WatchBookmarks is not enabled in apiserver, this field is ignored.
     * @param _continue The continue option should be set when retrieving more results from the server. Since this value is server defined, clients may only use the continue value from a previous query result with identical query parameters (except for the value of continue) and the server may reject a continue value it does not recognize. If the specified continue value is no longer valid whether due to expiration (generally five to fifteen minutes) or a configuration change on the server, the server will respond with a 410 ResourceExpired error together with a continue token. If the client needs a consistent list, it must restart their list without the continue field. Otherwise, the client may send another list request with the token received with the 410 error, the server will respond with a list starting from the next key, but from the latest snapshot, which is inconsistent from the previous list results - objects that are created, modified, or deleted after the first list request will be included in the response, as long as their keys are after the \&quot;next key\&quot;.  This field is not supported when watch is true. Clients may start a watch from the last resourceVersion value returned by the server and not miss any modifications.
     * @param fieldSelector A selector to restrict the list of returned objects by their fields. Defaults to everything.
     * @param labelSelector A selector to restrict the list of returned objects by their labels. Defaults to everything.
     * @param limit limit is a maximum number of responses to return for a list call. If more items exist, the server will set the &#x60;continue&#x60; field on the list metadata to a value that can be used with the same initial query to retrieve the next set of results. Setting a limit may return fewer than the requested amount of items (up to zero items) in the event all requested objects are filtered out and clients should only use the presence of the continue field to determine whether more results are available. Servers may choose not to support the limit argument and will return all of the available results. If limit is specified and the continue field is empty, clients may assume that no more results are available. This field is not supported if watch is true.  The server guarantees that the objects returned when using continue will be identical to issuing a single list call without a limit - that is, no objects created, modified, or deleted after the first request is issued will be included in any subsequent continued requests. This is sometimes referred to as a consistent snapshot, and ensures that a client that is using limit to receive smaller chunks of a very large result can ensure they see all possible objects. If objects are updated during a chunked list the version of the object that was present at the time the first list result was calculated is returned.
     * @param pretty If &#39;true&#39;, then the output is pretty printed.
     * @param resourceVersion resourceVersion sets a constraint on what resource versions a request may be served from. See https://kubernetes.io/docs/reference/using-api/api-concepts/#resource-versions for details.  Defaults to unset
     * @param resourceVersionMatch resourceVersionMatch determines how resourceVersion is applied to list calls. It is highly recommended that resourceVersionMatch be set for list calls where resourceVersion is set See https://kubernetes.io/docs/reference/using-api/api-concepts/#resource-versions for details.  Defaults to unset
     * @param timeoutSeconds Timeout for the list/watch call. This limits the duration of the call, regardless of any activity or inactivity.
     * @param watch Watch for changes to the described resources and return them as a stream of add, update, and remove notifications. Specify resourceVersion.
     */
  public async watchFlowcontrolApiserverV1beta1PriorityLevelConfiguration(
    name: string,
    allowWatchBookmarks?: boolean,
    _continue?: string,
    fieldSelector?: string,
    labelSelector?: string,
    limit?: number,
    pretty?: string,
    resourceVersion?: string,
    resourceVersionMatch?: string,
    timeoutSeconds?: number,
    watch?: boolean,
    options?: Configuration,
  ): Promise<RequestContext> {
    let config = options || this.configuration;

    // verify required parameter 'name' is not null or undefined
    if (name === null || name === undefined) {
      throw new RequiredError(
        "Required parameter name was null or undefined when calling watchFlowcontrolApiserverV1beta1PriorityLevelConfiguration.",
      );
    }

    // Path Params
    const localVarPath =
      "/apis/flowcontrol.apiserver.k8s.io/v1beta1/watch/prioritylevelconfigurations/{name}"
        .replace("{" + "name" + "}", encodeURIComponent(String(name)));

    // Make Request Context
    const requestContext = config.baseServer.makeRequestContext(
      localVarPath,
      HttpMethod.GET,
    );
    requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8");

    // Query Params
    if (allowWatchBookmarks !== undefined) {
      requestContext.setQueryParam(
        "allowWatchBookmarks",
        ObjectSerializer.serialize(allowWatchBookmarks, "boolean", ""),
      );
    }
    if (_continue !== undefined) {
      requestContext.setQueryParam(
        "continue",
        ObjectSerializer.serialize(_continue, "string", ""),
      );
    }
    if (fieldSelector !== undefined) {
      requestContext.setQueryParam(
        "fieldSelector",
        ObjectSerializer.serialize(fieldSelector, "string", ""),
      );
    }
    if (labelSelector !== undefined) {
      requestContext.setQueryParam(
        "labelSelector",
        ObjectSerializer.serialize(labelSelector, "string", ""),
      );
    }
    if (limit !== undefined) {
      requestContext.setQueryParam(
        "limit",
        ObjectSerializer.serialize(limit, "number", ""),
      );
    }
    if (pretty !== undefined) {
      requestContext.setQueryParam(
        "pretty",
        ObjectSerializer.serialize(pretty, "string", ""),
      );
    }
    if (resourceVersion !== undefined) {
      requestContext.setQueryParam(
        "resourceVersion",
        ObjectSerializer.serialize(resourceVersion, "string", ""),
      );
    }
    if (resourceVersionMatch !== undefined) {
      requestContext.setQueryParam(
        "resourceVersionMatch",
        ObjectSerializer.serialize(resourceVersionMatch, "string", ""),
      );
    }
    if (timeoutSeconds !== undefined) {
      requestContext.setQueryParam(
        "timeoutSeconds",
        ObjectSerializer.serialize(timeoutSeconds, "number", ""),
      );
    }
    if (watch !== undefined) {
      requestContext.setQueryParam(
        "watch",
        ObjectSerializer.serialize(watch, "boolean", ""),
      );
    }

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

  /**
     * watch individual changes to a list of PriorityLevelConfiguration. deprecated: use the 'watch' parameter with a list operation instead.
     * @param allowWatchBookmarks allowWatchBookmarks requests watch events with type \&quot;BOOKMARK\&quot;. Servers that do not implement bookmarks may ignore this flag and bookmarks are sent at the server&#39;s discretion. Clients should not assume bookmarks are returned at any specific interval, nor may they assume the server will send any BOOKMARK event during a session. If this is not a watch, this field is ignored. If the feature gate WatchBookmarks is not enabled in apiserver, this field is ignored.
     * @param _continue The continue option should be set when retrieving more results from the server. Since this value is server defined, clients may only use the continue value from a previous query result with identical query parameters (except for the value of continue) and the server may reject a continue value it does not recognize. If the specified continue value is no longer valid whether due to expiration (generally five to fifteen minutes) or a configuration change on the server, the server will respond with a 410 ResourceExpired error together with a continue token. If the client needs a consistent list, it must restart their list without the continue field. Otherwise, the client may send another list request with the token received with the 410 error, the server will respond with a list starting from the next key, but from the latest snapshot, which is inconsistent from the previous list results - objects that are created, modified, or deleted after the first list request will be included in the response, as long as their keys are after the \&quot;next key\&quot;.  This field is not supported when watch is true. Clients may start a watch from the last resourceVersion value returned by the server and not miss any modifications.
     * @param fieldSelector A selector to restrict the list of returned objects by their fields. Defaults to everything.
     * @param labelSelector A selector to restrict the list of returned objects by their labels. Defaults to everything.
     * @param limit limit is a maximum number of responses to return for a list call. If more items exist, the server will set the &#x60;continue&#x60; field on the list metadata to a value that can be used with the same initial query to retrieve the next set of results. Setting a limit may return fewer than the requested amount of items (up to zero items) in the event all requested objects are filtered out and clients should only use the presence of the continue field to determine whether more results are available. Servers may choose not to support the limit argument and will return all of the available results. If limit is specified and the continue field is empty, clients may assume that no more results are available. This field is not supported if watch is true.  The server guarantees that the objects returned when using continue will be identical to issuing a single list call without a limit - that is, no objects created, modified, or deleted after the first request is issued will be included in any subsequent continued requests. This is sometimes referred to as a consistent snapshot, and ensures that a client that is using limit to receive smaller chunks of a very large result can ensure they see all possible objects. If objects are updated during a chunked list the version of the object that was present at the time the first list result was calculated is returned.
     * @param pretty If &#39;true&#39;, then the output is pretty printed.
     * @param resourceVersion resourceVersion sets a constraint on what resource versions a request may be served from. See https://kubernetes.io/docs/reference/using-api/api-concepts/#resource-versions for details.  Defaults to unset
     * @param resourceVersionMatch resourceVersionMatch determines how resourceVersion is applied to list calls. It is highly recommended that resourceVersionMatch be set for list calls where resourceVersion is set See https://kubernetes.io/docs/reference/using-api/api-concepts/#resource-versions for details.  Defaults to unset
     * @param timeoutSeconds Timeout for the list/watch call. This limits the duration of the call, regardless of any activity or inactivity.
     * @param watch Watch for changes to the described resources and return them as a stream of add, update, and remove notifications. Specify resourceVersion.
     */
  public async watchFlowcontrolApiserverV1beta1PriorityLevelConfigurationList(
    allowWatchBookmarks?: boolean,
    _continue?: string,
    fieldSelector?: string,
    labelSelector?: string,
    limit?: number,
    pretty?: string,
    resourceVersion?: string,
    resourceVersionMatch?: string,
    timeoutSeconds?: number,
    watch?: boolean,
    options?: Configuration,
  ): Promise<RequestContext> {
    let config = options || this.configuration;

    // Path Params
    const localVarPath =
      "/apis/flowcontrol.apiserver.k8s.io/v1beta1/watch/prioritylevelconfigurations";

    // Make Request Context
    const requestContext = config.baseServer.makeRequestContext(
      localVarPath,
      HttpMethod.GET,
    );
    requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8");

    // Query Params
    if (allowWatchBookmarks !== undefined) {
      requestContext.setQueryParam(
        "allowWatchBookmarks",
        ObjectSerializer.serialize(allowWatchBookmarks, "boolean", ""),
      );
    }
    if (_continue !== undefined) {
      requestContext.setQueryParam(
        "continue",
        ObjectSerializer.serialize(_continue, "string", ""),
      );
    }
    if (fieldSelector !== undefined) {
      requestContext.setQueryParam(
        "fieldSelector",
        ObjectSerializer.serialize(fieldSelector, "string", ""),
      );
    }
    if (labelSelector !== undefined) {
      requestContext.setQueryParam(
        "labelSelector",
        ObjectSerializer.serialize(labelSelector, "string", ""),
      );
    }
    if (limit !== undefined) {
      requestContext.setQueryParam(
        "limit",
        ObjectSerializer.serialize(limit, "number", ""),
      );
    }
    if (pretty !== undefined) {
      requestContext.setQueryParam(
        "pretty",
        ObjectSerializer.serialize(pretty, "string", ""),
      );
    }
    if (resourceVersion !== undefined) {
      requestContext.setQueryParam(
        "resourceVersion",
        ObjectSerializer.serialize(resourceVersion, "string", ""),
      );
    }
    if (resourceVersionMatch !== undefined) {
      requestContext.setQueryParam(
        "resourceVersionMatch",
        ObjectSerializer.serialize(resourceVersionMatch, "string", ""),
      );
    }
    if (timeoutSeconds !== undefined) {
      requestContext.setQueryParam(
        "timeoutSeconds",
        ObjectSerializer.serialize(timeoutSeconds, "number", ""),
      );
    }
    if (watch !== undefined) {
      requestContext.setQueryParam(
        "watch",
        ObjectSerializer.serialize(watch, "boolean", ""),
      );
    }

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

export class FlowcontrolApiserverV1beta1ApiResponseProcessor {
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to createFlowcontrolApiserverV1beta1FlowSchema
     * @throws ApiException if the response code was not in [200, 299]
     */
  public async createFlowcontrolApiserverV1beta1FlowSchema(
    response: ResponseContext,
  ): Promise<IoK8sApiFlowcontrolV1beta1FlowSchema> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"],
    );
    if (isCodeInRange("200", response.httpStatusCode)) {
      const body: IoK8sApiFlowcontrolV1beta1FlowSchema = ObjectSerializer
        .deserialize(
          ObjectSerializer.parse(await response.body.text(), contentType),
          "IoK8sApiFlowcontrolV1beta1FlowSchema",
          "",
        ) as IoK8sApiFlowcontrolV1beta1FlowSchema;
      return body;
    }
    if (isCodeInRange("201", response.httpStatusCode)) {
      const body: IoK8sApiFlowcontrolV1beta1FlowSchema = ObjectSerializer
        .deserialize(
          ObjectSerializer.parse(await response.body.text(), contentType),
          "IoK8sApiFlowcontrolV1beta1FlowSchema",
          "",
        ) as IoK8sApiFlowcontrolV1beta1FlowSchema;
      return body;
    }
    if (isCodeInRange("202", response.httpStatusCode)) {
      const body: IoK8sApiFlowcontrolV1beta1FlowSchema = ObjectSerializer
        .deserialize(
          ObjectSerializer.parse(await response.body.text(), contentType),
          "IoK8sApiFlowcontrolV1beta1FlowSchema",
          "",
        ) as IoK8sApiFlowcontrolV1beta1FlowSchema;
      return body;
    }
    if (isCodeInRange("401", response.httpStatusCode)) {
      throw new ApiException<string>(response.httpStatusCode, "Unauthorized");
    }

    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body: IoK8sApiFlowcontrolV1beta1FlowSchema = ObjectSerializer
        .deserialize(
          ObjectSerializer.parse(await response.body.text(), contentType),
          "IoK8sApiFlowcontrolV1beta1FlowSchema",
          "",
        ) as IoK8sApiFlowcontrolV1beta1FlowSchema;
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
     * @params response Response returned by the server for a request to createFlowcontrolApiserverV1beta1PriorityLevelConfiguration
     * @throws ApiException if the response code was not in [200, 299]
     */
  public async createFlowcontrolApiserverV1beta1PriorityLevelConfiguration(
    response: ResponseContext,
  ): Promise<IoK8sApiFlowcontrolV1beta1PriorityLevelConfiguration> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"],
    );
    if (isCodeInRange("200", response.httpStatusCode)) {
      const body: IoK8sApiFlowcontrolV1beta1PriorityLevelConfiguration =
        ObjectSerializer.deserialize(
          ObjectSerializer.parse(await response.body.text(), contentType),
          "IoK8sApiFlowcontrolV1beta1PriorityLevelConfiguration",
          "",
        ) as IoK8sApiFlowcontrolV1beta1PriorityLevelConfiguration;
      return body;
    }
    if (isCodeInRange("201", response.httpStatusCode)) {
      const body: IoK8sApiFlowcontrolV1beta1PriorityLevelConfiguration =
        ObjectSerializer.deserialize(
          ObjectSerializer.parse(await response.body.text(), contentType),
          "IoK8sApiFlowcontrolV1beta1PriorityLevelConfiguration",
          "",
        ) as IoK8sApiFlowcontrolV1beta1PriorityLevelConfiguration;
      return body;
    }
    if (isCodeInRange("202", response.httpStatusCode)) {
      const body: IoK8sApiFlowcontrolV1beta1PriorityLevelConfiguration =
        ObjectSerializer.deserialize(
          ObjectSerializer.parse(await response.body.text(), contentType),
          "IoK8sApiFlowcontrolV1beta1PriorityLevelConfiguration",
          "",
        ) as IoK8sApiFlowcontrolV1beta1PriorityLevelConfiguration;
      return body;
    }
    if (isCodeInRange("401", response.httpStatusCode)) {
      throw new ApiException<string>(response.httpStatusCode, "Unauthorized");
    }

    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body: IoK8sApiFlowcontrolV1beta1PriorityLevelConfiguration =
        ObjectSerializer.deserialize(
          ObjectSerializer.parse(await response.body.text(), contentType),
          "IoK8sApiFlowcontrolV1beta1PriorityLevelConfiguration",
          "",
        ) as IoK8sApiFlowcontrolV1beta1PriorityLevelConfiguration;
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
     * @params response Response returned by the server for a request to deleteFlowcontrolApiserverV1beta1CollectionFlowSchema
     * @throws ApiException if the response code was not in [200, 299]
     */
  public async deleteFlowcontrolApiserverV1beta1CollectionFlowSchema(
    response: ResponseContext,
  ): Promise<IoK8sApimachineryPkgApisMetaV1Status> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"],
    );
    if (isCodeInRange("200", response.httpStatusCode)) {
      const body: IoK8sApimachineryPkgApisMetaV1Status = ObjectSerializer
        .deserialize(
          ObjectSerializer.parse(await response.body.text(), contentType),
          "IoK8sApimachineryPkgApisMetaV1Status",
          "",
        ) as IoK8sApimachineryPkgApisMetaV1Status;
      return body;
    }
    if (isCodeInRange("401", response.httpStatusCode)) {
      throw new ApiException<string>(response.httpStatusCode, "Unauthorized");
    }

    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body: IoK8sApimachineryPkgApisMetaV1Status = ObjectSerializer
        .deserialize(
          ObjectSerializer.parse(await response.body.text(), contentType),
          "IoK8sApimachineryPkgApisMetaV1Status",
          "",
        ) as IoK8sApimachineryPkgApisMetaV1Status;
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
     * @params response Response returned by the server for a request to deleteFlowcontrolApiserverV1beta1CollectionPriorityLevelConfiguration
     * @throws ApiException if the response code was not in [200, 299]
     */
  public async deleteFlowcontrolApiserverV1beta1CollectionPriorityLevelConfiguration(
    response: ResponseContext,
  ): Promise<IoK8sApimachineryPkgApisMetaV1Status> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"],
    );
    if (isCodeInRange("200", response.httpStatusCode)) {
      const body: IoK8sApimachineryPkgApisMetaV1Status = ObjectSerializer
        .deserialize(
          ObjectSerializer.parse(await response.body.text(), contentType),
          "IoK8sApimachineryPkgApisMetaV1Status",
          "",
        ) as IoK8sApimachineryPkgApisMetaV1Status;
      return body;
    }
    if (isCodeInRange("401", response.httpStatusCode)) {
      throw new ApiException<string>(response.httpStatusCode, "Unauthorized");
    }

    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body: IoK8sApimachineryPkgApisMetaV1Status = ObjectSerializer
        .deserialize(
          ObjectSerializer.parse(await response.body.text(), contentType),
          "IoK8sApimachineryPkgApisMetaV1Status",
          "",
        ) as IoK8sApimachineryPkgApisMetaV1Status;
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
     * @params response Response returned by the server for a request to deleteFlowcontrolApiserverV1beta1FlowSchema
     * @throws ApiException if the response code was not in [200, 299]
     */
  public async deleteFlowcontrolApiserverV1beta1FlowSchema(
    response: ResponseContext,
  ): Promise<IoK8sApimachineryPkgApisMetaV1Status> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"],
    );
    if (isCodeInRange("200", response.httpStatusCode)) {
      const body: IoK8sApimachineryPkgApisMetaV1Status = ObjectSerializer
        .deserialize(
          ObjectSerializer.parse(await response.body.text(), contentType),
          "IoK8sApimachineryPkgApisMetaV1Status",
          "",
        ) as IoK8sApimachineryPkgApisMetaV1Status;
      return body;
    }
    if (isCodeInRange("202", response.httpStatusCode)) {
      const body: IoK8sApimachineryPkgApisMetaV1Status = ObjectSerializer
        .deserialize(
          ObjectSerializer.parse(await response.body.text(), contentType),
          "IoK8sApimachineryPkgApisMetaV1Status",
          "",
        ) as IoK8sApimachineryPkgApisMetaV1Status;
      return body;
    }
    if (isCodeInRange("401", response.httpStatusCode)) {
      throw new ApiException<string>(response.httpStatusCode, "Unauthorized");
    }

    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body: IoK8sApimachineryPkgApisMetaV1Status = ObjectSerializer
        .deserialize(
          ObjectSerializer.parse(await response.body.text(), contentType),
          "IoK8sApimachineryPkgApisMetaV1Status",
          "",
        ) as IoK8sApimachineryPkgApisMetaV1Status;
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
     * @params response Response returned by the server for a request to deleteFlowcontrolApiserverV1beta1PriorityLevelConfiguration
     * @throws ApiException if the response code was not in [200, 299]
     */
  public async deleteFlowcontrolApiserverV1beta1PriorityLevelConfiguration(
    response: ResponseContext,
  ): Promise<IoK8sApimachineryPkgApisMetaV1Status> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"],
    );
    if (isCodeInRange("200", response.httpStatusCode)) {
      const body: IoK8sApimachineryPkgApisMetaV1Status = ObjectSerializer
        .deserialize(
          ObjectSerializer.parse(await response.body.text(), contentType),
          "IoK8sApimachineryPkgApisMetaV1Status",
          "",
        ) as IoK8sApimachineryPkgApisMetaV1Status;
      return body;
    }
    if (isCodeInRange("202", response.httpStatusCode)) {
      const body: IoK8sApimachineryPkgApisMetaV1Status = ObjectSerializer
        .deserialize(
          ObjectSerializer.parse(await response.body.text(), contentType),
          "IoK8sApimachineryPkgApisMetaV1Status",
          "",
        ) as IoK8sApimachineryPkgApisMetaV1Status;
      return body;
    }
    if (isCodeInRange("401", response.httpStatusCode)) {
      throw new ApiException<string>(response.httpStatusCode, "Unauthorized");
    }

    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body: IoK8sApimachineryPkgApisMetaV1Status = ObjectSerializer
        .deserialize(
          ObjectSerializer.parse(await response.body.text(), contentType),
          "IoK8sApimachineryPkgApisMetaV1Status",
          "",
        ) as IoK8sApimachineryPkgApisMetaV1Status;
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
     * @params response Response returned by the server for a request to getFlowcontrolApiserverV1beta1APIResources
     * @throws ApiException if the response code was not in [200, 299]
     */
  public async getFlowcontrolApiserverV1beta1APIResources(
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

  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to listFlowcontrolApiserverV1beta1FlowSchema
     * @throws ApiException if the response code was not in [200, 299]
     */
  public async listFlowcontrolApiserverV1beta1FlowSchema(
    response: ResponseContext,
  ): Promise<IoK8sApiFlowcontrolV1beta1FlowSchemaList> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"],
    );
    if (isCodeInRange("200", response.httpStatusCode)) {
      const body: IoK8sApiFlowcontrolV1beta1FlowSchemaList = ObjectSerializer
        .deserialize(
          ObjectSerializer.parse(await response.body.text(), contentType),
          "IoK8sApiFlowcontrolV1beta1FlowSchemaList",
          "",
        ) as IoK8sApiFlowcontrolV1beta1FlowSchemaList;
      return body;
    }
    if (isCodeInRange("401", response.httpStatusCode)) {
      throw new ApiException<string>(response.httpStatusCode, "Unauthorized");
    }

    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body: IoK8sApiFlowcontrolV1beta1FlowSchemaList = ObjectSerializer
        .deserialize(
          ObjectSerializer.parse(await response.body.text(), contentType),
          "IoK8sApiFlowcontrolV1beta1FlowSchemaList",
          "",
        ) as IoK8sApiFlowcontrolV1beta1FlowSchemaList;
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
     * @params response Response returned by the server for a request to listFlowcontrolApiserverV1beta1PriorityLevelConfiguration
     * @throws ApiException if the response code was not in [200, 299]
     */
  public async listFlowcontrolApiserverV1beta1PriorityLevelConfiguration(
    response: ResponseContext,
  ): Promise<IoK8sApiFlowcontrolV1beta1PriorityLevelConfigurationList> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"],
    );
    if (isCodeInRange("200", response.httpStatusCode)) {
      const body: IoK8sApiFlowcontrolV1beta1PriorityLevelConfigurationList =
        ObjectSerializer.deserialize(
          ObjectSerializer.parse(await response.body.text(), contentType),
          "IoK8sApiFlowcontrolV1beta1PriorityLevelConfigurationList",
          "",
        ) as IoK8sApiFlowcontrolV1beta1PriorityLevelConfigurationList;
      return body;
    }
    if (isCodeInRange("401", response.httpStatusCode)) {
      throw new ApiException<string>(response.httpStatusCode, "Unauthorized");
    }

    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body: IoK8sApiFlowcontrolV1beta1PriorityLevelConfigurationList =
        ObjectSerializer.deserialize(
          ObjectSerializer.parse(await response.body.text(), contentType),
          "IoK8sApiFlowcontrolV1beta1PriorityLevelConfigurationList",
          "",
        ) as IoK8sApiFlowcontrolV1beta1PriorityLevelConfigurationList;
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
     * @params response Response returned by the server for a request to patchFlowcontrolApiserverV1beta1FlowSchema
     * @throws ApiException if the response code was not in [200, 299]
     */
  public async patchFlowcontrolApiserverV1beta1FlowSchema(
    response: ResponseContext,
  ): Promise<IoK8sApiFlowcontrolV1beta1FlowSchema> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"],
    );
    if (isCodeInRange("200", response.httpStatusCode)) {
      const body: IoK8sApiFlowcontrolV1beta1FlowSchema = ObjectSerializer
        .deserialize(
          ObjectSerializer.parse(await response.body.text(), contentType),
          "IoK8sApiFlowcontrolV1beta1FlowSchema",
          "",
        ) as IoK8sApiFlowcontrolV1beta1FlowSchema;
      return body;
    }
    if (isCodeInRange("401", response.httpStatusCode)) {
      throw new ApiException<string>(response.httpStatusCode, "Unauthorized");
    }

    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body: IoK8sApiFlowcontrolV1beta1FlowSchema = ObjectSerializer
        .deserialize(
          ObjectSerializer.parse(await response.body.text(), contentType),
          "IoK8sApiFlowcontrolV1beta1FlowSchema",
          "",
        ) as IoK8sApiFlowcontrolV1beta1FlowSchema;
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
     * @params response Response returned by the server for a request to patchFlowcontrolApiserverV1beta1FlowSchemaStatus
     * @throws ApiException if the response code was not in [200, 299]
     */
  public async patchFlowcontrolApiserverV1beta1FlowSchemaStatus(
    response: ResponseContext,
  ): Promise<IoK8sApiFlowcontrolV1beta1FlowSchema> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"],
    );
    if (isCodeInRange("200", response.httpStatusCode)) {
      const body: IoK8sApiFlowcontrolV1beta1FlowSchema = ObjectSerializer
        .deserialize(
          ObjectSerializer.parse(await response.body.text(), contentType),
          "IoK8sApiFlowcontrolV1beta1FlowSchema",
          "",
        ) as IoK8sApiFlowcontrolV1beta1FlowSchema;
      return body;
    }
    if (isCodeInRange("401", response.httpStatusCode)) {
      throw new ApiException<string>(response.httpStatusCode, "Unauthorized");
    }

    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body: IoK8sApiFlowcontrolV1beta1FlowSchema = ObjectSerializer
        .deserialize(
          ObjectSerializer.parse(await response.body.text(), contentType),
          "IoK8sApiFlowcontrolV1beta1FlowSchema",
          "",
        ) as IoK8sApiFlowcontrolV1beta1FlowSchema;
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
     * @params response Response returned by the server for a request to patchFlowcontrolApiserverV1beta1PriorityLevelConfiguration
     * @throws ApiException if the response code was not in [200, 299]
     */
  public async patchFlowcontrolApiserverV1beta1PriorityLevelConfiguration(
    response: ResponseContext,
  ): Promise<IoK8sApiFlowcontrolV1beta1PriorityLevelConfiguration> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"],
    );
    if (isCodeInRange("200", response.httpStatusCode)) {
      const body: IoK8sApiFlowcontrolV1beta1PriorityLevelConfiguration =
        ObjectSerializer.deserialize(
          ObjectSerializer.parse(await response.body.text(), contentType),
          "IoK8sApiFlowcontrolV1beta1PriorityLevelConfiguration",
          "",
        ) as IoK8sApiFlowcontrolV1beta1PriorityLevelConfiguration;
      return body;
    }
    if (isCodeInRange("401", response.httpStatusCode)) {
      throw new ApiException<string>(response.httpStatusCode, "Unauthorized");
    }

    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body: IoK8sApiFlowcontrolV1beta1PriorityLevelConfiguration =
        ObjectSerializer.deserialize(
          ObjectSerializer.parse(await response.body.text(), contentType),
          "IoK8sApiFlowcontrolV1beta1PriorityLevelConfiguration",
          "",
        ) as IoK8sApiFlowcontrolV1beta1PriorityLevelConfiguration;
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
     * @params response Response returned by the server for a request to patchFlowcontrolApiserverV1beta1PriorityLevelConfigurationStatus
     * @throws ApiException if the response code was not in [200, 299]
     */
  public async patchFlowcontrolApiserverV1beta1PriorityLevelConfigurationStatus(
    response: ResponseContext,
  ): Promise<IoK8sApiFlowcontrolV1beta1PriorityLevelConfiguration> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"],
    );
    if (isCodeInRange("200", response.httpStatusCode)) {
      const body: IoK8sApiFlowcontrolV1beta1PriorityLevelConfiguration =
        ObjectSerializer.deserialize(
          ObjectSerializer.parse(await response.body.text(), contentType),
          "IoK8sApiFlowcontrolV1beta1PriorityLevelConfiguration",
          "",
        ) as IoK8sApiFlowcontrolV1beta1PriorityLevelConfiguration;
      return body;
    }
    if (isCodeInRange("401", response.httpStatusCode)) {
      throw new ApiException<string>(response.httpStatusCode, "Unauthorized");
    }

    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body: IoK8sApiFlowcontrolV1beta1PriorityLevelConfiguration =
        ObjectSerializer.deserialize(
          ObjectSerializer.parse(await response.body.text(), contentType),
          "IoK8sApiFlowcontrolV1beta1PriorityLevelConfiguration",
          "",
        ) as IoK8sApiFlowcontrolV1beta1PriorityLevelConfiguration;
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
     * @params response Response returned by the server for a request to readFlowcontrolApiserverV1beta1FlowSchema
     * @throws ApiException if the response code was not in [200, 299]
     */
  public async readFlowcontrolApiserverV1beta1FlowSchema(
    response: ResponseContext,
  ): Promise<IoK8sApiFlowcontrolV1beta1FlowSchema> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"],
    );
    if (isCodeInRange("200", response.httpStatusCode)) {
      const body: IoK8sApiFlowcontrolV1beta1FlowSchema = ObjectSerializer
        .deserialize(
          ObjectSerializer.parse(await response.body.text(), contentType),
          "IoK8sApiFlowcontrolV1beta1FlowSchema",
          "",
        ) as IoK8sApiFlowcontrolV1beta1FlowSchema;
      return body;
    }
    if (isCodeInRange("401", response.httpStatusCode)) {
      throw new ApiException<string>(response.httpStatusCode, "Unauthorized");
    }

    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body: IoK8sApiFlowcontrolV1beta1FlowSchema = ObjectSerializer
        .deserialize(
          ObjectSerializer.parse(await response.body.text(), contentType),
          "IoK8sApiFlowcontrolV1beta1FlowSchema",
          "",
        ) as IoK8sApiFlowcontrolV1beta1FlowSchema;
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
     * @params response Response returned by the server for a request to readFlowcontrolApiserverV1beta1FlowSchemaStatus
     * @throws ApiException if the response code was not in [200, 299]
     */
  public async readFlowcontrolApiserverV1beta1FlowSchemaStatus(
    response: ResponseContext,
  ): Promise<IoK8sApiFlowcontrolV1beta1FlowSchema> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"],
    );
    if (isCodeInRange("200", response.httpStatusCode)) {
      const body: IoK8sApiFlowcontrolV1beta1FlowSchema = ObjectSerializer
        .deserialize(
          ObjectSerializer.parse(await response.body.text(), contentType),
          "IoK8sApiFlowcontrolV1beta1FlowSchema",
          "",
        ) as IoK8sApiFlowcontrolV1beta1FlowSchema;
      return body;
    }
    if (isCodeInRange("401", response.httpStatusCode)) {
      throw new ApiException<string>(response.httpStatusCode, "Unauthorized");
    }

    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body: IoK8sApiFlowcontrolV1beta1FlowSchema = ObjectSerializer
        .deserialize(
          ObjectSerializer.parse(await response.body.text(), contentType),
          "IoK8sApiFlowcontrolV1beta1FlowSchema",
          "",
        ) as IoK8sApiFlowcontrolV1beta1FlowSchema;
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
     * @params response Response returned by the server for a request to readFlowcontrolApiserverV1beta1PriorityLevelConfiguration
     * @throws ApiException if the response code was not in [200, 299]
     */
  public async readFlowcontrolApiserverV1beta1PriorityLevelConfiguration(
    response: ResponseContext,
  ): Promise<IoK8sApiFlowcontrolV1beta1PriorityLevelConfiguration> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"],
    );
    if (isCodeInRange("200", response.httpStatusCode)) {
      const body: IoK8sApiFlowcontrolV1beta1PriorityLevelConfiguration =
        ObjectSerializer.deserialize(
          ObjectSerializer.parse(await response.body.text(), contentType),
          "IoK8sApiFlowcontrolV1beta1PriorityLevelConfiguration",
          "",
        ) as IoK8sApiFlowcontrolV1beta1PriorityLevelConfiguration;
      return body;
    }
    if (isCodeInRange("401", response.httpStatusCode)) {
      throw new ApiException<string>(response.httpStatusCode, "Unauthorized");
    }

    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body: IoK8sApiFlowcontrolV1beta1PriorityLevelConfiguration =
        ObjectSerializer.deserialize(
          ObjectSerializer.parse(await response.body.text(), contentType),
          "IoK8sApiFlowcontrolV1beta1PriorityLevelConfiguration",
          "",
        ) as IoK8sApiFlowcontrolV1beta1PriorityLevelConfiguration;
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
     * @params response Response returned by the server for a request to readFlowcontrolApiserverV1beta1PriorityLevelConfigurationStatus
     * @throws ApiException if the response code was not in [200, 299]
     */
  public async readFlowcontrolApiserverV1beta1PriorityLevelConfigurationStatus(
    response: ResponseContext,
  ): Promise<IoK8sApiFlowcontrolV1beta1PriorityLevelConfiguration> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"],
    );
    if (isCodeInRange("200", response.httpStatusCode)) {
      const body: IoK8sApiFlowcontrolV1beta1PriorityLevelConfiguration =
        ObjectSerializer.deserialize(
          ObjectSerializer.parse(await response.body.text(), contentType),
          "IoK8sApiFlowcontrolV1beta1PriorityLevelConfiguration",
          "",
        ) as IoK8sApiFlowcontrolV1beta1PriorityLevelConfiguration;
      return body;
    }
    if (isCodeInRange("401", response.httpStatusCode)) {
      throw new ApiException<string>(response.httpStatusCode, "Unauthorized");
    }

    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body: IoK8sApiFlowcontrolV1beta1PriorityLevelConfiguration =
        ObjectSerializer.deserialize(
          ObjectSerializer.parse(await response.body.text(), contentType),
          "IoK8sApiFlowcontrolV1beta1PriorityLevelConfiguration",
          "",
        ) as IoK8sApiFlowcontrolV1beta1PriorityLevelConfiguration;
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
     * @params response Response returned by the server for a request to replaceFlowcontrolApiserverV1beta1FlowSchema
     * @throws ApiException if the response code was not in [200, 299]
     */
  public async replaceFlowcontrolApiserverV1beta1FlowSchema(
    response: ResponseContext,
  ): Promise<IoK8sApiFlowcontrolV1beta1FlowSchema> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"],
    );
    if (isCodeInRange("200", response.httpStatusCode)) {
      const body: IoK8sApiFlowcontrolV1beta1FlowSchema = ObjectSerializer
        .deserialize(
          ObjectSerializer.parse(await response.body.text(), contentType),
          "IoK8sApiFlowcontrolV1beta1FlowSchema",
          "",
        ) as IoK8sApiFlowcontrolV1beta1FlowSchema;
      return body;
    }
    if (isCodeInRange("201", response.httpStatusCode)) {
      const body: IoK8sApiFlowcontrolV1beta1FlowSchema = ObjectSerializer
        .deserialize(
          ObjectSerializer.parse(await response.body.text(), contentType),
          "IoK8sApiFlowcontrolV1beta1FlowSchema",
          "",
        ) as IoK8sApiFlowcontrolV1beta1FlowSchema;
      return body;
    }
    if (isCodeInRange("401", response.httpStatusCode)) {
      throw new ApiException<string>(response.httpStatusCode, "Unauthorized");
    }

    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body: IoK8sApiFlowcontrolV1beta1FlowSchema = ObjectSerializer
        .deserialize(
          ObjectSerializer.parse(await response.body.text(), contentType),
          "IoK8sApiFlowcontrolV1beta1FlowSchema",
          "",
        ) as IoK8sApiFlowcontrolV1beta1FlowSchema;
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
     * @params response Response returned by the server for a request to replaceFlowcontrolApiserverV1beta1FlowSchemaStatus
     * @throws ApiException if the response code was not in [200, 299]
     */
  public async replaceFlowcontrolApiserverV1beta1FlowSchemaStatus(
    response: ResponseContext,
  ): Promise<IoK8sApiFlowcontrolV1beta1FlowSchema> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"],
    );
    if (isCodeInRange("200", response.httpStatusCode)) {
      const body: IoK8sApiFlowcontrolV1beta1FlowSchema = ObjectSerializer
        .deserialize(
          ObjectSerializer.parse(await response.body.text(), contentType),
          "IoK8sApiFlowcontrolV1beta1FlowSchema",
          "",
        ) as IoK8sApiFlowcontrolV1beta1FlowSchema;
      return body;
    }
    if (isCodeInRange("201", response.httpStatusCode)) {
      const body: IoK8sApiFlowcontrolV1beta1FlowSchema = ObjectSerializer
        .deserialize(
          ObjectSerializer.parse(await response.body.text(), contentType),
          "IoK8sApiFlowcontrolV1beta1FlowSchema",
          "",
        ) as IoK8sApiFlowcontrolV1beta1FlowSchema;
      return body;
    }
    if (isCodeInRange("401", response.httpStatusCode)) {
      throw new ApiException<string>(response.httpStatusCode, "Unauthorized");
    }

    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body: IoK8sApiFlowcontrolV1beta1FlowSchema = ObjectSerializer
        .deserialize(
          ObjectSerializer.parse(await response.body.text(), contentType),
          "IoK8sApiFlowcontrolV1beta1FlowSchema",
          "",
        ) as IoK8sApiFlowcontrolV1beta1FlowSchema;
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
     * @params response Response returned by the server for a request to replaceFlowcontrolApiserverV1beta1PriorityLevelConfiguration
     * @throws ApiException if the response code was not in [200, 299]
     */
  public async replaceFlowcontrolApiserverV1beta1PriorityLevelConfiguration(
    response: ResponseContext,
  ): Promise<IoK8sApiFlowcontrolV1beta1PriorityLevelConfiguration> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"],
    );
    if (isCodeInRange("200", response.httpStatusCode)) {
      const body: IoK8sApiFlowcontrolV1beta1PriorityLevelConfiguration =
        ObjectSerializer.deserialize(
          ObjectSerializer.parse(await response.body.text(), contentType),
          "IoK8sApiFlowcontrolV1beta1PriorityLevelConfiguration",
          "",
        ) as IoK8sApiFlowcontrolV1beta1PriorityLevelConfiguration;
      return body;
    }
    if (isCodeInRange("201", response.httpStatusCode)) {
      const body: IoK8sApiFlowcontrolV1beta1PriorityLevelConfiguration =
        ObjectSerializer.deserialize(
          ObjectSerializer.parse(await response.body.text(), contentType),
          "IoK8sApiFlowcontrolV1beta1PriorityLevelConfiguration",
          "",
        ) as IoK8sApiFlowcontrolV1beta1PriorityLevelConfiguration;
      return body;
    }
    if (isCodeInRange("401", response.httpStatusCode)) {
      throw new ApiException<string>(response.httpStatusCode, "Unauthorized");
    }

    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body: IoK8sApiFlowcontrolV1beta1PriorityLevelConfiguration =
        ObjectSerializer.deserialize(
          ObjectSerializer.parse(await response.body.text(), contentType),
          "IoK8sApiFlowcontrolV1beta1PriorityLevelConfiguration",
          "",
        ) as IoK8sApiFlowcontrolV1beta1PriorityLevelConfiguration;
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
     * @params response Response returned by the server for a request to replaceFlowcontrolApiserverV1beta1PriorityLevelConfigurationStatus
     * @throws ApiException if the response code was not in [200, 299]
     */
  public async replaceFlowcontrolApiserverV1beta1PriorityLevelConfigurationStatus(
    response: ResponseContext,
  ): Promise<IoK8sApiFlowcontrolV1beta1PriorityLevelConfiguration> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"],
    );
    if (isCodeInRange("200", response.httpStatusCode)) {
      const body: IoK8sApiFlowcontrolV1beta1PriorityLevelConfiguration =
        ObjectSerializer.deserialize(
          ObjectSerializer.parse(await response.body.text(), contentType),
          "IoK8sApiFlowcontrolV1beta1PriorityLevelConfiguration",
          "",
        ) as IoK8sApiFlowcontrolV1beta1PriorityLevelConfiguration;
      return body;
    }
    if (isCodeInRange("201", response.httpStatusCode)) {
      const body: IoK8sApiFlowcontrolV1beta1PriorityLevelConfiguration =
        ObjectSerializer.deserialize(
          ObjectSerializer.parse(await response.body.text(), contentType),
          "IoK8sApiFlowcontrolV1beta1PriorityLevelConfiguration",
          "",
        ) as IoK8sApiFlowcontrolV1beta1PriorityLevelConfiguration;
      return body;
    }
    if (isCodeInRange("401", response.httpStatusCode)) {
      throw new ApiException<string>(response.httpStatusCode, "Unauthorized");
    }

    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body: IoK8sApiFlowcontrolV1beta1PriorityLevelConfiguration =
        ObjectSerializer.deserialize(
          ObjectSerializer.parse(await response.body.text(), contentType),
          "IoK8sApiFlowcontrolV1beta1PriorityLevelConfiguration",
          "",
        ) as IoK8sApiFlowcontrolV1beta1PriorityLevelConfiguration;
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
     * @params response Response returned by the server for a request to watchFlowcontrolApiserverV1beta1FlowSchema
     * @throws ApiException if the response code was not in [200, 299]
     */
  public async watchFlowcontrolApiserverV1beta1FlowSchema(
    response: ResponseContext,
  ): Promise<IoK8sApimachineryPkgApisMetaV1WatchEvent> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"],
    );
    if (isCodeInRange("200", response.httpStatusCode)) {
      const body: IoK8sApimachineryPkgApisMetaV1WatchEvent = ObjectSerializer
        .deserialize(
          ObjectSerializer.parse(await response.body.text(), contentType),
          "IoK8sApimachineryPkgApisMetaV1WatchEvent",
          "",
        ) as IoK8sApimachineryPkgApisMetaV1WatchEvent;
      return body;
    }
    if (isCodeInRange("401", response.httpStatusCode)) {
      throw new ApiException<string>(response.httpStatusCode, "Unauthorized");
    }

    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body: IoK8sApimachineryPkgApisMetaV1WatchEvent = ObjectSerializer
        .deserialize(
          ObjectSerializer.parse(await response.body.text(), contentType),
          "IoK8sApimachineryPkgApisMetaV1WatchEvent",
          "",
        ) as IoK8sApimachineryPkgApisMetaV1WatchEvent;
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
     * @params response Response returned by the server for a request to watchFlowcontrolApiserverV1beta1FlowSchemaList
     * @throws ApiException if the response code was not in [200, 299]
     */
  public async watchFlowcontrolApiserverV1beta1FlowSchemaList(
    response: ResponseContext,
  ): Promise<IoK8sApimachineryPkgApisMetaV1WatchEvent> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"],
    );
    if (isCodeInRange("200", response.httpStatusCode)) {
      const body: IoK8sApimachineryPkgApisMetaV1WatchEvent = ObjectSerializer
        .deserialize(
          ObjectSerializer.parse(await response.body.text(), contentType),
          "IoK8sApimachineryPkgApisMetaV1WatchEvent",
          "",
        ) as IoK8sApimachineryPkgApisMetaV1WatchEvent;
      return body;
    }
    if (isCodeInRange("401", response.httpStatusCode)) {
      throw new ApiException<string>(response.httpStatusCode, "Unauthorized");
    }

    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body: IoK8sApimachineryPkgApisMetaV1WatchEvent = ObjectSerializer
        .deserialize(
          ObjectSerializer.parse(await response.body.text(), contentType),
          "IoK8sApimachineryPkgApisMetaV1WatchEvent",
          "",
        ) as IoK8sApimachineryPkgApisMetaV1WatchEvent;
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
     * @params response Response returned by the server for a request to watchFlowcontrolApiserverV1beta1PriorityLevelConfiguration
     * @throws ApiException if the response code was not in [200, 299]
     */
  public async watchFlowcontrolApiserverV1beta1PriorityLevelConfiguration(
    response: ResponseContext,
  ): Promise<IoK8sApimachineryPkgApisMetaV1WatchEvent> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"],
    );
    if (isCodeInRange("200", response.httpStatusCode)) {
      const body: IoK8sApimachineryPkgApisMetaV1WatchEvent = ObjectSerializer
        .deserialize(
          ObjectSerializer.parse(await response.body.text(), contentType),
          "IoK8sApimachineryPkgApisMetaV1WatchEvent",
          "",
        ) as IoK8sApimachineryPkgApisMetaV1WatchEvent;
      return body;
    }
    if (isCodeInRange("401", response.httpStatusCode)) {
      throw new ApiException<string>(response.httpStatusCode, "Unauthorized");
    }

    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body: IoK8sApimachineryPkgApisMetaV1WatchEvent = ObjectSerializer
        .deserialize(
          ObjectSerializer.parse(await response.body.text(), contentType),
          "IoK8sApimachineryPkgApisMetaV1WatchEvent",
          "",
        ) as IoK8sApimachineryPkgApisMetaV1WatchEvent;
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
     * @params response Response returned by the server for a request to watchFlowcontrolApiserverV1beta1PriorityLevelConfigurationList
     * @throws ApiException if the response code was not in [200, 299]
     */
  public async watchFlowcontrolApiserverV1beta1PriorityLevelConfigurationList(
    response: ResponseContext,
  ): Promise<IoK8sApimachineryPkgApisMetaV1WatchEvent> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"],
    );
    if (isCodeInRange("200", response.httpStatusCode)) {
      const body: IoK8sApimachineryPkgApisMetaV1WatchEvent = ObjectSerializer
        .deserialize(
          ObjectSerializer.parse(await response.body.text(), contentType),
          "IoK8sApimachineryPkgApisMetaV1WatchEvent",
          "",
        ) as IoK8sApimachineryPkgApisMetaV1WatchEvent;
      return body;
    }
    if (isCodeInRange("401", response.httpStatusCode)) {
      throw new ApiException<string>(response.httpStatusCode, "Unauthorized");
    }

    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body: IoK8sApimachineryPkgApisMetaV1WatchEvent = ObjectSerializer
        .deserialize(
          ObjectSerializer.parse(await response.body.text(), contentType),
          "IoK8sApimachineryPkgApisMetaV1WatchEvent",
          "",
        ) as IoK8sApimachineryPkgApisMetaV1WatchEvent;
      return body;
    }

    let body = response.body || "";
    throw new ApiException<string>(
      response.httpStatusCode,
      'Unknown API Status Code!\nBody: "' + body + '"',
    );
  }
}
