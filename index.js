const express = require('express');
const path = require('path');
const app = express();

// Servir archivos estáticos del frontend
app.use(express.static(path.join(__dirname, 'public')));

app.get('/api/:date?', (req, res) => {
  let dateString = req.params.date;

  if (!dateString) {
    const now = new Date();
    return res.json({
      unix: now.getTime(),
      utc: now.toUTCString(),
      iso: now.toISOString()
    });
  }

  // Soportar timestamps numéricos
  if (/^\d+$/.test(dateString)) {
    dateString = parseInt(dateString);
  }

  const date = new Date(dateString);

  if (date.toString() === "Invalid Date") {
    return res.json({ error: "Fecha inválida. Por favor ingresa una fecha válida en formato YYYY-MM-DD o un timestamp en milisegundos." });
  }

  res.json({
    unix: date.getTime(),
    utc: date.toUTCString(),
    iso: date.toISOString()
  });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor personalizado corriendo en puerto ${PORT}`);
});
