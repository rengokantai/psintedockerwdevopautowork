####psintedockerwdevopautowork
#####adding docker hub
######creating dockerbuild
dockerhub->settings->linkto github account  
build->enable trigger  copy trigger link  
go to circleCI->environment variables, set  
name: DOCKER_HUB_TRIGGER  
value: curl -H "Content-Type:application/json" --data '{"build":true}' -X POST link
