import React from 'react';
import { Text, SafeAreaView, View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import { Cities, RestaurantList, RestDetail } from './pages'

const Stack = createStackNavigator()

const Router = () => {
    return(
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Cities">
                <Stack.Screen name="Cities" component={Cities} options={{headerShown:false, gestureEnabled:false}} />
                <Stack.Screen name="RestaurantList" component={RestaurantList} options={{headerShown:false, gestureEnabled:false}} />
                <Stack.Screen name="RestDetail" component={RestDetail} options={{headerShown:false, gestureEnabled:false}} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Router