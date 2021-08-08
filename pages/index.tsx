import styles from '../styles/Home.module.css'
import styled, { css } from 'styled-components'

export default function Home() {
  const Button = styled.button`
    border-radius: 3px;
    border: 2px solid palevioletred;
    color: palevioletred;
    margin: 0.5em 1em;
    padding: 0.25em 1em;

    ${props =>
      props.primary &&
      css`
        background: palevioletred;
        color: white;
      `}
  `
  return (
    <div className={styles.container + ' p-8'}>
      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>

        <div className={styles.grid}>
          <a href="https://nextjs.org/docs" className={styles.card}>
            <h2>Empty Project</h2>
            <Button>Normal Button</Button>
            <Button primary>Primary Button</Button>
          </a>
        </div>
      </main>
    </div>
  )
}
