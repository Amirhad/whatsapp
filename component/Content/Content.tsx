import React, { FC } from 'react'
import { Blogs } from '../Blogs/Blogs'
import { Header } from '../Header'
import styles from '../../styles/content.module.scss'


export const Content:FC = () => {
  return (
    <div className={styles.content_container}>
      <Header/>
      <Blogs/>

    </div>
  )
}
