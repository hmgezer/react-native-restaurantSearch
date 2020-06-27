import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { SafeAreaView, FlatList, View, ImageBackground } from 'react-native'

import { CitiesItem, SearchBar } from '../components';
import styles from '../style'


const Cities = props => {

    const[cityList, setCityList] = useState([])
    const[originList, setOriginList] = useState([])

    useEffect(() => {
        fetchData()
    }, [])

    const fetchData = async() => {
        let responseCity = await axios.get("https://opentable.herokuapp.com/api/" + "cities")
        setCityList(responseCity.data.cities)
        setOriginList(responseCity.data.cities)
    }

    function selectCity(citiesName) {
        props.navigation.navigate("RestaurantList", {sendCitiesName: citiesName})
    }

    const cityRender = ({item}) =>{
        return(
            <CitiesItem cityData ={item}
                selectCity={() => selectCity(item)}
            />
        )
    }

    const searchCity = (cityText) => {
      
        let citiesFilter = originList.filter((item) => {
            const itemData = item.toUpperCase()
            const cityData = cityText.toUpperCase()

            return itemData.indexOf(cityData) > -1
        })

        setCityList(citiesFilter)
    }
    return(
        <SafeAreaView>
            <View>
                <SearchBar onsearchText={searchCity}/>
                    <FlatList 
                        keyExtractor= {(_,index) => index.toString()}
                        data={cityList}
                        renderItem={cityRender}
                    />
            </View>
        </SafeAreaView>
    )
}
export { Cities }