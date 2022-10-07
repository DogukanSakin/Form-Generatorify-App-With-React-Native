/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Text, View, Button} from 'react-native';
import TextField from '../../Version 3/src/TextField';
import styles from './styles';
import {useForm} from 'react-hook-form';
export default function PreviewPage({route, navigation}) {
  const {control} = useForm();
  const {textFields} = route.params;
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

  return (
    <View style={styles.container}>
      <View style={styles.previewPageTitleContainer}>
        <Button
          title="Back"
          color="#e83f93"
          onPress={() => navigation.navigate('Home')}
        />
        <Text style={styles.priviewTitle}>Preview:</Text>
      </View>

      {/*Preview container */}
      <View style={styles.previewInnerContainer}>
        {/*Left components*/}
        <View style={{flex: 1}}>
          {/*Top left*/}
          {topLeftField && (
            <View style={styles.previewInputFieldContainer}>
              <Text style={styles.previewInputFieldContainerText}>
                Top Left
              </Text>

              <TextField
                control={control}
                name={topLeftField.name}
                placeHolder={topLeftField.placeHolder}
                type={topLeftField.type}
                editable={false}
              />
            </View>
          )}

          {/*Bottom Left */}
          {bottomLeftField && (
            <View style={styles.previewInputFieldContainer}>
              <Text style={styles.previewInputFieldContainerText}>
                Bottom Left
              </Text>
              <TextField
                control={control}
                name={bottomLeftField.name}
                placeHolder={bottomLeftField.placeHolder}
                type={bottomLeftField.type}
                editable={false}
              />
            </View>
          )}
        </View>
        {/*Right components*/}
        <View style={{flex: 1}}>
          {/*Top Right*/}
          {topRightField && (
            <View style={styles.previewInputFieldContainer}>
              <Text style={styles.previewInputFieldContainerText}>
                Top Right
              </Text>
              <TextField
                control={control}
                name={topRightField.name}
                placeHolder={topRightField.placeHolder}
                type={topRightField.type}
                editable={false}
              />
            </View>
          )}

          {/*Bottom Right */}
          {bottomRightField && (
            <View style={styles.previewInputFieldContainer}>
              <Text style={styles.previewInputFieldContainerText}>
                Bottom Right
              </Text>
              <TextField
                control={control}
                name={bottomRightField.name}
                placeHolder={bottomRightField.placeHolder}
                type={bottomRightField.type}
                editable={false}
              />
            </View>
          )}
        </View>
      </View>
      {/*Button container */}
      <View style={{marginTop: 10}}>
        <Button
          title="Create my form"
          color="#e83f93"
          onPress={() =>
            navigation.navigate('Result', {
              textFields: textFields,
            })
          }
        />
      </View>
    </View>
  );
}
