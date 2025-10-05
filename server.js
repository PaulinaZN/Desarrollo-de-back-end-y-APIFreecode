const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

// Función principal
const handleDate = (dateString) => {
  let date;
  
  if (!dateString) {
    date = new Date();
  } else if (!isNaN(dateString) && /^\d+$/.test(dateString)) {
    date = new Date(parseInt(dateString));
  } else {
    date = new Date(dateString);
  }
  
  if (isNaN(date.getTime())) {
    return { error: "Invalid Date" };
  }
  
  return {
    unix: date.getTime(),
    utc: date.toUTCString()
  };
};

// Rutas
app.get('/api/:date?', (req, res) => {
  const result = handleDate(req.params.date);
  res.json(result);
});

app.get('/', (req, res) => {
  res.json({
    message: 'Timestamp Microservice',
    example1: '/api/2015-12-25',
    example2: '/api/1451001600000',
    example3: '/api/'
  });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
