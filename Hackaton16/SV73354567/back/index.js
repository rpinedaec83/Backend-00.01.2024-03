const express = require('express');
const passport = require('passport');
const session = require('express-session');
const Sequelize = require('sequelize');
const SequelizeStore = require('connect-session-sequelize')(session.Store);
const authRoutes = require('./routes/authRoutes');
const productRoutes = require('./routes/productRoutes');
const paymentRoutes = require('./routes/paymentRoutes');
const refundRoutes = require('./routes/refundRoutes');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

// Configuración de la base de datos
const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASS, {
  host: process.env.DB_HOST,
  dialect: 'mysql'
});

// Configuración de la sesión
app.use(session({
  secret: 'secret',
  store: new SequelizeStore({ db: sequelize }),
  resave: false,
  saveUninitialized: false
}));

// Middleware
app.use(express.json());
app.use(passport.initialize());
app.use(passport.session());

// Rutas
app.use('/auth', authRoutes);
app.use('/products', productRoutes);
app.use('/payments', paymentRoutes);
app.use('/refunds', refundRoutes);

// Sincronizar base de datos y arrancar servidor
sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log(`Servidor iniciado en http://localhost:${PORT}`);
  });
}).catch(err => console.error('Error al conectar con la base de datos:', err));