import { router } from 'expo-router';
import React from 'react';
import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function Input() {
    return (
        <View style={styles.container}>
            <Image source={require("../assets/images/hp.png")} style={styles.imghead} />
            <Text style={styles.text}>Login to your Account</Text>
            <TextInput placeholder="Email" style={styles.input}></TextInput>
            <TextInput placeholder="Password" style={styles.input2}></TextInput>
            <Text style={styles.text1}>Forgot Password?</Text>
            <TouchableOpacity style={styles.btn1}>
                <Text style={styles.textbtn}>Sing In</Text>
            </TouchableOpacity>
            {/* ขีดเส้น */}
            <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 30 }}>
                <View style={{ flex: 1, height: 1, backgroundColor: 'gray' }} />
                <View style={{ flex: 1, height: 1, backgroundColor: 'gray' }} />
            </View>
            <Text style={{ marginTop: 20, textAlign: 'center' }}>Or sing in with</Text>
            <View style={styles.logo}>
                <Image source={require("../assets/images/google.png")} style={styles.imglog} />
                <Image source={require("../assets/images/facebook.png")} style={styles.imglog} />
                <Image source={require("../assets/images/twitter.png")} style={styles.imglog} />
            </View>
            <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 90, justifyContent: 'center' }}>
                <Text style={{ textAlign: 'center' }}>Don't have an account? </Text>
                <TouchableOpacity onPress={() => router.push("/login")}>
                    <Text style={{ color: '#390050', fontWeight: 'bold' }}>Sing Up</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    logo: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 20,
    },
    imglog: {
        //ทำให้รูปเป็นวงกลมมีเงา
        width: 50,
        height: 50,
        borderRadius: 50,
        borderWidth: 1,
        backgroundColor: '#ffffff',
        borderColor: '#ffffff',
        marginHorizontal: 5,
        //กรอบเงาด้านนอกรูป
        shadowColor: '#000000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,

    },
    textbtn: {
        color: '#ffffff',
        fontSize: 20,
        fontWeight: 'bold',
    },
    btn1: {
        backgroundColor: '#390050',
        height: 50,
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20,
    },
    text1: {
        // ให้ตัวอักษรอยู่ด้านขวา
        textAlign: 'right',
        marginTop: 10,
        fontSize: 15,
    },
    input2: {
        height: 50,
        borderRadius: 5,
        paddingHorizontal: 10,
        marginTop: 40,
        backgroundColor: '#e7e7e788',
    },
    input: {
        height: 50,
        borderRadius: 5,
        paddingHorizontal: 10,
        marginTop: 10,
        backgroundColor: '#e7e7e788',
    },
    text: {
        position: 'absolute',
        top: 230,
        left: 30,
        fontSize: 25,
        fontWeight: 'bold',
        color: '#000000',
    },
    imghead: {
        alignSelf: 'center',
        marginTop: 40,
        width: 250,
        height: 250,
    },
    container: {
        paddingHorizontal: 30,
        flex: 1,
        backgroundColor: '#ffffff',
    }
})