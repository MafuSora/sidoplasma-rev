
import { Button, ButtonGroup,ToggleButton } from 'react-bootstrap';
import reactDom from 'react-dom';
import react,{useState} from 'react';
const Faskes_Konten_1=()=>{
    const [checked, setChecked] = useState(false);
    const [radioValue, setRadioValue] = useState('1');

    const radios = [
    { name: 'Active', value: '1' },
    { name: 'Radio', value: '2' },
    { name: 'Radio', value: '3' },
    { name: 'Radio', value: '4' },
    ];
    return(
        <div className="container-xxl card cardcolor" >
                
        </div>
    
    );
}
export default Faskes_Konten_1