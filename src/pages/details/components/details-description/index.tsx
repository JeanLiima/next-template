import { HiOutlineUserGroup } from 'react-icons/hi'
import { Button } from 'components/button'

import styles from './styles.module.scss'

interface ISpace {
    name: string,
    description: string,
    quantity: number,
}

const DetailsDescription = ({name, description, quantity}: ISpace) => (
    <div className={styles['details-description']}>
        <h1>{name}</h1>
        <p>{description}</p>
        <div className={styles['details-description__quantity']}>
            <div className={styles['details-description__quantity__icon']}>
                <HiOutlineUserGroup/> 
            </div>
            {quantity}
        </div>
        <input placeholder='Selecione a data de entrada' />
        <input placeholder='Selecione a data de saída' />
        <div className={styles['details-description__value']}>
            <p>Total: <span>R$ 54,00</span> hr</p>
        </div>
        <Button>
            Reservar
        </Button>
    </div>
);

export { DetailsDescription }