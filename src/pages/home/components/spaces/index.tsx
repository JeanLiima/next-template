import { SpacesCarousel } from './components/spaces-carousel'

import styles from './styles.module.scss'

const Spaces = () => {
    return (
        <div className={styles.spaces}>
            <div className={styles['spaces__content']}>
                <h2>Nossos espaços</h2>
                <SpacesCarousel />
            </div>
        </div>
    );
};

export { Spaces }