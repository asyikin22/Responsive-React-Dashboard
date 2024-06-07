import React from 'react'
import styles from './Footer.module.css'

const Footer = () => {
  return (
    <div className={styles.footer}>
      <span className={styles.admin}>Admin</span>
      <span className={styles.copyright}> &copy; Asyikin Dev Admin Dashboard</span>
    </div>
  )
}

export default Footer
