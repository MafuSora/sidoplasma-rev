import './PMI_Menu_Tabel.css'
import {  ButtonGroup,ToggleButton } from 'react-bootstrap';
import {useState} from 'react';
import TabelPMIPendonor from '../PMI_Tabel/Tabel_PMI_Pendonor';
import TabelPMIPegawai from '../PMI_Tabel/Tabel_PMI_Pegawai';
import TabelPMICabang from '../PMI_Tabel/Tabel_PMI_Cabang';
import TabelPMIInventori from '../PMI_Tabel/Tabel_PMI_Inventori';

const PMI_Menu_Tabel=(props)=>{
    const [radioValue, setRadioValue] = useState('1');
    const [name,setName]=useState("1")
    const radios = [
        { name: 'Pendonor', value: '1'  },
        { name: 'Pegawai PMI', value: '2' },
        { name: 'PMI', value: '3' },
        { name: 'Inventori Plasma', value: '4' },
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
                    {name==="1" && <TabelPMIPendonor/>}
                    {name==="2" && <TabelPMIPegawai/>}
                    {name==="3" && <TabelPMICabang/>}
                    {name==="4" && <TabelPMIInventori/>}
                </div>
            </div>
        </div>
    
    );
}
export default PMI_Menu_Tabel