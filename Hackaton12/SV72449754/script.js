document.addEventListener("DOMContentLoaded", () => {
    console.log("Se cargo el DOM");
    const RegistroNuevo = document.getElementById("RegistroForm");
    const Registropendientes = document.getElementById("btnPendientes");
    const Registrocompletados = document.getElementById("btnCompletos");

    RegistroNuevo.addEventListener("submit",async (e)=>{
        e.preventDefault();
        console.log("Envio datos desde el formulario");
        const Obj=new FormData(RegistroNuevo);

        const RegCompraNueva={
            nombre:      Obj.get("nombre"),
            descripcion: Obj.get("descripcion"),
            fecha:       Obj.get("fecha"),
            estado:      Obj.get("estado") ? true: false
        };
        console.log(RegCompraNueva);

        try {
          console.log("enviando datos al servidor-0");
            const response = await fetch("http://localhost:8080/nuevo" ,{
              method: "POST",
              mode:"no-cors",
              headers: {"Content-Type": "application/json",},
              body: JSON.stringify(RegCompraNueva),
              
            });
            console.log("enviando datos al servidor-1",response.ok);
            //if (response.ok) {
            try {
              console.log("envio exitoso");
              const data =  await response.json();
              console.log("Recibido del Server: ",data);
            } catch (error) {
              console.log("error: ",error)
            }
              
            //}
            console.log("enviando datos al servidor-2");
            
           
          } catch (error) {}

       /* fetch("http://localhost:8080/nuevo" ,{
            method: 'POST',
            mode:"no-cors",
            headers: {'Content-type': 'application/json; charset=UTF-8',},
            body: JSON.stringify(RegCompraNueva),})
        .then((response) => response.json())
        .then((json) => console.log(json.value));*/
       
    });
  });
