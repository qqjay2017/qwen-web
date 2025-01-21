```
docker run -d \
  --name some_pgvector \
  -e POSTGRES_USER=postgres \
  -e POSTGRES_PASSWORD=mysecretpassword \
  -e POSTGRES_DB=mydatabase \
  -p 5432:5432 \
  pgvector/pgvector:pg17
```


```
CREATE EXTENSION IF NOT EXISTS vector;
```