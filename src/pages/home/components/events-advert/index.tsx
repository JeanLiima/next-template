import { Button } from 'components/button';

import styles from './styles.module.scss'

const EventsAdvert = () => (
    <div className={styles['events-advert']}>
        <div className={styles['events-advert__content']}>
            <div className={styles['events-advert__content__description']}>
                <h1>Faça seu evento conosco!</h1>
                <p>
                    Espaços preparados para receber seu evento da melhor maneira possivel, possuimos bar, restaurante, espaço KIDS e toda uma estrutura pronta para receber você e suas colegas de trabalho!
                </p>
            </div>
            <div className={styles['events-advert__content__button']}>
                <Button>
                    Datas disponiveis
                </Button>
            </div>
        </div>
    </div>
);

export { EventsAdvert }