import { useState } from 'react'
import './App.css'
import Logo from './assets/pokebola.png';
import Menu from './assets/menu.png';
import AnunPri from './assets/anuncioPrin.png';
import Imgseg1 from './assets/mew.png';

function App() {

  return (

    <div>
      <nav>

        <img className='logoP'
          src={Logo}
          alt="logo pokebola" />

        <h1 className='SiteName'>PokeShop</h1>

        <img className='logoP'
          src={Menu}
          alt="menu site" />

      </nav>

      <main>
        <div className="PrinSessao">
          <div className='primparteanun'>
            <div>
              <img
                className='AnunPri'
                src={AnunPri}
                alt="Imagem Principal" />
            </div>
            <div className='Etiqueta'>
              <div className='Tituanuncio'>
                <h1>Pokébola Clássica - Capture Seus Companheiros com Estilo!</h1>
              </div>
              <div className='Preço'>R$ 20,00</div>
              <div className='botoes'>
                <div><button className='Comprar' type='button'>Comprar</button></div> <br />
                <div><button className='Carrinho' type='button'> Adicionar ao Carrinho</button></div>
                <div>
                <img className='ImgSeg1'
              src={Imgseg1} alt="imagem segundaria1" />
              </div>
              </div>
         
            </div>
       

          </div>
        </div>
      </main>
      <footer>
        <div className='fim'>
          <div >
            <p>PokéStore™ - Onde Treinadores Encontram o Que Precisam!</p>
          </div>
          <div>
            <p>Explorar:
              Pokébolas
              Poções
              TM & HM
              Itens de Evolução
              Vestimentas</p>
          </div>
          <div>
            <p>Ajuda:
              Suporte ao Cliente
              Perguntas Frequentes
              Política de Trocas e Devoluções
              Termos de Uso
              Política de Privacidade</p>
          </div>
          <div>
            <p>Siga-nos:

              Facebook
              Instagram
              Twitter
              YouTube</p>
          </div>
          <div>
            <p>Newsletter:

              Inscreva-se para receber ofertas e novidades exclusivas diretamente no seu e-mail!
              Sobre Nós: PokéStore™ é a loja número 1 para treinadores de todo o mundo. Desde itens básicos até os mais raros, nossa missão é garantir que você esteja sempre preparado para a próxima batalha.</p>
          </div>
          <div>
            <p>Contato:
              E-mail: contato@pokestore.com
              Telefone: +55 (11) 1234-5678
              Endereço: Avenida Pokémon, 151, Pallet Town, Kanto
              © 2024 PokéStore™. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>

    </div>
  )
}

export default App
