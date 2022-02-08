<img width="70%" src="https://user-images.githubusercontent.com/57835412/153080868-8254e54f-64bf-4965-b467-3074af466312.png"/>


----  
### Get Started
- Rest APIs, MVC
- TypeScript, Clean Code
- Routing, Middlewares
- Authorization
- PostgreSQL, Prisma ORM 

-----
### Boilerplate Setup

###### Use `npm` to install the project dependencies:
```bash
npm install
```

###### Type ```cp .env.example .env``` in the terminal to create an ENV file and enter your credentials in the .env file.
```sh
# Configure your API port
API_PORT=5000

# Auth0 Config
APP_BASE_URL=http://localhost:5000 
AUTH0_ISSUER_BASE_URL=https://yourtenant.eu.auth0.com/ 

# MongoDB Config
DATABASE_URL="DB_CONNECTION_STRING"
```

###### Optional: Seed the database using prisma.
```sh
npm run seed
```

###### Run the project in development mode. Server restarts on file changes
```sh
npm run dev
```

###### Deploy to production.
```sh
npm run prod
```

----
#### Watch the complete workshop playlist in YouTube
<a href="https://www.youtube.com/watch?v=hWz6ps63dxs&list=PLLCdGWbcw9uxA4yNzJTj527n-6K3ncWFP">
  <img width="40%" src="https://img.youtube.com/vi/hWz6ps63dxs/0.jpg" /> 
</a>

----

#### Workshop Task
- You get to choose to build your own choice of a fully functional API.
- These could be APIs like a Weather API, Backend for a blogging platform, etc.
- All the codebase of your submission must be pushed only to the Github classroon assignment repo that was sent earlier.
- Important: No participant shall submit a same application. i.e Your submission must be unique. Hence you are requested to use the #workshop-hub channel at <a href="https://discord.gg/GuMceRXPSQ">Pattarai Discord</a> to call dibs on what you will be building.

General Guidelines
- Your backend shall consist of more than two relations between the data models.
- Your API should do more than just doing CRUD operations to a database. (Create, Read, Update, Delete)
- Your API must be well documented and the document should be exported and added to your repository
- Optional: You can try deploying your API to https://www.railway.app

Please star this repo to show support ⭐️


----
### License
This project is licensed under the MIT license. <br/>
See the [LICENSE](./LICENSE.txt) file for more info.


