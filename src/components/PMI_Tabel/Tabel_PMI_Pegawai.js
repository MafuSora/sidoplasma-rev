import './Tabel_PMI.css'
import React, { useEffect, useState } from 'react';
const Tabel_PMI_Pegawai=(props)=>{
    const url = 'https://appsa.awanpintar.com/classes/Pegawai_PMI';
    const header = { 'X-Parse-Application-Id': 'MyAPPID' };

    const [pasien, setPasien] = useState([]);
    const [radioVal, setRadioVal] = useState('');

    useEffect(() => {
        fetch(url, {
        headers: header,
        })
        .then((res) => res.json())
        .then((res) => {
            let data = [...res.results];
            setPasien(data);
        })
        .catch((err) => console.log(err));
    }, []);
    return(
        <div className="containutama" >
            <div className="table-responsive p-2">
                    <table className="table">
                        <thead>
                            <tr>
                                
                                <th scope="col">ID Pegawai PMI</th>
                                <th scope="col">Nama Pegawai</th>
                                <th scope="col">Nama PMI</th>
                                <th scope="col">No Handphone</th>
                    
                            </tr>
                        </thead>
                        <tbody>
                            {pasien.length > 0 &&
                            pasien.map((item) => (
                                <tr>
                                <th scope="col">{item.ID_Pegawai}</th>
                                <th scope="col">{item.Nama_PMI}</th>
                                <th scope="col">{item.nama_pegawai}</th>
                                <th scope="col">{item.NoHP}</th>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
    );
}
export default Tabel_PMI_Pegawai