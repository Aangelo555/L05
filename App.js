import React, {useState} from 'react';
import {View, Text, TextInput, Button, TouchableOpacity, ToastAndroid} from 'react-native';
import {Picker} from '@react-native-picker/picker';

// ===== CUSTOM COMPONENT: InputBox (label + TextInput) =====
const InputBox = (props) => {
    return (
        <View>
            <Text>{props.label}</Text>
            <TextInput style={{borderWidth: 1}} onChangeText={props.onChangeText}/>
        </View>
    );
};

const MyApp = () => {

    // ===== STATE =====
    const [pw, setPwd] = useState('');
    const [name, setName] = useState('');
    const [type, setType] = useState('Admin');

    return (
        <View style={{marginTop: 40}}>

            {/* ===== Ex1B: User Type Picker ===== */}
            <Text>User Type:</Text>
            <Picker selectedValue={type} onValueChange={(value) => setType(value)}>
                <Picker.Item label='Admin' value='Admin'/>
                <Picker.Item label='Guest' value='Guest'/>
            </Picker>

            {/* ===== Ex1G: User Name ===== */}
            <InputBox label="User Name:" onChangeText={(text) => setName(text)}/>

            {/* ===== Ex1A: Password ===== */}
            <InputBox label="Password:" onChangeText={(value) => setPwd(value)}/>

            {/* ===== Ex1C, 1D, 1F, 1G: LOG IN button with Toast ===== */}
            <Button onPress={() => ToastAndroid.show("Welcome " + type + " " + name, ToastAndroid.SHORT)} title="LOG IN"/>

            <Text></Text>

            {/* ===== Ex1E: Alternative LOG IN (checks password) ===== */}
            <TouchableOpacity onPress={() => {
                const correctPassword = '123';
                let mymessage = 'Error! Wrong Password!';
                if (pw === correctPassword) {
                    mymessage = 'Welcome ' + type + ' ' + name;
                }
                ToastAndroid.show(mymessage, ToastAndroid.SHORT);
            }}>
                <Text>Alternative LOG IN</Text>
            </TouchableOpacity>

        </View>
    );
};

export default MyApp;