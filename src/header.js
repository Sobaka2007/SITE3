import styles from "./header.module.css"
import logo from "./img/logo.png"
export default function Header({setActive, active}) {
    return (
        <header className={styles.header}>
         <img src = {logo}></img>
         <ul className={styles.list}>
             <li onClick={() => setActive(0)} className={active === 0 ? styles.active : ""}>Colors</li>
             <li onClick={() => setActive(1)} className={active === 1 ? styles.active : ""}>Characteristics</li>
             <li onClick={() => setActive(2)} className={active === 2 ? styles.active : ""}>Video</li>
             <li onClick={() => setActive(3)} className={active === 3 ? styles.active : ""}>Price</li>
             <li onClick={() => setActive(4)} className={active === 4 ? styles.active : ""}>Contact</li>
         </ul>
        </header>
    )
}