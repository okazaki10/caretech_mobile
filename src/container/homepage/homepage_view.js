import { faStickyNote } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import React from 'react';
import { Dimensions, View, Image, ScrollView, TouchableOpacity, ImageBackground } from 'react-native';
import { Input, Text, Button } from 'react-native-elements';
import LinearGradient from 'react-native-linear-gradient';
import style, { colors } from '../../globalstyles';
function HomepageView(props) {
    const { height, width } = Dimensions.get('window');
    return (
        <View style={style.main}>

            <Image source={require('../../assets/images/ellipse.png')}
                style={{ width: "100%", height: "33.5%", position: "absolute" }}
                resizeMode='stretch'></Image>
            <ScrollView>
                <View style={{ marginTop: 72, paddingBottom: 30 }}>
                    <View style={{ marginRight: 40, marginLeft: 40 }}>
                        <Text style={[style.robotobold, { color: "white" }]}>Welcome, John</Text>
                        <TouchableOpacity onPress={()=>{props.navigation.navigate("AddProduct")}} style={[style.card, { flex: 0, padding: 0, borderRadius: 15, marginTop: 15 }]}>
                            <View style={{ flexDirection: "row" }}>
                                <Image source={require('../../assets/images/ellipse_quarter.png')}
                                    style={{ width: 100, height: 100, borderTopLeftRadius: 20 }}
                                    resizeMode='stretch'></Image>
                                <View style={{ marginTop: 20, marginLeft: 9, width: 29, height: 29, backgroundColor: colors.red, borderRadius: 50 }}>

                                </View>
                            </View>
                            <View style={{ marginRight: 15, alignItems: "flex-end", marginBottom: 15 }}>
                                <Text style={[style.robotonormal, { fontSize: 18 }]}>Your Balance</Text>
                                <Text style={[style.robotobold, { fontSize: 36, color: colors.blue }]}>$ 200.00</Text>
                            </View>
                        </TouchableOpacity>
                        <Text style={[style.robotobold, { color: "#3B97CB", fontSize: 18, marginTop: 30 }]}>PREVIOUS ORDER</Text>
                        <TouchableOpacity onPress={() => { props.navigation.navigate("Invoice") }} style={[style.card, { flex: 0, padding: 0, marginTop: 15 }]}>
                            <View style={{ flexDirection: "row" }}>
                                <View style={{ alignItems: "center", justifyContent: "center", paddingRight: 10, paddingLeft: 10 }}>
                                    <Image source={require('../../assets/images/laundry.png')}
                                        style={{ width: 65, height: 65, borderTopLeftRadius: 20 }}
                                        resizeMode='stretch'></Image>
                                </View>
                                <View style={{ padding: 10 ,flex:1}}>
                                    <Text style={[style.robotobold, { fontSize: 14 }]}>Bag of Laundry</Text>
                                    <Text style={[style.robotonormal, { fontSize: 12, marginTop: 10 }]}>Total Order</Text>
                                    <Text style={[style.robotobold, { fontSize: 14, color: colors.blue }]}>$ 180.00</Text>
                                </View>

                                <LinearGradient
                                    colors={['#CAECFF', '#0099EE', '#0099EE']}
                                    useAngle={true}
                                    angle={300}
                                    style={{ flex: 1, alignItems: "center", justifyContent: "center", borderTopRightRadius: 5, borderBottomRightRadius: 5 }}>
                                    <FontAwesomeIcon icon={faStickyNote} color='white' size={34}></FontAwesomeIcon>
                                    <Text style={[style.robotonormal, { fontSize: 12, marginTop: 10, color: "white" }]}>INVOICE</Text>

                                </LinearGradient>

                            </View>
                        </TouchableOpacity>
                        <Text style={[style.robotobold, { color: "#3B97CB", fontSize: 18, marginTop: 30 }]}>YOUR MOST ORDERED</Text>
                        <TouchableOpacity style={{ justifyContent: "center", flex: 1, marginTop: 15, width: "100%" }}>
                            <ImageBackground
                                source={require('../../assets/images/most_ordered.png')}
                                style={{ width: "100%", height: 214 }}
                                imageStyle={{ borderRadius: 15 }}
                                resizeMode="cover"
                            >
                                <LinearGradient
                                    colors={['#00000000', '#00000000', '#3B97CB']}
                                    style={{ height: '100%', borderRadius: 15 }}>
                                </LinearGradient>

                                <View style={{ position: "absolute", flex: 1, bottom: 0, justifyContent: "flex-end", padding: 15, borderBottomLeftRadius: 5, borderBottomRightRadius: 5 }}>
                                    <View style={{ marginTop: 15 }}>
                                        <Text style={[style.robotobold, { color: "white", flex: 1, fontSize: 23 }]}>Dry Cleaning</Text>
                                        <Text style={[style.robotonormal, { color: "white", flex: 1, fontSize: 16, marginTop: 2 }]}>12x | total of $ 4.000</Text>
                                    </View>
                                </View>

                            </ImageBackground>
                        </TouchableOpacity>
                        <Text style={[style.robotobold, { color: "#3B97CB", fontSize: 18, marginTop: 30 }]}>OUR LATEST PRODUCT</Text>
                    </View>
                    <ScrollView horizontal={true}>
                        <TouchableOpacity onPress={()=>{props.navigation.navigate("Items")}} style={{ justifyContent: "center", flex: 1, marginTop: 15, width: 176, marginLeft: 45 }}>
                            <ImageBackground
                                source={require('../../assets/images/most_ordered.png')}
                                style={{ width: "100%", height: 214 }}
                                imageStyle={{ borderRadius: 15 }}
                                resizeMode="cover"
                            >
                                <LinearGradient
                                    colors={['#00000000', '#00000000', '#3B97CB']}
                                    style={{ height: '100%', borderRadius: 15 }}>
                                </LinearGradient>

                                <View style={{ position: "absolute", flex: 1, bottom: 0, justifyContent: "flex-end", padding: 15, borderBottomLeftRadius: 5, borderBottomRightRadius: 5 }}>
                                    <View style={{ marginTop: 15 }}>
                                        <Text style={[style.robotobold, { color: "white", flex: 1, fontSize: 23 }]}>Dry Cleaning</Text>
                                        <Text style={[style.robotonormal, { color: "white", flex: 1, fontSize: 16, marginTop: 2 }]}>$ 10.00/pc</Text>
                                    </View>
                                </View>

                            </ImageBackground>
                        </TouchableOpacity>
                        <TouchableOpacity style={{ justifyContent: "center", flex: 1, marginTop: 15, width: 176, marginLeft: 20 }}>
                            <ImageBackground
                                source={require('../../assets/images/most_ordered.png')}
                                style={{ width: "100%", height: 214 }}
                                imageStyle={{ borderRadius: 15 }}
                                resizeMode="cover"
                            >
                                <LinearGradient
                                    colors={['#00000000', '#00000000', '#3B97CB']}
                                    style={{ height: '100%', borderRadius: 15 }}>
                                </LinearGradient>

                                <View style={{ position: "absolute", flex: 1, bottom: 0, justifyContent: "flex-end", padding: 15, borderBottomLeftRadius: 5, borderBottomRightRadius: 5 }}>
                                    <View style={{ marginTop: 15 }}>
                                        <Text style={[style.robotobold, { color: "white", flex: 1, fontSize: 23 }]}>Dry Cleaning</Text>
                                        <Text style={[style.robotonormal, { color: "white", flex: 1, fontSize: 16, marginTop: 2 }]}>$ 10.00/pc</Text>
                                    </View>
                                </View>
                            </ImageBackground>
                        </TouchableOpacity>
                        <TouchableOpacity style={{ justifyContent: "center", flex: 1, marginTop: 15, width: 176, marginLeft: 20 }}>
                            <ImageBackground
                                source={require('../../assets/images/most_ordered.png')}
                                style={{ width: "100%", height: 214 }}
                                imageStyle={{ borderRadius: 15 }}
                                resizeMode="cover"
                            >
                                <LinearGradient
                                    colors={['#00000000', '#00000000', '#3B97CB']}
                                    style={{ height: '100%', borderRadius: 15 }}>
                                </LinearGradient>

                                <View style={{ position: "absolute", flex: 1, bottom: 0, justifyContent: "flex-end", padding: 15, borderBottomLeftRadius: 5, borderBottomRightRadius: 5 }}>
                                    <View style={{ marginTop: 15 }}>
                                        <Text style={[style.robotobold, { color: "white", flex: 1, fontSize: 23 }]}>Dry Cleaning</Text>
                                        <Text style={[style.robotonormal, { color: "white", flex: 1, fontSize: 16, marginTop: 2 }]}>$ 10.00/pc</Text>
                                    </View>
                                </View>
                            </ImageBackground>
                        </TouchableOpacity>
                    </ScrollView>
                </View>
            </ScrollView>
        </View>);
}
export default HomepageView;