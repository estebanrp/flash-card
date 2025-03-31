import mDeck from "../models/mDeck.js";
import error from "../middlewares/error.js";

const cDeck = {
    getDeck: async (req, res) => {
        try {
            let id = parseInt(req.params.id);
            const deck = await mDeck.getDeck(id);
            const title = await mDeck.getDeckTitle(id);

            if (!deck) {
                return error.e404(req, res);
            }

            let currentIndex = req.query.index ? parseInt(req.query.index) : 0;

            const renderCard = (title) => {
                const card = deck[currentIndex];
                res.render('deck', { currentIndex, id, title, card, hasNext: currentIndex < deck.length - 1, hasPrev: currentIndex > 0 });
            };

            renderCard(title);

            req.on('nextCard', () => {
                if (currentIndex < deck.length - 1) {
                    currentIndex++;
                    renderCard(title);
                }
            });

        } catch (err) {
            error.e500(req, res, err);
        }
    }
};

export default cDeck;