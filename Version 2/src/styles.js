import {StyleSheet} from 'react-native';
export default StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#161616',
  },
  //Logo styles
  logoContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },

  logoText: {
    color: 'white',
    fontSize: 28,
  },

  logoInnerText: {
    color: 'white',
    fontSize: 12,
  },
  //input settings styles
  placeHolderInputStyle: {
    flex: 1,
    color: 'white',
    fontSize: 16,
  },

  dropdownContainerStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 10,
  },

  dropdownButtonStyle: {
    borderRadius: 10,
    backgroundColor: 'transparent',
    height: 40,
    flex: 1,
  },

  dropdownButtonTextStyle: {
    color: 'white',
    fontSize: 14,
    textAlign: 'right',
  },

  dropdownStyle: {
    borderRadius: 10,
    backgroundColor: '#e83f93',
  },

  dropdownRowTextStyle: {
    color: 'white',
    fontSize: 16,
  },
  //user form view styles
  yourFormTextContainer: {
    flexDirection: 'row',
    marginTop: 10,
    marginBottom: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },

  line: {
    borderBottomWidth: 1,
    borderBottomColor: '#e83f93',
    flex: 1,
  },

  titleText: {
    flex: 1,
    color: 'white',
    fontSize: 16,
    textAlign: 'center',
  },

  inputSettingsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
    marginBottom: 10,
  },

  formInput: {
    borderBottomWidth: 1,
    borderBottomColor: '#e83f93',
    marginTop: 10,
    marginBottom: 10,
    color: 'white',
    flex: 1,
  },

  inputInnerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  deleteButtonStyle: {
    color: 'red',
    fontSize: 16,
  },
});
