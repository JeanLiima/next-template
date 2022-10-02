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
                
            </div>
        </div>
    );
};

export { SliderCard }