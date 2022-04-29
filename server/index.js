import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';

import announcementRoutes from './routes/announcements.js';
import userRouter from "./routes/user.js";

const app = express();

app.use(express.json({ limit: '30mb', extended: true }))
app.use(express.urlencoded({ limit: '30mb', extended: true }))
app.use(cors());

app.use('/announcements', announcementRoutes)
app.use("/user", userRouter);



//mongodb
const CONNECTION_URL = 'mongodb+srv://wesselpawel:12345QWERTY@cluster0.0hsed.mongodb.net/paznokietki-mern';
const PORT = 'https://paznokietki-mern.herokuapp.com/';

mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => app.listen(PORT, () => console.log(`Server is running`)))
  .catch((error) => console.log(`${error} did not connect`));

