import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <img src='/n6.jpg' />
        <h1 className={styles.title}> Selamat datang di Catatanku</h1>

        <div className={styles.grid}>
          <div className={styles.card}>
            <a href="/posts/first-post">
              <h3>First post</h3>
            </a>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesettingindustry. Lorem Ipsum has ...
            </p>
          </div>
          <div className={styles.card}>
            <a href="/posts/second-post">
              <h3>Second post</h3>
            </a>
            <p> Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in ...
            </p>
          </div>
          <div className={styles.card}>
            <a href="/posts/third-post">
              <h3>Third Post</h3>
            </a>
            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque ...
            </p>
          </div>
          <div className={styles.card}>
            <a href="/posts/fourth-post">
              <h3>Fourth Post</h3>
            </a>
            <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium ...
            </p>
          </div>

        </div>
      </main>

      <footer className={styles.footer}>
        
      </footer>
    </div>
  );
}
