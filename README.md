# Node Backend Api



### Before Everything

wachana dana gannna onene

Node : is a framework for web dev

npm : node package manager ( meken thama node packages manage karnne, e kiynne run krnne, install krnne okkoma)


package : js file set 1k . mokak hari task 1k lesi wenna hadapu.
we can install any package as our need. using `npm i package-name`

>Popular packages.


#### mongoose   - to use MongoDb easily with js.
#### express   -to create the Node server

when we need to do something in our app. 

like ,to use mongoDB in our app.
serach how to use mongo with node app.
they will say use the mongoose .

and we can go to the `documentation`

seeieng any documentation we can get an idea how to use. 
any tool.

node packages, Node, git, anthing. 
when u use that to troubleshoot. 

we can search the error directly and go to stackoverflow. or chatgpt. both will work . Try to read error messages.

e message eke eka wachanaak hari api aluthen dapu deyak pennwd blnn.


Directories = Folders

Backend dev vlt codingma neme one. error fix krnn. hariyt chtgpt krnn, git, cmd ek use krnn ehm.

me kiypu wachana utubut balnnon.


## Create Node The App


> Create a new folder , "backend" or, anything

Open the folder in VS code.

Get Terminal

```
npm init
```

this generate the package.json
clicke enter for few times. (to accept default settings)

create files

> index.js (in our case:app.js)

To create The node app
in app.js>

```js
const express = require("express");
const app = express();
const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log("Server is up and running on : " + PORT);
});
```

### install necessarry node modules

```bash
npm i express // create the server
npm i nodeman // to run the app in watch mode
npm i mongoose //database
npm i dotenv  // env variables

```

This creates the basic node app.

Now we create other neseccry files for just one service.

> controllers>userContoller.js
> models>userModel.js
> routes>userRoutes.js

### Controller

to handle req, res. ( here we dont have service layer so we handle buisness logics in controller)

### Models

Schema/objects/entites
just define the structure /fields of our object.

### routes

through routes we send req, res.
each route calls a controller function.
so when we call a foute through postman.
a controller function will be called.

routes are created in userRouter.js.
but that should be connected to the app.js

_ask chatgpt_
`in a node app . when we have a userRoute.js. how do we include it in app.js`

#### now ,suppose we need to get all the users from db.

we need to call this in postman

`{API}/users`

_ask chatgpt_
`to get all users using {API}/users, create the necessary code in userRouter.js , using a controller function`

This will give the correct route.js

but the controller function is bit wrong.(because we dont have users yet)

now we have to create our user model.

_ask chatgpt_
`create a mongoose schema for a basic user . with email, firstname, lastname and password`

put that into models/userModel.js

_ask_
`now modify getAll controller to get all users using 
this user model.`

and copy paste that into controller.js

### keep the nodemon server.js up when doing thse. so u can see the errors real time.

there will be errors . because of names/ locations/ file paths are canbe different because chatgpt dosnt know ur project structure.

### now try

`{API}/users` in postman
u'll get empty array. since we didnt create any.

u might get 404 error . not found . because of the differences like. ,/users/ //users/ .
edit the url then

### now we have to create users in db.

to that just ask chtgpt

`now we need to create users using body respond , give me controller> createUser, route.js `

place the codes in right places.

and try posting this in a POST type request  
to url {API}/user

```json
{
  "firstName": "John",
  "lastName": "Doe",
  "email": "john.doe@example.com",
  "password": "securepassword123"
}
```

If u cant see responses, success,

_tell chatgpt _

`eidt this(paste the whole controller.js) controller and add res messages.`
