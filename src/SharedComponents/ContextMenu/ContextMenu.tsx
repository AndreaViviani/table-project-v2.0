import { contextInterface } from "../../Interfaces/context.interface";


const ContextMenu = (props: contextInterface) => {
    const { xPos, yPos, items } = props;

    const dropItems = items.map((item) => {
            return (
                <li onClick={(e) => { item.action() }} key={item.label}>
                    {
                        item.icon &&
                        <div>
                            {item.icon}
                        </div>
                    }
                    <p>
                        {item.label}
                    </p>
                </li>
            )

    })

    const findContextCoord = () => {
        return [xPos, yPos];
    }


    return (
        <>

            <div style={{ position: "absolute", top: findContextCoord()[1], left: findContextCoord()[0] }} className='context-menu'>
                <ul>
                    {dropItems}
                </ul>
            </div>
        </>
    )
}

export default ContextMenu;