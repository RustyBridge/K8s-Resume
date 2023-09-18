## **K8s Resume**

A project where I aimed to move my [Resume](https://cv.gvasilopoulos.xyz) from AWS (see [this project](https://github.com/RustyBridge/Serverless-Website-AWS-Terraform)) to a self-hosted k8s cluster


### **Architecture diagram:**

Working on it


### **Description:**
1. For the **Database** I used the PostgreSQL v15.3.0 non HA chart from [Bitnami](https://github.com/bitnami/charts/tree/main/bitnami/postgresql)  \
I have included the values file used (only minor changes compared the the defaults) \
Being the stateful component of the application, it required persistent storage, which was provisioned locally using [OpenEBS](https://github.com/openebs/openebs) \
A database and a user with the required permissions were created using psql
2. For the **Backend** I wrote a simple Django API (ChatGPT helped a lot) with two endpoints: read/ and write/ \
The first one reads the value from the DB and returns it and the second one, increments the value in the DB by 1 and returns the new value \
The communication with the DB is established using the [psycopg2 adapter](https://www.psycopg.org/docs/)
3. The **Frontend** was created using React and contains a visitor counter. The function: \
a) Checks the local storage for the value and if it doesn’t exist it, calls the backend write endpoint \
b) If the value already exists in local storage (the website has already been visited), calls the backend read endpoint to update the locally stored value.
4. To expose the application, without a static IP, I used: \
A. [MetalLB](https://github.com/metallb/metallb) - To assign IPs to services of Type LoadBalancer, that are private and routable on my LAN \
B. [Ingress Nginx](https://github.com/kubernetes/ingress-nginx) with Type LoadBalancer \
C. [ddns-route53](https://github.com/crazy-max/ddns-route53/) to keep my DNS records in sync with my public IP \
D. Port Forward pubic 443 to Ingress 
5. For the TLS certificates I used [cert-manager](https://github.com/cert-manager/cert-manager) installed using their provided helm chart, [let's encrypt](https://letsencrypt.org/) issuer and the DNS challenge


### **Disclaimer:**
 1.	The **Frontend** was not created by me. All credits go to my brother and talented developer, [Nick Vasilopoulos](https://www.linkedin.com/in/nickvasilopoulos/)
