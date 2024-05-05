FROM openjdk:17
EXPOSE 8080
ADD target/feedback-api-docker.jar feedback-api-docker.jar
ENTRYPOINT [ "java","-jar","/feedback-api-docker.jar"]