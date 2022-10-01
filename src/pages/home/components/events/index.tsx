import { EventsCarousel } from './components/events-carousel';

import styles from './styles.module.scss'

const Events = () => {
    return (
        <div className={styles.events}>
          <h2>Próximos eventos</h2>
          <div className={styles['events__container']}>
            <div className={styles['events__container__description']}>
              <h1>Evento teste</h1>
              <p> 
                Espaços preparados para receber seu evento da melhor maneira possivel, 
                possuimos bar, restaurante, espaço KIDS e toda uma estrutura pronta para receber 
                você e suas colegas de trabalho!
              </p>
            </div>
            <div className={styles['events__container__carousel']}>
              <EventsCarousel />
            </div>
          </div>
        </div>
    );
};

export { Events }