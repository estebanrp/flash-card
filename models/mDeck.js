import db from "../config/db.js";

const mDeck = {
    getDeck: async (id) => {
        try {
            const [result] = await db.query("SELECT * FROM cards WHERE deck_id = ? ", [id])
            return result;
        } catch (err) { 
            throw { status: 500, message: 'Error loading deck' };
        }
    },

    getDeckTitle: async (id) => {
        try {
            const [result] = await db.query("SELECT * FROM decks WHERE id = ?", [id])
            return result[0].title;
        } catch {
            throw { status: 500, message: 'Error loading deck' }
        }
    }

}

export default mDeck;