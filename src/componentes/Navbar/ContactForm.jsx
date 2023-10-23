import "./ContactFormStyles.css"

function ContactForm() {
    return(
        <div className="form-container">
            <h1>Envianos un Mensaje!</h1>
            <form>
                <input placeholder="Nombre"/>
                <input placeholder="Email"/>
                <input placeholder="Tema"/>
                <textarea placeholder="Mensaje" rows="4"></textarea>
                <button>Enviar</button>
            </form>

        </div>
    )
}
export default ContactForm