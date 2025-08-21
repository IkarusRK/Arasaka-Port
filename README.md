# Arasaka Registry  cyberpunk 2077
## 🚀 Sobre o Projeto
O Arasaka Registry é uma aplicação web completa para registro e gerenciamento de cidadãos, inspirada no universo de Cyberpunk 2077. O projeto permite criar, visualizar, editar e deletar registros, com funcionalidades de upload de fotos e um sistema robusto construído com Java e Spring Boot.

Este projeto foi desenvolvido como um exercício prático para aplicar e demonstrar habilidades em desenvolvimento full-stack, desde o backend e banco de dados até o frontend e o deploy em um ambiente de nuvem.

## 💻 Demonstração Ao Vivo (Live Demo)
Você pode acessar e testar a aplicação em tempo real no seguinte link:

**[https://arasaka-registro.onrender.com](https://arasaka-registro.onrender.com)**

*(Observação: Por ser hospedado em um plano gratuito, o primeiro acesso pode demorar alguns segundos para "acordar" o servidor.)*
*(1 a 2 minutos pra "ligar o servidor" e depois só apertar F5 :D)*

## 📸 Screenshots
<p align="center">
  <em>Tela de Registro de Cidadãos</em><br>
  <img src="https://i.postimg.cc/mk57C48Z/image.png" alt="Tela de Registro" width="70%"/>
</p>
<p align="center">
  <em>Listagem de Cidadãos Registrados</em><br>
  <img src="https://i.postimg.cc/tRYDkRVN/image.png" alt="Listagem de Cidadãos" width="70%"/>
</p>


## ✨ Tecnologias Utilizadas (Tech Stack)
Este projeto foi construído com as seguintes tecnologias:

- **Backend:**
  - [Java 21](https://www.oracle.com/java/)
  - [Spring Boot 3](https://spring.io/projects/spring-boot)
  - [Spring Data JPA (Hibernate)](https://spring.io/projects/spring-data-jpa)
  - [Maven](https://maven.apache.org/)
- **Frontend:**
  - [Thymeleaf](https://www.thymeleaf.org/) (Motor de Templates Java)
  - HTML5 & CSS3
  - JavaScript
- **Banco de Dados:**
  - [PostgreSQL](https://www.postgresql.org/)
  - [MySQL](https://www.mysql.com/) [Fase de testes]
- **Infraestrutura & Deploy:**
  - [Docker](https://www.docker.com/)
  - [Render](https://render.com/) (Hospedagem da Aplicação e do Banco de Dados)
  - [Git & GitHub](https://github.com/)

## ⚙️ Como Executar o Projeto Localmente

Siga os passos abaixo para rodar a aplicação no seu ambiente de desenvolvimento:

1.  **Clone o repositório:**
    ```bash
    git clone [https://github.com/seu-usuario/seu-repositorio.git](https://github.com/seu-usuario/seu-repositorio.git)
    cd seu-repositorio
    ```
2.  **Configure o Banco de Dados Local:**
    - Crie um banco de dados PostgreSQL local.
    - Renomeie o arquivo `application.properties` para usar suas credenciais locais (ou use perfis do Spring).
3.  **Execute a Aplicação:**
    - Use o Maven para iniciar o servidor Spring Boot.
    ```bash
    mvn spring-boot:run
    ```
4.  **Acesse no Navegador:**
    - Abra seu navegador e acesse `http://localhost:8080`.

## 👨‍💻 Autor
- **Ikarus** - [GitHub](https://github.com/IkarusRK)
