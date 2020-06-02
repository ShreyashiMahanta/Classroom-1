import React,{Component} from 'react';
import { Header,Icon,Badge } from 'react-native-elements';
import { View, Text, StyeSheet ,Alert} from 'react-native';

export default class MyHeader extends Component{
    constructor(props){
        super(props);
    }
    BellIconWithBadge = ()=>{
        return(
            <View>
                <Icon
                name = "bell"
                type = "font-awesome"
                color = '#ffffff'
                size = {30}
                />
            </View>
        )
    }
    render(){
        return(
            <Header
             // leftComponent={<Icon name='bars' type='font-awesome' color='#FEFCFF'  onPress={() => this.props.navigation.toggleDrawer()}/>}
              centerComponent={{ text: this.props.title, style: { color: '#FEFCFF', fontSize:20,fontWeight:"bold", } }}
              rightComponent={<this.BellIconWithBadge {...this.props}/>}
              backgroundColor = "#211522"
            />
    
    )
    }
}
