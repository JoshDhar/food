import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import searchScreen from "./src/screens/searchScreen";

const navigator = createStackNavigator(
  {
    Search: searchScreen,
  },
  {
    initialRouteName: "Search",
    defaultNavigationOptions: {
      title: "Restaurant Search",
    },
  }
);

export default createAppContainer(navigator);
