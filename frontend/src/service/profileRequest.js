import { USER_MAIN_DATA } from './mockData';
import { UserModel } from './UserModel';
const isMock = true; // Définissez cette variable sur true pour utiliser les données de mock

export function getUser(id) {
  if (isMock) {
    // En mode mock, recherchez l'utilisateur dans USER_MAIN_DATA en utilisant son ID
    const user = USER_MAIN_DATA.find((userData) => userData.id === id);

    if (user) {
      // Accédez à ses données
      const { userInfos, keyData } = user;
      const { todayScore, score } = user;

      // Créez un objet UserModel 
      const info = {
        id: user.id, // Ajoutez cette ligne pour initialiser la propriété id
        firstName: userInfos.firstName,
        lastName: userInfos.lastName,
        age: userInfos.age,
      };
  
      const activity = todayScore || score;

      const averageSession = null; 
      
      const performance = {
        calorieCount: keyData.calorieCount,
        proteinCount: keyData.proteinCount,
        carbohydrateCount: keyData.carbohydrateCount,
        lipidCount: keyData.lipidCount,
      };
      
      return new UserModel(info, activity, averageSession, performance);

    } else {
      // L'utilisateur avec cet ID n'a pas été trouvé
      return null;
    }
  } else {
    // En mode API (à implémenter ultérieurement)
    return null;
  }
}
