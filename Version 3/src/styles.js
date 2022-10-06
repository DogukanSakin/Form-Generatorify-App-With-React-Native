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
    color: 'white',
    fontSize: 16,
    flex: 1,
  },

  dropdownContainerStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 10,
    flex: 1,
  },

  dropdownButtonStyle: {
    borderRadius: 10,
    backgroundColor: 'transparent',
  },

  dropdownButtonTextStyle: {
    color: 'white',
    fontSize: 14,
  },
  typeSelectDropdownTextStyle: {
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
  positionDropdownContainer: {
    alignItems: 'center',
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
  //Textfield info card styles:
  textFieldInfoCardContainer: {
    padding: 10,
    borderRadius: 10,
    borderColor: '#e83f93',
    flexDirection: 'row',
    borderWidth: 1,
    flex: 1,
    marginTop: 10,
    marginBottom: 10,
    alignItems: 'center',
  },

  textfieldInfoText: {
    color: 'white',
    flex: 1,
    textAlign: 'center',
  },

  //Preview page styles
  priviewTitle: {
    color: 'white',
    fontSize: 16,
    flex: 1,
    textAlign: 'center',
  },

  previewInnerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
    flex: 1,
  },

  previewInputFieldContainer: {
    borderWidth: 1,
    margin: 5,
    padding: 10,
    borderRadius: 10,
    borderColor: '#e83f93',
    flex: 1,
  },

  previewInputFieldContainerText: {
    color: 'white',
    fontSize: 14,
  },

  previewPageTitleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
});
