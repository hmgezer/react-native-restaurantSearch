import { StyleSheet, Dimensions } from 'react-native'

const styles = {
    cityImage: StyleSheet.create({
        button:{
            margin: 10,
            padding: 5,
            borderRadius: 15,
            backgroundColor: "#008e76"
        },
        text:{
            color: "#F5F5F5",
            alignSelf:"center",

        },
    }),
    searchbar: StyleSheet.create({
        container:{
            backgroundColor:"#EEEEEE",
            borderRadius:15,
            margin: 8
        },
        text:{
            color:"black"
        }
    }),
    
    rest: StyleSheet.create({
        container:{
            flex: 1,
            backgroundColor: "#EFF6EE",
            padding: 8,
            margin: 5,
            borderRadius: 10,
            width: Dimensions.get("window").width / 1.2,
            height: 35,
            elevation: 3,
            
        },
        text: {
            backgroundColor: "#EFF6EE",
            padding: 8,
            margin: 5,
            borderRadius: 10,
            width: Dimensions.get("window").width / 1.2,
            height: 35,
            elevation: 3,
            flex: 1,
        },
        imageView: {
            width: Dimensions.get('window').width / 1.2,
            height: Dimensions.get('window').height / 3,
            alignSelf: 'center',
            borderRadius: 15
        },
        imageStyle: {
            flex: 1,
            margin:8,
            borderRadius: 15,
            width: Dimensions.get('window').width / 2.8,
            height: Dimensions.get('window').height / 3.2,
            alignItems: 'center'
        },
        group: {
            flexDirection:"column",
            position:"relative"
        },
        url: {
            backgroundColor:"#62757f",
            borderRadius: 15,
            margin: 5,
            padding: 8,
            width: Dimensions.get("window").width / 4,
            color: "white",
            alignSelf:"center",

        }
    })
}
export default styles