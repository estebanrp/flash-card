import mDeck from "../models/mDeck.js";
import error from "../middlewares/error.js";

const cDeck = {
    getDeck: async (req, res) => {
        try {
            const id = parseInt(req.params.id);
            const deck = await mDeck.getDeck(id);
            const title = await mDeck.getDeckTitle(id);

            let currentIndex = req.query.index ? parseInt(req.query.index) : 0;

            if (!deck) {
                return error.e404(req, res);
            }

            const renderCard = () => {
                const card = deck[currentIndex];
                const deckLength = deck.length; 
                res.render('deck', { deckLength, currentIndex, id, title, card, hasNext: currentIndex < deck.length - 1, hasPrev: currentIndex > 0 });
            };

            renderCard();

        } catch (err) {
            error.e500(req, res, err);
        }
    },
    nextCard: (req, res) => {
        let currentIndex = parseInt(req.query.index) || 0;
        let hasNext = req.query.hasNext;
        if (hasNext == "true") {
            currentIndex++;
            res.redirect(`/deck/${req.params.id}?index=${currentIndex}`);
        } else {
            currentIndex = 0;
            res.redirect(`/deck/${req.params.id}?index=${currentIndex}`);
        }

    },
    prevCard: (req, res) => {
        let currentIndex = parseInt(req.query.index) || 0;
        let hasPrev = req.query.hasPrev;
        let deckLength = req.query.long;
        if (hasPrev == 'true') {
            currentIndex--;
        } else {
            currentIndex = deckLength - 1;
        }
        res.redirect(`/deck/${req.params.id}?index=${currentIndex}`);
    }
};



export default cDeck;