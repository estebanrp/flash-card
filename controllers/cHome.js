import mHome from '../models/mHome.js';

const cHome = {
    getHome: (req, res) => {
        res.render("home");
    }
}

export default cHome;