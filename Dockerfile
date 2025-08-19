
FROM maven:3.8.5-openjdk-17 AS build

WORKDIR /app

# Copia pom.xml
COPY pom.xml .

# Copia código
COPY src ./src

# Roda o comando do Maven = criar .jar
# Anotação: Caso necessario usar o -DskipTests pula os testes para um build mais rápido no deploy
RUN mvn clean package 
#RUN mvn clean package -DskipTests


# Usamos uma imagem oficial do Java 17, mais leve para rodar a aplicação
FROM openjdk:17-jdk-slim

# Define o diretório de trabalho
WORKDIR /app

# Copia o arquivo .jar que foi gerado no estágio de build para dentro do container final
COPY --from=build /app/target/*.jar app.jar

# porta padrão spring
EXPOSE 8080

# Comando para iniciar a aplicação quando o container ligar
ENTRYPOINT ["java", "-jar", "app.jar"]