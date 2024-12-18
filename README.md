Uploading this later.

## Steps

```bash
npm i
npm run dev
```

npm run dev gets running both server and client. If you want one or another individually, go to its folder and run **npm run dev** or **npm run start:dev** depending on which you want.

and create & set up your .env file in the package/server/src path with the following name IF YOU'RE USING POSTGRESQL (and replace the uppercase words with your information)

```bash
DATABASE_URL="postgresql://USER:PASSWORD@HOST:PORT/DATABASEschema=SCHEMA"
```

if you are using another relational database management system, click [here](https://docs.nestjs.com/recipes/prisma#getting-started) to know how to set it up correctly.
