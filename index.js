const {
    app
} = require('./config/server.js');

require('./config/database');
require('dotenv').config();

// Import routes here
require('./app/routes');

const swaggerUi = require('swagger-ui-express'),
    swaggerDocument = require('./swagger.json');

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

const server = app.listen(process.env.PORT || 2400, () => {
    console.log(`API server is listening on ${process.env.PORT}`);
});