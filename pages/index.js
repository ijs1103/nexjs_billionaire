import { getAll } from "./api";
import { useEffect, useState } from "react";
import Card from "./components/Card";
import styles from "./Home.module.css";
export default function IndexPage() {
  const [people, setPeople] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const { data } = await getAll();
      setPeople(data.slice(0, 10));
    }
    fetchData();
  }, []);
  return (
    <>
      <h1 className={styles.heading}>Home</h1>
      <div className={styles.gridContainer}>
        {people.map((person) => {
          return <Card key={person.id} {...person} />;
        })}
      </div>
    </>
  );
}
