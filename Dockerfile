FROM openjdk:13

RUN mkdir -p /app

WORKDIR /app

COPY . .
 
COPY build/libs/*.jar ./app.jar

EXPOSE 8082

CMD [ "java", "-jar", "./app.jar" ]
