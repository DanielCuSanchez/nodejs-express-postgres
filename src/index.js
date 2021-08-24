import app from "./app";
const PORT = 4000;

async function main() {
  await app.listen(PORT);
  console.log(`http://localhost:${PORT}`);
}

main();
