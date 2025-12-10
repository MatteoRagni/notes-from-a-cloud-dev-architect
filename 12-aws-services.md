# AWS Services

AWS provides a rich set of managed services for compute, storage, databases, messaging and more. Understanding these services is crucial for designing cloud‑native microservices.

Below you’ll find a set of short list of key services. Each section explains what the service does, links to the official homepage, and outlines a typical usage scenario or reference pattern.

## Foundation Services

### Amazon EC2 (Elastic Compute Cloud)

[Amazon EC2](https://aws.amazon.com/ec2/) is AWS’s foundational compute service, providing virtual machines (instances) of various sizes, CPU architectures, and performance profiles. As an architect, you treat EC2 as the basic building block for IaaS workloads: application servers, batch workers, self-managed databases, and custom infrastructure components. EC2 integrates with VPC (Virtual Private Cloud) networking, EBS/EFS storage, Auto Scaling Groups, and higher-level services like ECS and EKS. You choose instance families (e.g. compute‑optimized, memory‑optimized, GPU) based on workload characteristics, and design around availability zones for resilience. Pricing models (on‑demand, reserved, spot) strongly influence cost architecture, especially for bursty versus steady‑state workloads.

**Typical scenario / pattern**
A classic pattern is a three‑tier web application (UI, Business Logic, Storage) where EC2 instances in an Auto Scaling Group host stateless app servers behind an Application Load Balancer, talking to an RDS database in private subnets. For more advanced scenarios, EC2 backs custom clusters (e.g. high‑performance computing, bespoke container schedulers) where you need low‑level OS control.

### Amazon EKS (Elastic Kubernetes Service)

[Amazon EKS](https://aws.amazon.com/eks/) is a managed Kubernetes control plane that lets you run standard Kubernetes clusters on AWS without operating the master nodes yourself. From an architecture perspective, EKS is the primary choice when you want **cloud‑native workloads** on Kubernetes but still need deep AWS integration (VPC CNI, IAM roles for service accounts, ALB/NLB ingress, CloudWatch logging). EKS supports self‑managed and managed node groups, as well as Fargate for serverless pods. You design around cluster boundaries, multi‑AZ node groups, network policies, and integration with GitOps or CI/CD tools for deployment.

Note: AWS Fargate is a serverless compute engine for containers.

**Typical scenario / pattern**
A common pattern is a microservices platform where each service is deployed as a Kubernetes Deployment or StatefulSet on EKS. You use an Ingress (often backed by an AWS Application Load Balancer) for north‑south traffic and optionally a service mesh (e.g. AWS App Mesh or Istio) for east‑west traffic. This is the natural target for teams standardizing on Kubernetes and wanting portable, container‑based workloads.

### Amazon ECS (Elastic Container Service)

[Amazon ECS](https://aws.amazon.com/ecs/) is AWS’s native container orchestration service. Unlike EKS, ECS is deeply integrated with AWS primitives and abstracts away Kubernetes concepts. Developers typically pick ECS when they want **managed container scheduling** with minimal operational overhead and are comfortable with AWS‑specific abstractions. ECS can run tasks on EC2 instances you manage or on AWS Fargate for serverless containers. It integrates tightly with IAM, CloudWatch, ALB/NLB, and service discovery. Task definitions capture container configuration, resource needs, and IAM roles; services manage desired count and rolling deployments.

**Typical scenario / pattern**
A typical pattern is running multiple microservices or batch workers as ECS services on Fargate, each fronted by an Application Load Balancer listener or event triggers. This is frequently used for greenfield microservices platforms where the team doesn’t need full Kubernetes flexibility but wants strong AWS integration, easy autoscaling, and reduced control plane complexity.

### Amazon Elastic Container Registry (ECR)

[Amazon ECR](https://aws.amazon.com/ecr/) is a fully managed Docker‑compatible container registry. It stores and manages container images, handles versioning and image scanning, and integrates tightly with ECS, EKS, and AWS Lambda (for container‑based functions). From an architect’s point of view, ECR solves image distribution, access control (via IAM), and security scanning in a way that aligns with AWS region and account boundaries. You can use private repositories, lifecycle policies to clean up old images, and cross‑account access patterns for shared images across environments or organisations.

**Typical scenario / pattern**
The standard pattern is CI/CD pipelines pushing images to ECR after build and test stages. ECS or EKS services then pull from ECR during deployments orchestrated by CodePipeline, Argo CD, or other tools. In multi‑account setups, you might centralize “golden base images” in a shared services account’s ECR, consumed by workloads across multiple application accounts. Or you post some additional access rule via API on the infra.

### Amazon S3 (Simple Storage Service)

[Amazon S3](https://aws.amazon.com/s3/) is an object storage service designed for virtually unlimited scale, high durability, and flexible cost tiers. Objects are stored in buckets and accessed via HTTP APIs, SDKs, or integrations with many AWS services. As an architect, you use S3 for static assets, backups, logs, data lakes, and as a staging area between systems. S3 provides storage classes (Standard, IA, Glacier) for cost optimization, lifecycle policies, cross‑region replication, server‑side encryption, and fine‑grained IAM‑based access control. It’s a central data hub in most AWS architectures. Egress is what you need to learn to estimate.

**Typical scenario / pattern**
A common pattern is using S3 as the landing zone for raw data ingestion (e.g. logs, clickstreams, binary data) or to serve binary artifacts. Another frequent pattern is hosting static websites or SPAs directly from S3, fronted by CloudFront and secured with Route 53 DNS and ACM TLS certificates.

### Amazon EBS (Elastic Block Store)

[Amazon EBS](https://aws.amazon.com/ebs/) provides network‑attached block storage volumes for EC2 instances. Volumes behave like virtual disks that you format with a filesystem and mount into instances. Developers use EBS where they need low‑latency, persistent storage tightly coupled to a single instance, such as databases, application servers with local state, or legacy workloads. EBS offers different volume types (gp3, io1/io2, st1, sc1) that trade off performance, IOPS, and cost. Features include snapshots, encryption at rest, and the ability to detach/reattach volumes across instances in the same AZ.

**Typical scenario / pattern**
A typical pattern is running a self‑managed relational database (e.g. PostgreSQL or MySQL) on EC2 with multiple EBS volumes (data, logs, backups), combined with regular EBS snapshots to S3 for backups. Another use case is high‑performance storage for analytics or build servers that need predictable IOPS but do not require shared access across multiple instances.

### Amazon EFS (Elastic File System)

[Amazon EFS](https://aws.amazon.com/efs/) is a fully managed, elastic NFS file system that can be mounted concurrently from many EC2 instances or container tasks. For architects, EFS is the go‑to option when multiple compute nodes need **shared POSIX‑compatible storage** without managing file servers. It scales automatically with data size, supports multi‑AZ availability, and integrates with VPC networking and security groups. Mount targets in each AZ provide local access, and EFS can be used by EKS or ECS via CSI drivers or Docker volume plugins.

**Typical scenario / pattern**
Common patterns include shared configuration or content across web servers (e.g. shared uploads, CMS data), home directories for Linux users, or shared storage for stateful microservices that cannot yet be refactored. In container platforms, you might use EFS to persist state for pods or tasks that require shared file access across replicas, aligning with older application assumptions while still running on modern infrastructure.

### Amazon VPC (Virtual Private Cloud)

[Amazon VPC](https://aws.amazon.com/vpc/) is the foundational networking construct in AWS. It defines a logically isolated virtual network with CIDR ranges, subnets, route tables, internet/NAT gateways, and network ACLs. Developers use VPCs to segment environments (prod, staging), isolate workloads, and control connectivity to on‑premises networks via VPN or Direct Connect. Within a VPC, security groups provide stateful firewall rules at the instance or ENI level. Multi‑AZ subnet design is crucial for _high availability_, and VPC peering or Transit Gateway enable multi‑VPC and multi‑account topologies.

**Typical scenario / pattern**
A reference pattern is a VPC with public subnets hosting load balancers and bastion hosts, and private subnets for application servers and databases. Connectivity to on‑premises is established via a Site‑to‑Site VPN or Direct Connect.

### AWS Elastic Load Balancing (ELB)

[AWS Elastic Load Balancing](https://aws.amazon.com/elasticloadbalancing/) distributes incoming traffic across multiple targets (EC2 instances, IPs, containers, Lambda functions). There are several flavours: Application Load Balancer (ALB) for HTTP/HTTPS and advanced routing, Network Load Balancer (NLB) for ultra‑low latency and TCP/UDP, and Gateway Load Balancer for virtual appliances. Developers use ELB to implement **high availability, scalability, and zero‑downtime deployments**. Load balancers integrate tightly with Auto Scaling Groups, target groups, and health checks, and can terminate TLS, offloading certificate management.

**Typical scenario / pattern**
A typical web stack uses an ALB in front of stateless application servers running on EC2, ECS, or EKS. The ALB terminates TLS, routes based on host/path, and performs health checks. For financial or latency‑sensitive workloads, an NLB fronting gRPC or custom TCP services is common. Blue‑green or canary deployments are often implemented by switching target groups or using weighted routing.

### Amazon Route 53

[Amazon Route 53](https://aws.amazon.com/route53/) is a highly available and scalable DNS and traffic management service. It supports public and private hosted zones, health checks, and advanced routing policies (weighted, latency‑based, failover, geolocation). Developers rely on Route 53 to map domain names to AWS resources (ALBs, CloudFront, S3 websites, API Gateway) and to orchestrate global routing strategies across regions. It integrates with other AWS services, ACM for certificates, and can participate in disaster recovery  strategies by shifting traffic during outages.

**Typical scenario / pattern**
A common pattern is using Route 53 to route `example.com` to a CloudFront distribution (Content Delivery) fronting an ALB in multiple regions. Health checks monitor endpoints, and a failover routing policy automatically moves traffic from a primary region to a standby region. In hybrid environments, private hosted zones allow DNS resolution for internal services within a VPC, avoiding hard‑coded IPs.

### AWS IAM (Identity and Access Management)

[AWS IAM](https://aws.amazon.com/iam/) is the central service for managing identities, permissions, and access control. It defines users, groups, roles, and policies that govern who can do what on which resources. For an architect, IAM is the backbone of **least privilege**, separation of duties, and cross‑account access patterns. Policies are JSON documents expressing fine‑grained permissions; roles allow workloads (EC2, Lambda, ECS tasks, EKS service accounts) to obtain temporary credentials via STS (Security Toke Service). IAM also integrates with SSO providers and AWS Organizations for large‑scale governance.

**Typical scenario / pattern**
A standard pattern is assigning IAM roles to application compute (e.g. EC2 instance profiles or IAM roles for service accounts in EKS) so code can access S3, DynamoDB, or other services without embedded credentials.

### Amazon CloudWatch

[Amazon CloudWatch](https://aws.amazon.com/cloudwatch/) is AWS’s observability platform for metrics, logs, and alarms. It collects infrastructure metrics from services like EC2, RDS, and ELB, as well as custom metrics from applications. CloudWatch Logs aggregates log streams, while Logs Insights provides query capabilities. From an architectural perspective, CloudWatch is key to implementing **SLOs (Service Level Objectives), alerting, and capacity planning**. Dashboards visualize health and performance, and alarms trigger notifications or automated remediation via SNS, Lambda, or Systems Manager.

**Typical scenario / pattern**
A common pattern is instrumenting services to emit custom business metrics (e.g. orders per minute, error rates) into CloudWatch. You then define alarms based on thresholds or anomaly detection and wire them to an on‑call system. For example, on an EC2 instance there may be a CloudWatch Agent that collects OpenTelemetry metrics.

### Amazon CloudTrail

[Amazon CloudTrail](https://aws.amazon.com/cloudtrail/) records API calls and management events across your AWS accounts. It logs who did what, when, from where, and with which parameters. Developers rely on CloudTrail for **auditing, security investigations, and compliance** (e.g. PCI, ISO). Trails deliver events to S3 and optionally to CloudWatch Logs.

**Typical scenario / pattern**
A typical pattern is a centralized logging account where all accounts in an AWS Organization send their CloudTrail logs. Security and compliance teams SIEM tooling to query these logs for suspicious activity, such as unusual console sign‑ins or IAM changes. Automated rules can react to specific CloudTrail events, such as disabling credentials when an access key is exposed.

## High Level Services

### Amazon RDS (Relational Database Service)

[Amazon RDS](https://aws.amazon.com/rds/) is a managed relational database service supporting engines like PostgreSQL, MySQL, MariaDB, SQL Server, and Oracle. It abstracts away much of the heavy lifting of running databases: provisioning, patching, backups, and basic monitoring. Developers use RDS when they want SQL but don’t want to operate databases at the OS and storage level. Features include Multi‑AZ deployments, read replicas, automated backups, and integration with IAM for security.

**Typical scenario / pattern**
A standard pattern is a stateless application stack (on EC2/ECS/EKS) talking to an RDS PostgreSQL database in private subnets. Multi‑AZ deployment provides high availability; read replicas support read scaling and reporting. Maintenance windows allow controlled patching, and automated snapshots underpin point‑in‑time recovery strategies. Compared to self‑managed databases on EC2, RDS reduces operational burden and simplifies compliance.

### Amazon DynamoDB

[Amazon DynamoDB](https://aws.amazon.com/dynamodb/) is a fully managed NoSQL key‑value and document database designed for millisecond latency at scale. It offers automatic partitioning, on‑demand or provisioned capacity, and features like global tables and streams. Developers choose DynamoDB when they need **predictable performance, massive scale, and flexible schemas**, especially for access patterns that can be modeled as key‑based lookups and range queries. It supports fine‑grained IAM permissions and integrates with Lambda, Kinesis, and other services for event‑driven designs.

**Typical scenario / pattern**
Typical use cases include user profiles, session stores, shopping carts, and IoT device state. A reference pattern is a serverless backend where API Gateway and Lambda functions read/write to DynamoDB, using DynamoDB Streams to trigger additional processing or projections (read models). 

### Amazon ElastiCache

[Amazon ElastiCache](https://aws.amazon.com/elasticache/) is a managed in‑memory data store supporting Redis and Memcached. It provides sub‑millisecond latency for frequently accessed data, making it ideal as a cache layer in front of databases or APIs. Developers leverage ElastiCache to reduce database load, reduce latency, and implement patterns like **cache‑aside**, **write‑through**, and **session storage**. It supports replication, clustering for horizontal scale, automatic failover, and integration with VPC networking and IAM (via auth at the application layer).

**Typical scenario / pattern**
A common pattern is a high‑traffic web application where reads are offloaded from RDS or DynamoDB by caching hot keys in ElastiCache for Redis. Application code follows a cache‑aside pattern: check the cache first, fall back to the database on miss, then populate the cache. Another use case is centralized session storage for horizontally scaled web servers, ensuring consistent user sessions across multiple instances.

### Amazon SQS (Simple Queue Service)

[Amazon SQS](https://aws.amazon.com/sqs/) is a fully managed message queuing service that enables asynchronous, decoupled communication between components. It supports standard queues (at‑least‑once delivery, best‑effort ordering) and FIFO queues (exactly‑once processing, ordered delivery). Developers use SQS to buffer work between producers and consumers, absorb bursts, and increase resilience when downstream systems are slow or temporarily unavailable. Visibility timeouts, dead‑letter queues, and long polling are key tuning knobs.

**Typical scenario / pattern**
A common pattern is a producer (e.g. web API) pushing jobs to an SQS queue, while a fleet of workers (EC2, ECS, or Lambda) consumes messages at its own pace. This decouples request handling from background processing—for instance, sending emails, resizing images, or applying business rules—improving user‑perceived latency and system robustness. Dead‑letter queues collect poisoned messages for later inspection.

### Amazon MSK (Managed Streaming for Apache Kafka)

[Amazon MSK](https://aws.amazon.com/msk/) is a fully managed service for running Apache Kafka on AWS. It handles cluster provisioning, patching, and monitoring while giving you a native Kafka interface. Developers adopt MSK when they want **event streaming** with Kafka’s ecosystem (producers, consumers, Kafka Connect, Kafka Streams) but don’t want to operate ZooKeeper/broker infrastructure. MSK integrates with VPC networking, IAM (via MSK IAM auth), and storage options like EBS. You still design topics, partitions, and retention policies as in self‑managed Kafka.

**Typical scenario / pattern**
A reference pattern is a centralized event bus where microservices publish domain events (e.g. `OrderPlaced`, `PaymentCaptured`) to Kafka topics on MSK. Downstream services subscribe to those events for projections, analytics, or integration with external systems. This enables event‑driven architectures, audit logs, and near real‑time analytics pipelines when combined with consumers running on ECS/EKS or serverless functions.

### Amazon Redshift

[Amazon Redshift](https://aws.amazon.com/redshift/) is a fully managed, petabyte‑scale data warehouse optimized for analytical queries. It uses columnar storage and massively parallel processing (MPP) to run complex SQL queries quickly over large datasets. Developers use Redshift as the central analytics engine in a **modern data warehouse** or lakehouse architecture.

**Typical scenario / pattern**
A common pattern is ingesting raw data into S3, transforming it via Glue (AWS Extract Transform Load service) or other ETL tools, and loading it into Redshift tables. BI tools connect to Redshift for dashboards and ad‑hoc analysis. This architecture centralizes enterprise reporting and analytics with strong performance and governance.

### Amazon SageMaker

[Amazon SageMaker](https://aws.amazon.com/sagemaker/) is an end‑to‑end machine learning platform that covers data preparation, model building, training, tuning, and deployment. It provides managed Jupyter notebooks, training jobs on scalable infrastructure, built‑in algorithms, and deployment endpoints with autoscaling. From an architecture viewpoint, SageMaker standardizes the **ML lifecycle** and integrates with S3 (data), ECR (containers), CloudWatch (monitoring), and IAM (security). Features like SageMaker Pipelines, Feature Store, and Model Monitor help implement MLOps best practices.

**Typical scenario / pattern**
A typical pattern is a data science team using SageMaker Studio for experimentation, training models on managed training clusters reading data from S3, and then deploying them as SageMaker endpoints. Application backends (running on ECS/EKS/Lambda) call those endpoints for real‑time predictions. Batch transforms run offline scoring jobs, and monitoring tracks model drift, feeding into retraining workflows.

### AWS Lambda

[AWS Lambda](https://aws.amazon.com/lambda/) is a serverless compute service that runs code in response to events without provisioning or managing servers. You package functions (code + dependencies), configure triggers (API Gateway, S3, EventBridge, DynamoDB Streams, etc.), and Lambda handles scaling, concurrency, and availability. Developers use Lambda to build **event‑driven and micro‑batch workloads**, glue code between services, and low‑traffic APIs with cost‑efficient, pay‑per‑use pricing. It enforces short‑lived execution and statelessness by design.

**Typical scenario / pattern**
A classic pattern is a serverless REST API: Amazon API Gateway routes HTTP requests to Lambda functions, which implement business logic and store data in DynamoDB or RDS. Another common use is event‑driven ETL pipelines where S3 uploads or Kinesis events trigger Lambdas that transform and route data. This style reduces operational burden and fits well for spiky or unpredictable workloads.

### AWS CodePipeline

[AWS CodePipeline](https://aws.amazon.com/codepipeline/) is a fully managed continuous delivery service that orchestrates the stages of your software release process: source, build, test, and deploy. It integrates with CodeCommit, GitHub, CodeBuild, CodeDeploy, CloudFormation, and many third‑party tools. Developers use CodePipeline to encode **release workflows as code**, enforce approvals, and standardize delivery patterns across teams. Pipelines automatically react to code changes and propagate artifacts through environments (dev, test, prod) with gates and manual approvals.

**Typical scenario / pattern**
A reference pattern is a pipeline that triggers on pushes to the main branch in a Git repository, runs builds and tests via CodeBuild, runs infrastructure changes via CloudFormation, and deploys application artifacts to ECS, EKS, or Lambda. Manual approval steps between stages (e.g. test → prod) enforce change control. This pattern promotes repeatable, auditable releases across multiple environments.

### AWS CodeBuild

[AWS CodeBuild](https://aws.amazon.com/codebuild/) is a fully managed build service that compiles source code, runs tests, and produces deployable artifacts. It scales build capacity automatically and charges per build minute, removing the need to manage build servers. From an architecture perspective, CodeBuild is the **build/execution engine** within CI/CD pipelines, often invoked from CodePipeline or other orchestration tools. Build environments are defined via Docker images and `buildspec` files that describe steps.

**Typical scenario / pattern**
A typical scenario is a pipeline where CodeBuild pulls code from CodeCommit or GitHub, runs unit and integration tests, builds container images or packages, pushes them to ECR or S3, and publishes reports (test results, coverage) to CloudWatch or third‑party services. Multiple build projects can support different languages or microservices, enabling standardization of build practices across an organization.
