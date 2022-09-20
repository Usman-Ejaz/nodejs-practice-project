const fs = require('fs');

fs.readFile(__dirname).forEach(file => {
    console.log('file => ', file);
})

const webRoutes = require('./app/routes/web.js');
const adminRoutes = require('./app/routes/admin.js');
const authRoutes = require('./app/routes/auth.js');
const apiV1Routes = require('./app/routes/api/v1.js');

app.use('/', webRoutes);
app.use('/admin', adminRoutes);
app.use('/auth', authRoutes);
app.use('/api/v1/', apiV1Routes);