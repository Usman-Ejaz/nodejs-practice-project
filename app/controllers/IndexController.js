const UserService = require('./../services/UserService');
const {
    transport
} = require('./../../config/email');

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
    },

    sendEmail: async (req, res) => {
        const info = await transport.sendMail({
            from: `Usman Ejaz <usmanejaz49@gmail.com>`, // sender address
            to: "node@example.com", // list of receivers
            subject: "Hello, Test Node Email", // Subject line
            text: "Hello world? I am node js email text body", // plain text body
            html: "<b>Hello world? I am node js email html body</b>", // html body
        })

        console.log("Message sent: %s", info.messageId);
    }
}