import {React} from 'react'
import { View, Text , TouchableOpacity, Image} from 'react-native'

import styles from './popularjobcard.style'

import { checkImageURL } from '../../../../utils';

const PopularJobCard = ({item, selectedJob, handleCardPress}) => {
  return (
    <TouchableOpacity
      style={styles.container(selectedJob, item)}
      onPress={() => handleCardPress(item)}
    >
      <TouchableOpacity style={styles.logoContainer(selectedJob, item.job_id)}>
        <Image
        // source={{uri: item.employer_logo}}
        source={{uri: checkImageURL(item.employer_logo) 
        ? item.employer_logo : "https://www.shutterstock.com/image-vector/job-logo-design-magnifying-glass-600w-715130101.jpg"}}
        resizeMode='contain'
        style={styles.logoImage}/>
      </TouchableOpacity>
      <Text style={styles.companyName} numberOfLines={1}>{item.employer_name}</Text>
      <View style={styles.infoContainer}>
        <Text styel={styles.jobName(selectedJob, item)} numberOfLines={1}>{item.job_title}</Text>
        <Text styel={styles.location}>{item.job_country}</Text>
      </View>
    </TouchableOpacity>
  )
}

export default PopularJobCard