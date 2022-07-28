const mongoose = "mongodb+srv://c4clan1:c4clan1@c4clan.ohxsoxt.mongodb.net/?retryWrites=true&w=majority";

    const premiumSchema = new mongoose.Schema({
        User: String,
    });

const model = mongoose.model("premium", premiumSchema);

module.exports = model;
