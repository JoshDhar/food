import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import searchScreen from "./src/screens/searchScreen";
import singleResultScreen from "./src/screens/singleResultScreen";

const navigator = createStackNavigator(
  {
    Search: searchScreen,
    SingleResult: singleResultScreen,
  },
  {
    initialRouteName: "Search",
    defaultNavigationOptions: {
      title: "Restaurant Search",
    },
  }
);

export default createAppContainer(navigator);
