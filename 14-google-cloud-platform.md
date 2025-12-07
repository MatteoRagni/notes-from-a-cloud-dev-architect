# Google Cloud Platform Services

Google Cloud provides serverless compute, managed Kubernetes and messaging services used to build microservices.

### Google Kubernetes Engine (GKE)

GKE is a managed Kubernetes service offering control plane management, auto‑upgrades, auto‑repair, node auto-provisioning and vertical/horizontal pod autoscaling. GKE integrates with Google Cloud IAM, Stackdriver (now Cloud Logging and Monitoring), Cloud Load Balancing and Cloud Storage. Autopilot mode abstracts node management; user clusters and autopilot clusters support multi‑cluster capabilities.

### Cloud Run

Cloud Run is a fully managed compute platform that runs containers triggered by HTTP requests or events. It supports any language and frameworks; there is no need to manage servers or clusters. Cloud Run services automatically scale up and down (including to zero) based on traffic and provide unique HTTPS endpoints with automatic TLS. Cloud Run Jobs execute containers to completion on demand, while Worker Pools handle asynchronous tasks. Pricing is pay‑per‑use; integration with Cloud Build, Artifact Registry and Pub/Sub enables continuous deployment.

### Cloud Functions

Cloud Functions provide event‑driven serverless compute for single functions. They handle scaling and are billed based on execution time. Functions integrate with Pub/Sub, Cloud Storage, Firestore and HTTP triggers. 

### Pub/Sub and Event‑Driven Architecture

Google Cloud Pub/Sub is an asynchronous, scalable messaging service that decouples producers and consumers. It offers typical latencies around 100 ms. Use cases include ingesting streams of events, real‑time distribution of messaging, replication between data centers and building an enterprise event bus. Pub/Sub is central to event‑driven architectures (EDA), where producers emit events to a channel; consumers subscribe and react. EDA enhances scalability, resilience and agility while simplifying integration.

### BigQuery, Spanner and Dataflow

- **BigQuery**: Serverless data warehouse for analytical queries using SQL; integrates with Pub/Sub for streaming ingestion.
- **Cloud Spanner**: Globally distributed relational database with horizontal scalability and strong consistency.
- **Dataflow**: Serverless data processing service built on Apache Beam; processes stream and batch data.

### Other Services

- **Cloud SQL**: Managed relational database service (MySQL, PostgreSQL, SQL Server).
- **Cloud Memorystore**: Managed in‑memory data store (Redis, Memcached).
- **Artifact Registry & Container Registry**: Container images and package storage.

---
