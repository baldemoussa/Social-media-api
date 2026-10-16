# Social Media API

An Express server that checks a MongoDB connection. The only route is `GET /`.

## Description

Each request connects with `MONGO_URI`, sends JSON, and then closes the client. There are no user, post, or comment routes.

There is no HTML page. The first screenshot is the JSON `GET /` returned while the server was running. The second is the text from Express’s default page for a path that is not defined.

`GET /` connects to MongoDB and returns:

```json
{
  "message": "Successfully connected to the database!"
}
```

The status is `200`. If the connection fails, the status is `500` and the body is `{ "message": "Failed to connect to the database." }`. The client is closed after every request.

Any other method or path is not defined. Express responds with status `404` and a page that says `Cannot GET /posts` (or the matching method and path).

## Screenshots

### Connected

`GET /` returns 200 when MongoDB accepts the connection.

![200 response saying the database connection succeeded](docs/screenshots/connected.png)

### Missing route

Any other path, such as `GET /posts`, returns Express’s 404 page.

![404 page saying Cannot GET /posts](docs/screenshots/missing-route.png)

## Getting Started

### Dependencies

* Node.js and npm
* A MongoDB connection string in `MONGO_URI`

### Installing

```bash
npm install
```

The server reads `.env`.

### Executing program

```bash
npm start
```

The server listens on `http://localhost:3001` unless `PORT` is set. `npm run dev` runs `server.js` with nodemon.

| Variable | Purpose |
| --- | --- |
| `MONGO_URI` | MongoDB connection string |
| `PORT` | Port for Express. Defaults to 3001 |

## Help

`GET /posts` is not a route. Express answers `404` and `Cannot GET /posts`. A failed MongoDB connection returns `500` and `{ "message": "Failed to connect to the database." }`.

## Authors

[Mamadou Moussa Balde](https://www.linkedin.com/in/2mb/)

## Version History

* Current local run
    * `GET /` returned 200 and `Successfully connected to the database!`
    * `GET /posts` returned the Express 404 page

## License

This folder does not include a `LICENSE.md` file.

## Acknowledgments

* [README template](https://gist.github.com/DomPizzie/7a5ff55ffa9081f2de27c315f5018afc)
