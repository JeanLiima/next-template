import { InitialCarousel } from './components/initial-carousel'
import styles from './styles.module.scss'

const HomeBanner = () => {
    return (
        <div className={styles['home-banner']}>
            <div className={styles['home-banner__content']}>
                <InitialCarousel />
            </div>
        </div>
    );
};

export { HomeBanner };