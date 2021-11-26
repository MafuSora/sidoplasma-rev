import './Admin_Tabel_Menu.css'
import {ButtonGroup,ToggleButton} from 'react-bootstrap';
import {useState} from 'react';
import TabelFaskesPasien from '../Faskes_Tabel/Tabel_Faskes_Pasien';
import TabelFaskesPegawai from '../Faskes_Tabel/Tabel_Faskes_Pegawai';
import TabelFaskesCabang from '../Faskes_Tabel/Tabel_Faskes_Cabang';
import TabelPMIPendonor from '../PMI_Tabel/Tabel_PMI_Pendonor';
import TabelPMIPegawai from '../PMI_Tabel/Tabel_PMI_Pegawai';
import TabelPMICabang from '../PMI_Tabel/Tabel_PMI_Cabang';
import TabelPMIInventori from '../PMI_Tabel/Tabel_PMI_Inventori';
// import TabelFaskesPermintaan from '../Faskes_Tabel/Tabel_Faskes_Permintaan';
const Faskes_Tabel_Menu=(props)=>{
    const [radioValue, setRadioValue] = useState('1');
    const [name,setName]=useState("1")
    const radios = [
        { name: 'Tabel Pasien Positif', value: '1'  },
        { name: 'Tabel Pegawai Fasilitas Kesehatan', value: '2' },
        { name: 'Tabel Fasilitas Kesehatan', value: '3' },
        { name: 'Tabel Pendonor', value: '4'  },
        { name: 'Tabel Pegawai PMI', value: '5' },
        { name: 'Tabel PMI', value: '6' },
        { name: 'Tabel Inventori Plasma', value: '7' },
        // { name: 'Permintaan Donor Plasma', value: '4' },
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
                                size="md"
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
                    {name==="1" && <TabelFaskesPasien/>}
                    {name==="2" && <TabelFaskesPegawai/>}
                    {name==="3" && <TabelFaskesCabang/>}
                    {name==="4" && <TabelPMIPendonor/>}
                    {name==="5" && <TabelPMIPegawai/>}
                    {name==="6" && <TabelPMICabang/>}
                    {name==="7" && <TabelPMIInventori/>}
                    
                    {/* {name==="4" && <TabelFaskesPermintaan/>} */}
                </div>
            </div>
        </div>
    
    );
}
export default Faskes_Tabel_Menu