import { useSelector } from "react-redux"
import styles from "./index.module.css"
import { COLORS , MENU_ITEMS} from "@/constants"
const Toolbox = () => {

  // const activeMenuItem  = useSelector((state) => state.menu.activeMenuItem)
  const menuState = useSelector((state) => state.menu);
  const activeMenuItem = menuState ? menuState.activeMenuItem : null;

    const updateBrushSize = (e) => {

    }
    return(
        <div className={styles.toolboxContainer}>
      <div className={styles.toolItem}>
        <h4 className={styles.toolText}>Stroke</h4>
        <div className={styles.itemContainer}>
            <div className={styles.colorBox} style={{backgroundColor: COLORS.BLACK}}/>
            <div className={styles.colorBox} style={{backgroundColor: COLORS.RED}}/>
            <div className={styles.colorBox} style={{backgroundColor: COLORS.GREEN}}/>
            <div className={styles.colorBox} style={{backgroundColor: COLORS.YELLOW}}/>
            <div className={styles.colorBox} style={{backgroundColor: COLORS.WHITE}}/>
            <div className={styles.colorBox} style={{backgroundColor: COLORS.BLUE}}/>
            <div className={styles.colorBox} style={{backgroundColor: COLORS.ORANGE}}/>

        </div>
      </div>
      <div className={styles.toolItem}>
        <h4 className={styles.toolText}>Brush Ranger {activeMenuItem}</h4>
        <div className={styles.itemContainer}>
           <input type="range" min={1} max={10} step={1} onChange={updateBrushSize} />
            
        </div>
      </div>
        </div>
    )
}

export default Toolbox