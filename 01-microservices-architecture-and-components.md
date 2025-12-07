# Microservices Architecture and Components

## Introduction to Microservices

Microservices architecture decomposes an application into a collection of independent services that communicate through well‑defined APIs. Each microservice focuses on a specific business capability and can be developed, deployed and scaled independently. [Red Hat describes](https://developers.redhat.com/topics/microservices#microservicesandhybridcloud) microservices as 

> tiny gears that fit together to form a larger machine,

enabling faster application development and deployment. This decomposition enables teams to work autonomously, scale individual components according to demand, and adopt heterogeneous technologies per service.

:::{tip}
Awesome lists are always a _fantastic_ way for discovering new things. For Microservices, check [this](https://github.com/mfornos/awesome-microservices) out.
:::

## Key Design Principles

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

## Service Communication

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

In a microservices architecture, the API gateway focuses primarily on **north–south** traffic (from outside into the cluster), while a service mesh focuses on **east–west** traffic (service-to-service). Together, they provide a layered approach: clients talk to the gateway; the gateway forwards traffic into the mesh; the mesh manages resilience, observability and security between internal services.

### Fault Tolerance and Resilience Patterns

Cloud‑native applications must handle failure gracefully. Important patterns (in order of implementation complexity) include:

- **Circuit breaker**: Track error rates/latency, then open the circuit after a threshold, to fail fast and prevent resource exhaustion (returns an error before calling the protected resource); probe in half‑open state and close once the dependency is healthy again.
- **Retry with backoff**: Retry only transient errors, using exponential backoff plus jitter to avoid thundering herds; cap attempts and ensure the operation is idempotent before retrying.
- [**Bulkhead**](https://learn.microsoft.com/en-us/azure/architecture/patterns/bulkhead): Partition resources (threads, connection pools, queues) per consumer or feature so a noisy neighbor cannot starve others; pair with quotas and autoscaling.
- **Timeouts and fallback**: Set strict client timeouts and cancel stuck work; degrade gracefully with cached/stale data, simplified responses, or queued work when a dependency is slow or unavailable.


## Observability

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

## Security

Principles for securing microservices:

- **Zero Trust**: Do not assume network boundaries; enforce authentication/authorization for every request (e.g., JWT, OAuth2). Service Mesh mTLS encrypts traffic and authenticates peers.
- **Least Privilege**: Limit service permissions (RBAC, NetworkPolicies).
- **Secrets Management**: Use Kubernetes/Openshift secrets or vaults to store sensitive information; avoid embedding secrets in images.
- **Compliance and Auditing**: Use GitOps and policy engines (e.g., Open Policy Agent/Gatekeeper) to enforce compliance.

## Architectural Patterns

When you design microservices, you’re not just cutting a monolith into smaller pieces. You’re choosing **patterns** that affect ownership, data consistency, deployment, and how teams work. The patterns below are some of the most important ones to understand.

:::{note}
A typical cloud-native architecture might combine decomposition by business capability, database-per-service, sagas for distributed workflows, and a strangler approach for legacy modernization. The key is to understand *when each pattern is appropriate*, the trade-offs involved, and how they interact on platforms like Kubernetes and OpenShift.
:::

### Decomposition by Business Capability

**Idea.**

Instead of splitting by technical layers (UI, services, database), you decompose the system into **business capabilities** or **bounded contexts** (e.g. *Billing*, *Orders*, *Inventory*, *Identity*). Each microservice aligns with one capability and owns its logic and data.

**Why it matters.**

 * Mirrors the **organization**: "You build it, you run it" for each team.
 * Reduces coupling between teams: changes in *Orders* don’t require touching *Billing*.
 * Helps avoid _distributed monolith_ where services are split by technology, but still tightly coupled.

**Practical guidance.**

 * Use [**Domain-Driven Design (DDD)**](https://en.wikipedia.org/wiki/Domain-driven_design) concepts (bounded contexts, ubiquitous language) to discover service boundaries.
 * Look for **different change rhythms**: if one part of the code changes frequently for a specific business reason, that’s a good candidate for its own service.
 * Avoid _nano-services_: too small services add network overhead and operational complexity without real benefit.

**Anti-patterns / red flags.**

 * Services named after technical layers (`user-service`) instead of business domains (`accounting-service`).
 * Lots of cross-service synchronous calls for a single user action (chatty communication).

### Database per Service

**Idea.**

Each microservice **owns its data store** (its own database or schema). No other service is allowed to bypass the service API and talk directly to that database.

**Why it matters.**

 * Prevents **accidental coupling**: schema changes can be handled within a service boundary.
 * Enables independent scaling, sharding, and even different data technologies per service (polyglot persistence).
 * Supports true **autonomy**: teams may evolve their data models without cross-team coordination every time (respecting API contracts).

**Data consistency implications.**

 * You rarely use distributed ACID transactions; instead you rely on:
    * **Eventual consistency** (e.g. user sees updated order state a few seconds later).
    * Business-level patterns like **sagas** (see below).
 * You often need **duplicate data** (read models, caches, denormalized views) to avoid cross-service joins.

**Practical guidance.**

 * Enforce access rules: if you allow direct cross-service DB access, there is an issue.
 * Use **events** (e.g. `OrderPlaced`, `PaymentAuthorized`) to propagate changes to other services.
 * Design APIs with **idempotency** in mind, since messages or retries can be delivered more than once.

**Trade-offs.**

 * More complex **data modeling and consistency** handling.
 * More operations overhead (multiple databases/schemas to observe, backup, secure).

### Saga Pattern

**Idea.**

A **saga** is a pattern for managing **long-running, distributed business transactions** without global two-phase commit. A saga is a sequence of local transactions across services, where each step has a **compensating action** to roll back its effects if a later step fails.

**Example.**

`PlaceOrder` might involve:

 1. `OrderService` creates a pending order.
 2. `PaymentService` charges the customer.
 3. `InventoryService` reserves items.
 4. `ShippingService` creates a shipment.

If step 3 fails, the saga runs compensations: release payment, mark order as failed, etc.

**Orchestration vs. choreography.**

 * **Orchestrated saga**
   A central “orchestrator” service drives the workflow: it calls each participant in order and decides what to do next.

    * Pros: clear flow, easier to reason about.
    * Cons: central point of complexity; can become a "god service".

* **Choreographed saga**
  There is no central orchestrator; services publish and react to **events** (e.g. `OrderCreated` &rarr; `PaymentAuthorized` &rarr; `InventoryReserved`).

  * Pros: more loosely coupled, scalable.
  * Cons: harder to trace and debug the overall flow.

**Event-driven saga.**

 * Typically implemented using **message brokers** (Kafka, AMQ, SQS, etc.).
 * Services subscribe to saga-related events and emit new events when their local transaction completes.

**Practical guidance.**

 * Use sagas when a business process spans **multiple services** and you can’t use a single ACID transaction.
 * Carefully define **compensation**: think about business semantics (e.g. refund payment vs. only cancel reservation).
 * Implement good **observability** (**correlation IDs**, logs, traces) to debug misbehaving sagas.
 * Make steps **idempotent** so retries don’t cause double billing, double shipping, etc.

### Event Sourcing & CQRS

These two patterns are often used together, but they are conceptually distinct.

#### Event Sourcing

**Idea.**

Instead of storing only the current state (e.g. a row in a table), you store **all state changes as a sequence of events** (`OrderCreated`, `ItemAdded`, `OrderConfirmed`). The current state is obtained by replaying these events.

**Benefits.**

 * **Perfect audit log** – you know exactly what happened and in which order.
 * Easy to add new **views** (or _projections_, that are read models) later without changing the write model.
 * Time-travel debugging: you can replay events to simulate state at a point in time.

**Costs and complexity.**

 * Requires robust **event design and versioning**.
 * Recovery and replay for large streams need careful design (snapshots, partitioning).
 * Harder for teams unfamiliar with the pattern to reason about.

#### CQRS (Command Query Responsibility Segregation)

:::{warn}
I never had the possibility to see it in action, I'm writing purely theoretical concepts.
:::

**Idea.**

Separate the **write model** (commands that change state) from the **read model** (queries that display data). Reads are optimized for querying; writes are optimized for business invariants (a rule or constraint in a business domain that must always hold true, see DDD) and validation.

**Why pair it with Event Sourcing?**

 * Event sourcing naturally produces an **event stream**; CQRS lets you build **dedicated read models** from those events.
 * The read side can be scaled independently and optimized for the queries you actually need.

**Practical guidance.**

 * Use Event Sourcing with CQRS for **domains with complex business rules**, strong audit requirements, or many different read perspectives.
 * Don’t start every project with ES/CQRS—use it where the benefits outweigh complexity.
 * Explicitly handle **event versioning**: what happens when you change the shape of events?

### Strangler Fig Pattern

**Idea.**

The **Strangler Fig** pattern is used to **incrementally modernize** (refactoring) a monolithic system. Instead of rewriting everything at once (big bang), you gradually _strangle_ the old system by placing new microservices around it and rerouting functionality piece by piece.

**Typical steps.**

 1. Place a **facade / gateway** in front of the monolith (e.g. API gateway, reverse proxy).
 2. Identify a **bounded context** or business capability that’s relatively isolated (e.g. product catalog, auth).
 3. Build a new microservice implementing that slice of functionality.
 4. Re-route traffic for that functionality from the gateway to the new service, keeping other endpoints routed to the monolith.
 5. Gradually repeat for more capabilities until the monolith is reduced to none (or to a small core).

**Why it works.**

 * Reduces risk: you decommission pieces only after the new service is **proven**.
 * Allows **parallel work**: new and old can coexist while you migrate.
 * Easier to keep delivering features: you don’t freeze changes for months to _refactor_.

**Practical guidance.**

 * Start with modules that are **high-value and low-coupling**, not the most tangled parts.
 * Ensure observability at the gateway so you see how traffic is shifting over time.
 * Plan for **data migration** strategies: sometimes the new service still needs to read from the old DB for a period and gradually own more data.
 * Communicate clearly to stakeholders: strangler migrations often take time; set expectations for incremental value.
