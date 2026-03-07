# 🚀 End-to-End DevOps Platform on Azure AKS

### CI/CD • Terraform • Trivy Security Scanning • Prometheus • Grafana • Kubernetes

This project demonstrates a **production-style DevOps platform** built on **Azure Kubernetes Service (AKS)**.
It implements a **complete CI/CD pipeline**, **container security scanning**, **monitoring**, **autoscaling**, and **infrastructure provisioning using Terraform**.

The platform deploys a **Node.js application** using **Helm** through an **Azure DevOps pipeline**.

---

# 📊 Architecture Diagram

![Architecture](docs/architecture.png)

---

# ✨ Key Features

* CI/CD pipeline using **Azure DevOps**
* **Docker containerization**
* **Helm-based Kubernetes deployments**
* **Trivy security scanning in pipeline**
* **Terraform Infrastructure as Code**
* **Prometheus + Grafana monitoring**
* **Horizontal Pod Autoscaling**
* **Azure Key Vault secret management**
* **DEV and PROD environments**
* **Manual approval before production deployments**
* **Load testing using k6**

---

# 🏗️ Project Architecture

Developer pushes code to GitHub which triggers the **Azure DevOps pipeline**.

Pipeline workflow:

1. Build Docker image
2. Scan image using **Trivy**
3. Push image to **Azure Container Registry**
4. Deploy application to **AKS using Helm**

The Kubernetes cluster runs the application and monitoring stack.

---

# 🧰 Technology Stack

## Cloud

* Azure Kubernetes Service (AKS)
* Azure Container Registry (ACR)
* Azure Key Vault

## CI/CD

* Azure DevOps Pipelines
* Helm

## Containers

* Docker

## Security

* Trivy container vulnerability scanning
* Azure Key Vault secret management
* TLS certificates using cert-manager

## Monitoring

* Prometheus
* Grafana
* Node Exporter
* kube-state-metrics

## Performance Testing

* k6

## Infrastructure as Code

* Terraform

---

# 📂 Project Structure

```
aks-devops-project
│
├── app.js
├── Dockerfile
├── package.json
├── azure-pipelines.yml
│
├── helm-chart
│   ├── templates
│   ├── values.yaml
│   └── Chart.yaml
│
├── k8s
│   ├── hpa.yaml
│   ├── ingress.yaml
│   └── secrets.yaml
│
├── terraform
│   ├── main.tf
│   ├── variables.tf
│   └── outputs.tf
│
├── docs
│   └── architecture.png
│
├── loadtest.js
└── README.md
```

---

# ⚙️ CI/CD Pipeline

The Azure DevOps pipeline automates the application lifecycle.

Pipeline stages:

1️⃣ Build Docker Image
2️⃣ Trivy Security Scan
3️⃣ Push Image to Azure Container Registry
4️⃣ Deploy to AKS DEV environment
5️⃣ Deploy to AKS PROD environment

Pipeline flow:

```
Code Push
   │
   ▼
Build Docker Image
   │
   ▼
Trivy Security Scan
   │
   ▼
Push Image → ACR
   │
   ▼
Deploy → AKS using Helm
```

---

# 📈 Monitoring Stack

Monitoring is implemented using **Prometheus and Grafana**.

Components deployed in the cluster:

* Prometheus
* Grafana
* Node Exporter
* kube-state-metrics

Grafana dashboards visualize:

* Pod CPU usage
* Memory usage
* Node health
* Kubernetes cluster metrics

---

# 🔄 Autoscaling

The application uses **Horizontal Pod Autoscaler (HPA)** to scale pods automatically.

Example configuration:

```
minReplicas: 2
maxReplicas: 10
targetCPUUtilizationPercentage: 50
```

---

# 🧪 Load Testing

Load testing was performed using **k6**.

Example result:

```
Total Requests: 9600
Requests/sec: ~79
Failures: 0%
Average Latency: ~249ms
```

---

# 🏗️ Infrastructure as Code

Infrastructure is provisioned using **Terraform**.

Terraform provisions:

* Resource Group
* Azure Container Registry
* AKS Cluster
* Azure Key Vault

Terraform workflow:

```
terraform init
terraform plan
terraform apply
```

---

# 🔐 Security

Security practices implemented:

* Container image scanning using **Trivy**
* Secret management with **Azure Key Vault**
* TLS certificate automation using **cert-manager**
* Security checks integrated into CI/CD pipeline

---

# 🌍 Environments

Separate Kubernetes namespaces are used.

Development environment:

```
dev
```

Production environment:

```
prod
```

---

# 🛑 Production Deployment Protection

Production deployments are protected using **Azure DevOps Environments with approval checks**.

The pipeline requires **manual approval before deploying to production**, ensuring controlled and validated releases.

Deployment flow:

```
Build Image
   │
   ▼
Security Scan (Trivy)
   │
   ▼
Deploy → DEV
   │
   ▼
Approval Gate
   │
   ▼
Deploy → PROD
```

---

# ▶️ Running the Application Locally

Build the container:

```
docker build -t aks-devops-app .
```

Run the container:

```
docker run -p 3000:3000 aks-devops-app
```

Open browser:

```
http://localhost:3000
```

---

# 👨‍💻 Author

Pavan Kumar
DevOps / Cloud Engineering Project
