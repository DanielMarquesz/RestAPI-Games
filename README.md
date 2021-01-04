## RestAPI-Games

### About API

This API allow anyone that runs its to create, list, edit and remove an game from a database table. At this moment the API runs too unit and integration tests using [Jest](https://jestjs.io), and have some simple data validations using the [Joi](https://www.npmjs.com/package/joi). This Rest APi was made to pratice and learn about https methods and best pratices of coding, and it still in development.


### To run the API you will need to install

* [Mysql](https://www.mysql.com)
* [NodeJs](https://nodejs.org/en/)
* [Postman](https://www.postman.com)

After this installations you will need:
 * Create a database and put that name in "APIGames/config/db.config.js" - line 9. Replace the database name for yours.
 * Navigate trought "APIGames/models/Games.js", uncomment the line 50 and set force to true.
 * Create a ".env" file in the "APIGames" folder, and put your HOST, USARNAME and PASSWORD to match with the cariables in "db.config.js"

The API runs on port ``3000`` 

### Clone the API

```git clone https://github.com/DanielMarquesz/RestAPI-Games.git```

### Run with NPM

```
cd APIGames
npm install
npm run dev
```
## Documentation :page_with_curl:

<hr>

### Routes :pineapple:

* All routes runs on the pattern endpoint ``http://localhost:`3000/store``

#### GET
