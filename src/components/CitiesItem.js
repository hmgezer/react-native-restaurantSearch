import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';

import styles from '../style'

const CitiesItem = props => {
   
    return (
        <View style={styles.cityImage.button}>
            <TouchableOpacity style={styles.cityImage.text} onPress={props.selectCity}>
                <Text style={styles.cityImage.text}>{props.cityData}</Text>
            </TouchableOpacity>
        </View>
    )
}
export { CitiesItem }