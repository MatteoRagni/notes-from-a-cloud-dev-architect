# 🚧​ OpenShift Services and Ecosystem

Red Hat OpenShift is an enterprise Kubernetes platform built on open source. It adds opinionated components, automation and enterprise‑grade services to Kubernetes.

### Core Features

OpenShift provides scalability, flexibility and portability. It allows applications to scale to thousands of instances and run across hundreds of nodes, whether self‑managed or fully managed on‑premises or in the cloud. It uses OCI‑compliant container images and the CNCF‑certified Kubernetes distribution for portability. OpenShift offers developer tools (Source‑to‑Image, built‑in CI/CD), service mesh, serverless capabilities, and integrated logging and monitoring. Additional features include automated installation/upgrades, multicluster management, advanced security, persistent storage, and a broad ecosystem.

### OpenShift Service Mesh

OpenShift Service Mesh (based on Istio, Envoy, Kiali, Jaeger) provides uniform traffic management, security (mTLS), telemetry and policy enforcement for microservices. It supports canary deployments, A/B testing, fault injection, and multi‑cluster topologies. Kiali visualizes the mesh topology; Jaeger enables distributed tracing; mTLS encrypts service communication; and Envoy sidecars handle routing.

### OpenShift Serverless

OpenShift Serverless, built on the Knative project, enables developers to run event‑driven applications with automatic scaling (including scale‑to‑zero). It supports serverless containers, functions and workflows. It integrates with OpenShift Service Mesh, Pipelines and GitOps. Serverless features include event mesh for connecting event producers/consumers, serverless logic for orchestrating event flows, and multicloud portability with built‑in security.

### OpenShift Pipelines (Tekton)

OpenShift Pipelines is a Kubernetes‑native CI/CD solution built on Tekton. It allows you to define pipelines as code using YAML and run tasks in isolated containers. It integrates with source repositories (Git), image registries and cluster resources to build, test and deploy applications. Benefits include no centralized CI server (tasks run on cluster pods), on‑demand scaling, and DevSecOps practices (signed tasks, secrets, scanning).

### OpenShift GitOps

OpenShift GitOps (based on Argo CD) embraces the "Everything as Code" approach. It uses Git as the single source of truth; cluster configuration and application manifests reside in Git. The GitOps controller reconciles cluster state with Git, ensuring consistency and enabling declarative deployments. Benefits include improved security, auditability, and multicluster consistency. GitOps fosters collaboration and supports environment promotion by Git pull requests.

### OpenShift Virtualization

OpenShift Virtualization allows running virtual machines (VMs) alongside containers on OpenShift. It is built on KubeVirt and integrated into the OpenShift platform. Key benefits include a unified platform (run VMs and containers together), scaling using underlying cloud infrastructure and familiar Kubernetes tools, simplified management via OpenShift’s GUI and CLI, cost efficiency by consolidating workloads, and persistent storage for VMs.

### OpenShift Data Foundation (ODF)

ODF provides software‑defined storage for OpenShift. It offers multi‑model persistent storage (block, file, object) built on Ceph, enabling developers to store application data, container registries, logging and metrics. ODF delivers a consistent data experience across hybrid cloud environments, data replication, disaster recovery and a single support point. It integrates with OCP for dynamic provisioning and encryption.

### Red Hat OpenShift Service on AWS (ROSA)

ROSA delivers OpenShift as a fully managed service on AWS. It simplifies cluster creation via CLI, AWS Management Console or Red Hat portal. Benefits include accelerated time to value (reducing development time by 60–70 %), enabling teams to focus on innovation rather than infrastructure (50 % reduction in infra management), hybrid cloud flexibility and increased operational efficiency. ROSA features a fully managed control plane, integration with AWS services (IAM, CloudWatch, S3, etc.) and pay‑as‑you‑go billing.

### Azure Red Hat OpenShift (ARO)

ARO is a fully managed OpenShift service jointly engineered by Microsoft and Red Hat. The control plane and worker nodes are patched, updated and monitored by Red Hat and Microsoft. Benefits include integrated development tools (Azure DevOps, Visual Studio Code), enhanced security and compliance with Azure governance, joint support and engineering, 99.95 % SLA and cost optimization via Azure Consumption Commitment.

### Other Services

- **Red Hat Quay**: Container registry with role‑based access and image scanning.
- **Red Hat Advanced Cluster Management (ACM)**: Centralizes multicluster management, policy enforcement and observability across Kubernetes clusters.
- **Red Hat Advanced Cluster Security (ACS)**: Provides container security, vulnerability scanning and runtime risk mitigation.
- **Developer Experience**: OpenShift includes developer consoles, build pipelines (S2I), integration with IDEs, and dev‑spaces (via Eclipse Che).
