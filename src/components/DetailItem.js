import React from 'react';
import { View, Text, Image, TouchableOpacity, Linking, Dimensions} from 'react-native';
import styles from '../style'


const DetailItem = (props) => {
    
    return (
        <View >
            <View>
                <View>
                    <Image style={styles.rest.imageView}
                        source={{ uri: props.data.image_url }} />
                </View>
                <View style={styles.rest.group}>

                    <View style={styles.cityImage.button}>
                        <Text style={styles.cityImage.text}>{props.data.name}</Text>
                        <Text style={styles.cityImage.text}>{props.data.city}</Text> 
                        <Text style={styles.cityImage.text}>{props.data.address}</Text>                       
                        <Text style={styles.cityImage.text}> {props.data.phone}</Text>
                    </View>

                    <TouchableOpacity onPress={() => {
                                Linking.openURL(`${props.data.mobile_reserve_url}`)
                            }}>
                            <Text style={styles.rest.url}>Reservation</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

export { DetailItem }