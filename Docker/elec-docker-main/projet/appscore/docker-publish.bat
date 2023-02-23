docker tag applicants.api:latest davidmtdev/applicants.api:latest
docker tag identity.api:latest davidmtdev/identity.api:latest
docker tag jobs.api:latest davidmtdev/jobs.api:latest

docker push davidmtdev/applicants.api:latest
docker push davidmtdev/identity.api:latest
docker push davidmtdev/jobs.api:latest