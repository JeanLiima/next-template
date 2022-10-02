import { Button } from 'components/button';
import Image from 'next/image'

import styles from './styles.module.scss'

interface SliderCardProps {
    img: {
        src: string,
        width: number,
        height: number,
    },
    alt: string,
}

const SliderCard = ({img, alt}: SliderCardProps) => {
    console.log(img)
    return (
        <div className={styles['slider-card']}>
            <div 
                className={styles['slider-card__image']}
                style={{ backgroundImage: `url(${img.src})` }}
            >
                <div className={styles['slider-card__text']}>
                    <h1>Venha trabalhar em nosso espaço!</h1>
                    <p>
                        Nosso coworking multissetorial FEMININO é voltado para você mulher que precisa de um espaço para trabalhar tranquila e com segurança.
                        Possuimos também um espaço KIDS para você que precissa trazer seu filho(a). Estamos te esperando.
                    </p>
                    <input placeholder='Selecione o espaço desejado' />
                    <Button>
                        Reservar
                    </Button>
                </div>
            </div>
        </div>
    );
};

export { SliderCard }