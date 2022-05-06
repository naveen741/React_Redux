import { useSelector } from 'react-redux';
import './Footer.css';
export default function Footer(){
    const address=useSelector((state)=>state.changer.address);
    return (
        <div className="footer">
            <h1 className='adress'>{address}</h1>
        </div>
    );
}