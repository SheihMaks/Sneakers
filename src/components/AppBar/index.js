import{Outlet} from 'react-router-dom';
import {Header} from 'components/Header';

export const AppBar=({onOpenDrawer})=>{
    return(<div className='wrapper'>
        <Header onOpenDrawer={onOpenDrawer}/>
        <Outlet/>
    </div>)
}

export default AppBar;