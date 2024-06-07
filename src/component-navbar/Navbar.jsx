import React from 'react'
import styles from './Navbar.module.css'
import { FaSearch, FaExpandArrowsAlt, FaRegUser } from "react-icons/fa";
import { IoApps } from "react-icons/io5";
import { IoNotifications, IoSettingsOutline } from "react-icons/io5";

const Navbar = () => {
  return (
    <div className={styles.navbar}>
        <div className={styles.logo}>
          <img src="student.png" 
               alt="book" 
               style={{ width: '50px', height: '50px' }}>
            </img>
          <span>Goodreads Library</span>
        </div>
        
        <div className={styles.icons}>
          <FaSearch />
          <IoApps />
          <FaExpandArrowsAlt />
          <IoNotifications />
          <IoSettingsOutline />
          <FaRegUser />
          </div>
    </div>
  )
}

export default Navbar
