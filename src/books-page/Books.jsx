import React from 'react'
import styles from './Books.module.css'
import Table from "../component-table/Table";

const Books = () => {
  return (
    <div className={styles.books}>
      <div className="info">
        <h1>Books</h1>
        <button>Add new books</button>
      </div>

      <Table />

    </div>
  )
}

export default Books
