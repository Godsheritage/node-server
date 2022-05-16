import mongoose, { model, Schema, Model, Document } from "mongoose";

interface planetTypes extends Document {
  name: string;
}

const planetSchema: Schema = new mongoose.Schema({
  keplerName: { type: String, required: true },
});

//connect planetschema with the planet collection

const planets =  mongoose.model('planet', planetSchema)
export default planets