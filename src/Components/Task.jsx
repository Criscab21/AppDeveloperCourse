import { useState } from 'react'
import { TextInput, View, Button, Text, ScrollView, FlatList } from 'react-native'
import uuid from 'react-native-uuid';

export default function Task () {

    const [newTask, setNewTask] = useState({
        title: "",
        description: "",
        id: ""
    })

    const [tasks, setTasks] = useState([]);

    const addTask = () => {
        setTasks([...tasks, newTask])
        setNewTask({
            title: "",
            description: "",
            id: ""
        })        
    }

    const onHandlerTitle = (t) => {
        const id = uuid.v4();
        setNewTask({...newTask, title:t, id:id})
    }

    const onHandlerDescription = (t) => {
        setNewTask({...newTask, description:t})
    }

    const deleteItem = (id) => {
        setTasks(tasks.filter(task => task.id != id));
        console.log(`task ${id} deleted`);
    }


    return (
        <View>
            <View>
                <TextInput value={newTask.title} onChangeText={onHandlerTitle} placeholder='Ingresar titulo'/>
                <TextInput value={newTask.description} onChangeText={onHandlerDescription} placeholder='Ingresar descripcion'/>
                <Button title='Crear lista de compras' onPress={addTask}/>
            </View>
            <View>
                <FlatList
                    data={tasks}
                    keyExtractor={item => item.id}
                    renderItem={({item}) => (
                        <View>
                            <Text>
                                Titulo: {item.title}                                
                            </Text>
                            <Button title='DEL' onPress={() => deleteItem(item.id)}/>
                        </View>
                    )}
                />                
            </View>
        </View>
    )
}