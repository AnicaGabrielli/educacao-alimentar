// server.js
import app from "./app.js";

const PORT = 4000;

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
