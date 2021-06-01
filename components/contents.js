import styles from './contents.module.scss'

const Contents = ({ children }) => {
  return (
    <div className="Contents">
      <div className={styles.wrapper}>
        { children }
      </div>
    </div>
  )
}

export default Contents
