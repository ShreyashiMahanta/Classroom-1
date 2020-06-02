import React,{Component} from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity
} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';
import MyHeader from '../components/MyHeader';
import firebase from 'firebase';
import db from '../config';

export default class ClassScreen extends Component{
    constructor(){
        super();
        this.state = {
            student_name : "",
            class : "",
            section : "",
            roll_number : "" ,
            current_subject : "",
            current_teacher : ""
        }
    }

    render(){
        return(
            <View style = {styles.container}>
                <MyHeader
                title = "CLASS"
                />
                <Text style = {styles.header}>Subject : {this.state.current_subject} </Text>
                 <Text style = {styles.header}>Teacher : {this.state.current_teacher}</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container : {
        flex : 1,
        alignItems : 'center',
        backgroundColor : '#32867d'
    },
    header : {
        fontSize : RFValue(35),
        fontWeight : 'bold',
        color : '#ffffff',
        padding : 5
    }
})