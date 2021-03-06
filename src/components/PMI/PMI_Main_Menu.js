import './PMI_Main_Menu.css'
import {ButtonGroup,ToggleButton} from 'react-bootstrap';
import {useState} from 'react';
import FormPMIPendonor from '../PMI_Form/PMI_Form_Pendonor';
import FormPMIPegawai from '../PMI_Form/PMI_Form_Pegawai';
import FormPMICabang from '../PMI_Form/PMI_Form_Cabang';
// import FormPMIInventori from '../PMI_Form/PMI_Form_Inventori';

const PMI_Main_Menu=(props)=>{
    const [radioValue, setRadioValue] = useState('1');
    const [name,setName]=useState("1")
    const radios = [
        { name: 'Pendonor', value: '1'  },
        { name: 'Pegawai PMI', value: '2' },
        // { name: 'PMI', value: '3' },
        // { name: 'Inventori Plasma', value: '4' },
    ];
    
    return(
        <div className="containutama" >
            <div class='signup-container'>
                <div class='left-container'>
                    <h1 className="light">HI USER!! </h1>
                    <div>
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
                                onChange={(e) => setRadioValue(e.currentTarget.value) & setName(e.currentTarget.value)}
                                className=""
                                size="lg"
                            >{radio.name}
                            </ToggleButton>))}
                        </ButtonGroup>
                        <br/>
                        <br/>
                    </div>
                    <div class='puppy'>
                        <image src='https://s3-us-west-2.amazonaws.com/s.cdpn.io/38816/image-from-rawpixel-id-542207-jpeg.png'/>
                    </div>
                </div>
                <div>
                    {name==="1" && <FormPMIPendonor/>}
                    {name==="2" && <FormPMIPegawai/>}
                    {name==="3" && <FormPMICabang/>}
                    {/* {name==="4" && <FormPMIInventori/>} */}
                </div>
            </div>
        </div>
    );
}
export default PMI_Main_Menu