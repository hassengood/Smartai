import React from 'react'

import { GithubOutlined } from '@ant-design/icons'
import { Layout, Space, Typography } from 'antd'

import styles from './index.module.less'

const { Link } = Typography

const { Header } = Layout

const HeaderBar = () => {
  return (
    <>
      <Header className={styles.header}>
        <div className={styles.logoBar}>
          <Link href="/">
            <img alt="logo" src="/cropped-Strtly512Artboard_1.png" />
            <h1>Smart AI - Powered by Startly Software</h1>
          </Link>
        </div>
      </Header>
      <div className={styles.vacancy} />
    </>
  )
}

export default HeaderBar
