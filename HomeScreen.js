import React,{Component} from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
    Image
} from 'react-native';
import MyHeader from '../components/MyHeader';
import {RFValue} from 'react-native-responsive-fontsize';
import firebase from 'firebase';
import db from '../config';

export default class HomeScreen extends Component{
    constructor(){
        super();
        this.state = {
            student_name : "",
            class : "",
            section : "",
            roll_number : ""
        }
    }
    render(){
        return(
            <View style = {styles.view}>
                <MyHeader
                title = "HOME"
                />
                <Image
               source = {
                require("../assets/online_edu.png")
            }
            style = {{
                width : 280,
                height : 280,
                alignSelf : 'center',
                borderRadius : 5
            }}
                />
                <Text style = {styles.text}>HI {this.state.student_name}</Text>
                <Text style = {styles.text}>VIEW YOUR SCHEDULE FOR TODAY</Text>
                <TouchableOpacity style = {styles.button}>
                    <Text style = {styles.buttonText}>VIEW</Text>
                    </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    view : {
        flex : 1,
        alignItems : 'center',
        backgroundColor : '#543855',
        justifyContent : 'center'
    },
    text : {
        fontSize : RFValue(25),
        fontWeight : '300',
        color : '#f8bfc4',
        margin : 3
    },
    button : {
        backgroundColor : '#FEFCFF',
        borderRadius : 8,
        width : RFValue(200),
        height : 50,
        justifyContent: "center",
         alignItems: "center",
         shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.44,
    shadowRadius: 10.32,
    elevation: 16,
    },
    buttonText : {
        fontSize : RFValue(20),
        fontWeight : '300',
        color : '#313E61',
        margin : 3
    },
})