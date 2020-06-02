import React,{Component} from 'react';
import {
    View,
    Text,
    TextInput,
    ScrollView,
    TouchableOpacity,
    StyleSheet,
    Image
} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';
import firebase from 'firebase';
import db from '../config';
import MyHeader from '../components/MyHeader';

export default class StudentSignUpScreen extends Component{
    constructor(){
        super();
    this.state = {
      emailId: "",
      password: "",
      student_name: "",
      class : "",
      section : "",
      roll_no: "",
      confirmPassword: "",
      school_name : ""
      
    };
    }
    render(){
        return(
            <ScrollView style={styles.scrollview}>
            <View style = {styles.view}>
                <MyHeader
                title = "SIGN UP"
                />
                <Image
               source = {
                require("../assets/signUp.png")
            }
            style = {{
                width : 280,
                height : 280,
                alignSelf : 'center',
                borderRadius : 5,
                margin : 20
            }}
                />
                <Text style = {styles.label}>Name</Text>
               <TextInput
               style={styles.formTextInput}
               placeholder={"Your name..."}
               maxLength={10}
               onChangeText={(text) => {
                 this.setState({
                   student_name: text,
                 });
               }}
               value={this.state.student_name}
               />
               <Text style = {styles.label}>School</Text>
               <TextInput
               style={styles.formTextInput}
               placeholder={"School..."}
               onChangeText={(text) => {
                 this.setState({
                   school_name: text,
                 });
               }}
               value={this.state.school_name}
               />
               <Text style = {styles.label}>Class</Text>
               <TextInput
               style={styles.formTextInput}
               placeholder={"Class"}
               keyboardType={"numeric"}
               onChangeText={(text) => {
                 this.setState({
                   class: text,
                 });
               }}
               value={this.state.class}
               />
               <Text style = {styles.label}>Section</Text>
               <TextInput
               style={styles.formTextInput}
               placeholder={"Section"}
               maxLength={10}
               onChangeText={(text) => {
                 this.setState({
                   section: text,
                 });
               }}
               value={this.state.section}
               />
               <Text style = {styles.label}>Roll number</Text>
               <TextInput
               style={styles.formTextInput}
               placeholder={"Roll number"}
               maxLength={10}
               onChangeText={(text) => {
                 this.setState({
                   roll_no: text,
                 });
               }}
               value={this.state.roll_no}
               />
               <Text style={styles.label}> Password </Text>
                  <TextInput
                    style={styles.formTextInput}
                    placeholder={"Password"}
                    secureTextEntry={true}
                    onChangeText={(text) => {
                      this.setState({
                        password: text,
                      });
                    }}
                  />

                  <Text style={styles.label}>Confirm Password</Text>
                  <TextInput
                    style={styles.formTextInput}
                    placeholder={"Confrim Password"}
                    secureTextEntry={true}
                    onChangeText={(text) => {
                      this.setState({
                        confirmPassword: text,
                      });
                    }}
                  />
                  <TouchableOpacity style = {styles.button}><Text style = {styles.buttonText}>SIGN UP</Text></TouchableOpacity>

            </View>
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    view : {
        flex : 1,
        alignItems : 'center',
        backgroundColor : '#FF8882'
    },
    label : {
        fontSize:RFValue(13),
        color:"#543855",
        fontWeight:'bold',
        paddingLeft:RFValue(10),
        marginLeft:RFValue(20) 
    },
    formTextInput : {
        width: "90%",
        height: RFValue(45),
        padding: RFValue(10),
        borderWidth:3,
        borderRadius:4,
        borderColor:'#07040A',
        paddingBottom:RFValue(10),
        marginLeft:RFValue(20),
        marginBottom:RFValue(14)
    },
    button : {
        backgroundColor : '#4297A0',
        borderRadius : 10,
        width : RFValue(200),
        height : 50,
        justifyContent: "center",
         alignItems: "center",
         shadowColor: "#F4EAE6",
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.44,
    shadowRadius: 10.32,
    elevation: 16,
    },
    buttonText : {
        fontSize:RFValue(20),
        color:"#F4EAE6",
        fontWeight:'300',
        paddingLeft:RFValue(10),
        marginLeft:RFValue(20)  
    },
    scrollview : {
        flex: 1,
        backgroundColor: "#fff"
    }

})
