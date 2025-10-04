const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// Middleware para archivos estáticos (opcional, para una página de ejemplo)
app.use(express.static('public'));

app.get('/api/:date?', (req, res) => {
  let dateString = req.params.date;
  let date;

  if (!dateString) {
    // Expectativa 7-8: Hora actual si no hay parámetro
    date = new Date();
  } else {
    // Intenta parsear como número Unix primero
    const unixNum = Number(dateString);
    if (!isNaN(unixNum)) {
      date = new Date(unixNum);
    } else {
      // Si no, como string
      date = new Date(dateString);
    }
  }

  // Validación (Expectativa 5-6)
  if (isNaN(date.getTime())) {
    return res.json({ error: 'Invalid Date' });
  }

  // Respuesta (Expectativas 2-4)
  res.json({
    unix: date.getTime(),
    utc: date.toUTCString()
  });
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
