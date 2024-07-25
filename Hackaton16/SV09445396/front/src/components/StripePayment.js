import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Clientes from "../components/Clientes";  

import "bootstrap/dist/css/bootstrap.min.css"; 
import { loadStripe } from "@stripe/stripe-js"; 

function StripePayment() { 
  const [product, setProduct] = useState([]); 
  const [datosCliente, setDatosCliente] = useState(false);

  const botonCliente = () => {
    setDatosCliente(true); 
  };
  
  // Carga productos de la BD
  const  [products, setProducts] = useState([]);
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('http://localhost:8000/api/products');
        setProducts(response.data);
      } catch (error) {
        console.error('Error al cargar los productos:', error);
      }
    };

    fetchProducts();
  }, []);


  // Lista para el carrito de compras
  const [liscart, setLisCart] = useState([]);
    
  const addToCart = (item) => {
    // const nuevoItem = {
    //   coditm: item.coditm,
    //   precio: item.precio,
    //   cantidad: 1
    // }
    setLisCart([...liscart, item]);
    const total = liscart.reduce((tot, item) => tot + item.precio * 1, item.precio * 1);

    // Objeto para pasar a pasarela de pagos STRIPE
    setProduct(  { coditm: "Productos varios", precio: total} );
    // setProduct( [...product, nuevoItem] );
  };
  


  const makePayment = async () => { 
    // const stripe = await loadStripe("pk_test_51NcxTJAkNYfeym1I2nddmvG02uLV9OcwrG3HJIOq59ebzgXjXQ78wTOUd6WIpmdykJCJiXNbbq0yg2tp3ZwN2Fxc00a67VDtbf"); 
    const stripe = await loadStripe("pk_test_51PYHlDRrK9uKI4kL0XW79DOiPlww0W9Fc7daClOFkETxgrqPblnXvgFRMBUValWlne0QyWdq0wqrpzFzLtm8b0lB00j6cV55zU"); 
    const body = { product };     //Lista de carrito de comprar a pagar
    const headers = { 
      "Content-Type": "application/json", 
    }; 

    if (product.length===0){
      alert("No ha seleccinado ningun producto");
      return
    }

    const response = await fetch( 
      "http://localhost:8000/api/create-checkout-session", 
      { 
        method: "POST", 
        headers: headers, 
        body: JSON.stringify(body), 
      } 
    ); 
 
    const session = await response.json(); 
 
    const result = stripe.redirectToCheckout({ 
      sessionId: session.id, 
    }); 
    console.log(result);
    if (result.error) { 
      console.log(result.error); 
    } 
  }; 
 
  return ( 
    <div>
      <h2>Lista de Productos</h2>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>

        {products.map((product) => (
          <div key={product.id} style={{ border: '1px solid #ccc', margin: '10px', padding: '10px', backgroundColor: "aliceblue" }}>
            <img src={product.imagen} alt={product.coditm} style={{ width: '150px', height: '100px' }} />
            <h5>{product.coditm}</h5>
            <p>Precio: ${product.precio}</p>
            <button onClick={() => addToCart(product)} style={{}} >Agregar al Carrito</button>
          </div>
        ))}

      </div>

      <h2>Carrito de Compras</h2>

      <ul>
        {liscart.map((item, index) => (
          <li key={index}>
            {item.coditm} - ${item.precio}
          </li>
        ))}
      </ul>

      <div>
        <button onClick={botonCliente}>Ingresar datos del cliente</button>
        {datosCliente && <Clientes liscart={liscart} />}
        
        <button onClick={makePayment} style={{marginLeft:'10px'}}  > Realizar pago</button>
      </div>

    </div>

  ); 
}  

export default StripePayment; 

