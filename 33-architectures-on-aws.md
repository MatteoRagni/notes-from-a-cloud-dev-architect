# Developing Microservices on AWS

When building microservices on AWS without using OpenShift or Kubernetes, you can leverage AWS services directly.

### Serverless and Container Options

- **AWS Lambda**: Build functions that handle discrete actions. Use API Gateway to expose HTTP endpoints; integrate with Step Functions for orchestration and EventBridge for event‑driven flows.
- **Amazon ECS with Fargate**: Run containers without managing servers. Use ECS services for long‑running tasks and ECS tasks for one‑off jobs.
- **AWS App Runner**: A fully managed service that builds and deploys web applications and APIs directly from source or container registry; automatically scales and manages load balancing.

### Orchestration and Messaging

- **Amazon Step Functions**: Coordinate microservices and serverless functions into workflows. Use state machines to manage retries, parallel tasks and error handling.
- **Amazon EventBridge (CloudWatch Events)**: Central event bus for routing events from AWS services and custom applications to targets (Lambda, SQS, SNS, Kinesis).
- **Amazon SQS and SNS**: Use SQS for durable queues and SNS for pub/sub. Use FIFO queues for ordered message processing.

### Datastores

- **DynamoDB**: Suitable for key‑value and document storage; use DynamoDB Streams for event sourcing.
- **Aurora Serverless v2**: On‑demand, auto‑scaling relational database.
- **S3**: Use as static asset store and event trigger.
- **ElastiCache**: Managed Redis/Memcached for caching.

### API Layer

- **Amazon API Gateway**: Create RESTful APIs or WebSocket APIs; integrate with Lambda, ECS, Step Functions.
- **AWS AppSync**: Managed GraphQL service that connects to multiple back‑ends (DynamoDB, Lambda, RDS).

### Observability and Management

- **Amazon CloudWatch**: Central logging and metrics platform; includes Logs, Metrics, Tracing (X-Ray) and alarms.
- **AWS X‑Ray**: Distributed tracing service; collects traces for applications running on Lambda, ECS, EC2.
- **AWS CloudTrail**: Records account activity for auditing.

### Security

- Use IAM roles and policies to grant least‑privilege access.
- Use Amazon Cognito for user authentication and authorization; integrate with API Gateway.
- Use KMS for encryption; SSM Parameter Store and Secrets Manager for secrets.

### Best Practices

- Design microservices to be stateless; use DynamoDB or RDS for state.
- Use infrastructure as code (CloudFormation, CDK, Terraform) to manage resources.
- Use CI/CD with AWS CodePipeline, GitHub Actions or Jenkins; adopt GitOps where possible.
- Implement resilience patterns (retries, exponential backoff, idempotency) and use Step Functions to handle orchestrated workflows.
- Monitor and trace with CloudWatch and X‑Ray; set alarms on errors and latencies.

---
