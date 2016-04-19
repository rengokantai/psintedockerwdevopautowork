####psintedockerwdevopautowork
#####adding docker hub
######creating dockerbuild
dockerhub->settings->linkto github account  
build->enable trigger  copy trigger link  
go to circleCI->environment variables, set  
name: DOCKER_HUB_TRIGGER  
value: curl -H "Content-Type:application/json" --data '{"build":true}' -X POST link  
#####pushing to production
######creating node cluster
go to docker cloud,link aws grant EC2 access account.  
launch node.  
######create docker service
services->public repo -> rengokantai/psintedockerwdevopautowork ->port: container8080:node80  
open the link.
######create a docker hub webhook
docker cloud->service->create trigger->copy to dockerhub
#####Breaking and fix
Go to circleCI, ssh , can test the app manually.  
Ex
```
ssh -p 64706 ubuntu@54.147.49.1
```
