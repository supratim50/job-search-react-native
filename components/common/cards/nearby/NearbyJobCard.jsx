import {React} from 'react'
import { View, Text , TouchableOpacity, Image} from 'react-native'
import { useRouter } from 'expo-router';

import styles from './nearbyjobcard.style'

import { checkImageURL } from '../../../../utils';

const NearbyJobCard = ({job, handleNavigator}) => {

  const router = useRouter();

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={handleNavigator}
    >
      <TouchableOpacity style={styles.logoContainer}>
        <Image
        // source={{uri: item.employer_logo}}
        source={{uri: checkImageURL(job.employer_logo) 
        ? job.employer_logo : "https://www.shutterstock.com/image-vector/job-logo-design-magnifying-glass-600w-715130101.jpg"}}
        resizeMode='contain'
        style={styles.logoImage}/>
      </TouchableOpacity>
      <View style={styles.textContainer}>
        <Text styel={styles.jobName} numberOfLines={1}>{job.job_title}</Text>
        <Text styel={styles.jobType}>{job.job_employment_type}</Text>
      </View>
    </TouchableOpacity>
  )
}

export default NearbyJobCard