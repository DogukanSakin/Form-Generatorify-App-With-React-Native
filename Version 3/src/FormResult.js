import React from 'react';
import {Text, View, Button} from 'react-native';
import styles from './styles';
import {useForm, useFieldArray} from 'react-hook-form';
import TextField from './TextField';
export default function FormResultPage({navigation, route}) {
  const {textFields} = route.params;
  const {handleSubmit, control} = useForm();
  const onSubmit = data => {
    console.log(data);
  };
  return (
    <View style={styles.container}>
      <Text style={styles.formResultTitle}>Form Result:</Text>
      {textFields.map(field => (
        <View style={styles.inputInnerContainer} key={field.id}>
          <TextField
            control={control}
            name={`${field.name}`}
            placeHolder={field.placeHolder}
            type={field.type}
          />
        </View>
      ))}
      <Button title="Submit" color="#e83f93" onPress={handleSubmit(onSubmit)} />
    </View>
  );
}
