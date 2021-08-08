import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>

        <div className={styles.grid}>
          <a href="https://nextjs.org/docs" className={styles.card}>
            <h2>登入</h2>
            <p>Find in-depth information about Next.js features and API.</p>
          </a>
        </div>
      </main>
    </div>
  )
}
