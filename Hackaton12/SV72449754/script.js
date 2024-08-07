let $tableAreaPendientes = $('#tableAreaPendientes');
let $tableAreaCompletados = $('#tableAreaCompletados');
let RegistroPendientes=[];
let RegistroCompletados=[];
document.addEventListener("DOMContentLoaded", () => {
    console.log("Se cargo el DOM");
    const RegistroNuevo = document.getElementById("RegistroForm");
    const Registropendientes = document.getElementById("btnPendientes");
    const Registrocompletados = document.getElementById("btnCompletados");
    $tableAreaPendientes.bootstrapTable({ data:RegistroPendientes});
    $tableAreaCompletados.bootstrapTable({ data:RegistroCompletados});

    RegistroNuevo.addEventListener("submit",async (e)=>{
        e.preventDefault();
        const Obj=new FormData(RegistroNuevo);
        const RegCompraNueva={
            nombre:      Obj.get("nombre"),
            descripcion: Obj.get("descripcion"),
            fecha:       Obj.get("fecha"),
            estado:      Obj.get("estado") ? true: false
        };
        
        try {
          const response = await fetch("http://localhost:8080/nuevo" ,{
              method: "POST",
              headers: {"Content-Type": "application/json",},
              body: JSON.stringify(RegCompraNueva),   
          });

          console.log("\nPOST--->envio exitoso");
          console.log(RegCompraNueva);
          const data =  await response.json();
          console.log("<---Recibido del POST-Server: ",data);
          console.log("");
          } catch (error) {}
    });

    Registropendientes.addEventListener("click",async (e)=>{
      e.preventDefault();
      
      try {
        const response= await fetch("http://localhost:8080/pendientes",{
          method: 'GET',
          headers: {'Content-type': 'application/json; charset=UTF-8',},
        });
        console.log("\n<---Recibido del GET Pendientes-Server: ");
        const data =  await response.json();
        console.log("Data: ",data);
        if (data.length>0) {
          data.forEach(elem => {
            console.log(elem);
          });
          RegistroPendientes=data;
          console.log("RegistroPendientes: ",RegistroPendientes);
        }
        else{console.log("{}");}
        console.log("");
        $tableAreaPendientes.bootstrapTable('load', RegistroPendientes);
      } catch (error) {}
    });


    Registrocompletados.addEventListener("click",async (e)=>{
      e.preventDefault();

      try {
        const response= await fetch("http://localhost:8080/completados",{
          method: 'GET',
          headers: {'Content-type': 'application/json; charset=UTF-8',},
        });
        console.log("\n<---Recibido del GET Completados-Server: ");
        const data =  await response.json();
        if (data.length>0) {
          data.forEach(elem => {
            console.log(elem);
          });
          RegistroCompletados=data;
          console.log("RegistroCompletados: ",RegistroCompletados);
        }
        else{console.log("{}");}
        console.log("");
        $tableAreaCompletados.bootstrapTable('load', RegistroCompletados);
      } catch (error) {}
    });

  });


