/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {View, TextInput, Text, ScrollView, Button} from 'react-native';
import {useForm, useFieldArray} from 'react-hook-form';
import SelectDropdown from 'react-native-select-dropdown';
import styles from './styles';
import {showMessage} from 'react-native-flash-message';
export default function HomePage({navigation}) {
  const types = ['TextInput', 'TextArea', 'Password', 'Email', 'PhoneNumber'];
  const allPositions = ['Top Left', 'Top Right', 'Bottom Left', 'Bottom Right'];
  const {control} = useForm();
  const {fields, append, remove} = useFieldArray({control, name: 'form'});
  const [inputValue, setInputValue] = useState('');
  const [inputType, setInputType] = useState(null);
  const handleAppend = selectedItem => {
    const isPositionAlreadyUse = fields.some(
      item => item.position === selectedItem,
    );
    if (isPositionAlreadyUse === false) {
      append({
        name: inputValue,
        type: inputType,
        placeHolder: inputValue,
        position: selectedItem,
      });
      setInputValue('');
    } else {
      showMessage({
        message: 'This position is already use!',
        type: 'danger',
      });
    }
  };

  return (
    <View style={styles.container}>
      {/*logo container*/}
      <View style={styles.logoContainer}>
        <Text style={styles.logoText}>
          Form<Text style={{color: '#e83f93'}}>Generatorify</Text>
        </Text>
        <Text style={styles.logoInnerText}>Create your form!</Text>
      </View>

      {/*input settings container*/}
      <View style={styles.inputSettingsContainer}>
        <TextInput
          placeholder="Enter placeholder..."
          placeholderTextColor="white"
          style={styles.placeHolderInputStyle}
          onChangeText={t => setInputValue(t)}
          value={inputValue}
        />

        {/*dropdown container*/}
        <View style={styles.dropdownContainerStyle}>
          <SelectDropdown
            defaultButtonText="Tap for select type."
            data={types}
            buttonStyle={styles.dropdownButtonStyle}
            buttonTextStyle={styles.typeSelectDropdownTextStyle}
            rowStyle={{borderBottomWidth: 0}}
            dropdownStyle={styles.dropdownStyle}
            rowTextStyle={styles.dropdownRowTextStyle}
            onSelect={selectedItem => {
              setInputType(selectedItem);
            }}
          />
        </View>
      </View>
      <View style={styles.positionDropdownContainer}>
        <SelectDropdown
          defaultButtonText="Tap for select position."
          data={allPositions}
          buttonStyle={styles.dropdownButtonStyle}
          buttonTextStyle={styles.dropdownButtonTextStyle}
          rowStyle={{borderBottomWidth: 0}}
          dropdownStyle={styles.dropdownStyle}
          rowTextStyle={styles.dropdownRowTextStyle}
          onSelect={selectedItem => {
            if (inputType !== null) {
              handleAppend(selectedItem);
            } else {
              showMessage({
                message: 'Please select a input type!',
                type: 'danger',
              });
            }
          }}
        />
      </View>

      {/*title container container*/}
      <View style={styles.yourFormTextContainer}>
        <View style={styles.line} />
        <Text style={styles.titleText}>Textfields:</Text>
        <View style={styles.line} />
      </View>

      <ScrollView>
        {fields.map((field, index) => (
          <View style={styles.inputInnerContainer} key={field.id}>
            <View style={styles.textFieldInfoCardContainer}>
              <Text style={styles.textfieldInfoText}>
                Plch: {field.placeHolder}
              </Text>
              <Text style={styles.textfieldInfoText}>Type: {field.type}</Text>
              <Text style={styles.textfieldInfoText}>
                Pst: {field.position}
              </Text>
              {fields.length > 1 && (
                <Text
                  style={styles.deleteButtonStyle}
                  onPress={() => remove(index)}>
                  Remove
                </Text>
              )}
            </View>
          </View>
        ))}
        {fields.length > 0 && (
          <Button
            title="Next"
            color="#e83f93"
            onPress={() =>
              navigation.navigate('Preview', {
                textFields: fields,
              })
            }
          />
        )}
      </ScrollView>
    </View>
  );
}
