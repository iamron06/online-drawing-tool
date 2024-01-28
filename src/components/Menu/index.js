// create a container and style our icons --- container , icon wrapper and icons inside it 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPencil , faEraser , faFileArrowDown , faRotateLeft , faRotateRight } from '@fortawesome/free-solid-svg-icons'
import styles from './index.module.css'
import { useDispatch, useSelector } from 'react-redux'
import { MENU_ITEMS } from '@/constants'
import { menuItemClick , actionItemClick } from '@/slice/menuSlice'
import cx from 'classnames';
// why using index.modules.css is to instead of writing strings we can directly import as object from css . Avoid using string literals and use objects or constant

const Menu = () => {
    const dispatch = useDispatch()

    const activeMenuItem = useSelector((state) => state.menu.activeMenuItem)

    const handleMenuClick = (itemName) => {
       dispatch(menuItemClick(itemName))
    }
    return (
        <div className={styles.menuContainer}>
            <div className={cx(styles.iconWrapper, {[styles.active]: activeMenuItem === MENU_ITEMS.PENCIL})} onClick={ ()=> handleMenuClick(MENU_ITEMS.PENCIL)}>
                {/* Icons */}
                <FontAwesomeIcon icon={faPencil}  className={styles.icon} />
            </div>

            <div className={cx(styles.iconWrapper, {[styles.active]: activeMenuItem === MENU_ITEMS.ERASER})} onClick={ ()=> handleMenuClick(MENU_ITEMS.ERASER)}>
                {/* Icons */}
                <FontAwesomeIcon icon={faEraser} className={styles.icon} />
            </div>

            <div className={styles.iconWrapper}>
                {/* Icons */}
                <FontAwesomeIcon icon={faRotateLeft} className={styles.icon}/>
            </div>

            <div className={styles.iconWrapper}>
                {/* Icons */}
                <FontAwesomeIcon icon={faRotateRight} className={styles.icon}/>
            </div>

            <div className={styles.iconWrapper}>
                {/* Icons */}
                <FontAwesomeIcon icon={faFileArrowDown} className={styles.icon}/>
            </div>
        </div>
    )
}

export default Menu