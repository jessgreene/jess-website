import Image from "next/image";
import styles from "./page.module.css";
// import { FaLinkedin } from "react-icons/fa";

export default function Home() {
  return (
    <div className={styles.page}>
      <div style={{ display: "flex", alignItems: "center", marginBottom: "24px" }}>
        <Image
          src="/pic.jpg" 
          alt="Jess Greene"
          width={130}
          height={130}
          style={{
            borderRadius: "50%",
            objectFit: "cover",
            display: "block",
            marginRight: "20px",
          }}
        />
        <h1 className={styles.heading}>Jess Greene</h1>
      </div>
      
      <main className={styles.main}>
        <div className={styles.ctas}>
          <a
            className={styles.primary}
            href="https://www.linkedin.com/in/jessica-greene-396a9b2ba/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/linkedin.svg"
              alt="LinkedIn"
              width={20}
              height={20}
              style={{ marginRight: 0, verticalAlign: "middle" }}
            />
          </a>
          <a
            href="https://github.com/jessgreene"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.primary}
          >
            <img
              src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/github.svg"
              alt="GitHub"
              width={20}
              height={20}
              style={{ marginRight: 0, verticalAlign: "middle" }}
            />
          </a>
          <a
            href="https://github.com/jessgreene"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.primary}
          >
            <Image
            aria-hidden
            src="/file.svg"
            alt="File icon"
            width={16}
            height={16}
          />
          </a>

        </div>
        <h2 className={styles.title}>About Me</h2>
        {/* <p className={styles.bordered}> */}
        <p style={{ border: "1px solid #ccc", padding: "16px", borderRadius: "25px", fontSize: "17px" }}>
          I'm a third-year Computer Science student at the University of Birmingham, with a keen interest in software development and a passion for creating innovative solutions to help others.
        </p>

        <h2 className={styles.title}>Education</h2>
        <p style={{ border: "1px solid #ccc", padding: "16px", borderRadius: "25px", fontSize: "17px" }}>
          <p> <strong>University of Birmingham</strong></p>
          <p> BSc Computer Science, Sep 2023 - Present</p>
          <br />
          <p><strong>Year 1 Modules</strong></p>
          <p> Data Structures and Algorithms , Aritifical Intelligence I, Mathematical and Logical Foundations, Theories of Computation, Full-Stack Application Development, Object Oriented Programming</p>
          <br />
          <p><strong>Year 2 Modules</strong> </p>
          <p> Software Engineering and Professional Practice, Artificial Intelligence II, Team Project, Security and Networks, Operating Systems and Systems Programming, Functional Programming</p>
        </p>

        <h2 className={styles.title}>Projects</h2>

        <h2 className={styles.title}>Technologies and Tools</h2>
        <div className={styles.tools}>
          <a
            className={styles.primary}
          >
            GitHub
          </a>

          <a
            className={styles.primary}
          >
            Git
          </a>
        </div>

      </main>
      <footer className={styles.footer}>
        <a
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/file.svg"
            alt="File icon"
            width={16}
            height={16}
          />
          Learn
        </a>
        <a
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/window.svg"
            alt="Window icon"
            width={16}
            height={16}
          />
          Examples
        </a>
        <a
          href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          Go to nextjs.org →
        </a>
      </footer>
    </div>
  );
}
