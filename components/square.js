import React from 'react';
import { Button, StyleSheet, Dimensions, Pressable, Image } from "react-native";

const windowWidth = Dimensions.get('window').width;
function Square(props){
    
    if(String(props.value) === "X"){
        return(
            <Pressable style = {styles.cell_button} onPress={props.onPress}>
                <Image source={require('../cross.png')} style={styles.icon} />
            </Pressable>
        )
    }else if(String(props.value) === "O"){
        return(
            <Pressable style = {styles.cell_button} onPress={props.onPress}>
                <Image source={require('../zero.png')} style={styles.icon} />
            </Pressable>
        )
    }else{
        return(
            <Pressable style = {styles.cell_button}  onPress={props.onPress}>
            
            </Pressable>
        )
    }
}
export default Square;

const styles = StyleSheet.create({

    cell_button: {
        width: windowWidth / 3.2,
        height: windowWidth / 3.2,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderRightWidth: 4,
        borderLeftWidth: 4,
        borderTopWidth: 4,
        borderBottomWidth: 4
    },
    icon: {
    height: 52,
    width: 52
    },
})