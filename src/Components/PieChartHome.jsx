import { TextInput, View, Button, Text, ScrollView, FlatList, StyleSheet, Pressable } from 'react-native';
import { useSelector } from 'react-redux';
import { PieChart } from "react-native-gifted-charts";


export default function PieChartHome ({title, color}) {
    
    const totalIncome = useSelector((state) => state.income)
    const totalSpends = useSelector((state) => state.spends);
    const category = useSelector((state) => state.categories);    
    const incomeCategory = useSelector((state) => state.incomeCategories)    
    
    
    if(color === "red") {
        return(
            <View style={styles.container}>
                <Text style={styles.titleContainer}>
                    {title}
                </Text>            
                <Text style={styles.numberSpends}>
                    $ {totalSpends.value}
                </Text>            
                <View style={styles.chart}>
                    <PieChart       
                        strokeColor="white"        
                        strokeWidth={4}
                        donut      
                        innerCircleColor="#414141"
                        innerCircleBorderWidth={4}
                        showValuesAsLabels={true}
                        showText
                        textSize={18}                       
                        innerCircleBorderColor={'white'}    
                        radius={100}                                
                        data = { category.categories } />
                </View>
            </View>
        )
    } else {
        return (
            <View style={styles.container}>
                <Text style={styles.titleContainer}>
                    {title}
                </Text>            
                <Text style={styles.numberIncome}>
                    $ {totalIncome.total}
                </Text>            
                <View style={styles.chart}>
                    <PieChart       
                        strokeColor="white"        
                        strokeWidth={4}
                        donut      
                        innerCircleColor="#414141"
                        innerCircleBorderWidth={4}
                        showValuesAsLabels={true}
                        showText
                        textSize={18}                       
                        innerCircleBorderColor={'white'}    
                        radius={100}                                
                        data = { incomeCategory.incomeCategories } />
                </View>
            </View>
        )

    }   
           
}

const styles = StyleSheet.create({
    container: {                
        paddingTop:10,                           
    },
    titleContainer: {
        textAlign:"center",
        fontSize:20,
        color:"#0a210f",
    },      
    chart: {
        alignItems:"center",
        paddingTop:20
    },
    numberSpends:{
        textAlign:"center",
        fontSize:25,
        color:"red",
    },
    numberIncome: {
        textAlign:"center",
        fontSize:25,
        color:"gold"
    }

})