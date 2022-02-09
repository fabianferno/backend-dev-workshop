![image](https://user-images.githubusercontent.com/57835412/153121327-1dd7bd20-379f-44bb-849c-0540a6a21870.png)

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
#### Watch the complete workshop playlist in YouTube incase you missed the livestream.
<a href="https://www.youtube.com/watch?v=hWz6ps63dxs&list=PLLCdGWbcw9uxA4yNzJTj527n-6K3ncWFP">
  <img width="30%" src="https://img.youtube.com/vi/hWz6ps63dxs/0.jpg" /> 
</a>
<br/>Please hit the like button on the videos. 🤞


----

#### Workshop Task
- You get to build your own choice of a fully functional Rest API.
- These could be APIs like a Weather API, Backend for a blogging platform, Movie ticket booking API, etc.
- All the codebase of your submission shall be pushed to the Github classroon assignment repo that was sent earlier.
- Important: No participant shall submit a same application. i.e Your submission must be unique. Hence you are requested to use the #coders-chat channel at <a href="https://discord.gg/GuMceRXPSQ">Pattarai Discord</a> to call dibs on what you will be building.

#### General Rules
- Your backend shall consist of more than two relations between the data models.
- Your API should do more than just doing single CRUD operations to a database. (Create, Read, Update, Delete). Try inserting, updating across multiple tables - experiment with Prisma.
- Try implementing nested routes. Use relevant methods and errorHandlers.
- Using jwt or any authorization is completely optional. But doing it will fetch you a higher score.
- Your API must be well documented via Postman and the collection should be exported and added to your repository. Refer [this.](https://learning.postman.com/docs/getting-started/importing-and-exporting-data/#exporting-postman-data)
- Optional: You could try deploying your API to https://www.railway.app

#### Onwards
- You think you've built a great API and kick-ass prisma schema? Why not contribute to offical prisma. 
- https://github.com/prisma/templates - this repo contains a few official example projects. Have a read at its README
- They are open for contributions to add more examples. Try opening pull requests to this repo once you've successfully completed your submission.
- Your workshop submission might actually end up in a official prisma repository.


Feel Free to ping me: <strong>super.skywalker#4004</strong> at #coders-chat in Pattarai's discord if you have any doubts regarding the task.
Happy Learning.
 
Please star this repo to show support ⭐️


----
### License
This project is licensed under the MIT license. <br/>
See the [LICENSE](./LICENSE.txt) file for more info.


