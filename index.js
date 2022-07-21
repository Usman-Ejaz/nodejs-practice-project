const { app } = require('./config/server.js');
require('./config/database');
require('dotenv').config();

// Import routes here
const webRoutes = require('./app/routes/web.js');
const adminRoutes = require('./app/routes/admin.js');
const authRoutes = require('./app/routes/auth.js');
const apiV1Routes = require('./app/routes/api/v1.js');

app.use('/', webRoutes);
app.use('/admin', adminRoutes);
app.use('/auth', authRoutes);
app.use('/api/v1/', apiV1Routes);

const server = app.listen(process.env.PORT || 2400, () => {
    console.log('API server is listening');
});