import { CONTACT_NUMBER, EMAIL, GITHUB, LINKEDIN } from "@/data/constants.data";
import styles from "./style.module.scss";
import { downloadPdf } from "@/data/utils";

export default function index() {
  return (
    <div className={styles.footer}>
      <div className={styles.header}>
        <p>Get in touch</p>
      </div>
      <div className={styles.list}>
        <a onClick={downloadPdf}>Resume</a>
        <a href={`mailto:${EMAIL}`}>Email</a>
        <a href={`tel:${CONTACT_NUMBER.replace(" ", "")}`}>Contact</a>
        <a href={LINKEDIN} target="_blank">
          Linkedin
        </a>
        <a href={GITHUB} target="_blank">
          Github
        </a>
      </div>
    </div>
  );
}
