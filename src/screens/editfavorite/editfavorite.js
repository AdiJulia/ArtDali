import React from 'react';
import { TextInput, StyleSheet, Text, blogData, View, TouchableOpacity, ActivityIndicator } from 'react-native';
import { AddSquare, ArrowLeft, Add } from 'iconsax-react-native';
import { fontType, colors } from '../../assets/theme';
import { useState, useEffect, useRef } from 'react';
import { useNavigation } from "@react-navigation/native";
import firestore from '@react-native-firebase/firestore';
import storage from '@react-native-firebase/storage';
import FastImage from 'react-native-fast-image';
import ImagePicker from 'react-native-image-crop-picker';


const EditFavorite = ({ route }) => {
    const navigation = useNavigation();
    const { blogId } = route.params;

    const [blogData, setBlogdata] = useState({
        title: '',
        image: '',
    });

    const [selectedPaint, setSelectedPaint] = useState(null);
    const [image, setImage] = useState(null);
    const [loading, setLoading] = useState(true);
    const [oldImage, setOldImage] = useState(null);

    const handleChange = (key, value) => {
        setBlogdata({
            ...blogData,
            [key]: value,
        });
    };

    useEffect(() => {
        const subscriber = firestore()
            .collection('paint')
            .doc(blogId)
            .onSnapshot(documentSnapshot => {
                const blogData = documentSnapshot.data();
                if (blogData) {
                    console.log('Paint data: ', blogData);
                    setBlogdata({
                        title: blogData.title,
                    });
                    setOldImage(blogData.image);
                    setImage(blogData.image);
                    setLoading(false);
                } else {
                    console.log(`Paint with ID ${blogId} not found.`);
                }
            });
        setLoading(false);
        return () => subscriber();
    }, [blogId]);

    const handleImagePick = async () => {
        ImagePicker.openPicker({
            width: 1920,
            height: 1080,
            cropping: true,
        })
            .then(image => {
                console.log(image);
                setImage(image.path);
            })
            .catch(error => {
                console.log(error);
            });
    };

    const handleUpdate = async () => {
        setLoading(true);
        let filename = image.substring(image.lastIndexOf('/') + 1);
        const extension = filename.split('.').pop();
        const name = filename.split('.').slice(0, -1).join('.');
        filename = name + Date.now() + '.' + extension;
        const reference = storage().ref(`blogimages/${filename}`);
        try {
            if (image !== oldImage && oldImage) {
                const oldImageRef = storage().refFromURL(oldImage);
                await oldImageRef.delete();
            }
            if (image !== oldImage) {
                await reference.putFile(image);
            }
            const url =
                image !== oldImage ? await reference.getDownloadURL() : oldImage;
            await firestore().collection('paint').doc(blogId).update({
                title: blogData.title,
                image: url,
            });
            setLoading(false);
            console.log('Paint Updated!');
            navigation.navigate('Profile', { blogId });
        } catch (error) {
            console.log(error);
        }
    };

    const handleDelete = async () => {
        setLoading(true);
        try {
            await firestore()
                .collection('paint')
                .doc(blogId)
                .delete()
                .then(() => {
                    console.log('Paint deleted!');
                });
            if (selectedPaint?.image) {
                const imageRef = storage().refFromURL(selectedPaint?.image);
                await imageRef.delete();
            }
            console.log('Paint deleted!');
            setSelectedPaint(null);
            setLoading(false)
            navigation.navigate('Profile');
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <View style={addstyle.container}>
            <View style={styles.containertitle}>
                <ArrowLeft color='black' size={24} onPress={() => navigation.navigate("Profile")} />
                <Text style={styles.txttitle}>EditFavorite</Text>
            </View>
            <ScrollView>
                <View style={addstyle.header}>
                    <View style={addstyle.borderDashed}>
                        <TextInput
                            placeholder="Title"
                            value={blogData.title}
                            onChangeText={text => handleChange('title', text)}
                            placeholderTextColor={colors.grey(0.6)}
                            multiline
                            style={addstyle.title}
                        />
                    </View>
                    {image ? (
                        <View style={{ position: 'relative' }}>
                            <FastImage
                                style={{ width: '100%', height: 127, borderRadius: 5 }}
                                source={{
                                    uri: image,
                                    headers: { Authorization: 'someAuthToken' },
                                    priority: FastImage.priority.high,
                                }}
                                resizeMode={FastImage.resizeMode.cover}
                            />
                            <TouchableOpacity
                                style={{
                                    position: 'absolute',
                                    top: -5,
                                    right: -5,
                                    backgroundColor: colors.blue(),
                                    borderRadius: 25,
                                }}
                                onPress={() => setImage(null)}>
                                <Add
                                    size={20}
                                    variant="Linear"
                                    color={colors.white()}
                                    style={{ transform: [{ rotate: '45deg' }] }}
                                />
                            </TouchableOpacity>
                        </View>
                    ) : (
                        <TouchableOpacity onPress={handleImagePick}>
                            <View
                                style={[
                                    addstyle.borderDashed,
                                    {
                                        gap: 10,
                                        paddingVertical: 30,
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                    },
                                ]}>
                                <AddSquare color={colors.grey(0.6)} variant="Linear" size={42} />
                                <Text
                                    style={{
                                        fontFamily: fontType['nunito-standart'],
                                        fontSize: 12,
                                        color: colors.grey(0.6),
                                    }}>
                                    Upload Thumbnail
                                </Text>
                            </View>
                        </TouchableOpacity>
                    )}
                </View>
            </ScrollView>
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
