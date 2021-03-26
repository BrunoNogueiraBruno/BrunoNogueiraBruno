import styles from '../styles/components/Header.module.css';

export default function Header() {
  return (
    <header className={styles.headerContainer}>
      <div>
        <h1>BRUNO LEONARDO NOGUEIRA</h1>
        <h2>{'<FrontEndDev />'}</h2>
      </div>
    </header>
  )
}
