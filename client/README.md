# React Native Notes

## Creating a React Native Project

You can either use an Expo Managed Workflow or work directly with the React Native CLI. I'm using Expo to be able to compile for iOS without needing a mac.

### Expo Managed Workflow

Steps:

1. `npm i -g expo-cli` Installs expo
2. `expo init client` creates project
3. `npm run web` runs project in browser

Configuration:

- To specify a new entry file:
  1. Add `"entryPoint"` key in `app.json`.
  2. Change `"main"` key in `package.json`.
  3. Use `export default registerRootComponent(App);` on your root component.

## React Native Components

### Basic Components

- `StyleSheet`: An object with method `create`, which lets you create style objects with intellisense. Better than creating raw JavaScript objects. There is not really a cascade or tag selectors in this format.
- `Text`: must be used whenever including any text. Can't just include it inside any other components.
- `View`: Similar to div, a container for layout
- `Image`: Displays the images given in the `source` property. To use, you do an inline require. `source={require('../assets/icon.png')}`
  - For images with a source on the web, use `source={{uri: 'https://...'}}`
  - Can use `resizeMode` prop to specify how it will resize based on resizing screen
  - `defaultSource` prop gives fallback image source
- `ImageBackground`, wraps around whatever components you want to give a background to. 
- `Linking`: Gives tools for opening a browser. **Can't do target="\_blank"**.

### Interactive Components

- `TextInput`: Allows users to input text. Use `onChangeText` prop to update state; **parameter automatically has text's value**, rather than using `event.target.value`. Takes following props:
  - placeholder, keyboardType, multiline, style, maxLength, editable, secureTextEntry.
- `Button`: interactive, using the `onPress` prop. Already has some styles. Takes `title` property, not text.
  - Takes props `color`, `disabled`, etc
- Touchables
  - `TouchableOpacity`: Interactive button with only basic styling. Increases opacity when tapped.
  - `TouchableHighlight`: Same as TouchableOpacity but adds a highlight specified in `underlayColor` when tapped.
  - `TouchableWithoutFeedback`: Same as last two but gives no visual feedback when tapped. Cannot be styled directly.
- `Pressable`: Generic interactive that has several handlers for different stages of pressing. Better than button.
  - `onPressIn`, `onPressOut`, `onPress`, `onLongPress`
  - can use `hitSlop` prop to increase pressable area.
  - can use `androidRipple` for android devices.

### Feedback Components

- `Alert`: object with method `alert`, default system alert.
- `Toast`: **Android only!** has method `show`.
- `Modal`: Covers the screen with a modal. Can put any component inside for custom display. Can be styled any desired way. Is open by default.
  - Takes props `transparent`, `visible`, `onRequestClose`, `animationType`.
  - Use state to determine if modal should be open or not.

### Rendering Lists

To render multiple items from an array, use `{array.map(item, index) => <Text key={index}>{item.title}</Text>}`.

- `ScrollView`: A view that has the ability to scroll its children.
- `FlatList`: takes `data` and `renderItem` props to more efficiently render lists of data. only renders what is visible.
  - Can also specify a `keyExtractor` prop which automatically adds `key` to each item
- `SectionList`: used for rendering nested data in lists, with categories. takes props `sections`, `renderItem`, and `renderSectionHeader`
- `RefreshControl`: used inside `ScrollView`, `FlatList`, or `SectionList` to handle pull refreshes

## Other Notes

### Using Hooks

React Hooks are now supported in React Native. For the most part, use as normal.

## Resources

- [React Native 2021 by Mash](https://www.youtube.com/watch?v=LWs6dY92_MU&list=PL8kfZyp--gEXs4YsSLtB3KqDtdOFHMjWZ)
