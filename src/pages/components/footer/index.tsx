import Image from 'next/image'
import OccriIcon from 'assets/brand/occri-icon.svg'

import styles from './styles.module.scss'

const Footer = () => (
    <footer className={styles.footer}>
        <div className={styles['footer__information']}>
            <div>
                <h4>Local</h4>
                <p>
                    Av. Test <br/>
                    Rua teste teste - N 140 <br/>
                    Cidade teste
                </p>       
            </div>
            <div>
                <h4>Rede sociais</h4>
                <p> @occriteste</p> 
                <p> @occriteste</p>             
            </div>
            <div>
                <h4>Contatos</h4>
                <p> 55 99889-9988</p>
                <p> 55 99889-9988</p> 
                <p> 55 99889-9988</p> 
            </div>
            <div>
                <h4>Faça já sua reserva</h4>
                <button>
                    Reservar
                </button>       
            </div>
        </div>
        <Image src={OccriIcon} alt='Occri Icon' />
    </footer>
)

export { Footer }