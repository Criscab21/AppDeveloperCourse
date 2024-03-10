import { useSelector } from "react-redux";
import { View, Text, StyleSheet, Pressable, FlatList, SafeAreaView } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons'

export default function Categories ({selectCategory}) {
    
    const categories = useSelector((state) => state.categories);    
    
    return (
        <SafeAreaView contentContainerStyle={{flexDirection:"column"}}>
            <View style={styles.mainContainer}>
                <FlatList
                    data={categories.categories}
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
    mainContainer: {  
        paddingVertical:"5%",  
        marginHorizontal:"10%",    
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