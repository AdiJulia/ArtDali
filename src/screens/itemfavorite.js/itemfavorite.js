import React, { useState, useCallback } from 'react';
import { StyleSheet, Text, View, Image, ImageBackground, TouchableOpacity, ActivityIndicator, ScrollView, Button } from 'react-native';
import { fontType, colors } from '../../assets/theme';
import { useNavigation, useFocusEffect } from '@react-navigation/native';

export const ItemFavorite = ({ item }) => {
    const navigation = useNavigation();
    return (
        <View style={style.ListPaint}>
            <ScrollView>
                <View style={style.columnpaint}>
                    <TouchableOpacity
                        style={style.container}
                        onPress={() => navigation.navigate('EditFavorite', { blogId: item.id })} >
                        <View style={style.contentCard}>
                            <Image style={style.cardImage} source={{ uri: item.image }} />
                        </View>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </View>
    )
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
    },
    contentCard: {
        height: 200,
        width: 345,
        left: 23,
        right: 23,
        backgroundColor: colors.black(0.1),
        borderRadius: 10,
        flexDirection: 'row',
        marginBottom: 10
    },
    cardImage: {
        height: '100%',
        width: '100%',
        right: 0,
        justifyContent: 'center',
        position: 'absolute',
    },
    cardTitle: {
        height: 80,
        width: '63.8%',
        left: 115,
        bottom: 25,
        borderTopRightRadius: 10,
        borderBottomRightRadius: 10,
        flexDirection: 'column',
        paddingHorizontal: 10,
        paddingVertical: 10,
        justifyContent: 'center'
    },
    textTitle: {
        fontFamily: fontType['nunito-medium'],
        fontSize: 20,
        color: colors.black(),
        right: 10
    },
    textDescription: {
        fontFamily: fontType['nunito-medium'],
        fontSize: 20,
        color: colors.black(),
        right: 10
    },
    namestyle: {
        backgroundColor: 'grey',
        padding: 10,
        textAlign: 'center',
        textDecorationColor: 'white',
    },
    nameText: {
        fontFamily: fontType['cinzel-standart'],
        fontSize: 14,
        lineHeight: 18,
        color: colors.black(),
        textAlign: 'center',
    },
    ListPaint: {
        paddingVertical: 0,
        flex: 1,
        justifyContent: 'space-between',
    },
    columnpaint: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
})