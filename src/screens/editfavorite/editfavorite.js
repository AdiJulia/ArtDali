import React from 'react';
import { TextInput, ScrollView, StyleSheet, Text, View, ImageBackground, Modal, TouchableOpacity, ActivityIndicator } from 'react-native';
import { Element3, RecordCircle, ArrowLeft, SearchNormal1 } from 'iconsax-react-native';
import { fontType, colors } from '../../assets/theme';
import { useState, useEffect } from 'react';
import { useNavigation } from "@react-navigation/native";
import axios from 'axios';


const EditFavorite = ({ route }) => {
    const navigation = useNavigation();
    const { blogId } = route.params;
    const [data, setdata] = useState({
        title: '',
        image: '',
    });
    const handleChange = (key, value) => {
        setdata({
            ...data,
            [key]: value,
        });
    };

    const [image, setImage] = useState(null);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        getBlogById();
    }, [blogId]);

    const getBlogById = async () => {
        try {
            const response = await axios.get(
                `https://65727de7d61ba6fcc01511a6.mockapi.io/artdaliapp/painting/${blogId}`,
            );
            setdata({
                title: response.data.title,
            })
            setImage(response.data.image)
            setLoading(false);
        } catch (error) {
            console.error(error);
        }
    };
    const handleUpdate = async () => {
        setLoading(true);
        try {
            await axios
                .put(`https://65727de7d61ba6fcc01511a6.mockapi.io/artdaliapp/painting/${blogId}`, {
                    title: data.title,
                    image,
                })
                .then(function (response) {
                    console.log(response);
                })
                .catch(function (error) {
                    console.log(error);
                });
            setLoading(false);
            navigation.navigate('Profile');
        } catch (e) {
            console.log(e);
        }
    };
    const handleDelete = async () => {
        await axios.delete(`https://65727de7d61ba6fcc01511a6.mockapi.io/artdaliapp/painting/${blogId}`)
            .then(() => {
                navigation.navigate('Profile');
            })
            .catch((error) => {
                console.error(error);
            });
    }
    return (
        <View style={addstyle.container}>
            <View style={styles.containertitle}>
                <ArrowLeft color='black' size={24} onPress={() => navigation.navigate("Profile")} />
                <Text style={styles.txttitle}>EditFavorite</Text>
            </View>
            <View style={addstyle.header}>
                <View style={addstyle.borderDashed}>
                    <TextInput
                        placeholder="Title"
                        value={data.title}
                        onChangeText={text => handleChange('title', text)}
                        placeholderTextColor={colors.grey(0.6)}
                        multiline
                        style={addstyle.title}
                    />
                </View>
                <View style={addstyle.borderDashed}>
                    <TextInput
                        placeholder="Image"
                        value={image}
                        onChangeText={(text) => setImage(text)}
                        placeholderTextColor={colors.grey(0.6)}

                        style={addstyle.title}
                    />
                </View>
            </View>
            <View style={styles.bottomBar}>
                {loading && (
                    <View style={styles.loadingOverlay}>
                        <ActivityIndicator size="large" color={colors.blue()} />
                    </View>
                )}
                <View style={styles.containerbutton}>
                    <TouchableOpacity style={styles.button} onPress={handleUpdate}>
                        <Text style={styles.buttontext}>Update</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button} onPress={handleDelete}>
                        <Text style={styles.buttontext}>Delete</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}

const addstyle = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF',
    },
    header: {
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: colors.white(),
        height: 170,
        paddingHorizontal: 0,
        marginBottom: 15,
        marginTop: -10,
    },
    borderDashed: {
        borderStyle: "dashed",
        marginTop: 20,
        borderWidth: 1,
        borderRadius: 5,
        padding: 10,
        borderColor: colors.grey(0.4),
    },
    title: {
        fontSize: 16,
        fontFamily: fontType["Pjs-SemiBold"],
        color: colors.black(),
        padding: 0,
        width: 330,
    },
    content: {
        fontSize: 12,
        fontFamily: fontType["Pjs-Regular"],
        color: colors.black(),
        padding: 0,
    },
    button: {
        paddingHorizontal: 14,
        paddingVertical: 10,
        alignItems: 'center',
        backgroundColor: colors.grey(),
        marginHorizontal: 5
    },
    buttontext: {
        fontFamily: fontType['nunito-medium'],
        fontSize: 14,
        lineHeight: 18,
        color: colors.white(),
    },
});


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.white(),
    },
    loadingOverlay: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: colors.white(0.0),
        justifyContent: 'center',
        alignItems: 'center',
    },
    containertitle: {
        paddingHorizontal: 24,
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 10,
        height: 72,
        elevation: 8,
        color: colors.black(),
    },
    txttitle: {
        fontSize: 24,
        fontFamily: fontType['nunito-medium'],
        color: colors.black(),
        textAlign: 'center',
        marginTop: 6,
        marginBottom: 5,
        marginLeft: 23,
    },
    txtketerangan: {
        fontSize: 16,
        fontFamily: fontType['inter-inter'],
        color: colors.black(),
        textAlign: 'left',
        marginBottom: 10,
        marginLeft: 23,
    },
    line: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: 0.5,
        width: 350,
        backgroundColor: colors.black(),
        elevation: 3,
        marginBottom: 10,
        marginLeft: 20,
    },
    floatingButton: {
        backgroundColor: colors.blue(),
        padding: 15,
        position: 'absolute',
        bottom: 24,
        right: 24,
        borderRadius: 10,
        shadowColor: colors.blue(),
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.3,
        shadowRadius: 4.65,

        elevation: 8,
    },
    bottomBar: {
        backgroundColor: colors.white(),
        alignItems: "flex-end",
        paddingHorizontal: 24,
        paddingVertical: 10,
    },
    containerbutton: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        backgroundColor: colors.white(),
    },
    button: {
        paddingHorizontal: 20,
        paddingVertical: 10,
        backgroundColor: colors.grey(),
        borderRadius: 3,
        justifyContent: "center",
        alignItems: "center",
        marginLeft: 10,
    },
    buttontext: {
        fontSize: 16,
        fontFamily: fontType["inter-inter"],
        color: colors.white(),
    },
});

export default EditFavorite;
