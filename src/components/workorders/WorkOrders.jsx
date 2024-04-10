import { Fragment, useEffect, useState } from 'react';
import axios from 'axios';

import WorkOrder from './WorkOrder';
import PageHeader from '../ui/PageHeader';

import styles from "./WorkOrders.module.css";

// Skapar en funktionell komponent som heter WorkOrders....
const WorkOrders = () => {
  const url = 'http://localhost:5000/api/1/workorders'; // Definierar URL för arbetsordrar API...
  const [workorders, setWorkorders] = useState([]);

  // Använder useEffect-hook för att ladda arbetsordrar vid komponentens montering...
  useEffect(() => {
    loadWorkOrders();
  }, []);

  // Funktionen för att ladda arbetsordrarfrån API...
  const loadWorkOrders = async () => {
    const { data } = await axios.get(url);
    setWorkorders(data);
  };

  // Hanterar händelsen när en ny arbetsorder läggs till....
  const onAddWorkOrderHandler = async (e) => {
    e.preventDefault();
    const task = e.target.workorders.value;
    const newWorkOrder = { task };
    await axios.post(url, newWorkOrder);
    await loadWorkOrders();
    e.target.workorders.value = '';
  };

  // Hanterar händelsen när en arbetsorder tas bort...
  const onDeleteWorkOrderHandler = async (id) => {
    await axios.delete(`${url}/${id}`);
    await loadWorkOrders();
  };

  // Returnerar JSX-element som representerar arbetsorderkomponenten...
  return (
    <div className={styles.container}>
      <PageHeader headerText="Arbetsordrar" />
      <form onSubmit={onAddWorkOrderHandler} className={styles.form}>
        <input type='text' name='workorders' className={styles.input} />
        <button className={styles.button}>Lägg till order</button>
      </form>
      <ul className={styles.workorderList}>
        {workorders.map((workorder) => (
          <Fragment key={workorder.id}>
            <WorkOrder workorder={workorder} onDeleteWorkOrder={onDeleteWorkOrderHandler} />
          </Fragment>
        ))}
      </ul>
    </div>
  );
};

export default WorkOrders;

// [Fragment] : är ett React-element som tillåter oss att gruppera element utan att lägga till extra noder i DOM-trädet... <>..</>
// [useEffect] : för att hantera asynkrona API-anrop och uppdatera tillståndet i komponenten efter att data har hämtats från API:et..
// [useState] : för att hantera tillståndet
