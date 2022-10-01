import { SpacesCarousel } from './components/spaces-carousel'

import styles from './styles.module.scss'

const Spaces = () => {
    return (
        <div className={styles.spaces}>
          <h2>Nossos espaços</h2>
            <SpacesCarousel />
        </div>
    );
};

export { Spaces }