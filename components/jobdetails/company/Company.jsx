import React from 'react'
import { View, Text, Image } from 'react-native'

import styles from './company.style'
import { icons } from '../../../constants';
import { checkImageURL } from '../../../utils';

const Company = ({companyLogo, jobTitle, companyName, companyLocation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.logoBox}>
        <Image style={styles.logoImage} source={{
          uri: checkImageURL(companyLogo)
          ? companyLogo
          : "https://www.shutterstock.com/image-vector/job-logo-design-magnifying-glass-600w-715130101.jpg"
        }}
        />
      </View>
      <View styel={styles.jobTitleBox}>
        <Text style={styles.jobTitle}>{jobTitle}</Text>
      </View>

      <View style={styles.companyInfoBox}>
        <Text style={styles.companyName}>{companyName} / </Text>
        <View style={styles.locationBox}>
          <Image 
          source={icons.location}
          resizeMode='contain'
          style={styles.locationImage} />
          <Text style={styles.locationName}>{companyLocation}</Text>
        </View>
      </View>
    </View>
  )
}

export default Company