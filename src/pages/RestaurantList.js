import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { SafeAreaView, FlatList, View } from 'react-native';

import { ListItem, SearchBar} from '../components/'
import styles from '../style'

const RestaurantList = props =>{
    
    const [restDetail, setRestDetail] = useState({})
    const [originList, setOriginList] = useState({})


    useEffect(() => {
        fetchData()
    }, [])

    const fetchData = async () => {
        let restsDetail = await axios.get("https://opentable.herokuapp.com/api/" + `restaurants?city=${props.route.params.sendCitiesName}`)
        setRestDetail(restsDetail.data.restaurants)
        setOriginList(restsDetail.data.restaurants)
    }

    const restSearch = (restText) => {
      
        let filteredRest = originList.filter(function(item) {
            const itemData = item.toUpperCase()
            const restData = restText.toUpperCase()

            return itemData.indexOf(restData) > -1
        })

        setOriginList(filteredRest)
    }

    function restSelect(restId) {

        props.navigation.navigate("RestDetail", { sendId: restId })
    }

    const restsRender = ({ item }) => {

        return (
            <ListItem
                restaurantData={item}
                restSelect={() => restSelect(item.id)}
            />
        )
    }
    return(
        <SafeAreaView style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <View>
                <SearchBar onSearchText={restSearch} />
                <FlatList 
                    keyExtractor={(_,index) => index.toString()}
                    data={restDetail}
                    renderItem={restsRender}
                />
            </View>
        </SafeAreaView>
    )
}
export { RestaurantList }