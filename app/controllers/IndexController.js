const UserService = require('./../services/UserService');

module.exports = {
    index: async (req, res) => {
        res.render('main');
    },

    showAll: async (req, res) => {
        res.json(await UserService.getAll()).status(304);
    },

    store: async (req, res) => {
        res.json(await UserService.create(req.body));
    },

    show: async (req, res) => {
        res.json(await UserService.findById(req.params.id));
    },

    update: async (req, res) => {
        res.json(await UserService.update(req.body, req.params.id));
    },

    delete: async (req, res) => {
        res.json(await UserService.destroy(req.params.id));
    }
}