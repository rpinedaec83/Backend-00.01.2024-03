const cors = require("cors"); 
const express = require("express"); 
const mysql = require('mysql2');
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY); 
require("dotenv").config(); 

// Google
const bodyParser = require('body-parser');
const sequelize = require('./config/db');
const authRoutes = require('./routes/authRoutes');

const app = express(); 
 
// Middlewares here 
app.use(express.json()); 
app.use(cors()); 

app.use(bodyParser.json());
app.use('/api/auth', authRoutes);


// Configurar la conexión a MySQL
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'P@$w0rd25.MySQL',
  database: 'ventas'
});

connection.connect(err => {
  if (err) {
    console.error('Error al conectar a la base de datos:', err);
    return;
  }
  console.log('Conectado a la base de datos MySQL');

    if (err) throw err;

    // Creacion de tabla CLIENTES
    var sql = `CREATE TABLE IF NOT EXISTS clientes
            (
                id INT AUTO_INCREMENT PRIMARY KEY,
                nomcli VARCHAR(50) NOT NULL,
                dircli VARCHAR(100) NOT NULL,
                telcli VARCHAR(9) NOT NULL,
                email  VARCHAR(50) NOT NULL,
                last_update TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
            )`;
    connection.query(sql, function (err, result) {
        if (err) throw err;
    });

  
    // Creacion de tabla Maestro de ORDEN DE COMPRA
    var sql = `CREATE TABLE IF NOT EXISTS MstOrdCom
            (
                nroord INT AUTO_INCREMENT PRIMARY KEY,
                fecha DATE NOT NULL,
                nomcli VARCHAR(50) NOT NULL,
                dircli VARCHAR(100) NOT NULL,
                moneda CHAR(1) NOT NULL,    
                total  DECIMAL(10,2) NOT NULL,
                totigv DECIMAL(10,2) NOT NULL,
                totnet DECIMAL(10,2) NOT NULL,
                last_update TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
            )`;
    connection.query(sql, function (err, result) {
        if (err) throw err;
    });


    // Creacion de tabla Detalle de ORDEN DE COMPRA
    var sql = `CREATE TABLE IF NOT EXISTS DtlOrdCom
            (
                nroord INT,
                item INT NOT NULL,
                coditm VARCHAR(25) NOT NULL,
                desitm VARCHAR(100) NOT NULL,
                canitm INT NOT NULL,
                preitm DECIMAL(10,2) NOT NULL,
                total  DECIMAL(10,2) NOT NULL,
                last_update TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
                FOREIGN KEY (nroord) REFERENCES MstOrdCom(nroord)
            )`;
    connection.query(sql, function (err, result) {
        if (err) throw err;
    });

    // Creacion de tabla PRODUCTOS
    const borraTablaProductos = "DROP TABLE IF EXISTS productos"
    connection.query(borraTablaProductos, function (err, result) {
        if (err) throw err;
    });

    var sql = `CREATE TABLE IF NOT EXISTS productos
            (
                id INT AUTO_INCREMENT PRIMARY KEY,
                coditm VARCHAR(25) NOT NULL,
                desitm VARCHAR(100) NOT NULL,
                marca  VARCHAR(10) NOT NULL,
                precio DECIMAL(10,2) NOT NULL,
                umed   VARCHAR(3) NOT NULL,
                stock INT NOT NULL,
                imagen VARCHAR(200) NOT NULL,
                last_update TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
            )`;
    connection.query(sql, function (err, result) {
         if (err) throw err;
     });


    //Adicion de registros al Padron de Productos
    var sql = `INSERT INTO productos (coditm,desitm,marca,precio,umed,stock,imagen) VALUES
                      ('6205-2Z/C3','RODAMIENTOS SKF 6205-2Z/C3','SKF',11.59,'PZA',1103,
                      'https://res.cloudinary.com/rsc/image/upload/b_rgb:FFFFFF,c_pad,dpr_1.0,f_auto,q_auto,w_700/c_pad,w_700/F6671055-01'
                      )`;
    connection.query(sql, function (err, result) {
        if (err) throw err;
    });

    var sql = `INSERT INTO productos (coditm,desitm,marca,precio,umed,stock,imagen) VALUES
                      ('6206-2Z/C3','RODAMIENTOS SKF 6206-2Z/C3','SKF',15.92,'PZA',977,
                      'https://res.cloudinary.com/rsc/image/upload/bo_1.5px_solid_white,b_auto,c_pad,dpr_2,f_auto,h_399,q_auto,w_710/c_pad,h_399,w_710/F6671059-01?pgw=1'
                      )`;
    connection.query(sql, function (err, result) {
        if (err) throw err;
    });

    var sql = `INSERT INTO productos (coditm,desitm,marca,precio,umed,stock,imagen) VALUES
                      ('6206-2RS1/C3','RODAMIENTOS SKF 6206-2RS1/C3','SKF',17.93,'PZA',1797,
                      'https://res.cloudinary.com/rsc/image/upload/bo_1.5px_solid_white,b_auto,c_pad,dpr_2,f_auto,h_399,q_auto,w_710/c_pad,h_399,w_710/F2850958-01?pgw=1'
                      )`;
    connection.query(sql, function (err, result) {
        if (err) throw err;
    });

    var sql = `INSERT INTO productos (coditm,desitm,marca,precio,umed,stock,imagen) VALUES
                      ('6205-2RSH/C3','RODAMIENTOS SKF 6205-2RSH/C3','SKF',12.13,'PZA',1738,
                      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIFqQH9JYO8vuE2SMu82tlg9ZzeWtS2B-HPg&s'
                      )`;
    connection.query(sql, function (err, result) {
        if (err) throw err;
    });

    var sql = `INSERT INTO productos (coditm,desitm,marca,precio,umed,stock,imagen) VALUES
                      ('6205-2RSH','RODAMIENTOS SKF 6205-2RSH','SKF',11.13,'PZA',2735,
                      'https://www.motioncanada.ca/cdn-cgi/image/fit=scale-down,onerror=redirect,anim=false,quality=75,format=auto,metadata=none/motion3/fsdb/images/item/skf_bearings_hybrid_500x500.jpg'
                      )`;
    connection.query(sql, function (err, result) {
        if (err) throw err;
    });

    var sql = `INSERT INTO productos (coditm,desitm,marca,precio,umed,stock,imagen) VALUES
                      ('6204-2RSH/C3','RODAMIENTOS SKF 6204-2RSH/C3','SKF',11.53,'PZA',1890,
                      'https://www.provinsur.com/wp-content/uploads/2021/09/RODAMIENTO-6204-2RSH-C3-KML-20X47X14.jpg'
                      )`;
    connection.query(sql, function (err, result) {
        if (err) throw err;
    });


    // Prueba de creacion de Orden de Compra
    var sql = "INSERT INTO mstordcom (fecha,nomcli,dircli,moneda,total,totigv,totnet) VALUES ('2024-07-07','JUAN PEREZ','AV. PERU 120','D',100,18,118)";
    connection.query(sql, function (err, result) {
        if (err) throw err;
    });
    var sql = "INSERT INTO dtlordcom (nroord,item,coditm,desitm,canitm,preitm,total) VALUES (1,1,'6205-2Z/C3','RODAMIENTOS SKF 6205-2Z/C3',1,11.59,11.59)";
    connection.query(sql, function (err, result) {
        if (err) throw err;
    });
    var sql = "INSERT INTO dtlordcom (nroord,item,coditm,desitm,canitm,preitm,total) VALUES (1,2,'6206-2Z/C3','RODAMIENTOS SKF 6206-2Z/C3',2,15.92,31.84)";
    connection.query(sql, function (err, result) {
        if (err) throw err;
    });
    
});



 
// Routes here 
app.get("/", (req, res) => { 
  res.send("Hello World"); 
}); 


