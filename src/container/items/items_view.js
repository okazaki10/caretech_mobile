import { faArrowLeft, faChevronLeft, faStickyNote } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import React, { useState } from 'react';
import { Dimensions, View, Image, ScrollView, TouchableOpacity, ImageBackground, TextInput } from 'react-native';
import { Input, Text, Button } from 'react-native-elements';
import LinearGradient from 'react-native-linear-gradient';
import { URL } from '../../base_url';
import style, { colors } from '../../globalstyles';
function ItemsView(props) {
    const { height, width } = Dimensions.get('window');
    const [total, settotal] = useState('0')
    const { name, description, price, image_url, category } = props.route.params ? props.route.params : {}
    return (
        <View style={style.main}>

            <TouchableOpacity onPress={() => { props.navigation.goBack() }} style={{ marginTop: 40, marginLeft: 20, position: "absolute", zIndex: 1 }}>
                <FontAwesomeIcon icon={faChevronLeft} size={35} color='#2D9CDB'></FontAwesomeIcon>
            </TouchableOpacity>

            <ScrollView>
                <View style={{ justifyContent: "center", flex: 1, width: "100%" }}>
                    <ImageBackground
                        source={{ uri: URL + image_url }}
                        style={{ width: "100%", height: 455 }}
                        imageStyle={{ borderBottomLeftRadius: 15, borderBottomRightRadius: 15 }}
                        resizeMode="cover"
                    >
                        <LinearGradient
                            colors={['#00000000', '#00000000', '#3B97CB']}
                            style={{ height: '100%', borderBottomLeftRadius: 15, borderBottomRightRadius: 15 }}>
                        </LinearGradient>
                    </ImageBackground>
                </View>
                <View style={{ marginTop: 30, paddingBottom: 30, marginRight: 19, marginLeft: 19 }}>
                    <View style={{ flexDirection: "row" }}>
                        <View style={{ backgroundColor: "#CAECFF", padding: 7, borderRadius: 5 }}>
                            <Text style={[style.robotonormal, { fontSize: 12, color: colors.blue }]}>{category}</Text>
                        </View>
                    </View>
                    <Text style={[style.robotobold, { fontSize: 44, color: "#3B97CB", marginTop: 12 }]}>{name}</Text>
                    <Text style={[style.robotobold, { fontSize: 27, color: colors.blue }]}>$ {price}/pc</Text>
                    <Text style={[style.robotonormal, { fontSize: 16, color: "#838383", marginTop: 12 }]}>{description}</Text>
                    <View style={{ marginTop: 35, flexDirection: "row", alignItems: "center", justifyContent: "center" }}>
                        <Button
                            icon={{
                                name: "minus",
                                type: "font-awesome",
                                size: 20,
                                color: "white"
                            }}
                            disabled={true}
                            buttonStyle={{ borderRadius: 50, height: 45, width: 45, backgroundColor: "#2D9CDB", marginRight: 15 }}></Button>
                        <TextInput editable={false} onChangeText={settotal} value={total} style={[style.inputtext, { flex: 0, width: 100, marginRight: 15, fontSize: 20 }]} keyboardType="numeric" textAlign="center"></TextInput>
                        <Button
                            icon={{
                                name: "plus",
                                type: "font-awesome",
                                size: 20,
                                color: "white"
                            }}

                            buttonStyle={{ borderRadius: 50, height: 45, width: 45, backgroundColor: "#2D9CDB" }}></Button>

                    </View>

                </View>

            </ScrollView >
        </View >);
}
export default ItemsView;