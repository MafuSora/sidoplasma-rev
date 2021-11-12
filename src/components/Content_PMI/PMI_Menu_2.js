import './PMI_Menu_1.css'
import { Button, ButtonGroup,ToggleButton } from 'react-bootstrap';
import reactDom from 'react-dom';
import react,{useState} from 'react';
const Faskes_Konten_2=()=>{
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
                    <h1>Input Data Pegawai PMI</h1>
                        <br/>
                    <div class='set'>
                        <div class='pets-name'>
                            <label for='pets-name'>ID Pegawai PMI</label>
                            <input id='pets-name' placeholder="ID Pegawai PMI" type='text'/>
                        </div>
                        <div class='pets-breed'>
                            <label for='pets-breed'>ID PMI</label>
                            <input id='pets-breed' placeholder="ID PMI" type='text'/>
                        </div>
                        <div class='pets-name'>
                            <label for='pets-name'>Nama</label>
                            <input id='pets-name' placeholder="Nama" type='text'/>
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
                            <label for='pets-birthday'>Usia</label>
                            <input id='pets-birthday' placeholder='Usia' type='text'></input>
                        </div>
                        <div class='pets-birthday'>
                                <label for='pets-birthday'>No. Handphone</label>
                                <input id='pets-birthday' placeholder='+62' type='text'></input>
                        </div>
                    </div>
                    <div class='set'>
                        
                        <div class='pets-birthday'>
                            <label for='pets-birthday'>Username</label>
                            <input id='pets-birthday' placeholder='Username' type='text'></input>
                        </div>
                        <div class='pets-birthday'>
                            <label for='pets-birthday'>Password</label>
                            <input id='pets-birthday' placeholder='Password' type='password'></input>
                        </div>
                        <div class='pets-birthday'>
                            <label for='pets-birthday'>Nomor ID Pegawai </label>
                            <input id='pets-birthday' placeholder='Nomor ID Pegawai' type='password'></input>
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
export default Faskes_Konten_2