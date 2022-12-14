
import './CampoTexto.css'

const CamposTexto =(props)=>{

    const placeholderModificado = `${props.placeholder}...`
    

    const aoDigitado =(evento)=>{


        props.aoAlterado(evento.target.value)

    }
    return(

        <div className="campo-texto">
            <label>{props.label}</label>
            <input  onChange={aoDigitado} required={props.obrigatorio} placeholder={placeholderModificado} />
        </div>
    )

}

export default CamposTexto;