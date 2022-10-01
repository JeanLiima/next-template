import Image from 'next/image'

import styles from './styles.module.scss'

interface EventCardProps {
    img: {
        src: string,
        width: number,
        height: number,
    },
    alt: string,
}

const EventCard = ({img, alt}: EventCardProps) => (
    <div className={styles['event-card']}>
        <div className={styles['event-card__image']}>
            <Image src={img.src} width={img.width} height={img.height} alt={alt}/>
        </div>
    </div>
)

export { EventCard }