import './PMI_Menu_1.css'
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
        <div className="containutama" >
            <div class='signup-container'>
                <div class='right-container'>
                    <header>
                        <h1>Input Data Pendonor</h1>
                        <br/>
                        <div class='set'>
                            <div class='pets-breed'>
                                <label for='pets-breed'>ID Pegawai PMI</label>
                                <input id='pets-breed' placeholder="ID Pegawai PMI" type='text'/>
                            </div>
                            <div class='pets-breed'>
                                <label for='pets-breed'>Nama Pegawai PMI</label>
                                <input id='pets-breed' placeholder="Nama Pegawai PMI" type='text'/>
                            </div>
                        </div>
                        <div class='set'>
                            <div class='pets-name'>
                                <label for='pets-name'>ID Pendonor</label>
                                <input id='pets-name' placeholder="ID Pendonor" type='text'/>
                            </div>
                            
                            <div class='pets-birthday'>
                                <label for='pets-birthday'>No. Handphone</label>
                                <input id='pets-birthday' placeholder='+62XXXXXXXXXX' type='text'></input>
                            </div>  
                        </div>
                        <div class='pets-weight'>
                            <label for='pet-weight-0-25'>Nama Pendonor</label>
                            <div class='radio-container'>
                                <input className="alamat"  type='text'  placeholder='Nama Pendonor'/>
                                
                            
                            </div>
                        </div>
                        <div class='set'>
                            <div class='pets-gender'>
                                <label for='pet-gender-female'>Jenis Kelamin</label>
                                <div class='radio-container'>
                                    <input  id='pet-gender-female' name='pet-gender' type='radio' value='female'/>
                                    <label for='pet-gender-female'>Female</label>
                                    <input id='pet-gender-male' name='pet-gender' type='radio' value='male'/>
                                    <label for='pet-gender-male'>Male</label>
                                </div>
                            </div>
                            <div class='pets-birthday'>
                                <label for='pets-birthday'>Tanggal Pendonor</label>
                                <input id='pets-birthday' placeholder='DD/MM/YYYY' type='date'></input>
                            </div>
                            
                        </div>
                        <div class='pets-weight'>
                            <label for='pet-weight-0-25'>Alamat</label>
                            <div class='radio-container'>
                                <input className="alamat"  type='text'  placeholder='Alamat'/>
                                
                            </div>
                        </div>
                    </header>
                    <footer>
                        <div class='set'>
                            <button id='back'>Back</button>
                            <button id='next'>Next</button>
                        </div>
                    </footer>
                </div>
            </div>
        </div>
    
    );
}
export default Faskes_Konten_1