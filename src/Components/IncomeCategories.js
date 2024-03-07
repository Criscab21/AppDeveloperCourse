import { useDispatch, useSelector } from "react-redux";
import { View, Text, SafeAreaView, FlatList, StyleSheet, Pressable } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons'

export default function IncomeCategories ({selectCategory}) {
    
    const incomeCategories = useSelector((state) => state.incomeCategories);    
    
    return (
        <SafeAreaView contentContainerStyle={{flexDirection:"column"}}>
            <View style={styles.flatlistCard}>
                <FlatList
                    data={incomeCategories.incomeCategories}
                    numColumns={3}
                    keyExtractor={(item) => item.name}
                    renderItem={({ item }) =>
                    (
                        <View style={styles.card}>
                            <View style={[styles.iconContainer, {backgroundColor:item.color}]}>
                                <Pressable onPress={() => selectCategory(item.name)}>
                                    <MaterialCommunityIcons name={item.iconName} size={20} color={"white"}/>
                                </Pressable>
                            </View>                            
                            <Text style={styles.text}>
                                {item.name}                                
                            </Text> 
                        </View>
                    )}
                />                
            </View>
        </SafeAreaView>               
    )
}

const styles = StyleSheet.create({  
    flatlistCard: {
        marginBottom:"26%",        
        paddingVertical:10 ,
    },    
    card: {     
        width:"33%",              
        paddingHorizontal:"5%",            
        alignItems:"center",        
        paddingVertical:5,
        marginBottom:20,        
    },   
    iconContainer: {        
        alignItems:"center",
        justifyContent: 'center',
        width: 60,   
        height: 60,   
        borderWidth:1,        
        borderRadius:100,                  
    },     
    text: {
        color:"gray",
        fontSize: 15,
    }
  });