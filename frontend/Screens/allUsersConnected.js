import React, { useEffect, useState } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import { db } from '../Config/firebaseConfig';
import { collection, query, where, getDocs } from 'firebase/firestore';
import { getStorage, ref, getDownloadURL } from 'firebase/storage';

const AllUsersConnected = () => {
  const navigation = useNavigation();
  const [students, setStudents] = useState([]);
  const [studentCount, setStudentCount] = useState(0);

  useEffect(() => {
    const fetchStudents = async () => {
      try {
        const q = query(collection(db, 'students'), where('statusConnection', '==', 'online'));
        const querySnapshot = await getDocs(q);
        const studentsList = await Promise.all(querySnapshot.docs.map(async (doc) => {
          const studentData = doc.data();
          const storage = getStorage();
          const profileImageRef = ref(storage, `images/${doc.id}`);
          const profileImageUrl = await getDownloadURL(profileImageRef).catch(() => null);

          return { id: doc.id, ...studentData, profileImageUrl };
        }));
        setStudents(studentsList);
        setStudentCount(querySnapshot.size);
      } catch (error) {
        console.error("Error fetching students: ", error);
      }
    };

    fetchStudents();
  }, []);

  return (
    <SafeAreaView style={{ flex: 1, paddingTop: 20, backgroundColor: 'white' }}>
      <Text style={styles.countText}>Total Students: {studentCount}</Text>
      <ScrollView>
        <View style={styles.container1}>
          <View style={[styles.itemContainer, styles.border]}>
            <Text style={{ color: 'teal' }}>NOM DU PROFILE</Text>
          </View>
          <View style={[styles.itemContainer, styles.border, styles.textContainer]}>
            <Text style={{ color: 'teal' }}>FILIERE DE L'ETUDIANT</Text>
          </View>
        </View>

        {students.map(student => (
          <View key={student.id} style={styles.container}>
            <View style={[styles.itemContainer, styles.border]}>
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate('UsersGrade', {
                    profileImageUrl: student.profileImageUrl || null,
                    firstName: student.firstName,
                    lastName: student.lastName,
                    programChoice: student.programChoice
                  });
                }}
                style={styles.boutonprofile}
              >
                {student.profileImageUrl ? (
                  <Image source={{ uri: student.profileImageUrl }} style={styles.profile} />
                ) : (
                  <Image source={require('../Assets/checkStudents.jpg')} style={styles.profile} />
                )}
                <Text>{student.firstName} {student.lastName}</Text>
              </TouchableOpacity>
            </View>
            <View style={[styles.itemContainer, styles.border, styles.textContainer]}>
              <Text>{student.programChoice}</Text>
            </View>
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginHorizontal: 8,
  },
  itemContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
  },
  border: {
    borderWidth: 1,
    borderColor: '#CCCCCC',
  },
  textContainer: {
    paddingLeft: 5,
  },
  profile: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  boutonprofile: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    gap: 10,
    paddingLeft: 5,
  },
  container1: {
    flexDirection: 'row',
    marginHorizontal: 8,
    backgroundColor: '#D9D9D9'
  },
  countText: {
    fontSize: 18,
    fontWeight: 'bold',
    paddingLeft: 20,
    marginBottom: 10,
  },
});

export default AllUsersConnected;
