import './PMI_Menu_1.css'
import { Button, ButtonGroup,ToggleButton } from 'react-bootstrap';
import reactDom from 'react-dom';
import react,{useState} from 'react';
const PMI_Menu_1=()=>{
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
                <div class='left-container'>
                    <h1 className="light">HI USER!! </h1>
                    <div>
                        <br/>
                        <br/>
                        <div className="circle"> </div>
                        <br/>
                        <br/>
                    </div>
                    
                    <div className=" d-grid gap-2">
                        <ButtonGroup vertical>
                            {radios.map((radio, idx) => (
                            <ToggleButton
                                key={idx}
                                id={`radio-${idx}`}
                                type="radio"
                                variant={idx % 2 ? 'outline-success' : 'outline-danger'}
                                name="radio"
                                value={radio.value}
                                checked={radioValue === radio.value}
                                onChange={(e) => setRadioValue(e.currentTarget.value)}
                                className=""
                                size="lg"
                            >
                                {radio.name}
                            </ToggleButton>))}
                        </ButtonGroup>
                        <br/>
                        <br/>
                    </div>
                    <div class='puppy'>
                        <image src='https://s3-us-west-2.amazonaws.com/s.cdpn.io/38816/image-from-rawpixel-id-542207-jpeg.png'/>
                        
                    </div>
                </div>
                <div class='right-container'>
                    <header>
                        <h1>Yay, puppies! Ensure your pup gets the best care!</h1>
                        <div class='set'>
                            <div class='pets-name'>
                                <label for='pets-name'>ID Pendonor</label>
                                <input id='pets-name' placeholder="Pet's name" type='text'/>
                            </div>
                            <div class='pets-photo'>
                                <button id='pets-upload'>
                                    <i class='fas fa-camera-retro'></i>
                                </button>
                                <label for='pets-upload'>Upload a photo</label>
                            </div>
                        </div>
                        <div class='set'>
                            <div class='pets-breed'>
                                <label for='pets-breed'>ID Pegawai RS</label>
                                <input id='pets-breed' placeholder="Pet's breed" type='text'/>
                            </div>
                            <div class='pets-birthday'>
                                <label for='pets-birthday'>No. Handphone</label>
                                <input id='pets-birthday' placeholder='MM/DD/YYYY' type='text'></input>
                            </div>
                        </div>
                        <div class='set'>
                            <div class='pets-gender'>
                                <label for='pet-gender-female'>Jenis Kelamin</label>
                                <div class='radio-container'>
                                    <input checked='' id='pet-gender-female' name='pet-gender' type='radio' value='female'/>
                                    <label for='pet-gender-female'>Female</label>
                                    <input id='pet-gender-male' name='pet-gender' type='radio' value='male'/>
                                    <label for='pet-gender-male'>Male</label>
                                </div>
                            </div>
                            <div class='pets-spayed-neutered'>
                                <label for='pet-spayed'>Spayed or Neutered</label>
                                <div class='radio-container'>
                                    <input checked='' id='pet-spayed' name='spayed-neutered' type='radio' value='spayed'/>
                                    <label for='pet-spayed'>Spayed</label>
                                    <input id='pet-neutered' name='spayed-neutered' type='radio' value='neutered'/>
                                    <label for='pet-neutered'>Neutered</label>
                                </div>
                            </div>
                            <div class='pets-spayed-neutered'>
                                <label for='pet-spayed'>Spayed or Neutered</label>
                                <div class='radio-container'>
                                    <input checked='' id='pet-spayed' name='spayed-neutered' type='radio' value='spayed'/>
                                    <label for='pet-spayed'>Spayed</label>
                                    <input id='pet-neutered' name='spayed-neutered' type='radio' value='neutered'/>
                                    <label for='pet-neutered'>Neutered</label>
                                </div>
                            </div>
                        </div>
                        <div class='pets-weight'>
                            <label for='pet-weight-0-25'>Tanggal Pendonor</label>
                            <div class='radio-container'>
                                <input checked='' id='pet-weight-0-25' name='pet-weight' type='radio' value='0-25'/>
                                <label for='pet-weight-0-25'>0-25 lbs</label>
                                <input id='pet-weight-25-50' name='pet-weight' type='radio' value='25-50'/>
                                <label for='pet-weight-25-50'>25-50 lbs</label>
                                <input id='pet-weight-50-100' name='pet-weight' type='radio' value='50-100'/>
                                <label for='pet-weight-50-100'>50-100 lbs</label>
                                <input id='pet-weight-100-plus' name='pet-weight' type='radio' value='100+'/>
                                <label for='pet-weight-100-plus'>100+ lbs</label>
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
export default PMI_Menu_1