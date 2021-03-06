const express = require (express);
const bodyParser = require (body-parser);
const mongoose = require (mongoose);
const cors = require (cors);
const path = require('path');



const app = express();

import announcementRoutes from './routes/announcements.js';
import userRouter from "./routes/user.js";

app.use(express.json({ limit: '30mb', extended: true }))
app.use(express.urlencoded({ limit: '30mb', extended: true }))
app.use(cors());

app.use('/announcements', announcementRoutes)
app.use("/user", userRouter);

if (process.env.NODE_ENV === "production") {
  app.use(express.static('frontend/build'))
  
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'frontend', 'build', 'index.html'));
  })
}


//mongodb
const CONNECTION_URL = 'mongodb+srv://wesselpawel:12345QWERTY@cluster0.0hsed.mongodb.net/paznokietki-mern';
const PORT = process.env.PORT|| 5000;

mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => app.listen(PORT, () => console.log(`Server Running on Port: http://localhost:${PORT}`)))
  .catch((error) => console.log(`${error} did not connect`));

