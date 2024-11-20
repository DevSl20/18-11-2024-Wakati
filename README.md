# Wakati

Wakati is a simple API to calculate the reading speed of text.

## Usage

### Check the status

```bash
https://18-11-2024-wakati.devangsalvi21.workers.dev/status
```

### GET

You need to send the text and the words per minute (wpm optional) as query parameters.

```
https://18-11-2024-wakati.devangsalvi21.workers.dev/?text=
```

### POST

You need to send the text and the words per minute (wpm optional) as JSON.

```
https://18-11-2024-wakati.devangsalvi21.workers.dev/

{
  "text": "Hello World",
  "wpm": 238
}

```

## Develop

```bash
npm install
npm run dev
```

And to deploy

```bash
npm run deploy

```

To set the environment variables

```bash
export CLOUDFLARE_API_TOKEN=xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
```
