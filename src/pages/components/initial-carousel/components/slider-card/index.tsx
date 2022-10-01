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

const SliderCard = ({img, alt}: SliderCardProps) => (
    <div className={styles['slider-card']}>
        <div className={styles['slider-card__image']}>
        </div>
    </div>
);

export { SliderCard }