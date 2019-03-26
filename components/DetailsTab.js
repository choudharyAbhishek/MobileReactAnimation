import React from "react";
import { createMaterialTopTabNavigator, createAppContainer } from "react-navigation";

import General from "./tabComponents/General";
import Pricing from "./tabComponents/Pricing";
import Parts from "./tabComponents/Parts";
import Damages from "./tabComponents/Damages";

const DetailsTab = createMaterialTopTabNavigator(
  {
    General: {
      screen: General
    },
    Pricing: {
      screen: Pricing
    },
    Parts: {
      screen: Parts
    },
    Damages: {
      screen: Damages
    }
  },
  {
    tabBarPosition: "top",
    swipeEnabled: true,
    tabBarOptions: {
      activeTintColor: "#f2f2f2",
      activeBackgroundColor: "#2EC4B6",
      inactiveTintColor: "#666",
      labelStyle: {
        fontSize: 12,
        padding: 1
      }
    }
  }
);
export default createAppContainer(DetailsTab);
