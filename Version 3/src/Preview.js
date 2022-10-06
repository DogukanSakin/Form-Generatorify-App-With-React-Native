/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Text, View, Button} from 'react-native';
import styles from './styles';
export default function PreviewPage({route, navigation}) {
  const {textFields} = route.params;
  textFields && console.log(textFields);
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
          <View style={styles.previewInputFieldContainer}>
            <Text style={styles.previewInputFieldContainerText}>Top Left</Text>
          </View>

          {/*Bottom Left */}
          <View style={styles.previewInputFieldContainer}>
            <Text style={styles.previewInputFieldContainerText}>
              Bottom Left
            </Text>
          </View>
        </View>
        {/*Right components*/}
        <View style={{flex: 1}}>
          {/*Top Right*/}
          <View style={styles.previewInputFieldContainer}>
            <Text style={styles.previewInputFieldContainerText}>Top Right</Text>
          </View>

          {/*Bottom Right */}
          <View style={styles.previewInputFieldContainer}>
            <Text style={styles.previewInputFieldContainerText}>
              Bottom Right
            </Text>
          </View>
        </View>
      </View>
      {/*Button container */}
      <View style={{marginTop: 10}}>
        <Button title="Create my form" color="#e83f93" />
      </View>
    </View>
  );
}
