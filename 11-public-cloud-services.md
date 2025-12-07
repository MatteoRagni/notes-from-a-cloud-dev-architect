# Key Public Cloud Services and Their Cross-Platform Equivalents

Public cloud providers offer a wide array of services. These can be categorized into **foundational services** (core infrastructure like compute, storage, and networking) and **high-level services** (platform and application-level services like databases, analytics, etc.). Below, I grouped the most important cloud services into these two categories and compared the offerings of Amazon Web Services (AWS), Microsoft Azure, Google Cloud Platform (GCP), and Red Hat OpenShift (or related open-source alternatives when a direct OpenShift service is not available).

:::{note}
Last update: **December, 2025**

Things may have changed since this page was written
:::

## Foundational Cloud Services

Foundational services are the building blocks of any cloud deployment. They include compute resources (virtual machines and containers), various storage options, networking capabilities, identity management, and observability (monitoring and logging).

```{list-table} Metrics, Traces and Logs
:label: foundation-services-tbl
:header-rows: 1

* - **Service Category (Description)**

  - **AWS**
  - **Azure**
  - **Google Cloud**
  - **Red Hat / OpenShift**

* - **Compute (Virtual Machines):** On-demand virtual servers in the cloud <br> *(rentable VM instances to run applications).*

  - Amazon EC2 (Elastic Compute Cloud)
  - Azure Virtual Machines
  - Google Compute Engine (GCE)
  - OpenShift Virtualization

* - **Compute (Containers):** Managed Kubernetes-based container orchestration service <br>*(deploy and scale containerized applications).*

  - Amazon EKS (Elastic Kubernetes Service) or Amazon ECS (for containers)
  - Azure Kubernetes Service (AKS)
  - Google Kubernetes Engine (GKE)
  - Red Hat OpenShift Container Platform

* - **Container Registry:** Managed container image registry for storing and retrieving container images <br>*(facilitates container deployment workflows).*

  - Amazon Elastic Container Registry (ECR)
  - Azure Container Registry (ACR)
  - Google Container Registry / Artifact Registry
  - Red Hat Quay (OpenShift Container Registry)

* - **Object Storage:** Scalable storage for unstructured data (objects/blobs) <br>*(store/retrieve files, media, backups, etc. via APIs).*

  - Amazon S3 (Simple Storage Service)
  - Azure Blob Storage
  - Google Cloud Storage
  - OpenShift Data Foundation - Object Storage

* - **Block Storage:** Persistent block-level storage volumes for VMs/containers <br>*(disk volumes attached to instances for filesystems or databases).*

  - Amazon EBS (Elastic Block Store)
  - Azure Disk Storage (Managed Disks)
  - Google Persistent Disk
  - OpenShift Data Foundation - Block Storage

* - **File Storage:** Shared file storage service (managed NFS/SMB file systems) <br>*(mountable network file shares for multiple instances).*

  - Amazon EFS (Elastic File System)
  - Azure Files
  - Google Cloud Filestore
  - OpenShift Data Foundation - File Storage

* - **Networking (Virtual Network):** Isolated virtual network for cloud resources <br>*(private networking, subnets, routing - cloud VPC/VNet service).*

  - Amazon VPC (Virtual Private Cloud)
  - Azure Virtual Network (VNet)
  - Google Virtual Private Cloud (VPC)
  - OpenShift SDN

* - **Networking (Load Balancing):** Distribute incoming traffic across multiple instances or containers <br>*(ensures high availability and scaling of services).*

  - AWS Elastic Load Balancing (ELB)
  - Azure Load Balancer and Application Gateway for HTTP (like Cloudflare Argo)
  - Google Cloud Load Balancing
  - OpenShift Router

* - **Networking (DNS):** Domain Name System service for managing domain names <br>*(translates domain names to IP addresses).*

  - Amazon Route 53
  - Azure DNS
  - Google Cloud DNS
  - *No built-in service* - use external DNS

* - **Identity & Access Management:** Managed identities, authentication, and access control for cloud resources <br>*(user accounts, single sign-on, roles/policies for resource access).*

  - AWS IAM (Identity and Access Management)
  - Azure Active Directory & Azure RBAC *(identity federation and role-based access)*
  - Google Cloud IAM *(integrated with Google accounts for identity)*
  - Red Hat Single Sign-On (RH-SSO)

* - **Observability (Monitoring & Logging):** Monitoring metrics and centralized logging for resources and applications <br>*(track performance, health, and audit activities).*

  - Amazon CloudWatch (metrics & logs) CloudTrail (audits and traces)
  - Azure Monitor (metrics) & Azure Log Analytics (logging)
  - Google Cloud Operations Suite *(Cloud Monitoring & Cloud Logging)*
  - OpenShift Monitoring (Prometheus & Grafana) and OpenShift Logging (EFK stack) *(built-in Prometheus/Grafana for metrics, Elasticsearch/Fluentd/Kibana for logs)*
```

