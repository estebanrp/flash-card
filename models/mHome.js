import db from "../config/db.js";

const mHome = {
    getDecksMetada: async (req, res) => {
        try {
            console.log("hola");
            const [results] = await db.query("SELECT * FROM decks");
            console.log("model" + results);
            return results;
        } catch (err) {
            throw { status: 500, message: "Error loading decks" };
        }
    }
}

export default mHome;