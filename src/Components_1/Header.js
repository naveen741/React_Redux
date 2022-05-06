import { useSelector } from 'react-redux';
import './Header.css'
export default function Header(){
    const name=useSelector((state)=>state.changer.value);
    return(
        <div className="header">
            <h1 className="heading"> {name}</h1>
        </div>
    );
}