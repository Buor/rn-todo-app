import React from 'react';
import {View, StyleSheet, Modal, Button, TextInput} from 'react-native'
import {THEME} from "../theme";

interface IProps {
    onCancel: Function
    visible: boolean
}

export const EditModal: React.FC<IProps> = ({visible, onCancel}) => {
    return (
        <Modal visible={visible} animationType={'slide'} transparent={false}>
            <View style={styles.wrap}>
                <TextInput style={styles.input}
                           placeholder={'Введите название'}
                           autoCapitalize={'none'}
                           autoCorrect={false}
                           maxLength={64}
                />
                <View style={styles.buttons}>
                    <Button onPress={() => onCancel()} title={'Отменить'} color={THEME.DANGER_COLOR}/>
                    <Button onPress={() => {
                    }} title={'Сохранить'}/>
                </View>
            </View>
        </Modal>

    )
}

const styles = StyleSheet.create({
    wrap: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    input: {
        padding: 10,
        borderBottomColor: THEME.MAIN_COLOR,
        borderBottomWidth: 2,
        width: '80%'
    },
    buttons: {
        width: '100%',
        marginTop: 10,
        flexDirection: 'row',
        justifyContent: 'space-around'
    }
})