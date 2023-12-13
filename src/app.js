const express = require('express');
const bodyParser = require('body-parser');
const mathRoutes = require('./routes/mathRoutes');
const { logMiddleware } = require('./middleware');

const app = express();

app.use(logMiddleware);

app.use(bodyParser.json());
app.use('/math', mathRoutes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
