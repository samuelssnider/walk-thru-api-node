To get started, clone or fork my repository at:
[walk-thru-api-node](https://github.com/samuelssnider/walk-thru-api-node)
Install the necessary packages using npm:
```
npm install
```
Create the database using psql (if you do not have psql installed, try looking [here](https://launchschool.com/blog/how-to-install-postgresql-on-a-mac))
```
CREATE DATABASE walk_thrus;
CREATE DATABASE walk_thrus_text;
```

To get the database running:
```
knex migrate:latest
knex seed:run
```

Now start up your server, and visit http://localhost:3000/ to veiw the API documentation

```
npm start
```


If you would like to contribute, let me know by opening an issue, commenting on an issue, or submitting a PR.
