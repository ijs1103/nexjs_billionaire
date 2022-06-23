import styles from "./Card.module.css";
import numberToEng from "../libs";
import Link from "next/link";

export default function Card({ ...person }) {
  return (
    <Link href={`/${person.id}`}>
      <a className={styles.gridItem}>
        <img className={styles.squareImage} src={person.squareImage} />
        <h2 className={styles.name}>{person.name}</h2>
        <span className={styles.newWorth}>
          {numberToEng(person.netWorth)} /{" "}
        </span>
        {person.industries.map((industry, idx) => {
          return (
            <span className={styles.industry} key={idx}>
              {industry}
            </span>
          );
        })}
      </a>
    </Link>
  );
}
