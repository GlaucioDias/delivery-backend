import app from "./app"
import mongodb from "./database/mongodb"

const port = normalizePort(process.env.PORT || 4000);

function normalizePort(val: number | string): number | string | boolean {
  let port: number = typeof val === "string" ? parseInt(val, 10) : val;
  if (isNaN(port)) return val;
  else if (port >= 0) return port;
  else return false;
}

app.listen(port, () =>
    console.log(`API running on port: ${port}`)
);

mongodb.connect();