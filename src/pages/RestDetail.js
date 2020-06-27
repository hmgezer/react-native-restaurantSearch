import React, { useEffect, useState } from 'react'
import { SafeAreaView, View } from 'react-native'
import axios from 'axios'

import { DetailItem } from '../components/'
import styles from '../style'

const RestDetail = (props) => {

    const [detail, setDetail] = useState([]);

    useEffect(() => {
        fetchDetails()
    }, [])


    const fetchDetails = async () => {
        let restDetail = await axios.get("https://opentable.herokuapp.com/api/" + `restaurants/${props.route.params.sendId}`)
        setDetail(restDetail.data)
      
    }

    
    return (
        <SafeAreaView style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
               <DetailItem data={detail}/>
            </View>
        </SafeAreaView>

    )
}

export { RestDetail }