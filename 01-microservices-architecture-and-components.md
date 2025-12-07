# Microservices Architecture and Components

### Introduction to Microservices

Microservices architecture decomposes an application into a collection of independent services that communicate through well‑defined APIs. Each microservice focuses on a specific business capability and can be developed, deployed and scaled independently. [Red Hat describes](https://developers.redhat.com/topics/microservices#microservicesandhybridcloud) microservices as 

> tiny gears that fit together to form a larger machine,

enabling faster application development and deployment. This decomposition enables teams to work autonomously, scale individual components according to demand, and adopt heterogeneous technologies per service.

:::{tip}
Awesome lists are always a _fantastic_ way for discovering new things. For Microservices, check [this](https://github.com/mfornos/awesome-microservices) out.
:::

### Key Design Principles

An effective microservice should:

- **Single concern**: It does one thing well. Services should map to bounded contexts of the business domain. Think like cli utilities in Linux.
- **Discrete boundaries**: A microservice is packaged into a single deployable unit (usually a minified container image) that contains its executable code, dependencies and configuration.
- **Transportable**: The container image must be portable across environments (development, test, production).
- **Own its data**: Each service should have its own persistence layer and avoid direct database sharing with other services.
- **Ephemeral and scalable**: Instances are disposable; services scale horizontally via container orchestration like Kubernetes using autoscaling.

:::{note}
This is also called the 3 C's paradigm: 
 * _Componentize_ (break system in smaller bounded units), 
 * _Collaborate_ (emphasis on API) and 
 * _Connect_.
::: 

### Service Communication

Microservices communicate using 
 * synchronous ([REST](https://it.wikipedia.org/wiki/Representational_state_transfer)/[gRPC](https://it.wikipedia.org/wiki/GRPC)) or
 * asynchronous (message queues) protocols. 
 
Asynchronous messaging decouples services and improves resilience; patterns include request/response, event notifications and publish/subscribe. A message broker like [Apache Kafka](https://kafka.apache.org/) or [RabbitMQ](https://www.rabbitmq.com/) buffers messages; this reduces coupling and improves availability, though it introduces broker complexity and potential message ordering challenges. A solution without broker is [ZeroMQ](https://zeromq.org/).

### Service Mesh

As microservice landscapes grow, cross‑cutting concerns (security, routing, observability) become complex. A [**service mesh**](https://en.wikipedia.org/wiki/Service_mesh) provides a dedicated infrastructure layer to manage service-to-service communication. 

[**OpenShift Service Mesh**](https://www.redhat.com/en/technologies/cloud-computing/openshift/what-is-openshift-service-mesh) offers a uniform way to connect, manage, observe, and provide security for microservices-based applications. The mesh handles:
 * [mTLS](https://en.wikipedia.org/wiki/Mutual_authentication) encryption, 
 * request routing and traffic management, with resilience patterns like [retries with exponential backoff](https://en.wikipedia.org/wiki/Exponential_backoff) and [circuit breakers](https://en.wikipedia.org/wiki/Circuit_breaker_design_pattern), 
 * telemetry (observation of the traffic / raw data of the system) and observability (inference of the state of the system from telemetry). 

A control plane configures the proxies (that _wrap_ the microservice components), while the data plane processes requests. Mesh observability surfaces metrics, traces and logs, making debugging distributed systems easier. Mesh policies enforce access control and rate limiting across services.

### API Gateway and Edge Components

An API gateway is a specialized reverse proxy that sits at the edge of the  system and acts as the single entry point for client traffic (web, mobile, IoT, partner systems). Instead of clients calling each microservice directly, they send requests to the gateway, which then routes those requests to the appropriate back-end services.

The gateway centralizes cross-cutting concerns that would otherwise have to be duplicated in every service. Typical responsibilities include:

 * **Routing and aggregation**: mapping incoming paths and methods to back-end services, and optionally aggregating multiple back-end calls into a single response (e.g. _get user profile_ + _get user orders_ in one round-trip). Think of aggregation like a view in a structured database.
 * **Authentication and authorization**: validating tokens ([JWT](https://en.wikipedia.org/wiki/JSON_Web_Token), [OpenID](https://en.wikipedia.org/wiki/OpenID) identification or [OAuth2](https://en.wikipedia.org/wiki/OAuth#OAuth_2.0) authorization), checking API keys, enforcing RBAC/ABAC policies, and propagating identity information to downstream services.
 * **Traffic control**: rate limiting, quota enforcement, request throttling and circuit breaking to protect back-end services from overload or abusive clients.
 * **Request/response transformation**: rewriting URLs, headers and payloads (e.g. JSON &#8596; XML, version translation, adding correlation IDs for tracing), normalizing differences across back-end services into a consistent external API.
 * **Security features**: [TLS termination](https://en.wikipedia.org/wiki/TLS_termination_proxy), mTLS to back-ends, IP allow/deny lists, bot protection, and basic [WAF](https://en.wikipedia.org/wiki/Web_application_firewall)-like checks.
 * **Operational concerns**: logging, metrics, tracing, caching and A/B or canary routing for controlled rollouts.

By terminating TLS at the edge, the gateway can offload TLS from services and simplify certificate management. It also typically handles CORS ([Cross-Origin Resource Sharing](https://en.wikipedia.org/wiki/Cross-origin_resource_sharing)) so that browser-based clients can safely call the APIs without each service having to implement CORS logic (think a world without CORS pre-flight checks for each API call).

In Kubernetes/OpenShift, the API gateway role can be implemented in several ways:

 * **Ingress / Ingress controllers**: Kubernetes Ingress resources plus controllers like NGINX Ingress or HAProxy act as basic HTTP(S) gateways, exposing services externally and handling host/path-based routing.
 * **Service mesh ingress gateways**: with Istio or OpenShift Service Mesh, an Ingress Gateway (Envoy-based) terminates incoming traffic and injects it into the mesh, allowing you to reuse the mesh’s traffic management, observability and security features for north–south traffic.
 * **Dedicated API gateway products**: solutions such as Red Hat 3scale, Kong, Apigee, NGINX Controller or AWS API Gateway provide richer API-lifecycle features (plans, developer portals, API keys, usage analytics) on top of the core gateway functionality.

In a microservices architecture, the API gateway focuses primarily on north–south traffic (from outside into the cluster), while a service mesh focuses on east–west traffic (service-to-service). Together, they provide a layered approach: clients talk to the gateway; the gateway forwards traffic into the mesh; the mesh manages resilience, observability and security between internal services.

### Fault Tolerance and Resilience Patterns

Cloud‑native applications must handle failure gracefully. Important patterns include:

- **Circuit breaker**: Short‑circuit calls to failing services and allow them to recover.
- **Retry with backoff**: Automatically retry failed requests after delays.
- [**Bulkhead**](https://medium.com/nerd-for-tech/bulkhead-pattern-distributed-design-pattern-c673d5e81523): Isolate resources for each service to avoid cascading failures.
- **Timeouts and fallback**: Configure timeouts for remote calls and provide fallback responses when services are unavailable.

### Observability

Observability is a first‑class concern in microservices. This includes:

- **Logging**: Each service writes structured logs. Central logging solutions (e.g., EFK/ELK, Loki) aggregate logs for search and correlation.
- **Metrics**: Services expose Prometheus‑formatted metrics; dashboards (Grafana) visualize latency, throughput and error rates.
- **Tracing**: Distributed tracing (e.g., Jaeger, Zipkin, OpenTelemetry) tracks a request’s journey across services. OpenShift’s Service Mesh integrates Jaeger for tracing.

```{list-table} Metrics, Traces and Logs
:header-rows: 1
:label: observability-pillars-tbl

* - **Feature**
  - Metrics
  - Traces
  - Logs
* - **Purpose**
  - To track overall system health, performance trends, and for proactive alerting.
  - To map the end-to-end journey of a single request through a distributed system.
  - To provide detailed records of discrete, timestamped events for debugging specific issues.
* - **Data Type**
  - Numerical measurements (e.g., CPU usage, error rates, response times).
  - A collection of "spans" (operations) linked by a unique trace ID, showing causal order and duration.
  - Text records, often structured (like JSON or CSV), with a timestamp and contextual metadata.
* - **Answers the Question**
  - **_What_** is wrong or the overall system health.
  - **_Where_** the problem is occurring in the request flow or which service is slow.
  - **_Why_** a specific event happened (e.g., error messages, request payloads).
* - **Data Volume**
  - **_Lowest_** <br> Data is aggregated into time-series, making it efficient to store and query.
  - **_Moderate_** <br> Data is often sampled to manage volume and overhead.
  - **_Highest_** <br> Can generate massive volumes of data, requiring sophisticated management tools.
```

### Security

Principles for securing microservices:

- **Zero Trust**: Do not assume network boundaries; enforce authentication/authorization for every request (e.g., JWT, OAuth2). Service Mesh mTLS encrypts traffic and authenticates peers.
- **Least Privilege**: Limit service permissions (RBAC, NetworkPolicies).
- **Secrets Management**: Use Kubernetes/Openshift secrets or vaults to store sensitive information; avoid embedding secrets in images.
- **Compliance and Auditing**: Use GitOps and policy engines (e.g., OPA/Gatekeeper) to enforce compliance.

### Architectural Patterns

Some common microservice patterns include:

- **Decomposition by Business Capability**: Microservices map to business domains; each team owns a service.
- **Database per Service**: Each service uses its own database or schema; data consistency is managed via eventual consistency or sagas.
- **Saga Pattern**: Distributed transactions are managed through a series of compensating actions (orchestration or choreography). Event‑driven saga uses message queues.
- **Event Sourcing & CQRS**: Store state changes as events; read model is generated from event stream; commands and queries are separated.
- **Strangler Fig**: Gradually modernize monolithic systems by incrementally replacing pieces with microservices.
