import { USER_MAIN_DATA, USER_ACTIVITY, USER_AVERAGE_SESSIONS, USER_PERFORMANCE } from './mockData';
import { UserModel } from './UserModel';

const isMock = true;

export function getUser(id) {
  if (isMock) {
    const userData = USER_MAIN_DATA.find((data) => data.id === id);

    if (userData) {
      const { userInfos, keyData } = userData;
      const { todayScore, score } = userData;

      const info = {
        id: userData.id,
        firstName: userInfos.firstName,
        lastName: userInfos.lastName,
        age: userInfos.age,
      };

      const myScore = todayScore || score;

      // Utilisez données du mockData pour averageSession, performance et activity
      const averageSession = USER_AVERAGE_SESSIONS.find((data) => data.userId === id)?.sessions || [];
      const performance = USER_PERFORMANCE.find((data) => data.userId === id)?.data || [];
      const activity = USER_ACTIVITY.find((data) => data.userId === id)?.sessions || [];
    

      const myKeyData = {
        calorieCount: keyData.calorieCount,
        proteinCount: keyData.proteinCount,
        carbohydrateCount: keyData.carbohydrateCount,
        lipidCount: keyData.lipidCount,
      };

      return new UserModel(info, myScore, myKeyData, activity, averageSession, performance);
    } else {
      return null;
    }
  } else {
    // En mode API (à implémenter ultérieurement)
    return null;
  }
}
