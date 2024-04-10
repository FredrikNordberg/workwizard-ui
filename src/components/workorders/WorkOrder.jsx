import styles from "./WorkOrder.module.css";

// Skapar en funktionell komponent som heter WorkOrder och somtar emot två props (workorder, onDeleteWorkOrder)...
const WorkOrder = ({ workorder, onDeleteWorkOrder }) => {
  // Skapar en funktion handleDeleteClick som anropar onDeleteWorkOrder och skickar workorder.id som argument...
  const handleDeleteClick = () => {
      onDeleteWorkOrder(workorder.id);
    };
  
    // Returnerar ett <li> element med nyckeln (key) workorder.id...
    // Innehåller workorder.task och en knapp med texten "Ta bort" som anropar handleDeleteClick vid klick...
    return (
      <li key={workorder.id} className={styles.WorkOrder}>
        {workorder.task}
        <button onClick={handleDeleteClick}>Ta bort</button>
      </li>
    );
  };
  
  export default WorkOrder;




