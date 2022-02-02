import { faArrowLeft, faChevronLeft, faStickyNote } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import React, { useState } from 'react';
import { Dimensions, View, Image, ScrollView, TouchableOpacity, ImageBackground, TextInput, ToastAndroid } from 'react-native';
import { Input, Text, Button } from 'react-native-elements';
import LinearGradient from 'react-native-linear-gradient';
import style, { colors } from '../../globalstyles';
import MasonryList from '@react-native-seoul/masonry-list';
import Modal from 'react-native-modal';
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
import axiosFetch from '../../base_url';

function AddProductView(props) {
    const { height, width } = Dimensions.get('window');
    const [name, setName] = useState('')
    const [description, setDescription] = useState('')
    const [sku, setSku] = useState('')
    const [stock, setStock] = useState('')
    const [category, setCategory] = useState(0)
    const [price, setPrice] = useState('')
    const [imageLink, setImageLink] = useState('')
    const [imageData, setImageData] = useState('')
    const categories = ['Wash and Fold', 'Dry Clean', 'Home', 'Others']

    const [isModalCameraVisible, setModalVisible4] = useState(false);
    const toggleModalCamera = () => {
        setModalVisible4(!isModalCameraVisible);
    };
    const options = {
        saveToPhotos: true,
        mediaType: 'photo',
        includeBase64: true,
        quality: 0.5,
    }

    const bukakamera = () => {
        toggleModalCamera()
        launchCamera(options, (response) => {
            if (response.didCancel) {
                console.log('User cancelled image picker');
            } else if (response.errorCode) {
                console.log('ImagePicker Error: ', response.errorCode);
                ToastAndroid.show(response.errorMessage == "Permissions weren't granted" ? "Anda harus mengizinkan/permission pada aplikasi di pengaturan" : "", ToastAndroid.SHORT)
            } else {
                if (response.assets) {
                    setImageLink(response.assets[0].uri)
                    setImageData(response.assets[0].base64)
                    console.log(response.assets[0].base64)
                }
            }
        });
    }
    const bukagaleri = () => {
        toggleModalCamera()
        launchImageLibrary(options, (response) => {
            if (response.didCancel) {
                console.log('User cancelled image picker');
            } else if (response.errorCode) {
                console.log('ImagePicker Error: ', response.errorCode);
                ToastAndroid.show(response.errorMessage == "Permissions weren't granted" ? "Anda harus mengizinkan/permission pada aplikasi di pengaturan" : "", ToastAndroid.SHORT)
            } else {
                if (response.assets) {
                    setImageLink(response.assets[0].uri)
                    setImageData(response.assets[0].base64)
                }
            }
        });
    }
    const [isBusy, setIsBusy] = useState(false)
    const addProduct = async () => {
        if (isBusy) {
            return
        }
        setIsBusy(true)
        if (name == "" || description == "" || sku == "" || stock == "" || price == "") {
            ToastAndroid.show("Please fill all the fields", ToastAndroid.SHORT)
            setIsBusy(false)
            return
        }
        try {
            const response = await axiosFetch.post("/product/insert", {
                name: name,
                description: description,
                sku: sku,
                stock: stock,
                category: categories[category],
                price: price,
                base64_image: imageData
            })
            const json = response.data
            console.log(json)
            setIsBusy(false)
            if (json.success) {
                props.navigation.reset({
                    index: 0,
                    routes: [{ name: 'Homepage' }],
                });
            }
        } catch (error) {
            console.log(error)
            ToastAndroid.show(error.message, ToastAndroid.SHORT)
            setIsBusy(false)
        }
        setIsBusy(false)
    }
    return (
        <View style={style.main}>
            <Modal isVisible={isModalCameraVisible}
                onBackdropPress={toggleModalCamera}
                onBackButtonPress={toggleModalCamera}
                useNativeDriver={true}
            >
                <View style={style.content}>
                    <View style={{ flex: 0 }}>
                        <TouchableOpacity onPress={bukakamera} style={[style.card, { flexDirection: "row", alignItems: "center", flex: 0, borderWidth: 1, borderColor: "black" }]}>
                            <Text style={[style.robotonormal, { fontSize: 14, height: 25, flex: 1, textAlign: "center" }]}>Open Camera</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={bukagaleri} style={[style.card, { flexDirection: "row", marginTop: 15, alignItems: "center", flex: 0, borderWidth: 1, borderColor: "black" }]}>
                            <Text style={[style.robotonormal, { fontSize: 14, height: 25, flex: 1, textAlign: "center" }]}>Open Gallery</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>


            <ScrollView>

                <View style={{ marginTop: 30, paddingBottom: 30, marginRight: 19, marginLeft: 19 }}>
                    <Text style={[style.robotobold, { fontSize: 37, color: "#303030" }]}>Add New Product</Text>
                    <Text style={[style.robotonormal, { fontSize: 18, color: "#3B97CB", marginTop: 30 }]}>Product Name</Text>
                    <TextInput onChangeText={setName} value={name} style={[style.inputtext, { fontSize: 14, marginTop: 5 }]} ></TextInput>
                    <Text style={[style.robotonormal, { fontSize: 18, color: "#3B97CB", marginTop: 20 }]}>Description</Text>
                    <TextInput onChangeText={setDescription} value={description} multiline={true} textAlignVertical="top" style={[style.inputtext, { fontSize: 14, marginTop: 5, height: 100 }]} ></TextInput>
                    <Text style={[style.robotonormal, { fontSize: 18, color: "#3B97CB", marginTop: 20 }]}>SKU</Text>
                    <TextInput onChangeText={setSku} value={sku} style={[style.inputtext, { fontSize: 14, marginTop: 5 }]} ></TextInput>
                    <Text style={[style.robotonormal, { fontSize: 18, color: "#3B97CB", marginTop: 20 }]}>Stock</Text>
                    <TextInput onChangeText={setStock} value={stock} keyboardType="numeric" style={[style.inputtext, { fontSize: 14, marginTop: 5, width: 100 }]}></TextInput>
                    <Text style={[style.robotonormal, { fontSize: 18, color: "#3B97CB", marginTop: 20 }]}>Category</Text>
                    <View style={{ marginTop: 5 }}>
                        <MasonryList
                            data={categories}
                            keyExtractor={(item, index) => index.toString()}
                            numColumns={2}
                            showsVerticalScrollIndicator={false}
                            renderItem={({ item, i }) => <TouchableOpacity key={i.toString()} onPress={() => { setCategory(i) }} style={{ flexDirection: "row", padding: 5 }}>
                                <View style={{ backgroundColor: i == category ? "#3B97CB" : "#CAECFF", padding: 12, borderRadius: 5 }}>
                                    <Text style={[style.robotonormal, { fontSize: 18, color: i == category ? "white" : colors.blue }]}>{item}</Text>
                                </View>
                            </TouchableOpacity>}
                        />
                    </View>
                    <Text style={[style.robotonormal, { fontSize: 18, color: "#3B97CB", marginTop: 20 }]}>Price</Text>
                    <TextInput onChangeText={setPrice} value={price} keyboardType="numeric" style={[style.inputtext, { fontSize: 14, marginTop: 5, width: 150 }]} ></TextInput>
                    <TouchableOpacity onPress={toggleModalCamera} style={{ borderRadius: 30, backgroundColor: "white", width: "100%", aspectRatio: 1, marginTop: 30, justifyContent: "center", alignItems: "center" }}>
                        {imageLink == "" ? (
                            <View style={{ alignItems: "center" }}>
                                <Image source={require('../../assets/images/empty.png')}
                                    style={{ width: 150, height: 150 }}
                                >
                                </Image>
                                <Text style={[style.robotobold, { fontSize: 24, color: "#3B97CB", marginTop: 20, textDecorationLine: "underline" }]}>Upload image here</Text>
                            </View>
                        ) : (
                            <Image source={{ uri: imageLink }}
                                style={{ width: "100%", height: "100%", borderRadius: 30 }}
                            >
                            </Image>
                        )}
                    </TouchableOpacity>
                    <View style={{ marginTop: 35 }}>
                        <Button
                            onPress={addProduct}
                            title={"Publish"} buttonStyle={[style.button]} titleStyle={[style.buttontext, { marginLeft: 5 }]}></Button>
                    </View>
                </View>

            </ScrollView >
        </View >);
}
export default AddProductView;