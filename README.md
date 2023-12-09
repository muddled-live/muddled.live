Muddled (aka Get Smarter Saturdays) NextJS frontend.

# Start

**Requirements**

 - [Docker](https://docker.com)
 - [NodeJS 20.x](https://nodejs.org)


```sh
# First populate your environment variables.
copy .env.example .env
# Launch the backend services
docker compose up -d --pull mysql muddled-backend muddled-twitch
npm ci
# Start the dev server.
npm run dev
```

