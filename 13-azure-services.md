# 🚧​ Azure Services

Microsoft Azure offers services comparable to AWS, with tight integration into enterprise ecosystems (Active Directory, Microsoft 365). Here we summarize key services relevant to microservices and ARO.

### Azure Kubernetes Service (AKS)

AKS is a managed Kubernetes service; Azure manages the control plane and automatically handles updates, patching and scaling. It integrates with Azure Monitor, Azure Policy, Azure AD for authentication and Azure Container Registry (ACR). Node pools can run on VM or VM scale sets; virtual nodes (via Virtual Kubelet) run container instances on serverless infrastructure.

### Azure Functions

Azure Functions is a serverless compute platform supporting triggers (HTTP, timer, queue, Event Hub). Functions scale automatically and charge per execution time. They are ideal for event‑driven microservices, background jobs and integration workflows.

### Azure App Service / Container Apps

Azure App Service hosts web apps and APIs; Container Apps is a serverless container service built on open-source projects (Dapr, KEDA). It supports microservices, event‑driven autoscaling and built‑in service discovery.

### Azure Service Bus

A fully managed enterprise messaging service supporting queues and topics (pub/sub). It offers advanced features like sessions, transactions and dead‑lettering. Service Bus decouples components and coordinates distributed applications.

### Azure Event Hubs & Event Grid

Event Hubs is a big‑data streaming platform for ingesting event streams. Event Grid is an event routing service delivering events from publishers (Azure services or custom topics) to subscribers (Functions, Logic Apps, WebHooks) with support for filters and routing.

### Azure Cosmos DB

Cosmos DB is a globally distributed NoSQL database offering multi‑model APIs (Core SQL, MongoDB, Cassandra, Gremlin, Table). It guarantees low latencies (<10 ms reads/writes), multi‑master write capabilities and global distribution. It integrates with Change Feed for event streaming.

### Azure OpenShift Integration (ARO)

ARO provides fully managed OpenShift clusters on Azure. Red Hat and Microsoft handle cluster operations (install, patch, upgrade, monitoring). Integration points include:

- **Azure Portal**: Single‑pane management; cost consolidated in Azure invoice. 
- **Azure DevOps & GitHub**: Build and deploy pipelines integrate with OpenShift via Tekton or GitOps. 
- **Azure Active Directory**: SSO for OpenShift cluster login. 
- **Azure Disk/File**: Persistent volumes. 
- **Azure Monitor**: Logs and metrics collection. 
- **Azure Key Vault**: Secrets management. 

ARO benefits include integrated development tools, security compliance, joint support and 99.95 % SLA.
