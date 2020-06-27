import React from 'react';
import { View, TextInput } from 'react-native';
import styles from '../style'


const SearchBar = (props) => {

    return (
        <View style={styles.searchbar.container}>
            <TextInput style={styles.searchbar.text}
                onChangeText={props.onSearchText}
                placeholder="Search.."
            />
            
        </View>
    )
}
export { SearchBar }