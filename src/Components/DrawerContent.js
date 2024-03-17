import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import { Avatar, Title } from 'react-native-paper';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { View, Text, StyleSheet } from 'react-native';
import DrawerItems from './DrawerItems';
import { useDispatch, useSelector } from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { deleteSession } from '../utils/db';
import { clearUser } from '../features/auth/authSlice';
import { colors } from '../utils/globals/colors';


const DrawerContent = (props) => {    
    const value = useSelector((state) => state.auth.value);
    const dispatch = useDispatch()
    return (
        <View style={{flex: 1, backgroundColor: colors.lavenderSecundaryColor}}>
            <DrawerContentScrollView style={{bottom: 4}}{...props}>
                <View>
                    <TouchableOpacity activeOpacity={0.8}>
                        <View style={styles.userInfoSection}>
                            <View style={{flexDirection: 'row', paddingVertical:10}}>
                                <Avatar.Image
                                    source={{uri: value.imageCamera}}
                                    size={50}
                                    style={{marginTop: 5}}
                                />
                                <View style={{marginLeft: 10, flexDirection: 'column'}}>                                    
                                    <Title style={styles.title}>{value.userName}</Title>                                    
                                    <Text style={styles.caption}>
                                        {value.email}
                                    </Text>
                                </View>
                            </View>
                        </View>
                    </TouchableOpacity>  
                    <View style={styles.drawerSection}>
                        <DrawerItems/>
                    </View>                  
                </View>
            </DrawerContentScrollView>
            <View style={styles.bottomDrawerSection}>          
                <DrawerItem
                    onPress={() => {
                        dispatch(clearUser());
                        deleteSession();
                    }}
                    icon={({size}) => (
                        <Icon name="exit-to-app" size={size} />
                    )}
                    label="Salir"
                />
            </View>
        </View>
    )
}

export default DrawerContent

const styles = StyleSheet.create({    
    userInfoSection: {
        paddingLeft: 20,
        backgroundColor: colors.payneGrayPrincipalColor,
    },
    title: {
        fontSize: 16,
        marginTop: 3,
        color: "silver",
        fontWeight: 'bold',
    },
    caption: {
        fontSize: 13, 
        color: colors.licoricePrincipalText,
        lineHeight: 14,
    },          
    drawerSection: {               
        borderBottomWidth: 0,
        borderBottomColor: colors.cadetGrayTertiaryColor,
        borderBottomWidth: 1,
    },
    bottomDrawerSection: {
        marginBottom: 15,
        borderTopColor: colors.cadetGrayTertiaryColor,
        borderTopWidth: 1,
        borderBottomColor: colors.cadetGrayTertiaryColor,
        borderBottomWidth: 1,
    },   
})