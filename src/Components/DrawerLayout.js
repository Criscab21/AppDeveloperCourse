import { DrawerItem } from "@react-navigation/drawer";
import { useNavigation } from "@react-navigation/native"
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

const DrawerLayout = ({icon, label, navigateTo}) => {
    const navigation = useNavigation();
    return (
        <DrawerItem
            icon={({size}) => <Icon name={icon} size={size}/>}
            label={label}
            onPress={() => {
                navigation.navigate(navigateTo)
            }}
        />
    )
}

export default DrawerLayout