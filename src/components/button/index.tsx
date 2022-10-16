
import classNames from 'classnames'

import styles from './styles.module.scss'

const defaultProps = {
    color: "primary",
}

interface IButton {
    children: String,
    color: 'primary' | 'secondary'
}

const Button = ({children, color}: IButton) => {
    return (
        <button 
            className={classNames(
                styles.button,
                styles[`button--color-${color}`]
            )}
        >
            <span>{children}</span>
        </button>
    )
}

Button.defaultProps = defaultProps;

export { Button}