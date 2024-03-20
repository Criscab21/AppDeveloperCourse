import { View, Text, StyleSheet, Pressable, FlatList, SafeAreaView } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { colors } from '../utils/globals/colors';

export default function Categories ({onHandlerCategory, categories}) {
       
    return (
        <SafeAreaView contentContainerStyle={{flexDirection:"column"}}>
            <View style={styles.mainContainer}>
                <FlatList
                    data={categories}
                    numColumns={3}
                    keyExtractor={(item) => item.name}
                    renderItem={({ item }) =>
                    (
                        <View style={styles.card}>
                            <Pressable style={[styles.iconContainer, {backgroundColor:item.color}]} 
                                onPress={() => {                                                                          
                                    onHandlerCategory(item.name, item.iconName, item.color)                                    
                                }}>
                                <MaterialCommunityIcons name={item.iconName} size={20} color={"white"}/>
                            </Pressable>
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
    mainContainer: {  
        borderRadius: 20,
        marginTop: "4%",
        paddingVertical:"5%",  
        marginHorizontal:"10%",  
        backgroundColor: colors.componentBackground,  
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