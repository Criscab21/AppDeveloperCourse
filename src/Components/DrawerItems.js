import DrawerList from "../utils/data/DrawerList"
import DrawerLayout from "./DrawerLayout"

const DrawerItems = () => {
    return DrawerList.map((item, i) => {
        return(
            <DrawerLayout
                key={i}
                icon={item.icon}
                label={item.label}
                navigateTo={item.navigateTo}
            />
        )
    })
}

export default DrawerItems