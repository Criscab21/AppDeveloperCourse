import { View, Text, StyleSheet, Pressable } from 'react-native';
import { PieChart } from "react-native-gifted-charts";
import { colors } from '../utils/globals/colors';
import { FlatList } from 'react-native-gesture-handler';
import { MaterialCommunityIcons } from '@expo/vector-icons';


export default function PieChartHome ({title, color, total, categories, navigation, navigateTo}) {
    
    const renderLegend = (text, color) => {
        return (
            <View style={{
                width: 70,
                alignItems:'center',                
            }}>
                <View
                    style={{
                        height: 18,
                        width: 18,                        
                        borderRadius: 4,
                        backgroundColor: color,
                    }}
                />  
                <Text style={{color: 'black', fontSize: 15}}>
                    {text}
                </Text>
            </View>
        )
    }

    return(
        <View style={{paddingTop:10}}>
            <View>
                <Text style={{textAlign: "center", fontSize: 18, color: "black", fontWeight: 'bold'}}>
                    {title}
                </Text>
            </View>                
            <View style={styles.chart}>
                <PieChart       
                    strokeColor={colors.componentBackground}        
                    strokeWidth={2}
                    donut                        
                    innerCircleColor={colors.componentBackground}
                    showValuesAsLabels={true}
                    textSize={14}                                                                         
                    showText                        
                    centerLabelComponent={() => {
                        return (
                            <View style={{justifyContent: 'center', alignItems: 'center'}}>
                                <Text style={{fontSize: 15, color: color, fontWeight: 'bold'}}>
                                    ${total}
                                </Text>
                            </View>
                        )
                    }}                                    
                    radius={100}                                
                    data = { categories } />
            </View> 
            <Pressable style={{backgroundColor: color, borderRadius: 100, alignSelf: 'center'}} onPress={() => navigation.navigate(navigateTo)}>
                <MaterialCommunityIcons name='plus-circle-outline' size={50} color="black"/>
            </Pressable>    
            <View style={{                                        
                    alignItems: 'center',                                               
                    marginTop: 5,     
                }}>
                <FlatList
                    data={categories}
                    numColumns={3}
                    keyExtractor={(item) => item.name}
                    renderItem={({ item }) => {
                        if(!item.value == 0) return renderLegend(item.name, item.color)                                                        
                    }}
                />
            </View>
        </View>
    )    
    
}

const styles = StyleSheet.create({        
    chart: {
        alignItems:"center",
        paddingTop:20,
        paddingBottom: 20,           
    },     
})