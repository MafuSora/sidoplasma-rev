import './Tabel_PMI.css'
import React, { useEffect, useState } from 'react';
const Tabel_PMI_Pendonor=(props)=>{
        const url = 'https://appsa.awanpintar.com/classes/Pendonor';
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
                                
                                <th scope="col">Nama Pendonor</th>
                                <th scope="col">Nama Pegawai PMI</th>
                                <th scope="col">Golongan Darah</th>
                                <th scope="col">Rhesus</th>
                                <th scope="col">Jenis Kelamin</th>
                                <th scope="col">Usia</th>
                                <th scope="col">Alamat</th>
                                <th scope="col">No Handphone</th>
                                <th scope="col">Tanggal Donor</th>
                            </tr>
                        </thead>
                        <tbody>
                            {pasien.length > 0 &&
                            pasien.map((item) => (
                                <tr>
                                <th scope="col">{item.NamaPendonor}</th>
                                <th scope="col">{item.PegawaiPMI}</th>
                                <th scope="col">{item.GolonganDarah}</th>
                                <th scope="col">{item.Rhesus}</th>
                                <th scope="col">{item.JenisKelamin}</th>
                                <th scope="col">{item.Usia}</th>
                                <th scope="col">{item.Alamat}</th>
                                <th scope="col">{item.NoHP}</th>
                                <th scope="col">{item.TanggalDonor}</th>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
    );
}
export default Tabel_PMI_Pendonor