import express from "express";
import { json } from "body-parser";
import { connect, Schema, model } from "mongoose";

const app = express();
app.use(json());

const uri = "mongodb+srv://Akhil:Akhiles2001@cluster0.mjzyc.mongodb.net/UserDetails?retryWrites=true&w=majority";

connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const formEntrySchema = new Schema({
  name: String,
  email: String,
  phoneNumber: String,
  address: String,
  skills: [String],
});

const FormEntry = model("FormEntry", formEntrySchema);

app.post("/api/submit-form", async (req, res) => {
  try {
    const formData = req.body;

    const formEntry = new FormEntry(formData);
    await formEntry.save();

    console.log("Form data saved successfully");

    res.status(201).json({ message: "Form data saved successfully" });
  } catch (error) {
    console.error("Error saving form data", error);
    res.status(500).json({ message: "Internal server error" });
  }
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
