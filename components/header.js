import Link from 'next/link'

import styles from './header.module.scss'

const Header = ({ title }) => {
  return (
    <div className={styles.Header}>
      <div className={styles['title-area']}>
        <h1 className={styles["title"]}>{ title }</h1>
      </div>
      <div className={styles["nav-area"]}>
        <div className={styles["diagonal"]}>
        </div>
        <ul className={styles["nav-list"]}>
          <li><a href="/">Home</a></li>
          <li><Link href="/archives">Archives</Link></li>
          <li><Link href="/tags">Tags</Link></li>
        </ul>
      </div>
    </div>
  )
}

export default Header
