const express = require('express');
const app = express();
const { agregarProducto, eliminarProducto, modificarProducto, obtenerProductos } = require('./Controllers/controllerProductos');
const Productos = require('./Models/modeloProducto');
const Stores = require('./Models/modeloStores');

app.use(express.json());

// Obtener productos
app.get('/productos', obtenerProductos);

// Agregar producto
app.post('/productos', agregarProducto);

// Eliminar producto
app.delete('/productos/:id', eliminarProducto);

// Actualizar producto
app.put('/productos/:id', modificarProducto);

app.listen(3000, () => {
  console.log('Server listening on port 3000!');
});