## High-Level Cloud Services

High-level services are managed offerings that simplify common application needs such as databases, messaging, data analytics, and machine learning. They are built on top of foundational services and offer ready-to-use platforms so that developers don’t have to manage the underlying infrastructure. The table below compares key high-level cloud services across AWS, Azure, GCP, and OpenShift:

```{list-table}
:label: high-level-services-tbl
:header-rows: 1

* - **Service Category (Description)**
  - **AWS**
  - **Azure**
  - **Google Cloud**
  - **Red Hat / OpenShift**

* - **Relational Database (SQL):** Managed relational database services for structured data <br> *(fully managed SQL databases for transactions and analytics).*

  - Amazon RDS (Relational Database Service) *(e.g. for MySQL, PostgreSQL, Oracle, SQL Server)*
  - Azure SQL Database *(and Azure Database for PostgreSQL/MySQL)*
  - Cloud SQL *(for PostgreSQL, MySQL)*
  - *No native service* - deploy database on OpenShift (PostgreSQL, MariaDB)

* - **NoSQL Database (Document/Key-Value):** Managed NoSQL databases for semi-structured or unstructured data <br> *(document stores, key-value stores, and other NoSQL databases).*

  - Amazon DynamoDB *(fully managed key-value and document DB)*
  - Azure Cosmos DB *(multi-model NoSQL database)*
  - Cloud Firestore *(and Datastore, for document data)*
  - *No native service* - deploy NoSQL database on OpenShift (MongoDB, Cassandra)

* - **In-Memory Cache:** Distributed in-memory data store for caching and fast data access <br> *(reduces latency by storing data in memory).*

  - Amazon ElastiCache *(for Redis or Memcached)*
  - Azure Cache for Redis
  - Cloud Memorystore *(for Redis or Memcached)*
  - Red Hat Data Grid (Infinispan) *(distributed in-memory key-value store for caching)*

* - **Messaging & Streaming:** Services for decoupled messaging, event streaming, and pub/sub communication <br> *(enable asynchronous communication between microservices and real-time data streams).*

  - Amazon SQS (Simple Queue Service) & Amazon **MSK** *(Managed Streaming for Apache Kafka)*
  - Azure Service Bus & Azure Event Hubs *(Event Hubs is compatible with Apache Kafka)*
  - Google Cloud Pub/Sub *(pub/sub messaging service for queues and streams)*
  - Red Hat AMQ (ActiveMQ broker for queues) & AMQ Streams (Apache Kafka)

* - **Data Warehouse / Analytics:** Managed big data analytics and data warehousing platforms <br> *(for large-scale data analysis, SQL data warehouses, and Hadoop/Spark processing).*

  - Amazon Redshift *(cloud data warehouse)*
  - Azure Synapse Analytics *(formerly SQL Data Warehouse; integrates SQL DW and Spark)*
  - BigQuery *(serverless data warehouse)*
  - *No native service* - deploy analytics on OpenShift (e.g. Apache Spark)

* - **Machine Learning Platform:** Services for building, training, and deploying ML models at scale <br> *(includes notebooks, automated model training, and hosting).*

  - Amazon SageMaker *(end-to-end ML model development platform)*
  - Azure Machine Learning Service
  - Google Vertex AI *(managed ML platform, formerly AI Platform)*
  - Red Hat OpenShift Data Science (RHODS) *(cloud service add-on for Jupyter notebooks, model training and deployment on OpenShift)*

* - **Serverless Functions (FaaS):** Run code in response to events without managing servers <br> *(Function-as-a-Service allows execution of code on-demand and auto-scales to zero when idle).*

  - AWS Lambda
  - Azure Functions
  - Google Cloud Functions
  - OpenShift Serverless (Knative Serving) *(serverless framework based on Knative for running functions on OpenShift)*

* - **CI/CD & DevOps Tools:** Managed continuous integration and delivery pipelines for applications <br> *(build, test, and deploy code changes automatically).*

  - AWS CodePipeline, CodeBuild *(CI/CD pipeline services)*
  - Azure DevOps Pipelines *or GitHub Actions*
  - Google Cloud Build & Cloud Deploy
  - OpenShift Pipelines (Tekton) & OpenShift GitOps *(Argo CD)* *(CI/CD on Kubernetes; Tekton for pipelines, Argo CD for GitOps deployments)*
```