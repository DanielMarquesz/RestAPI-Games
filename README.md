## RestAPI - Games

### About the API

This API allow anyone that runs its to create, list, edit and remove an game from a database table. At this moment the API runs too unit and integration tests using [Jest](https://jestjs.io), and have some simple data validations using the [Joi](https://www.npmjs.com/package/joi). This Rest APi was made to pratice and learn about https methods and best pratices of coding, and it still in development.


### To run the API you will need to install

* [Mysql](https://www.mysql.com)
* [NodeJs](https://nodejs.org/en/)


After this installations you will need:
 * Create a database and put that name in "APIGames/config/db.config.js" - line 9. Replace the database name for yours.
 * Navigate trought "APIGames/models/Games.js", uncomment the line 50 and set force to true.
 * Create a ".env" file in the "APIGames" folder, and put your HOST, USARNAME and PASSWORD to match with the cariables in "db.config.js".
 * You can use [Postman](https://www.postman.com) for test the API.

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

#### /GET/ 
  
Endpoint: ``http://localhost:3000/store/list``

- Return all the games that are register in an array of objects.
- Parameters: None
- Responses:<br>

  200 ``OK`` - If the request and responde was made successfully.<br>
  404 ``Not Found`` - If exists an error in the route.<br>
  500 ``Internal Server Error`` - If something not workin in the server side.


```
[
    {
        "id": 14,
        "title": "Sea of Pirates",
        "description": "GOTY 2015",
        "price": 200.2,
        "quantity": 10,
        "year": 1996,
        "avaiable": true,
        "cover": "https://www.pexels.com/pt-br/foto/aparelho-brincadeiras-brincar-brinquedo-776092/",
        "createdAt": "2021-01-03T02:11:37.000Z",
        "updatedAt": "2021-01-05T00:24:15.000Z"
    },
    {
        "id": 20,
        "title": "Minecraft",
        "description": "Jogo mais realista do mundo",
        "price": 33,
        "quantity": 1,
        "year": 2015,
        "avaiable": true,
        "cover": "https://www.pexels.com/pt-br/foto/borrao-brincadeiras-close-concentracao-159393/",
        "createdAt": "2021-01-03T22:15:46.000Z",
        "updatedAt": "2021-01-05T00:28:47.000Z"
    }
]
```

<hr>

#### /GET/:id
  
Endpoint: ``http://localhost:3000/store/list/22``

- Return one game that are register in an of object.
- Parameters: The item id is searched for.
- Responses:<br>

  200 ``OK`` - If the request and responde was made successfully.<br>
  400 ``Bad Request``- If the id parameter goes wrong.<br>
  404 ``Not Found`` - If the id parameter does not exist in the database.<br>
  500 ``Internal Server Error`` - If something not workin in the server side.


```
{
    "id": 22,
    "title": "Super meat Boy",
    "description": "Run and gun",
    "price": 33,
    "quantity": 1,
    "year": 2015,
    "avaiable": true,
    "cover": "Red",
    "createdAt": "2021-01-03T22:17:35.000Z",
    "updatedAt": "2021-01-03T22:17:35.000Z"
}
```
<hr>


#### /POST/
  
Endpoint: ``http://localhost:3000/store/register``

* The fields "Title" and "cover" are uniques.
- Register a game in the database.
- Parameters: A json with filled fields.<br>

```
{
   "title":"Apex Legends",
   "description":"Best FPS game.",
   "price":"200",
   "quantity":14,
   "year":1996,
   "avaiable": true,
   "cover": "https://www.pexels.com/pt-br/foto/abstrato-resumo-abstrair-negocio-5939135/"
}
```

- Responses: 

201 ``Created`` - If the request was made successfully.
```
{
    "id": 28,
    "title": "Apex Legends",
    "description": "Best FPS game.",
    "price": "200",
    "avaiable": true,
    "quantity": 14,
    "year": 1996,
    "cover": "https://www.pexels.com/pt-br/foto/abstrato-resumo-abstrair-negocio-5939135/",
    "updatedAt": "2021-01-05T01:03:49.246Z",
    "createdAt": "2021-01-05T01:03:49.246Z"
}
```
<hr>

#### /PUT/
  
Endpoint: ``http://localhost:3000/store/edit/:id``

- Edit a game in the database.
- Parameters: An id to edit a game.<br>

```
{
    "title": "Minecraft",
    "description": "2k resolution.",
    "price": 33,
    "quantity": 1,
    "year": 2015,
    "avaiable": true,
    "cover": "https://www.pexels.com/pt-br/foto/borrao-brincadeiras-close-concentracao-159393/"
}

```

- Responses: 

201 ``Created`` - If the request was made successfully.
400 ``Bad Request``- If the id parameter goes wrong.<br>
```
{
    "id": 28,
    "title": "Minecraft ||",
    "description": "4k resolution.",
    "price": "250",
    "avaiable": true,
    "quantity": 15,
    "year": 2015,
    "cover": "https://www.pexels.com/pt-br/foto/abstrato-resumo-abstrair-negocio-5939135/",
    "updatedAt": "2021-01-05T01:03:49.246Z",
    "createdAt": "2021-01-05T01:03:49.246Z"
}
```
<hr>


#### /PATCH/
  
Endpoint: ``http://localhost:3000/store/edit/:id``

- Turn a game avaiable or not in the store.
- Parameters: An id to edit a game.<br>

```
{    
    "avaiable": false    
}

```

- Responses: 

200 ``OK`` - If the request was made successfully.<br>
400 ``Bad Request``- If the id parameter goes wrong.

<hr>

#### /DELETE/
  
Endpoint: ``http://localhost:3000/store/remove/:id``

- Delete a game from the store the store.<br>
- Parameters: An id to delete a game.

```
{    
    "avaiable": false    
}

```

- Responses:

200 ``OK`` - If the request was made successfully.<br>
400 ``Bad Request``- If the id parameter goes wrong.

<hr>
