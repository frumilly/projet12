import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getUser } from '../service/profileRequest';
import styles from "./Profile.module.css";
import Gadget from "../components/Gadget"
import calorie from "./img/calorie.PNG";
import glucide from "./img/glucide.PNG";
import lipide from "./img/lipide.PNG";
import proteine from "./img/proteine.PNG";
function ProfileRequest() {
  const { id } = useParams();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const userData = getUser(parseInt(id, 10));
    setUser(userData);
  }, [id]);

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
  ) : (
    <p>Utilisateur non trouvé</p>
  )}
</pre>

    </div>
  );
}

export default ProfileRequest;
