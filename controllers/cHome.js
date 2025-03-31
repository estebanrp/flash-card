import mHome from '../models/mHome.js';
import error from "../middlewares/error.js";

const cHome = {
    getHome: async (req, res) => {
        try {
            const decks = await mHome.getDecksMetada();
            res.render("home", { decks });
        } catch (err) {
            error.e500(req, res, err);
        }
    }
}

export default cHome;