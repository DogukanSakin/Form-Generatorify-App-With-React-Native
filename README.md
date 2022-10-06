# FormGeneratorify App With React Hook Form

A simple dynamic form creation application developed with [React Hook Form](https://react-hook-form.com) and React Native.

## Features

- You can create up to 5 different types of inputboxes without any limit. As soon as you select the type, an inputbox will be created in your form.
- If you have more than one inputbox in your form, you can remove any inputbox from your form.
- Each inputbox is named with the placeholder value you enter. When you tap the Submit button, these names and values are shown in the console.

## Tools & Resources

- [React Hook Form useFieldArray](https://react-hook-form.com/api/usefieldarray)
- [React Native Select Dropdown](https://www.npmjs.com/package/react-native-select-dropdown)
- [React Native Navigation](https://reactnavigation.org/) (For Version 3)

## Real Android Device ScreenShots

<div align="center"> 
<img src="https://user-images.githubusercontent.com/86911611/191720917-28048f5f-19d0-4098-af45-1d08421d4772.jpg" width="400" height="900" /><img/>
<img src="https://user-images.githubusercontent.com/86911611/191720987-395f3227-af43-4351-93b9-583d48cced96.jpg" width="400" height="900" /><img/>
<img src="https://user-images.githubusercontent.com/86911611/191721035-84083e38-5a50-4ddf-9ff6-7e62a743d1d8.jpg" width="400" height="900" /><img/>
<img src="https://user-images.githubusercontent.com/86911611/191721078-ffd725d2-aa48-48f6-bad9-56ab975a7106.jpg" width="400" height="900" /><img/>
<img src="https://user-images.githubusercontent.com/86911611/191721231-5f4436f9-2e5e-4ef2-8d1c-1a0308db4c39.jpg") width="400" height="900" /><img/>
</div>

## Installation

Clone this repository on your local machine.

```
git clone https://github.com/DogukanSakin/FormGeneratorify.git
```

## Usage

1. Update the clientConfig.js file in the main directory with your own information.

2. You should use these two commands in both the main directory and the backend directory:

```
npm init
npm install
```

4. Start server in backend directory

```
npm start
```

5. Start RN in main directory

```
npx react-native start
```

These instructions will get a copy of the project up and running on your local machine for development and testing purposes.

## To Run the Application

In the project directory you can run:

```
For Android Emulator: npx react-native run-android
```

```
For iOS Emulator: npx react-native run-ios
```
