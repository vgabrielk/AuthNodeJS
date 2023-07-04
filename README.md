# API NODE JS + TYPESCRIPT

## Tecnologias utilizadas

- NodeJS
- MySQL
- Typescript
- TypeORM


## Rodar localmente

Após instalar o projeto, vamos nos deparar com a aplicação sem nenhuma dependência e variável de ambiente, para configurá-lo faremos da seguinte forma: 

 
<br> OBS :  Na chave secreta JWT podemos adicionar qualquer caractére acima de 8 dígitos.
1. Execute o seguinte comando na pasta raiz do projeto : 

```
npm install
```

2. Edite o seu arquivo .env com  o conteúdo do arquivo .env.example

3. Depois de configurar seu .env e escolher o banco de dados no arquivo data-source, vamos rodar as migrations 

```
npm run migration:run
```

Caso funcione, o projeto está pronto para realizar as requisições.