import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import { Avatar, Title } from 'react-native-paper';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { View, Text, StyleSheet } from 'react-native';
import DrawerItems from './DrawerItems';
import { useSelector } from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'


const DrawerContent = (props) => {    
    const value = useSelector((state) => state.auth.value);
    return (
        <View style={{flex: 1}}>
            <DrawerContentScrollView {...props}>
                <View style={styles.drawercontent}>
                    <TouchableOpacity activeOpacity={0.8}>
                        <View style={styles.userInfoSection}>
                            <View style={{flexDirection: 'row', marginTop:15}}>
                                <Avatar.Image
                                    source={{uri: value.imageCamera}}
                                    size={50}
                                    style={{marginTop: 5}}
                                />
                                <View style={{marginLeft: 10, flexDirection: 'column'}}>                                    
                                    <Title style={styles.title}>Cris</Title>                                    
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
    drawercontent: {
        flex: 1,
    },
    userInfoSection: {
        paddingLeft: 20,
    },
    title: {
        fontSize: 16,
        marginTop: 3,
        fontWeight: 'bold',
    },
    caption: {
        fontSize: 13, 
        lineHeight: 14,
    },          
    drawerSection: {
        marginTop: 15,
        borderBottomWidth: 0,
        borderBottomColor: '#dedede',
        borderBottomWidth: 1,
    },
    bottomDrawerSection: {
        marginBottom: 15,
        borderTopColor: '#dedede',
        borderTopWidth: 1,
        borderBottomColor: '#dedede',
        borderBottomWidth: 1,
    },   
})