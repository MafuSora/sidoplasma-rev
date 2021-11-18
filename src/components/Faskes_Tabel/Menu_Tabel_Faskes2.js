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
            </div>
            <div className="right-container">
            <div className="table-responsive">
                <table className="table">
                        <thead>
                            <tr>
                            <th scope="col">#</th>
                            <th scope="col">ID Pegawai Faskes</th>
                            <th scope="col">ID Faskes</th>
                            <th scope="col">Nama</th>
                            <th scope="col">Jenis Kelamin</th>
                            <th scope="col">Usia</th>
                            <th scope="col">No.Handphone</th>
                            <th scope="col">Alamat</th>
                            <th scope="col">Username</th>
                            <th scope="col">Password</th>
                            </tr>
                        </thead>
                    </table>
                   
                </div>
                </div>
                </div>
                </div>
            
        
    
    );
}
export default PMI_Menu_1