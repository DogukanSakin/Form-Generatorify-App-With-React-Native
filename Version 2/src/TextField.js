import React from 'react';
import {TextInput} from 'react-native';
import {useController} from 'react-hook-form';
import styles from './styles';
const TextField = ({control, name, type, placeHolder}) => {
  const {field} = useController({control, name});
  // this field contain
  return (
    <TextInput
      {...field}
      secureTextEntry={type === 'Password' ? true : false}
      multiline={type === 'TextArea' ? true : false}
      placeholder={placeHolder}
      placeholderTextColor="#e83f93"
      style={styles.formInput}
      keyboardType={
        type === 'Email'
          ? 'email-address'
          : type === 'PhoneNumber'
          ? 'phone-pad'
          : 'default'
      }
    />
  );
};
export default TextField;
