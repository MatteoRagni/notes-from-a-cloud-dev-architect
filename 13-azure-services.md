# Azure Services

Azure provides a rich set of managed services for compute, storage, databases, messaging and more. Understanding these services is crucial for designing cloud‑native microservices.

Below you’ll find a set of short list of key services. Each section explains what the service does, links to the official homepage, and outlines a typical usage scenario or reference pattern.

## Foundation Services

### Azure Virtual Machines

[Azure Virtual Machines](https://azure.microsoft.com/services/virtual-machines/) provide on‑demand, scalable compute instances in the Microsoft cloud. You choose the OS (Windows or Linux ), size, and performance characteristics (general purpose, compute‑optimized, memory‑optimized, GPU, etc.), then deploy applications much like you would on physical servers. Use VMs when you need full control over the operating system, custom runtimes, or legacy workloads that are not yet containerized or PaaS‑friendly. VMs integrate with Azure Virtual Networks, managed disks, load balancers, availability sets, and availability zones for high availability and resilience. You can also use virtual machine scale sets (VMSS) to automatically scale the number of instances based on demand.

**Typical scenario / pattern**
A classic pattern is a three‑tier application where a VM scale set hosts stateless web or application servers behind an Azure Load Balancer or Application Gateway, with an Azure SQL database in a private subnet. Another common pattern is lifting and shifting on‑premises workloads into Azure VMs, using VPN/ExpressRoute to maintain hybrid connectivity while modernisation work is planned.

### Azure Kubernetes Service (AKS)

[Azure Kubernetes Service (AKS)](https://azure.microsoft.com/services/kubernetes-service/) is Microsoft’s managed Kubernetes offering. AKS provides a fully managed control plane so you can focus on deploying and operating containerised applications instead of managing Kubernetes masters. AKS is your primary choice when standardising on Kubernetes for microservices, APIs, and batch workloads. It integrates deeply with Azure networking (VNet, CNI), Azure Active Directory for authentication, Azure Monitor and Log Analytics for observability, and supports both node pools on VMs and serverless profiles via Virtual Nodes. You can incorporate ingress controllers, service meshes, and GitOps tools for advanced deployment patterns.

**Typical scenario / pattern**
A typical pattern is a microservices platform where each service is deployed as a Deployment or StatefulSet in AKS, fronted by an Ingress controlled by NGINX or Application Gateway Ingress Controller. AKS runs in multiple availability zones for resilience, uses Azure Disk or Azure Files for persistent storage, and integrates with Azure DevOps or GitHub Actions for CI/CD. This suits teams that want Kubernetes portability but also tight integration with Azure primitives.

### Azure Container Registry (ACR)

[Azure Container Registry](https://azure.microsoft.com/services/container-registry/) (ACR) is a private, managed registry for storing and managing container images and related artifacts (like Helm charts). It supports Docker and OCI‑compliant images and integrates directly with AKS, Azure App Service, and other container‑based services. ACR centralises image storage, versioning, and security scanning, while leveraging Azure Active Directory and role‑based access control for secure access. It can replicate across regions for geo‑redundancy and supports content signing and policies.

**Typical scenario / pattern**
A common pattern is a CI/CD pipeline (Azure DevOps or GitHub Actions) that builds application images from source, runs tests, and pushes versioned images to ACR. AKS deployments then pull from ACR using managed identities.

### Azure Blob Storage

[Azure Blob Storage](https://azure.microsoft.com/services/storage/blobs/) is Microsoft’s massively scalable object storage service, designed for storing unstructured data such as files, logs, images, and backups. Blobs are organised into containers inside storage accounts and accessed via HTTP(S), SDKs, or tools. You may use Blob Storage as a core building block for data lakes, content repositories, and as a decoupled persistence layer between systems. It offers different access tiers (hot, cool, archive) for cost optimisation, lifecycle management, encryption, soft delete, and integration with Azure Data Lake and analytics services.

**Typical scenario / pattern**
A typical pattern is to use Blob Storage as the landing zone for raw data ingestion—for example, application logs, IoT telemetry, or event data—which is later processed by Azure Data Factory, Databricks, or Synapse Analytics. Another common scenario is hosting static content (images, documents) for web applications, optionally fronted by Azure CDN, or storing application backups and disaster recovery snapshots.

### Azure Disk Storage (Managed Disks)

[Azure Disk Storage](https://azure.microsoft.com/services/storage/disks/) provides persistent block‑level storage volumes for Azure Virtual Machines. Managed Disks abstract away storage account management, giving you durable disks with different performance and cost characteristics (Standard HDD, Standard SSD, Premium SSD, Ultra Disk). You may use managed disks for workloads requiring low‑latency, durable storage tightly coupled to VMs, such as databases, application servers with local state, or enterprise software that expects traditional block storage. Features include snapshots, disk encryption, shared disks, and availability zone redundancy.

**Typical scenario / pattern**
A common pattern is deploying a self‑managed SQL Server or PostgreSQL instance on an Azure VM with separate managed disks for data, logs, and tempdb to optimise performance. Snapshots provide backup and recovery options, and zone‑redundant disks increase resilience. Managed disks are also widely used by AKS worker nodes when using Kubernetes persistent volumes backed by Azure Disk.

### Azure Files

[Azure Files](https://azure.microsoft.com/services/storage/files/) offers fully managed file shares in the cloud, accessible over the SMB or NFS protocols. It allows multiple VMs, containers, or on‑premises servers to mount the same share concurrently, making it ideal for lift‑and‑shift scenarios or applications that require shared file storage semantics. You use Azure Files when you want a managed alternative to traditional file servers, with built‑in redundancy, snapshots, and integration with Azure AD for identity‑based access.

**Typical scenario / pattern**
A typical pattern is migrating on‑premises file servers to Azure Files, accessed via VPN or ExpressRoute by on‑prem clients and by Azure VMs or containers within a VNet. In containerised environments like AKS, Azure Files can back Kubernetes persistent volumes that must be shared across multiple pods, such as legacy applications expecting a shared filesystem for configuration or uploaded media.

### Azure Virtual Network (VNet)

[Azure Virtual Network](https://azure.microsoft.com/services/virtual-network/) (VNet) is the fundamental networking construct in Azure. It provides logically isolated, private IP address spaces where you can place VMs, containers, and PaaS services. Within a VNet, you define subnets, route tables, and security groups to control traffic flow. VNets can connect to on‑premises networks using VPN gateways or ExpressRoute, and can peer with other VNets for multi‑environment or multi‑region architectures.

**Typical scenario / pattern**
A reference pattern is a Vnet with public subnets hosting load balancers and bastion hosts, and private subnets for application servers and databases. Connectivity to on‑premises is established via a Site‑to‑Site VPN or Direct Connect.

### Azure Load Balancer and Application Gateway

[Azure Load Balancer](https://azure.microsoft.com/services/load-balancer/) is a Layer 4 load balancer for TCP/UDP traffic, while [Azure Application Gateway](https://azure.microsoft.com/services/application-gateway/) is a Layer 7 HTTP/HTTPS reverse proxy and web application firewall (WAF). You may use Azure Load Balancer for distributing low‑level network traffic across backend pools (VMs, VM scale sets, AKS nodes), and Application Gateway for HTTP routing, TLS termination, URL‑based routing, and WAF protections. Application Gateway also integrates with AKS via the Ingress Controller to provide Kubernetes‑native ingress.

**Typical scenario / pattern**
A typical pattern is an internet‑facing Application Gateway configured with WAF, terminating TLS and routing requests to backend pools (VMs or AKS services) based on host and path rules. Behind it, an internal Load Balancer distributes traffic within serves as the front end for internal‑only services.

### Azure DNS

[Azure DNS](https://azure.microsoft.com/services/dns/) is a hosting service for DNS domains, providing name resolution using Microsoft’s global network of DNS name servers. It lets you manage public DNS zones for internet‑facing domains as well as private DNS zones for internal name resolution within VNets. Via Azure DNS you may centralise and automate DNS management, integrate it with IaC tools (ARM/Bicep/Terraform), and support hybrid environments when combined with custom DNS forwarders. Azure DNS can be combined with Traffic Manager or Azure Front Door for advanced traffic steering.

**Typical scenario / pattern**
A common pattern is hosting a domain’s public zone in Azure DNS and using A/AAAA/CNAME records to point to Application Gateways, Front Door endpoints, or static websites. Private DNS zones provide name resolution for internal services across peered VNets, replacing local DNS servers. Integration with CI/CD enables automated record management during application deployments, such as creating DNS entries for new microservices or blue‑green deployments.

### Azure Active Directory

[Azure Active Directory](https://azure.microsoft.com/services/active-directory/) (Azure AD) is Microsoft’s cloud identity and access management service. It provides authentication and authorisation for users, groups, and applications across Microsoft 365, Azure, and custom apps. You may use use Azure AD for single sign‑on (SSO), conditional access policies, multi‑factor authentication, and identity federation with on‑premises AD or other identity providers. Azure AD underpins OAuth2/OpenID Connect flows for modern apps and provides service principals and managed identities for workloads.

**Typical scenario / pattern**
A typical scenario is a web application or API that uses Azure AD for user sign‑in and token issuance, enforcing conditional access policies based on user risk or device compliance. In Azure, managed identities derived from Azure AD let VMs, AKS pods, and App Services securely access resources like Key Vault, Storage, or SQL without managing secrets. Hybrid organisations often sync on‑prem AD identities with Azure AD using Azure AD Connect to maintain a unified identity plane.

### Azure RBAC (Role-Based Access Control)

[Azure Role-Based Access Control](https://learn.microsoft.com/azure/role-based-access-control/overview) (RBAC) provides fine‑grained access management for Azure resources. It lets you assign built‑in or custom roles to users, groups, service principals, or managed identities at different scopes (management group, subscription, resource group, resource). You may rely on RBAC to implement least privilege, separation of duties, and multi‑tenant access models. RBAC is tightly integrated with Azure AD, so identity and access governance are unified.

**Typical scenario / pattern**
A common pattern is defining clear roles for platform, security, and application teams: platform engineers might have Contributor rights at the subscription level, while application teams receive limited rights at specific resource groups. Service principals used by CI/CD pipelines get only the permissions necessary to deploy. This structure can be extended across multiple subscriptions and management groups, forming the core of enterprise governance and compliance in Azure.

### Azure Monitor

[Azure Monitor](https://azure.microsoft.com/services/monitor/) is the central platform for collecting, analysing, and acting on telemetry from Azure resources and applications. It ingests metrics, logs, and traces from services like VMs, AKS, App Service, and databases, and exposes them via dashboards, alerts, and APIs. With Azure Monitor, you may implement observability, reliability, and performance management across distributed systems. It integrates with Log Analytics, Application Insights, and third‑party tools, and can drive automated responses via action groups and Logic Apps.

**Typical scenario / pattern**
A typical pattern is instrumenting an AKS‑based microservices application with Application Insights for distributed tracing and custom metrics. Azure Monitor collects both platform and application telemetry, while alert rules notify on‑call engineers when SLO thresholds are breached. Dashboards provide a unified view across infrastructure and services, and integration with ITSM tools ensures incidents are tracked end‑to‑end.

### Azure Log Analytics

[Azure Log Analytics](https://learn.microsoft.com/azure/azure-monitor/logs/log-analytics-overview) is the log analysis engine behind Azure Monitor. It stores log data in workspaces and enables powerful querying via the Kusto Query Language (KQL). Developers may design log pipelines so that diagnostics logs, activity logs, and application logs flow into Log Analytics workspaces, where they can be queried, correlated, and visualised. This is critical for troubleshooting, root‑cause analysis, compliance, and security operations.

**Typical scenario / pattern**
A typical pattern is routing Azure resource logs (Activity Log, resource diagnostics) and AKS cluster logs into a central Log Analytics workspace. Engineers use KQL queries and dashboards to investigate issues, detect anomalies, and build alert rules. Security teams may connect Log Analytics to Microsoft Sentinel for SIEM capabilities. Multi‑workspace strategies are used to separate environments or tenants while still allowing centralised querying where required.

## High Level Services

### Azure SQL Database

[Azure SQL Database](https://azure.microsoft.com/services/sql-database/) is a fully managed relational database service based on the SQL Server engine. It offers automatic patching, backups, built‑in high availability, and scaling options (DTU‑based or vCore‑based models). You may choose Azure SQL Database when they need familiar relational semantics, transactional guarantees, and SQL compatibility without running and administering your own SQL Server instances. Features such as elastic pools, and geo‑replication support multi‑tenant SaaS designs and global applications.

**Typical scenario / pattern**
A common pattern is a multi‑tenant SaaS application where each tenant is assigned a separate Azure SQL database within an elastic pool to balance cost and performance. App Services or AKS‑hosted APIs connect via private endpoints, and automatic backups plus geo‑replication underpin disaster recovery. Query performance insights and automatic tuning help maintain performance as the system scales.

### Azure Cosmos DB

[Azure Cosmos DB](https://azure.microsoft.com/services/cosmos-db/) is a globally distributed, multi‑model NoSQL database offering low latency, elastic scalability, and multiple consistency models. It supports APIs for SQL (Core), MongoDB, Cassandra, Gremlin, and Table, making it flexible for various workloads. You may want to adopt Cosmos DB for applications that require **global distribution, near real‑time response, and flexible schemas**. It provides automatic indexing, multi‑region writes, and fine‑grained throughput control.

**Typical scenario / pattern**
A typical scenario is a consumer application with users across the globe, where user profile and session data are stored in Cosmos DB with multiple write regions. Frontend services deployed in multiple Azure regions read and write locally, and Cosmos DB replicates data with configurable consistency. This pattern supports low latency and high availability even during regional failures.

### Azure Cache for Redis

[Azure Cache for Redis](https://azure.microsoft.com/services/cache/) is a fully managed, in‑memory data store based on the open‑source Redis project. It provides sub‑millisecond latency and supports data structures like strings, hashes, lists, and sets. Redis is a caching layer to put in front of databases and APIs to reduce latency and offload read‑heavy workloads. It can also be used for pub/sub messaging and distributed locks.

**Typical scenario / pattern**
A common pattern is using Azure Cache for Redis as a read‑through cache for an e‑commerce site: when product details or pricing are requested, the application first checks Redis; on a miss, it queries Azure SQL Database or Cosmos DB, then stores the result in the cache. This dramatically reduces database load and improves response times. Another pattern is storing user session data in Redis for horizontally scaled web applications.

### Azure Service Bus

[Azure Service Bus](https://azure.microsoft.com/services/service-bus/) is an enterprise‑grade messaging service that provides reliable queues and publish/subscribe topics. It supports features like sessions, duplicate detection, dead‑lettering, and transactions, making it suitable for complex integration scenarios. Service Bus can decouple applications, implement asynchronous workflows, and integrate with on‑premises or third‑party systems. It supports AMQP and integrates with Azure Functions, Logic Apps, and other services.

**Typical scenario / pattern**
A typical pattern is using Service Bus queues to buffer work items between a front‑end API and a set of backend worker services. Topics and subscriptions are used for pub/sub patterns, where multiple subscribers need to react to the same event (e.g. `OrderPlaced`). Service Bus sessions enable ordered message processing per key, useful for workflows that must preserve sequence, while dead‑letter queues capture failed messages for later inspection.

### Azure Event Hubs

[Azure Event Hubs](https://azure.microsoft.com/services/event-hubs/) is a big data streaming platform and event ingestion service. It can ingest millions of events per second from applications, IoT devices, and services, storing them temporarily for consumers to process. With Event Hubs, you can build streaming pipelines, event‑driven architectures, and telemetry ingestion layers. It supports partitioning, consumer groups, and integrations with Stream Analytics, Databricks, and Kafka ecosystems (via Kafka‑compatible endpoints).

**Typical scenario / pattern**
A common pattern is collecting telemetry from several devices or microservices into an Event Hub, then processing that stream in near real time using Azure Stream Analytics or Apache Spark on Databricks. The processed results are written to Blob Storage, Data Lake, or Synapse for further analysis. Event Hubs also serves as the ingestion layer for log and metric data feeding into observability and security analytics systems.

### Azure Synapse Analytics

[Azure Synapse Analytics](https://azure.microsoft.com/services/synapse-analytics/) is an integrated analytics service that combines enterprise data warehousing, big data analytics, and data integration. It unifies SQL pools, Spark pools, data lake integration, and pipelines into a single workspace. Synapse can build modern data platforms that need to blend structured and unstructured data for reporting, BI, and advanced analytics. Synapse integrates deeply with Azure Data Lake Storage, Power BI, and Azure Machine Learning.

**Typical scenario / pattern**
A typical pattern is a data lakehouse architecture where raw data lands in Azure Data Lake, Synapse pipelines orchestrate ingestion and transformation, and dedicated SQL pools serve as the curated warehouse for BI tools. Spark pools support data science and advanced analytics on the same data. This pattern centralises analytics workloads and simplifies governance and security.

### Azure Machine Learning Service

[Azure Machine Learning](https://azure.microsoft.com/services/machine-learning/) (Azure ML) is a cloud service for building, training, and deploying machine learning models. It provides workspaces, compute clusters, managed environments, MLOps tooling, and integration with notebooks (e.g. Jupyter). Use Azure ML to standardise the ML lifecycle, from data preparation to model deployment and monitoring. It integrates with Synapse, Data Lake, and Power BI, and supports deployment to real‑time endpoints, batch pipelines, and edge devices.

**Typical scenario / pattern**
A common pattern is a data science team using Azure ML workspaces and compute clusters to train models on data stored in Data Lake. Trained models are registered in the model registry and deployed as managed endpoints. Application backends in AKS or App Service call these endpoints for predictions, while monitoring tracks accuracy.

### Azure Functions

[Azure Functions](https://azure.microsoft.com/services/functions/) is a serverless compute service that runs event‑driven code without needing to manage servers. You write functions in languages like C#, JavaScript, Python, or Java, and bind them to triggers such as HTTP requests, timers, Service Bus messages, Event Hubs events, or Blob Storage changes. Functions are for lightweight APIs, background jobs, integrations, and event‑driven workflows, taking advantage of automatic scaling and consumption‑based pricing.

**Typical scenario / pattern**
A typical pattern is an event‑driven integration workflow: a file uploaded to Blob Storage triggers a Function that validates and transforms the content, then sends a message to Service Bus or writes to a database. Another pattern is building a serverless HTTP API where Functions implement endpoints behind Azure API Management or direct HTTP triggers, suitable for spiky or low‑throughput workloads where hosting a full web server would be overkill.

### Azure DevOps Pipelines

[Azure Pipelines](https://azure.microsoft.com/services/devops/pipelines/) is the CI/CD component of Azure DevOps, providing build and release pipelines for many languages and platforms. It supports YAML‑defined pipelines, hosted and self‑hosted agents, and integration with GitHub, Azure Repos, and other SCMs. With Azure Pipelines you can implement automated builds, tests, security scans, and deployments to Azure services (AKS, App Service, Functions, VMs) or other environments. It supports multi‑stage pipelines, environments, approvals, and integration with Azure Boards for end‑to‑end DevOps.

**Typical scenario / pattern**
A common pattern is a multi‑stage YAML pipeline that builds and tests a microservice, builds a container image, pushes it to ACR, and then deploys to AKS across dev, test, and production stages. Manual approval gates and quality checks (e.g. test coverage, static analysis) are enforced between stages. This provides a repeatable, auditable path to production, aligned with Git‑based workflows and infrastructure as code.
