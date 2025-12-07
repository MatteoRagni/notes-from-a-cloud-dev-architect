# 🚧​ Ansible

Ansible is an open‑source automation tool used for configuration management, application deployment, and orchestration. It uses a simple declarative language (YAML) to describe the desired state of systems.

### Core Concepts

- **Playbooks**: YAML files containing one or more *plays*; each play applies tasks to a group of hosts.
- **Plays and Tasks**: A play targets hosts and defines ordered *tasks*. Each task calls an Ansible *module* to perform an action (e.g., install packages, copy files). Modules are idempotent; running the same task multiple times yields the same result.
- **Inventory**: Lists the hosts and groups on which tasks operate. Inventory can be static (INI/YAML) or dynamic (via scripts or plugins).
- **Variables**: Allow parameterization; variables can be defined in inventory, playbooks, or external files.
- **Handlers**: Special tasks triggered by *notify* statements when a change occurs (e.g., restart service after configuration update).
- **Roles**: Structured units containing tasks, variables, templates and handlers; they promote reuse and organization.
- **Collections**: Distributable packages containing playbooks, roles, modules and plugins.

### Execution Model

Ansible operates agent‑less via SSH (or WinRM on Windows). When a playbook runs, Ansible connects to each host, executes modules and ensures the system matches the desired state. **Check mode** (`--check`) simulates changes without performing them, useful for validation.

### Use Cases

- **Provisioning**: Automate creating infrastructure (servers, virtual machines, cloud resources).
- **Configuration Management**: Ensure systems conform to desired configurations (e.g., install packages, manage configuration files).
- **Application Deployment**: Deploy apps and microservices, orchestrate rolling updates, set up dependencies.
- **Orchestration**: Coordinate complex workflows across multiple hosts (e.g., patching clusters, scaling nodes).
- **Network Automation**: Manage network devices (routers, switches) using vendor modules.

### Best Practices

- Use version control (Git) for playbooks; adopt GitOps for infrastructure.
- Keep playbooks simple; use roles and collections to modularize.
- Separate inventory, variables and tasks for clarity.
- Validate playbooks with `ansible-lint` and `ansible-playbook --check`.
