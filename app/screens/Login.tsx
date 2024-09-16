import { Button, StyleSheet, TextInput, View } from 'react-native';
import React, { useState } from 'react';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { FIREBASE_AUTH } from "../../firebaseConfig";


export default function Login({navigation}:any) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const auth = FIREBASE_AUTH;

    const signUp = async() => {
        try {
            const createAccount = await createUserWithEmailAndPassword(auth, email, password);
            console.log(createAccount);
            alert('Account Created');
        } catch (error) {
            console.error(error);
            alert('Error creating account');
        }
    }

    const signIn = async() => {
        try {
            const user = await signInWithEmailAndPassword(auth, email, password);
            console.log(user);
            navigation.navigate('List');
            alert('Signed In');
        } catch (error) {
            console.error(error);
            alert('Error signing in');
        }
    }

    return (
        <View style={styles.container}>
            <TextInput
                placeholder="Email"
                style={styles.input}
                onChangeText={(text: string) => setEmail(text)}
                value={email}
            />
            <TextInput
                placeholder="Password"
                style={styles.input}
                onChangeText={(text: string) => setPassword(text)}
                value={password}
                textContentType="password"
                secureTextEntry
            />
            <Button
                onPress={() => signUp()}
                title="Create Account" 
            />
            <Button
                onPress={() => signIn()}
                title="Sign in" 
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 20,
        flexDirection: 'column',
        paddingVertical: 20,
    },
    input: {
        marginVertical: 4,
        height: 40,
        borderWidth: 1,
        borderRadius: 4,
        padding: 10,
        backgroundColor: "#fff",
    },
});
