import React from 'react';
import Layout from '@theme/Layout';
import styles from './index.module.css';
import Link from '@docusaurus/Link';
import avatar from '../assets/zhuofu_avatar.jpg'; // 确保图片路径正确

export default function Home() {
  return (
    <Layout
      title="Chen's Homepage"
      description="Welcome to my personal study and interest blog">
      <main className={styles.mainContainer}>
        {/* Hero Section */}
        <section className={styles.hero}>
          <img
            src={avatar}
            alt="Zhuofu Chen Avatar"
            className={styles.avatar}
          />
          <h1>👋 Hi, I'm Zhuofu Chen</h1>
          <p>
            Currently studying at the <strong>University of Edinburgh</strong>.<br />
            Welcome to my personal homepage where I share my interests, university course notes, and external reading analysis.
          </p>
          <div className={styles.heroButtons}>
            <Link className={styles.button} to="/docs/University_courses/intro">
              University Course Notes
            </Link>
            <Link className={styles.button} to="/docs/External_reading/intro">
              External Reading Analysis
            </Link>
          </div>
        </section>

        {/* Interests Section */}
        <section className={styles.interests}>
          <h2>My Interests</h2>
          <ul>
            <li>Artificial Intelligence / LLMs</li>
            <li>Programming & Algorithms</li>
            <li>Photography & Travel</li>
            <li>Research Papers & Technical Analysis</li>
          </ul>
        </section>

        {/* About Me Section */}
        <section className={styles.aboutMe}>
          <h2>About Me</h2>
          <p>
            I enjoy exploring new technologies, documenting my learning process, and connecting with like-minded people.<br />
            I hope you find interesting content here and feel free to share your thoughts or reach out!
          </p>
        </section>
      </main>
    </Layout>
  );
}



