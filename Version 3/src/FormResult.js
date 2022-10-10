/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Text, View, Button} from 'react-native';
import styles from './styles';
import {useForm} from 'react-hook-form';
import TextField from './TextField';
export default function FormResultPage({navigation, route}) {
  const {textFields} = route.params;
  const {handleSubmit, control} = useForm();
  const topLeftField = textFields.find(field => field.position === 'Top Left');
  const bottomLeftField = textFields.find(
    field => field.position === 'Bottom Left',
  );
  const topRightField = textFields.find(
    field => field.position === 'Top Right',
  );
  const bottomRightField = textFields.find(
    field => field.position === 'Bottom Right',
  );
  const onSubmit = data => {
    console.log(data);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.formResultTitle}>Form Result:</Text>
      <View style={styles.resultInnerContainer}>
        <View style={{flexDirection: 'row'}}>
          {topLeftField && (
            <TextField
              control={control}
              name={topLeftField.name}
              placeHolder={topLeftField.placeHolder}
              type={topLeftField.type}
            />
          )}
          <View style={{marginLeft: 10, marginRight: 10}} />
          {topRightField && (
            <TextField
              control={control}
              name={topRightField.name}
              placeHolder={topRightField.placeHolder}
              type={topRightField.type}
            />
          )}
        </View>
        <View style={{flexDirection: 'row'}}>
          {bottomLeftField && (
            <TextField
              control={control}
              name={bottomLeftField.name}
              placeHolder={bottomLeftField.placeHolder}
              type={bottomLeftField.type}
            />
          )}
          <View style={{marginLeft: 10, marginRight: 10}} />
          {bottomRightField && (
            <TextField
              control={control}
              name={bottomRightField.name}
              placeHolder={bottomRightField.placeHolder}
              type={bottomRightField.type}
            />
          )}
        </View>
        <Button
          title="Submit"
          color="#e83f93"
          onPress={handleSubmit(onSubmit)}
        />
        <View style={{marginTop: 5, marginBottom: 5}} />
        <Button
          title="Back Preview"
          color="#e83f93"
          onPress={() =>
            navigation.navigate('Preview', {textFields: textFields})
          }
        />
      </View>
    </View>
  );
}
