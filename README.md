## Running without Docker Compose

### Build Images.
```
docker build -t app1 app1/
docker build -t app2 app2/
docker build -t nginx nginx/
```

### Create a bridge Network.
```
docker network create --driver bridge appnet

docker run --network appnet --name app1 app1
docker run --network appnet --name app2 app2
docker run --network appnet -p 8080:80 --name nginx nginx
```


## Running with Docker Compose

### Up all.
```
docker compose up
```

### Up standalone.
```
docker compose app1
docker compose app2
docker compose nginx
```

## Test

![](https://github.com/sandb0/nginx-gateway-docker-poc/blob/main/docs/diagram.png)

```
GET localhost:8080/app1
GET localhost:8080/app2
```