# Strapi application

this is a quick startup **Strapi** project to migrate with existing mySQL database

### Node Version

use Node `12.21.0`

***

### how to migrate

1. create `.env` file in root folder, add following variables
   1. to migrate with existing database
   2. create admin user in database
   3. upload files to S3 when click `upload files`

#### available env variable
| Env variable name  |  example  | explanation |
|---|---|---|
|DATABASE_HOST| 127.0.0.1|host of your database
|DATABASE_PORT| 3306| port of your database|
|DATABASE_NAME| db| database name |
|DATABASE_USERNAME|root | username to login db by **Strapi** |
|DATABASE_PASSWORD| rootpwd| password to login db by **Strapi**|
|AWS_BUCKET_NAME| i-am-bucket| which S3 bucket to upload files when using MediaLab |
|AWS_REGION|ap-northeast-1 | which Region the S3 in|
|AWS_ACCESS_KEY_ID| AKIA25SO73EPLZSDD| AWS credential |
|AWS_SECRET_ACCESS_KEY|nb/lV3VQnZngBfDgPHv | AWS credential |
|ADMIN_USER| admin| used to login **Strapi** |
|ADMIN_PASS| adminpwd| used to login **Strapi**|
|ADMIN_EMAIL| test@gmail.com| used to login **Strapi**|
|RICHTEXT_EDITOR| 'html'or'MD' | editor to richtext data type|
2. run command to install dependencies
    ```bash
    yarn
    or
    npm install
    ```
3. run command to migrate database
    ```bash
    yarn strapi:migrate
    or
    npm run strapi:migrate
    ```
4. run command to build admin panel
    ```bash
    yarn build
    or
    npm run build
    ```
5. run command to start server
    ```bash
    yarn start
    or
    npm run start
    ```

Happy coding!
Now you are able to map your database schema to **Strapi** by [instruction of Video](https://www.youtube.com/watch?v=PaNSN_h1_JA)
