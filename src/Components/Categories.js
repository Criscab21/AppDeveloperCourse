import { useDispatch, useSelector } from "react-redux";
import { View, Text, ScrollView, StyleSheet, Pressable } from 'react-native';

export default function Categories ({selectCategory}) {
    
    const categories = useSelector((state) => state.categories);
    const dispatch = useDispatch()
    
    return (
        <ScrollView style={styles.flatlistCard}>
            {categories.categories.map((item) => {
                return(
                    <View style={styles.card}>
                        <View style={styles.textCard}>
                            <Pressable onPress={() => selectCategory(item.name)}>
                                <Text style={styles.text}>
                                    {item.name}                                
                                </Text> 
                            </Pressable>
                        </View>                            
                    </View>
                )
            })}         
        </ScrollView>       
    )
}

const styles = StyleSheet.create({  
    flatlistCard: {
        marginBottom:"26%",        
        paddingVertical:10 ,
    },    
    card: {
        borderWidth:1,        
        backgroundColor: "gray",
        borderRadius:20,
        alignItems:"center",        
        paddingVertical:5,
        marginBottom:20,
        marginHorizontal:"10%",

    },    
    textCard: {
        alignItems:'center'
    },
    text: {
        color:"#b4cded",
        fontSize: 15,
    }
  });