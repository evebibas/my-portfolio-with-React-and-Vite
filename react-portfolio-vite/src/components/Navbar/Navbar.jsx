import  { useState } from "react";
import styles from "./Navbar.module.css";
import { getImageUrl } from '../../utils';

export const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className={styles.navbar}>
        <a className={styles.title} href="/">Portfolio</a>
        <div className={styles.menu}>
            <img className={styles.menuBtn} 
            src={menuOpen ?
            getImageUrl('nav/closeIcon.png') :
            getImageUrl('nav/menuIcon.png')} 
            alt='menu-button'
            onClick={ () => { 
                console.log('Menu button clicked');
                console.log('menuOpen=>' + menuOpen);
                setMenuOpen(!menuOpen)}
            }
            />
            <ul className={`${styles.menuItems} ${menuOpen && styles.menuOpen}`}
            onClick={() => {
                console.log('Menu item clicked');
                console.log('menuOpen=>' + menuOpen);
                setMenuOpen(false);}
            }
            >
            <li>
                <a href="#about">About</a>
            </li>
            <li>
                <a href="#experience">Experience</a>
            </li>
            <li>
                <a href="#contact">Contact</a>
            </li>
                
            </ul>
        </div>
  </nav>
  );
};