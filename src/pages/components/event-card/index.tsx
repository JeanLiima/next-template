import Image from 'next/image'

import styles from './styles.module.scss'

interface EventCardProps {
    img: String,
}

const EventCard = ({img}: EventCardProps) => (
    <div className={styles['event-card']}>
        <div className={styles['event-card__image']}>
            {img}
        </div>
    </div>
)

export { EventCard }