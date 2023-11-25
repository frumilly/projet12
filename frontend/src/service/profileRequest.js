// Votre fichier contenant la fonction getUser
import { USER_MAIN_DATA, USER_ACTIVITY, USER_AVERAGE_SESSIONS, USER_PERFORMANCE } from './mockData';
import { UserModel } from './UserModel';
import { translatePerformanceKind } from './Traduction'; // Importez la fonction de traduction
import axios from 'axios';
const apiUrl = 'http://localhost:3000/user';
const isMock = false;

let userData;
let activity;
let averageSession;
let performance;

export async function getUser(id) {
  if (isMock) {
    userData = USER_MAIN_DATA.find((data) => data.id === id);
    // Utilisez les données du mockData pour averageSession, performance et activity
    averageSession = USER_AVERAGE_SESSIONS.find((data) => data.userId === id)?.sessions || [];
    performance = USER_PERFORMANCE.find((data) => data.userId === id)?.data || [];

    // Traduction
    performance = performance.map(item => ({
      ...item,
      kind: translatePerformanceKind(item.kind),
    }));

    // Données à traduire
    activity = USER_ACTIVITY.find((data) => data.userId === id)?.sessions || [];
    //return new UserModel(info, myScore, myKeyData, activity, averageSession, performance);
    // Dans cette partie, il n'y aura que la récupération des données.
  } else {
    // En mode API (à implémenter ultérieurement)
    // return null;
    try {
      const userResponse = await axios.get(`${apiUrl}/${id}`);
      userData = userResponse.data.data;
      //console.log("Données utilisateur récupérées avec succès", userData.data.userInfos.firstName);
      activity = USER_ACTIVITY.find((data) => data.userId === id)?.sessions || [];
      
      averageSession = USER_AVERAGE_SESSIONS.find((data) => data.userId === id)?.sessions || [];
      performance = USER_PERFORMANCE.find((data) => data.userId === id)?.data || [];
      
      // Traduction
      performance = performance.map(item => ({
        ...item,
        kind: translatePerformanceKind(item.kind),
      }));
    
    } catch (error) {
      console.error('Erreur lors de la récupération des données utilisateur', error);
      return null;
    }
  }
// On destructure les variables

  const { userInfos, keyData } = userData;
  const { todayScore, score } = userData;

  const info = {
    id: userData.id,
    firstName: userInfos.firstName,
    lastName: userInfos.lastName,
    age: userInfos.age,
  };
 
  const myKeyData = {
    calorieCount: keyData.calorieCount,
    proteinCount: keyData.proteinCount,
    carbohydrateCount: keyData.carbohydrateCount,
    lipidCount: keyData.lipidCount,
  };

  const myScore = todayScore || score;

  
  return new UserModel(info, myScore, myKeyData, activity, averageSession, performance);
}
