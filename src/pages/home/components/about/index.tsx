import Image from 'next/image'
import OccriCompleteLogo from 'assets/brand/occri-complete-logo.svg'

import styles from './styles.module.scss'

const About = () => {
    return (
        <div className={styles.about}>
            <div className={styles['about__content']}>
              <div className={styles['about__content__description']}>
                <h2>Sobre nós</h2>
                <h3>Olá, somos a OCCRI</h3>
                <p>
                    Mais do que um espaço compartilhado, a Occri é um complexo totalmente pensado e elaborado para criar uma experiencia única e diferenciada, contanto com diversos setores dentro do mesmo local: bar, restaurante, espaço kids, área de eventos e muito mais. Tem como propósito empoderar mulheres a serem protagonistas das suas próprias histórias, criando um ambiente acolhedor e possibilitador.
                </p>
              </div>
              <div className={styles['about__content__image']}>
                <Image src={OccriCompleteLogo} alt="Logo completo com texto coworking multissetorial feminino" />
              </div>
          </div>
        </div>
    );
};

export { About }