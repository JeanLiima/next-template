import styles from './styles.module.scss'

interface PlaceCardProps {
    name: String,
    img: String,
    description: String,
}

const PlaceCard = ({name, img, description}: PlaceCardProps) => (
    <div className={styles['place-card']}>
        <div className={styles['place-card__image']}>
            img
        </div>
        <div className={styles['place-card__description']}>
            <h2>{name}</h2>
            <p>
                {description}
            </p>
        </div>
    </div>
)

export { PlaceCard }