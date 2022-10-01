import Image from 'next/image'

import styles from './styles.module.scss'

interface SpaceCardProps {
    name: String,
    img: {
        src: string,
        width: number,
        height: number,
    },
    alt: string,
    description: String,
}

const SpaceCard = ({name, img, alt, description}: SpaceCardProps) => (
    <div className={styles['place-card']}>
        <div className={styles['place-card__image']}>
            <Image src={img.src} width={img.width} height={img.height} alt={alt}/>
        </div>
        <div className={styles['place-card__description']}>
            <h2>{name}</h2>
            <p>
                {description}
            </p>
        </div>
    </div>
)

export { SpaceCard }