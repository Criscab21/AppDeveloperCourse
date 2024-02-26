import { useEffect, useState } from 'react'
import { TextInput, View, Button, Text, ScrollView, FlatList, StyleSheet, Pressable } from 'react-native'
import PieChart from 'react-native-pie-chart';
import { useSelector } from 'react-redux';


export default function PieChartHome ({title, color, items}) {
    
    const widthAndHeight = 200; 
    const sliceColor = ['red', 'blue', 'yellow', 'green'];
    const [categoryCount, setCategoryCount] = useState([
        salud = 10,
        generales = 15,
        alimentos = 38,
        cafe = 5
    ]);
    

    if(color === "red") {
        return(
            <View style={styles.container}>
                <Text style={styles.titleContainer}>
                    {title}
                </Text>            
                <Text style={styles.numberSpends}>
                    $ {items}
                </Text>            
                <View style={styles.chart}>
                    <PieChart
                        widthAndHeight={widthAndHeight}
                        series={categoryCount}
                        sliceColor={sliceColor}
                        coverRadius={0.60}
                        coverFill={'gray'}
                    />
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
                    $ {items}
                </Text>            
                <View style={styles.chart}>
                    <PieChart
                        widthAndHeight={widthAndHeight}
                        series={categoryCount}
                        sliceColor={sliceColor}
                        coverRadius={0.60}
                        coverFill={'gray'}
                    />
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