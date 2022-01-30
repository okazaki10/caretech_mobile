import React from 'react';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomepageView from "./container/homepage/homepage_view";
import InvoiceView from './container/invoice/invoice_view';
import ItemsView from './container/items/items_view';
import AddProductView from './container/product/add_product_view';
import { TouchableOpacity, View } from 'react-native';
import { Text } from 'react-native-elements';
import style, { colors } from './globalstyles';


const Stack = createNativeStackNavigator();

function NavigationStack() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName={'Homepage'}>
                <Stack.Screen
                    name="Homepage"
                    component={HomepageView}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="Invoice"
                    component={InvoiceView}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="Items"
                    component={ItemsView}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="AddProduct"
                    component={AddProductView}
                    options={({ route }) => ({
                        title: "",
                        headerLeft: () => (
                            <View style={{ flexDirection: "row", justifyContent: "center", alignItems: "center" }}>
                                <View style={{ flexDirection: "row" }}>
                                    <View style={{ width: 29, height: 29, backgroundColor: colors.blue, borderRadius: 100 }}>
                                    </View>
                                    <View style={{ width: 10, height: 10, backgroundColor: colors.red, borderRadius: 100, marginLeft: 5 }}>
                                    </View>
                                </View>
                                <Text style={[style.robotobold, { color: colors.blue, fontSize: 18,marginLeft:12 }]}>BeLaundry</Text>
                            </View>
                        ),
                    })}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default NavigationStack;