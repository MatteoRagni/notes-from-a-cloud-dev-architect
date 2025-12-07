# Developing Microservices on Kubernetes

When building microservices on vanilla Kubernetes (e.g., GKE, EKS, AKS), many OpenShift features (S2I, GitOps, pipelines) are not built‑in but can be achieved via open‑source projects and tools.

### Build and Deployment

- Use a container build system (Docker, BuildKit, Kaniko) to build images. Store images in a registry (Docker Hub, Quay, ECR/GCR/ACR).
- Use GitOps controllers (Argo CD, Flux) to deploy manifests stored in Git. They sync desired state to the cluster, enabling declarative and auditable deployments.
- Use Helm charts or Kustomize to templatize configurations.
- Use Tekton or Jenkins X for pipelines; they run tasks within Kubernetes.

### Service Mesh and Ingress

- Deploy Istio or Linkerd service mesh to manage cross‑cutting concerns (mTLS, routing, observability). Use Ingress controllers (Nginx, Traefik, Contour) or Gateway API for north‑south traffic.

### Monitoring and Logging

- Deploy Prometheus and Grafana via Helm charts or Operator frameworks.
- Use log collectors (Fluent Bit/Fluentd) to gather container logs; send to Elasticsearch, Loki, or cloud logging services.
- Use OpenTelemetry collectors for traces.

### Security

- Use RBAC to restrict API access; integrate with an identity provider (OIDC, Active Directory).
- Use NetworkPolicies to isolate services; adopt Pod Security Standards to restrict privileges.
- Use secret management solutions (e.g., HashiCorp Vault, AWS Secrets Manager, sealed‑secrets).

### Autoscaling and Resilience

- Configure Horizontal Pod Autoscalers (HPA) and Vertical Pod Autoscalers (VPA). Use Cluster Autoscaler to add/remove nodes based on demand.
- Use open‑source operators like KEDA for event‑driven scaling (scaling based on message queue length, DB metrics).

### Considerations

- Manage cluster upgrades and patching; on managed services (EKS/AKS/GKE) the control plane is handled by the provider.
- Use multi‑cluster tools (e.g., Rancher, ACM) for large fleets.
