import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom'; // Importez useNavigate depuis react-router-dom
import { getUser } from '../service/profileRequest';
import styles from "./Profile.module.css";
import Gadget from "../components/Gadget";
import calorie from "../img/calorie.PNG";
import glucide from "../img/glucide.PNG";
import lipide from "../img/lipide.PNG";
import proteine from "../img/proteine.PNG";

function ProfileRequest() {
  const { id } = useParams();
  const [user, setUser] = useState(null);
  const navigate = useNavigate(); // Utilisez useNavigate pour obtenir la fonction de navigation

  useEffect(() => {
    const userData = getUser(parseInt(id, 10));
    setUser(userData);

    // Vérifiez si l'utilisateur n'est pas trouvé, puis effectuez la redirection
    if (!userData) {
      navigate('/error'); // Utilisez la fonction navigate pour rediriger vers '/error'
    }
  }, [id, navigate]);

  return (
    <div className={styles.info}>
      <pre>
        {user ? (
          <div>
            <div className={styles.bonjour}>Bonjour <div className={styles.firstname}>{user.info.firstName} </div> </div>
            <p> Félicitation! vous avez explosé vos objectifs hier</p>
            <div className={styles.gadgetContainer}>
              <Gadget imageSrc={calorie} measure={`${user.performance.calorieCount} KCal`} unit="Calories" />
              <Gadget imageSrc={proteine}  measure={`${user.performance.proteinCount} g`} unit="Proteines" />
              <Gadget imageSrc={glucide} measure={`${user.performance.carbohydrateCount} g`} unit="Glucides" />
              <Gadget imageSrc={lipide} measure={`${user.performance.lipidCount} g`} unit="Lipides" />
            </div>
          </div>
        ) : null}
      </pre>
    </div>
  );
}

export default ProfileRequest;
