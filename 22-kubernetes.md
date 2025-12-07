# Fundamentals of Kubernetes

Kubernetes (K8s) is an open‑source platform for automating deployment, scaling, and management of containerized workloads. It provides building blocks for orchestrating containers across clusters of machines.

### Key Features

- **Service discovery and load balancing**: K8s automatically exposes Pods via Services and balances traffic.
- **Storage orchestration**: Supports mounting persistent volumes using storage classes and provisioners.
- **Automated rollouts and rollbacks**: Deployments manage versioned updates and can roll back on failure.
- **Self‑healing**: Kubernetes restarts failed containers, reschedules them on healthy nodes and kills non‑responsive Pods.
- **Horizontal scaling**: K8s scales Pods based on CPU/memory usage via the Horizontal Pod Autoscaler (HPA).
- **Configuration management & secrets**: ConfigMaps and Secrets decouple configuration from container images.
- **Batch & CronJobs**: Supports batch workloads and scheduled tasks.
- **Extensibility**: Custom resource definitions (CRDs) and operators extend the API.

Kubernetes is not a platform as a service (PaaS); it does not provide built‑in logging, monitoring or deployment frameworks. Instead, it provides the primitives to build such solutions.

### Cluster Architecture

A Kubernetes cluster comprises a **control plane** and multiple **worker nodes**.

- **Control Plane Components**:
  - **kube-apiserver**: Exposes the Kubernetes API.
  - **etcd**: Distributed key‑value store holding cluster state.
  - **kube-scheduler**: Selects nodes for newly created Pods based on resource availability.
  - **kube-controller-manager**: Runs controllers (Deployment, Job, ReplicaSet) to reconcile desired and actual states.
  - **cloud-controller-manager**: Integrates with cloud provider APIs.

- **Node Components**:
  - **kubelet**: Ensures containers described in Pods are running.
  - **kube-proxy**: Maintains network rules and implements Service load balancing.
  - **Container runtime**: Executes containers (Docker, CRI-O, containerd).

### Key Kubernetes Objects

- **Pod**: Smallest deployable unit; one or more containers sharing network/storage.
- **ReplicaSet**: Maintains a stable set of identical Pods.
- **Deployment**: Declaratively manages stateless applications; supports rolling updates and rollbacks.
- **StatefulSet**: Manages stateful applications with stable network identities and persistent storage.
- **DaemonSet**: Ensures a copy of a Pod runs on all (or selected) nodes.
- **Job/CronJob**: Run finite tasks once or on a schedule.
- **ConfigMap/Secret**: Store configuration and sensitive data.
- **Service**: Exposes Pods using stable IP/hostname and load balances traffic.
- **Ingress**: Provides HTTP/HTTPS routing to Services using Ingress controllers.

### Security and Policies

- Use RBAC to restrict access to resources.
- Isolate Pods using NetworkPolicies.
- Use PodSecurityPolicies or the Pod Security Admission (PSA) to enforce security contexts.
- Use namespaces to separate environments or teams.
- Scan images for vulnerabilities; use admission controllers (e.g., Open Policy Agent) to enforce compliance.

### Logging and Monitoring

- Deploy centralized logging (EFK/ELK, Loki) to collect container logs.
- Use Prometheus for metrics; Grafana for dashboards.
- Use tracing (Jaeger, OpenTelemetry) to trace request flows.
- Use alerting (Prometheus Alertmanager) to notify on anomalies.

