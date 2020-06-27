import React from 'react';
import { View, Text, Image,TouchableOpacity } from 'react-native';

import styles from '../style'

const ListItem = (props) => {
    
    return (
        <View>
            
            <View style={styles.cityImage.button}>
                <Text style={styles.cityImage.text}>{props.restaurantData.name}</Text>
                <TouchableOpacity style={styles.rest.imageView} onPress={props.restSelect}>
                    <Image style={styles.rest.imageView} source={{ uri: props.restaurantData.image_url }} />
                </TouchableOpacity>
                
            </View>
        </View>

    )
}

export { ListItem }