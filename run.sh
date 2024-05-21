kubectl create namespace databases
kubectl create namespace calculator


# create mysql deployment and service
kubectl apply -f./configmap -n databases
kubectl apply -f./deployments/mysql2.yaml -n databases
kubectl apply -f./services/mysql.yaml -n databases

# wait for mysql to start
sleep 10

# create calculator deployment and service
kubectl apply -f./deployments/calculator.yaml -n calculator
kubectl apply -f./services/calculator.yaml -n calculator