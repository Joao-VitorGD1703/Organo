import Colaborador from '../Colaborador';
import './Time.css'


const Time =(props)=>{
    return(

        props.colaboradores.length > 0 && <section className='time' style={{backgroundColor: props.corSecundaria}}>
            <h3 style={{borderColor: props.corPrimaria,  color: props.corPrimaria}}>{props.nome}</h3>
            <div className='colaboradores'>
              {props.colaboradores.map(colaboradores => 
              <Colaborador 
              corDeFundo={props.corPrimaria}
              key={colaboradores.nome}
              nome={colaboradores.nome} 
              cargo={colaboradores.cargo} 
              imagem={colaboradores.imagem}
              />)}

            </div>
        </section>
    );
}

export default Time;