import React from 'react';
import {TextInput} from 'react-native';
import {Controller} from 'react-hook-form';
import styles from './styles';
const TextField = ({control, name, type, placeHolder}) => {
  return (
    <Controller
      render={({field: {onChange, onBlur, value}}) => (
        <TextInput
          onChangeText={onChange}
          onBlur={onBlur}
          value={value}
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
      )}
      name={name}
      control={control}
      defaultValue=""
    />
  );
};
export default TextField;
