import express from "express"
import mongoose from "mongoose";
import cors from "cors";
import menuRoutes from "./routes";

const app = express();

const PORT: string | number = process.env.PORT || 4000;

app.use(cors());
app.use(express.json());
app.use(menuRoutes);

const uri: string = `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@cluster0.vmx7a.mongodb.net/${process.env.MONGO_DB}?retryWrites=true&w=majority`
console.log(uri);

mongoose
    .connect(uri)
    .then(() =>
    app.listen(PORT, () =>
        console.log(`Server running on http://localhost:${PORT}`)
    )
    )
    .catch((error) => {
    throw error;
    });