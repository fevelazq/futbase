import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Icon } from "native-base";
import { COLORS } from "../styles";
import MatchesScreen from "../screens/MatchesScreen";
import FanNavigator from "./FanNavigator";
import RewardsScreen from "../screens/RewardsScreen";
import TeamNavigator from "../navigation/TeamNavigator";
import HomeScreen from "../screens/HomeScreen";
import DetailScreen from "../screens/DetailScreen";
import MatchCalendarScreen from "../screens/MatchCalendarScreen";
import { i18n } from "../utils/i18n";

const TabBarIcon = ({ name, focused }) => {
	return (
		<Icon
			name={name}
			style={{
				color: focused ? COLORS.TEAM_SECONDARY : COLORS.TEAM_PRIMARY
			}}
		/>
	);
};

const BottomStack = createBottomTabNavigator();
const BottomTabs = () => {
	return (
		<BottomStack.Navigator
			initialRouteName="Home"
			tabBarOptions={{
				activeTintColor: COLORS.TEAM_SECONDARY,
				inactiveTintColor: COLORS.TEAM_PRIMARY
			}}
		>
			<BottomStack.Screen
				name={i18n.t("Global.matches")}
				component={MatchesScreen}
				options={{
					tabBarIcon: ({ focused }) => <TabBarIcon name="md-football" focused={focused} />
				}}
			/>
			<BottomStack.Screen
				name={i18n.t("Global.team")}
				component={TeamNavigator}
				options={{
					tabBarIcon: ({ focused }) => <TabBarIcon name="md-flag" focused={focused} />
				}}
			/>
			<BottomStack.Screen
				name="Home"
				component={HomeNav}
				options={{
					tabBarIcon: ({ focused }) => <TabBarIcon name="md-home" focused={focused} />
				}}
			/>
			<BottomStack.Screen
				name={i18n.t("Global.fan")}
				component={FanNavigator}
				options={{
					tabBarIcon: ({ focused }) => <TabBarIcon name="md-person" focused={focused} />
				}}
			/>
			<BottomStack.Screen
				name={i18n.t("Global.rewards")}
				component={RewardsScreen}
				options={{
					tabBarIcon: ({ focused }) => <TabBarIcon name="md-trophy" focused={focused} />
				}}
			/>
		</BottomStack.Navigator>
	);
};

const Home = createStackNavigator();
const HomeNav = () => {
	return (
		<Home.Navigator initialRouteName="Home" headerMode="none">
			<Home.Screen name="Home" component={HomeScreen} />
		</Home.Navigator>
	);
};

const App = createStackNavigator();
const AppNavigator = () => (
	<App.Navigator initialRouteName="App" headerMode="none">
		{/* //TODO: add Auth navigation */}
		<App.Screen name="App" component={BottomTabs} />
		<App.Screen name="Detail" component={DetailScreen} />
		<App.Screen name="MatchCalendar" component={MatchCalendarScreen} />
	</App.Navigator>
);

export default AppNavigator;
