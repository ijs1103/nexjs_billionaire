import { useRouter } from 'next/router';
import { useEffect, useState } from "react";
import { getPersonById } from "./api";
import styles from './Detail.module.css';
import FinancialAsset from './components/FinancialAsset';
import numberToEng from "./libs";


export default function detail() {
  const router = useRouter();
  const [person, setPerson] = useState({});
  console.log(person);
  useEffect(() => {
    if(!router.isReady) return;
    async function fetchData() {
      const { data } = await getPersonById(router.query.id);
      setPerson(data);
    }
    fetchData();
  }, [router.isReady]);
  return (
    <div className={styles.container}>
      <h1 className={styles.name}>{person.name}</h1>
      <img src={person.squareImage} className={styles.squareImage} alt="name" />
      <p><strong>NetWorth</strong>: {numberToEng(person.netWorth)}</p>
      <p><strong>Country</strong>: {person.country}</p>
      <p><strong>Industry</strong>: {person.industries?.map((industry, idx) => {
          return (
            <span className={styles.industry} key={idx}>
              {industry}
            </span>
          );
        })}</p>
      <p>{person.bio?.map((sentence, idx) => {
        return (
          <span key={idx}>{sentence}</span>
        )
      })}</p>
      <h2>Financial Assets</h2>
      <div className={styles.flexContainer}>
        {person.financialAssets?.map(asset => {
          return <FinancialAsset {...asset} />
        })}
      </div>
    </div>
    
  );
}
