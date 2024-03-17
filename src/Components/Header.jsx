import { Pressable, StyleSheet, Text, View } from 'react-native';
import { DrawerActions, useNavigation } from '@react-navigation/native';
import fonts, { fontCollection } from '../utils/globals/fonts';
import { AntDesign } from '@expo/vector-icons';
import { useSelector } from 'react-redux';
import { colors } from '../utils/globals/colors';
import { useEffect, useState } from 'react';

export const Header = ({navigation}) => {
    
    const nav = useNavigation()
    const expenses = useSelector((state) => state.spends);
    const income = useSelector((state) => state.income);
    const [total, setTotal] = useState(0)
    
    useEffect(() => {                
        setTotal(Number(income.value) - Number(expenses.value));
    },[expenses, income]);
    
    return(
        <View style={styles.headercontainer}>
            <View style={styles.titleContainer}>
                <View style={styles.menu}>
                    <Pressable onPress={ ()=> nav.dispatch(DrawerActions.openDrawer())}>
                        <AntDesign name='menu-fold' size={25} color={'#b4cded'}/>
                    </Pressable>
                </View> 
                <Pressable style={styles.totalContainer} onPress={ () => navigation.navigate('GastosHome')}>                    
                        <Text style={{fontSize: 15, color: "silver", textAlign:"center", fontFamily:fonts.DosisBold}}>
                            Balance general
                        </Text>
                        {total >= 0 
                            ? 
                            <Text style={{
                                    fontSize: 30, 
                                    color: colors.greenArrowUp}}>
                                $ {total}
                            </Text> 
                            :
                            <Text style={{
                                    fontSize: 30, 
                                    color: colors.redArrowDown}}>
                                $ {total}
                            </Text> 
                        }                                        
                </Pressable>   
            </View>             
        </View>
    )
     
}


const styles = StyleSheet.create({
    headercontainer: {                
        backgroundColor: colors.lavenderSecundaryColor,        
        paddingBottom:10,                    
    },     
    titleContainer: {        
        flexDirection:"row", 
        height: 80,         
        backgroundColor: colors.payneGrayPrincipalColor,        
        alignItems:"center",         
        borderColor: "black",
        borderWidth: 1,        
    },
    menu: {
        top: 10,
        padding:"5%"
    },     
    totalContainer: {
        alignSelf: 'flex-end',
        width: "55%",
        backgroundColor: colors.payneGrayPrincipalColor,
        alignItems: "center",
        borderBottomLeftRadius: 100,
        borderBottomRightRadius: 100,
        top: 20, 
        left: "33%"               
    },    
  });