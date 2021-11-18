import './Menu_Tabel_Faskes.css'
import { Button, ButtonGroup,ToggleButton } from 'react-bootstrap';
import reactDom from 'react-dom';
import react,{useState} from 'react';
// import Right_Tabel_Faskes_1 from '../Tabel_PMI/Tabel_PMI';
// import Right_PMI_2 from '../Content_PMI/PMI_Menu_2';
// import Right_PMI_3 from '../Content_PMI/PMI_Menu_3';
// import Right_PMI_4 from '../Content_PMI/PMI_Menu_4';
const PMI_Menu_1=(props)=>{
    const [checked, setChecked] = useState(false);
    const [radioValue, setRadioValue] = useState('1');
    const [name,setName]=useState("1")
    const radios = [
      { name: 'Pasien Positif', value: '1'  },
      { name: 'Pegawai Faskes', value: '2' },
      { name: 'Faskes', value: '3' },
      { name: 'Data Permintaan Donor', value: '4' },
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
                <div>
                    <table className="table">
                        <thead>
                            <tr>
                            <th scope="col">#</th>
                            <th scope="col">ID Data Permintaan Donor</th>
                            <th scope="col">ID Pegawai Faskes</th>
                            <th scope="col">Nama Permintaan</th>
                            <th scope="col">Golongan Darah</th>
                            <th scope="col">Rhesus</th>
                            </tr>
                        </thead>
                    </table>
                    {/* {name==="1" && <Right_Tabel_PMI_1/>}
                    {name==="2" && <Right_Tabel_PMI_1/>}
                    {name==="3" && <Right_Tabel_PMI_1/>}
                    {name==="4" && <Right_Tabel_PMI_1/>} */}
                </div>
            </div>
        </div>
    
    );
}
export default PMI_Menu_1