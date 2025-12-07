# AWS Services

AWS provides a rich set of managed services for compute, storage, databases, messaging and more. Understanding these services is crucial for designing cloud‑native microservices. Here we summarise core services relevant for building microservices and highlight how OpenShift integrates with them.

### Elastic Compute Cloud (EC2)

EC2 provides secure, resizable compute capacity. Instances can be chosen from various families (e.g., general‑purpose, compute‑optimized). Auto Scaling groups automatically adjust capacity to maintain availability and optimize cost. EC2 can host containers (via Docker) or serve as worker nodes for self‑managed Kubernetes.

### Relational Database Service (RDS)

RDS is a managed relational database service supporting engines like MySQL, PostgreSQL, SQL Server and Oracle. AWS handles provisioning, patching, backups and automatic failover. For microservices, you might use RDS per service or adopt Amazon Aurora for high availability and global replicas.

### Amazon S3

Simple Storage Service (S3) provides durable, scalable object storage with eleven 9s durability and high availability. S3 is often used to store media assets, backups, logs and static content. With S3 versioning and lifecycle policies, you can manage data retention. S3 also offers event notifications (via EventBridge/SNS/Lambda) for event‑driven workflows.

### AWS Lambda

Lambda is a serverless compute service that runs code without provisioning servers. It scales automatically and bills per millisecond. You can build microservices as functions triggered by events (e.g., API Gateway, S3 uploads). For event‑driven architectures, Lambda integrates with SQS/SNS, DynamoDB Streams and EventBridge.

### Amazon Simple Queue Service (SQS)

SQS is a fully managed message queue service that enables decoupling and scaling of microservices. It supports **standard queues** (at‑least‑once delivery, high throughput) and **FIFO queues** (exactly‑once processing, ordered delivery). SQS eliminates administrative overhead and ensures reliable message delivery, storing messages redundantly across multiple availability zones. It offers server‑side encryption via KMS and pay‑per‑use pricing.

### Amazon Simple Notification Service (SNS)

SNS is a fully managed pub/sub messaging service for delivering notifications or broadcasting events to multiple subscribers (SQS queues, Lambda, HTTP endpoints, email). SNS is often combined with SQS for fan‑out patterns and event broadcasting.

### Amazon DynamoDB

DynamoDB is a fully managed NoSQL database offering single‑digit millisecond latency at any scale. It supports key‑value and document data models, integrates with DynamoDB Streams for change data capture and event‑driven architectures, and automatically scales throughput capacity.

### Container Services

- **Amazon Elastic Container Service (ECS)**: Orchestrates containers using EC2 or AWS Fargate (serverless compute for containers). ECS integrates with AWS services (IAM, ALB, CloudWatch) and is simpler than Kubernetes.
- **Amazon Elastic Kubernetes Service (EKS)**: Fully managed Kubernetes service. AWS manages the control plane; you manage worker nodes (EC2, Fargate). EKS integrates with IAM, ECR, CloudWatch and supports add‑ons (Ingress, service mesh, autoscaling).

### ROSA Integration

Red Hat OpenShift Service on AWS (ROSA) runs on top of AWS, using EKS under the hood. AWS manages the infrastructure; Red Hat manages the OpenShift control plane. ROSA integrates with:

- **IAM**: Roles for service accounts (IRSA) map Kubernetes service accounts to AWS IAM roles.
- **CloudWatch**: Logs and metrics integration. 
- **Elastic Load Balancers (ELBs)**: Expose OpenShift Routes.
- **S3 and EBS**: Persistent storage for applications. 
- **EventBridge and SQS**: Event-driven microservices inside OpenShift can use AWS messaging.

---
