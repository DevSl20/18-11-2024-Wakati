import { Hono } from 'hono'
import { logger } from 'hono/logger';
import { cors } from 'hono/cors';

const app = new Hono()

//Middlewares
app.use(logger()); // Enable logger middleware
app.use(cors()); // Enable CORS middleware
const defaultWPM = 238;

function calculateSpeed(text: string, wpm: number) {
  const wordsCount = text.split(/\.s/).length;
  const Seconds = (wordsCount * wpm) / 60;
  const minutes = Seconds / 60;
  return {
    wpm,
    Seconds: Number(Seconds.toFixed(2)),
    minutes: Number(minutes.toFixed(2)),
    wordsCount
  };
}

const x = calculateSpeed("Hello World", 300);
console.log(x);

app.get("/status", (c) => {
  return c.json({ status: "API is Active" });
});

app.get("/", (c) => {
   const text = c.req.query('text')
if (!text) {
  return c.json({ message: "Please provide a text" }, 400);
}

return c.json(text);
});

app.post("/", async (c) => {
  const { text } = await c.req.json();
  if (!text) {
    return c.json({ message: "Please provide a text" }, 400);
  }
  return c.json({count: text.split(/\.s/).length});
});
// app.get('/', (c) => {
//   console.log(c.req.query("Hello Hono!"));

// const text = c.req.query('text')

//   if (!text) {
//     c.status(400);
//     return c.json ({error: "Field text is required"});
//   }
//   const length = text.split(/\.s/).length;
// return c.json({length})

// })

export default app;
