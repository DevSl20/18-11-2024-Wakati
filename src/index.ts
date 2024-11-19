import { Hono } from 'hono'
import { logger } from 'hono/logger';

const app = new Hono()

app.use(logger()); // Enable logger middleware
const wpm = 238;

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
