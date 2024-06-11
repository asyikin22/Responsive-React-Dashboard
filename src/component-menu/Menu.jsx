import React from 'react'
import { Link } from 'react-router-dom'
import styles from './Menu.module.css'
import { IoHomeOutline, IoLibraryOutline, IoBarChartOutline } from "react-icons/io5";
import { FaSearch } from "react-icons/fa";


const Menu = () => {
  return (
    <div className={styles.menu}>
      <div className={styles.item}>
        <span className={styles.title}>Main</span>
        <Link to="/" className={styles.listItem}>
          <IoHomeOutline />
          <span className="home">Home</span>
        </Link>
      </div>

      <div className={styles.item}>
        <span className={styles.title}>Library</span>
        <Link to="/" className={styles.listItem}>
          <IoLibraryOutline />
          <span className="home">Books</span>
        </Link>
      </div>

      <div className={styles.item}>
        <span className={styles.title}>Analytics</span>
        <Link to="/" className={styles.listItem}>
          <IoBarChartOutline />
          <span className="home">Charts</span>
        </Link>
      </div>

      
      <div className={styles.item}>
        <span className={styles.title}>Search</span>
        <Link to="/" className={styles.listItem}>
          <FaSearch />
          <span className="home">Charts</span>
        </Link>
      </div>

    </div>
    
  )
}

export default Menu
