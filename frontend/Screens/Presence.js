import { db } from '../Config/firebaseConfig';
import { doc, setDoc } from 'firebase/firestore';

const setUserStatus = async (userId, status) => {
  try {
    const userDocRef = doc(db, 'users', userId);
    await setDoc(userDocRef, { status: status }, { merge: true }); // Update 'status' field
    console.log(`Status of ${userId} set to ${status}`);
  } catch (error) {
    console.error('Error setting user status:', error);
  }
};

const onUserConnect = async (userId) => {
  await setUserStatus(userId, 'online');
  console.log(`User ${userId} connected`);
};

const onUserDisconnect = async (userId) => {
  await setUserStatus(userId, 'offline');
  console.log(`User ${userId} disconnected`);
};

export { setUserStatus, onUserConnect, onUserDisconnect };
