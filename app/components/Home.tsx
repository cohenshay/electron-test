import React from 'react';
import styles from './Home.css';
import RipplesIcon from '../assets/ripplesIcon.jpg';
import axios, { AxiosResponse, AxiosError } from 'axios';

export default function Home(): JSX.Element {
  return (
    <div className={styles.container} data-tid="container">
      <img src={RipplesIcon} alt={'ripples'} className={styles.ripplesIcon} onClick={checkNotificationHealth}/>
    </div>
  );
}

const checkNotificationHealth = async () => {
  const url = 'https://rpl-notifications-stag.azurewebsites.net/health';
  axios.get(url)
    .then((response: AxiosResponse) => {
      alert(`success with status code: ${response.status}`);
    })
    .catch((reason: AxiosError) => {
      alert(`failed with status code: ${reason.code}`);
      console.log(reason.message);
    });


};

