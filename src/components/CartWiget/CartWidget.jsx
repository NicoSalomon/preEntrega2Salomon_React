import { Avatar, Badge } from 'antd';
import './Cartwidget.css'

const Cartwidget = () => {
    return (
        <div className='icon'>
            <Badge size="default" count={5}>
                <Avatar className='icon2' shape="square"/>
            </Badge>
        </div>
    )
}

export default Cartwidget