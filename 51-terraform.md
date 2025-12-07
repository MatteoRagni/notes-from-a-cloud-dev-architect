# Fundamentals of Terraform

Terraform by HashiCorp is an Infrastructure‑as‑Code (IaC) tool enabling the provisioning and management of cloud and on‑premises infrastructure resources via declarative configuration files. It uses providers to interact with APIs of cloud services.

### Core Workflow

- **Write**: Define resources (e.g., compute instances, networks) in `.tf` files using the HashiCorp Configuration Language (HCL). Variables and modules allow reuse and parameterization.
- **Plan**: The `terraform plan` command generates an execution plan, showing proposed changes to reach the desired state without applying them.
- **Apply**: `terraform apply` executes the plan, creating, updating or destroying resources as needed.

### State Management

Terraform maintains a **state file** tracking resources, mapping configuration to real infrastructure. This state can be stored locally or remotely (e.g., in an S3 bucket) for collaboration. Use remote state with locking to avoid concurrent modifications.

### Providers and Modules

Providers implement CRUD operations for resources across clouds and services (AWS, Azure, GCP, Kubernetes, etc.). Modules encapsulate reusable configurations. Use versioned modules to standardize infrastructure patterns (e.g., VPC, AKS cluster).

### Terraform Cloud and Enterprise

Terraform Cloud/Enterprise provide remote execution, workspace management, policy enforcement (Sentinel), state storage, and collaboration features. They integrate with VCS and support team workflows.

### Best Practices

- Use variables and locals to parameterize configurations.
- Use environment separation (workspaces) for dev/stage/prod.
- Employ backend state with locking (e.g., S3 + DynamoDB) for teams.
- Use modules for repeated patterns.
- Validate configurations with `terraform validate` and `tflint`.

