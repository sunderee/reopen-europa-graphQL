# Reopen Europa GraphQL

**Unofficial** GraphQL API which fetches data from the [official `reopen.europa.eu` website](https://reopen.europa.eu/en). This is a [Node.js](https://nodejs.org/en/) based backend built with [Nest.js framework](https://nestjs.com/), exposing both RESTful and GraphQL APIs.

## Motivation

Reverse-engineering `reopen.europa.eu` with Chrome dev tools (I know, such a difficult thing to do), I've found out, that the official web application does unnecessary round trips per each request:

1. The list of destinations (from/to) should only be requested once, not with each request
2. Duplicated list of destinations (to) for selected language. My API just assumes you're an English speaker, because let's be honest, what are you even doing here if you're not?
3. Indicator data for final destination is fetched in two requests; first one features empty data, but contains link to a rule (the second request) which actually gets parsed
4. Redundant fields which represent nothing but an overhead, and should be omitted (in my opinion).

## Usage

You can run the app bare-metal, or inside a Docker container.

```bash
# For bare-metal run
npm install && npm run start

# For containerized run
docker build -t <tag> -f Dockerfile .
docker run --name <name> -p 3000:3000 <tag>
```
