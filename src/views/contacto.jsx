const Contacto = ()=> {
    return (
       <main>
         <h1>Cuéntanos ¿En que te podemos ayudar?</h1>

        <form>
            <label htmlFor="email">Correo:</label>
            <input id="email" type="mail" placeholder="Ingresa tu Correo" />

            <label htmlFor="descripcion">Descripción:</label>
            <textarea id="descripcion" cols="30" rows="10"></textarea>

            <button className="btn">Enviar</button>

        </form>

       </main>
    )

}

export default Contacto