app.post("/api/create-checkout-session", async (req, res) => { 
    const { product } = req.body; 

    const session = await stripe.checkout.sessions.create(
      { 
      payment_method_types: ["card"], 
      line_items: [ 
        { 
          price_data: { 
            currency: "usd", 
            product_data: { 
              name: product.coditm, 
            }, 
            unit_amount: product.precio * 100, 
          }, 
          quantity: 1, 
        }, 
      ], 
      mode: "payment", 
      success_url: "http://localhost:3000/success", 
      cancel_url: "http://localhost:3000/cancel", 
      }
    ); 
    res.json({ id: session.id }); 
}); 

  
// Endpoint para obtener los productos
app.get('/api/products', (req, res) => {
  connection.query('SELECT * FROM productos', (err, results) => {
    if (err) {
      res.status(500).send('Error obteniendo los productos');
      return;
    }
    res.json(results);
  });
});

// Graba clientes
app.post('/registercli', (req, res) => {
  const { nombre, direccion, email, telefono } = req.body;
  const query = 'INSERT INTO clientes (nomcli, dircli, email, telcli) VALUES (?, ?, ?, ?)';

  connection.query(query, [nombre, direccion, email, telefono], (err, result) => {
      if (err) {
          return res.status(500).send(err);
      }
      res.send('Cliente registrado');
  });
});

// Registro de Orden de Comp
app.post('/registerOrder', (req, res) => {
  const { nroord, fecha, nomcli, dircli, moneda, total, totigv, totet, detalles } = req.body;
  const orderQuery = 'INSERT INTO Mst01Ord (nroorden, fecha, nomcli, total, totigv, totnet) VALUES (?, ?, ?, ?, ?, ? )';
  const detailQuery = 'INSERT INTO Dtl01Ord (nroorden, producto, cantidad, precio, total) VALUES (?, ?, ?, ?, ?)';

  connection.beginTransaction(err => {
      if (err) {
          return res.status(500).send(err);
      }

      connection.query(orderQuery, [nroord, fecha, nomcli, dircli, moneda, total, totigv, totet], (err, result) => {
          if (err) {
              return connection.rollback(() => {
                  res.status(500).send(err);
              });
          }

          const orderDetails = detalles.map(detalle => [nroorden, detalle.producto, detalle.cantidad, detalle.precio, detalle.total]);

          connection.query(detailQuery, [orderDetails], (err, result) => {
              if (err) {
                  return connection.rollback(() => {
                      res.status(500).send(err);
                  });
              }

              connection.commit(err => {
                  if (err) {
                      return connection.rollback(() => {
                          res.status(500).send(err);
                      });
                  }
                  res.send('Orden de compra registrada');
              });
          });
      });
  });
});

sequelize.sync().then(() => {
    app.listen(8000, () => { 
        console.log("Server started at port 8000"); 
    }); 
});