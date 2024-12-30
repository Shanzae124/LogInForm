import React, {useState,useContext} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Alert,
  StatusBar,
  Dimensions,
ActivityIndicator} from 'react-native';

import CustomHeader from '../../components/Header';
import { styles } from '../../components/Style';

const {width, height} = Dimensions.get('window');

export const LogInForm = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#f4effa" />
      <CustomHeader
        title=""
        titleStyle={{
          flexShrink: 1,
          fontSize: height * 0.05,
          paddingTop: height * 0.2,
        }}
      />
       <View style={styles.formContainer}>
          <TextInput
            placeholder="Email"
            value={email}
            onChangeText={text => setEmail(text)}
            style={styles.text}
            placeholderTextColor="#FFF"
          />
          <TextInput
            placeholder="Password"
            value={password}
            onChangeText={text => setPassword(text)}
            secureTextEntry={true}
            style={styles.text}
            placeholderTextColor="#FFF"
          />
          {error ? <Text style={styles.errorText}>{error}</Text> : null}
          <View style={styles.createContainer}>
            <Text style={[styles.createText, {color: '#532b88'}]}>
              Don't Have Account?{' '}
            </Text>
            <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
              <Text style={[styles.createText, {color: '#9c89b8'}]}>
                Create an Account
              </Text>
            </TouchableOpacity>
          </View>
          {isLoading ? (
                  <ActivityIndicator size="large" color="#0000ff" />
                ) : (
          <TouchableOpacity style={[styles.button]} onPress={()=>{}}>
            <Text style={styles.buttonText}>Sign In</Text>
          </TouchableOpacity>
                )
                }
            <TouchableOpacity  onPress={()=>{}}>
              <Text style={[styles.createText, {color: '#9c89b8',textAlign:'center'}]}>
                Forgot Password
              </Text>
            </TouchableOpacity>
          
        </View>
      
        </View>
      )}
    
  
