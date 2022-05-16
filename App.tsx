import { KeyboardAvoidingView, Platform } from "react-native";
import { Provider } from "overmind-react";
import { overmind } from "./store";
import HomeScreen from "./screens/HomeScreen";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import "react-native-gesture-handler";
import MapScreen from "./screens/MapScreen";
import RideOptionCard from "./screens/RideOptionCard";

export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <Provider value={overmind}>
      <NavigationContainer>
        <SafeAreaProvider>
          <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            style={{
              flex: 1,
            }}
            keyboardVerticalOffset={Platform.OS === "ios" ? -64 : 0}
          >
            <Stack.Navigator>
              <Stack.Screen
                name="Home"
                options={{
                  headerShown: false,
                }}
                component={HomeScreen}
              />
              <Stack.Screen
                name="Map"
                options={{
                  headerShown: false,
                }}
                component={MapScreen}
              />
            </Stack.Navigator>
          </KeyboardAvoidingView>
        </SafeAreaProvider>
      </NavigationContainer>
    </Provider>
  );
}
