import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getUser } from '../service/profileRequest';
import styles from "./Profile.module.css";
import Gadget from "../components/Gadget";
import calorie from "../img/calorie.PNG";
import glucide from "../img/glucide.PNG";
import lipide from "../img/lipide.PNG";
import proteine from "../img/proteine.PNG";
import CourbeActivity from "../components/CourbeActivity"; 
import CourbeAverageSession from "../components/CourbeAverageSession"; 
import CourbeRadar from "../components/CourbeRadar";
import Objectif from "../components/Objectif"; 

function ProfileRequest() {
  const { id } = useParams();
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const userData = await getUser(parseInt(id, 10));
        setUser(userData);

        if (!userData) {
          navigate('/error');
        }
      } catch (error) {
        console.error('Erreur lors de la récupération des données utilisateur', error);
        navigate('/error');
      }
    };

    fetchData();
  }, [id, navigate]);

  return (
    <div className={styles.info}>
      {user ? (
        <div>
          <div className={styles.bonjour}>Bonjour <div className={styles.firstname}>{user.info.firstName} </div> </div>
          <p> Félicitation! vous avez explosé vos objectifs hier </p>  <div className={styles.applaudissement}></div>
          
          {/* Intégration de la courbe dans la partie PartieCourbe */}
          <div className={styles.PartieCourbe}>
            <CourbeActivity data={user.activity} />
            <CourbeAverageSession data={user.averageSession} />
            <CourbeRadar data={user.performance} />
            <Objectif data={user.myScore} />
          </div>

          <div className={styles.gadgetContainer}>
            <Gadget imageSrc={calorie} measure={`${user.keyData.calorieCount} KCal`} unit="Calories" />
            <Gadget imageSrc={proteine}  measure={`${user.keyData.proteinCount} g`} unit="Proteines" />
            <Gadget imageSrc={glucide} measure={`${user.keyData.carbohydrateCount} g`} unit="Glucides" />
            <Gadget imageSrc={lipide} measure={`${user.keyData.lipidCount} g`} unit="Lipides" />
          </div>
        </div>
      ) : null}
    </div>
  );
}

export default ProfileRequest;
