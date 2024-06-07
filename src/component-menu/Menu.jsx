import React from 'react'
import { Link } from 'react-router-dom'
import styles from './Menu.module.css'
import { IoHomeOutline } from "react-icons/io5";


const Menu = () => {
  return (
    <div className={styles.menu}>
      <div className={styles.item}>
        <span className={styles.title}>MAIN</span>
        <Link to="/" className={styles.listItem}>
          <IoHomeOutline />
          <span className="home">Home</span>
        </Link>
        <Link to="/" className={styles.listItem}>
          <IoHomeOutline />
          <span className="home">Home</span>
        </Link>
      </div>

      <div className={styles.item}>
        <span className={styles.title}>MAIN</span>
        <Link to="/" className={styles.listItem}>
          <IoHomeOutline />
          <span className="home">Home</span>
        </Link>
        <Link to="/" className={styles.listItem}>
          <IoHomeOutline />
          <span className="home">Home</span>
        </Link>
      </div>

    </div>
    
  )
}

export default Menu
