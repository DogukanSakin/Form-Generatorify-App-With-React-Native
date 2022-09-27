/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {View, TextInput, Text, ScrollView, Button} from 'react-native';
import {useForm, useFieldArray} from 'react-hook-form';
import SelectDropdown from 'react-native-select-dropdown';
import styles from './styles';
import TextField from './TextField';
export default function App() {
  const {handleSubmit, control} = useForm();
  const {fields, append, remove} = useFieldArray({control, name: 'form'});
  const [inputValue, setInputValue] = useState('');
  const handleAppend = selectedItem => {
    append({name: inputValue, type: selectedItem, placeHolder: inputValue});
    setInputValue('');
  };
  const onSubmit = data => {
    console.log(data);
  };
  const types = ['TextInput', 'TextArea', 'Password', 'Email', 'PhoneNumber'];
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
            buttonTextStyle={styles.dropdownButtonTextStyle}
            rowStyle={{borderBottomWidth: 0}}
            dropdownStyle={styles.dropdownStyle}
            rowTextStyle={styles.dropdownRowTextStyle}
            onSelect={selectedItem => {
              handleAppend(selectedItem);
            }}
          />
        </View>
      </View>
      {/*title container container*/}
      <View style={styles.yourFormTextContainer}>
        <View style={styles.line} />
        <Text style={styles.titleText}>Your Form:</Text>
        <View style={styles.line} />
      </View>

      <ScrollView>
        {fields.map((field, index) => (
          <>
            <View style={styles.inputInnerContainer}>
              <TextField
                key={field.id}
                control={control}
                name={`${field.name}`}
                placeHolder={field.placeHolder}
                type={field.type}
              />
              {fields.length > 1 && (
                <Text
                  style={styles.deleteButtonStyle}
                  onPress={() => remove(index)}>
                  Remove
                </Text>
              )}
            </View>
          </>
        ))}
        {fields.length > 0 && (
          <Button
            title="Submit"
            color="#e83f93"
            onPress={handleSubmit(onSubmit)}
          />
        )}
      </ScrollView>
    </View>
  );
}
