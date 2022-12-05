import './rodape.css'

const Rodape = ()=>{
    return(
        <footer className='footer'>
            <section>
                <ul>
                   <li>
                     <img src="/imagens/ig.png" alt="Instagram" />
                     
               
                    </li>
                    <li>
                     <img src="/imagens/tw.png" alt="Twitter" />
                     
                    </li>
                    <li>
                     <img src="/imagens/fb.png" alt="Facebook" />
                     
                
                    </li>
                </ul>
            </section>
            <section>
                <img src="/imagens/logo.png" alt="Logotipo da Organo" />
            </section>
            <section>
                <p>Desenvolvido por João Vítor parceria com Alura.</p>
            </section>
        </footer>


        
    );
}

export default Rodape;