import { faArrowLeft, faChevronLeft, faStickyNote } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import React from 'react';
import { Dimensions, View, Image, ScrollView, TouchableOpacity, ImageBackground } from 'react-native';
import { Input, Text, Button } from 'react-native-elements';
import LinearGradient from 'react-native-linear-gradient';
import style, { colors } from '../../globalstyles';
function InvoiceView(props) {
    const { height, width } = Dimensions.get('window');
    return (
        <View style={style.main}>

            <TouchableOpacity onPress={() => { props.navigation.goBack() }} style={{ marginTop: 40, marginLeft: 20 }}>
                <FontAwesomeIcon icon={faChevronLeft} size={35} color='#2D9CDB'></FontAwesomeIcon>
            </TouchableOpacity>
            <ScrollView>
                <View style={{ marginTop: 40, paddingBottom: 15, marginRight: 40, marginLeft: 40 }}>


                    <View style={[style.card, { flex: 0, padding: 0, borderRadius: 15, marginTop: 15 }]}>
                        <View style={{ backgroundColor: colors.blue, padding: 15, alignItems: "center", justifyContent: "center", borderTopRightRadius: 15, borderTopLeftRadius: 15 }}>
                            <Text style={[style.robotobold, { fontSize: 26, color: "white" }]}>ORDER SUMMARY</Text>
                        </View>
                        <View style={{ flex: 1, marginTop: 15, marginRight: 15, marginLeft: 15 }}>
                            <Text style={[style.robotonormal, { fontSize: 12, color: colors.blue, textAlign: "right" }]}>ORDER #21340</Text>
                            <Text style={[style.robotobold, { fontSize: 15, marginTop: 20 }]}>John Doe</Text>
                            <Text style={[style.robotonormal, { fontSize: 14, marginTop: 5, width: 120 }]}>123 Pasir Ris, 13810, Singapore</Text>
                        </View>
                        <View style={{ marginTop: 20, marginBottom: 10 }}>
                            <View style={{ flexDirection: "row", flex: 1, marginTop: 12 }}>
                                <View style={{ alignItems: "center", justifyContent: "center", paddingRight: 10, paddingLeft: 10 }}>
                                    <Image source={require('../../assets/images/laundry.png')}
                                        style={{ width: 50, height: 50, borderTopLeftRadius: 20 }}
                                        resizeMode='stretch'></Image>
                                </View>
                                <View style={{ flex: 1 }}>
                                    <Text style={[style.robotobold, { fontSize: 15, flex: 1 }]}>Bag of Laundry</Text>
                                    <Text style={[style.robotonormal, { fontSize: 12, color: colors.blue, flex: 1 }]}>Qty: 2</Text>
                                </View>
                                <View style={{ flex: 1 }}>
                                    <Text style={[style.robotonormal, { fontSize: 12, flex: 1, textAlign: "center" }]}>Total</Text>
                                    <Text style={[style.robotobold, { fontSize: 15, color: colors.blue, flex: 1, textAlign: "center" }]}>$ 180.00</Text>
                                </View>
                            </View>
                            <View style={style.line}></View>
                            <View style={{ flexDirection: "row", flex: 1, marginTop: 12 }}>
                                <View style={{ alignItems: "center", justifyContent: "center", paddingRight: 10, paddingLeft: 10 }}>
                                    <Image source={require('../../assets/images/laundry.png')}
                                        style={{ width: 50, height: 50, borderTopLeftRadius: 20 }}
                                        resizeMode='stretch'></Image>
                                </View>
                                <View style={{ flex: 1 }}>
                                    <Text style={[style.robotobold, { fontSize: 15, flex: 1 }]}>Bag of Laundry</Text>
                                    <Text style={[style.robotonormal, { fontSize: 12, color: colors.blue, flex: 1 }]}>Qty: 2</Text>
                                </View>
                                <View style={{ flex: 1 }}>
                                    <Text style={[style.robotonormal, { fontSize: 12, flex: 1, textAlign: "center" }]}>Total</Text>
                                    <Text style={[style.robotobold, { fontSize: 15, color: colors.blue, flex: 1, textAlign: "center" }]}>$ 180.00</Text>
                                </View>
                            </View>
                            <View style={style.line}></View>
                            <View style={{ flexDirection: "row", flex: 1, marginTop: 12 }}>
                                <View style={{ alignItems: "center", justifyContent: "center", paddingRight: 10, paddingLeft: 10 }}>
                                    <Image source={require('../../assets/images/laundry.png')}
                                        style={{ width: 50, height: 50, borderTopLeftRadius: 20 }}
                                        resizeMode='stretch'></Image>
                                </View>
                                <View style={{ flex: 1 }}>
                                    <Text style={[style.robotobold, { fontSize: 15, flex: 1 }]}>Bag of Laundry</Text>
                                    <Text style={[style.robotonormal, { fontSize: 12, color: colors.blue, flex: 1 }]}>Qty: 2</Text>
                                </View>
                                <View style={{ flex: 1 }}>
                                    <Text style={[style.robotonormal, { fontSize: 12, flex: 1, textAlign: "center" }]}>Total</Text>
                                    <Text style={[style.robotobold, { fontSize: 15, color: colors.blue, flex: 1, textAlign: "center" }]}>$ 180.00</Text>
                                </View>
                            </View>
                        </View>
                        <View style={{ backgroundColor: colors.blue, padding: 15, alignItems: "center", justifyContent: "center", borderBottomRightRadius: 15, borderBottomLeftRadius: 15 }}>
                            <View style={{ flexDirection: "row" }}>
                                <Text style={[style.robotobold, { fontSize: 18, color: "white", flex: 1 }]}>TOTAL ORDER</Text>
                                <Text style={[style.robotobold, { fontSize: 18, color: "white", flex: 1, textAlign: "right" }]}>$ 204.00</Text>
                            </View>
                        </View>
                    </View>
                    <View style={{ marginTop: 35 }}>
                        <Button
                            icon={{
                                name: "comment",
                                type: "font-awesome",
                                size: 20,
                                color: "white"
                            }}
                            title={"WHATSAPP US"} buttonStyle={[style.button]} titleStyle={[style.buttontext, { marginLeft: 5 }]}></Button>
                    </View>
                </View>

            </ScrollView>
        </View>);
}
export default InvoiceView;