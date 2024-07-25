import React, { useState } from 'react';
import axios from 'axios';
 
function Clientes( {listcar}) { 
    const [cliente, setCliente] = useState({
        nombre: '',
        direccion: '',
        email: '',
        telefono: ''
    });

    // Prepara datos de Orden de Compra
    const [orden] = useState({
      nomcli: '',
      nroorden: '',
      fecha: '',
      total: 0,
      totigv: 0,
      totnet: 0,
      detalles: [
        { producto: '', cantidad: 0, precio: 0, total: 0 }
    ]
    });


    // const handleDetailChange = (index, e) => {
    //   const { name, value } = e.target;
    //   const detalles = [...orden.detalles];

    //   detalles[index][name] = value;
    //   detalles[index].total = detalles[index].cantidad * detalles[index].precio;
    //   setOrden({
    //       ...orden,
    //       detalles,
    //       total: detalles.reduce((acc, curr) => acc + curr.total, 0)
    //   });
    // };

    // const handleOrden = e => {
        
    //     axios.post('http://localhost:8000/registerOrder', orden)
    //         .then(response => {
    //             alert(response.data);
    //         })
    //         .catch(error => {
    //             console.error('There was an error!', error);
    //         });
    // };


    const handleChange = e => {
        const { name, value } = e.target;
        setCliente({
            ...cliente,
            [name]: value
        });
    };

    const handleSubmit = e => {
        e.preventDefault();
        axios.post('http://localhost:8000/registercli', cliente)
            .then(response => {
                alert(response.data);
            })
            .catch(error => {
                console.error('There was an error!', error);
            });
        
        axios.post('http://localhost:8000/registerOrder', orden)
        .then(response => {
            alert(response.data);
        })
        .catch(error => {
            console.error('There was an error!', error);
        });    
    };


    const estiloCli = {
      margintop: '2px',
      backgroundColor: 'grey',
      color: 'white',
      padding: '10px 20px',
      border: 'none', 
    }

    const estiloLab = {
      width: '80px',
    }

    const estiloEtq = {
      width: '300px',
    }

    const estiloTel = {
      width: '100px',
    }

    return (
      <div style={estiloCli}>
          <br></br>
          <h3>Registro de Clientes</h3>
          <form onSubmit={handleSubmit}>
              <div>
                  <label style={estiloLab}>Nombre:</label>
                  <input type="text" name="nombre" value={cliente.nombre} onChange={handleChange} style={estiloEtq} />
              </div>
              <div>
                  <label style={estiloLab}>Dirección:</label>
                  <input type="text" name="direccion" value={cliente.direccion} onChange={handleChange} style={estiloEtq}/>
              </div>
              <div>
                  <label style={estiloLab}>Email:</label>
                  <input type="email" name="email" value={cliente.email} onChange={handleChange} style={estiloEtq}/>
              </div>
              <div>
                  <label style={estiloLab}>Teléfono:</label>
                  <input type="tel" name="telefono" value={cliente.telefono} onChange={handleChange} style={estiloTel}/>
              </div>
              <button type="submit">Registrar</button>
          </form>
          <br></br>
      </div>
  );
} 
 
export default Clientes; 