import Image from 'next/image'

import styles from './styles.module.scss'

interface SliderCardProps {
    img: String,
}

const SliderCard = ({img}: SliderCardProps) => (
    <div className={styles['slider-card']}>
        <div className={styles['slider-card__image']}>
            {img}
        </div>
    </div>
)

export { SliderCard }