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
        }, [pasien]);
        const headers = { 'X-Parse-Application-Id': 'MyAPPID' };
    const handleDelete=(ID)=>{
        const url2 = url + '/'+ ID
        fetch(url2, {
            method: 'DELETE',
            headers: headers,
        })
            .then((res) => res.json())
            .then((res) => console.log(res))
            .catch((err) => console.log(err));
        console.log(url2)
        };
    function addMonths(date, months) {
            var d = date.getDate();
            date.setMonth(date.getMonth() + +months);
            if (date.getDate() != d) {
              date.setDate(0);
            }
            return date;
        }
        let current = new Date();
    return(
        
        <div className="containutama" >
            <div className="table-responsive p-2">
                    <table className="table">
                        <thead>
                            <tr>
                                
                                <th scope="col">Nama Pendonor</th>
                                <th scope="col">Nama Cabang PMI</th>
                                <th scope="col">Golongan Darah</th>
                                <th scope="col">Rhesus</th>
                                <th scope="col">Jenis Kelamin</th>
                                <th scope="col">Usia</th>
                                <th scope="col">Alamat</th>
                                <th scope="col">No Handphone</th>
                                <th scope="col">Link Hasil Plasma</th>
                                <th scope="col">Tanggal Donor</th>
                                <th scope="col">Tanggal Kadaluarsa</th>
                                <th scope="col">Status</th>
                                <th scope="col">Hapus</th>
                            </tr>
                        </thead>
                        <tbody>
                            {pasien.length > 0 &&
                            pasien.map((item) => (
                                <tr>
                                <th scope="col">{item.NamaPendonor}</th>
                                <th scope="col">{item.CabangPMI}</th>
                                <th scope="col">{item.GolonganDarah}</th>
                                <th scope="col">{item.Rhesus}</th>
                                <th scope="col">{item.JenisKelamin}</th>
                                <th scope="col">{item.Usia}</th>
                                <th scope="col">{item.Alamat}</th>
                                <th scope="col">{item.NoHP}</th>
                                <th scope="col"><a href={`//${item.LinkPlasma}`}>File</a></th>
                                <th scope="col">{item.TanggalDonor}</th>
                                <th scope="col">{addMonths(new Date(item.TanggalDonor),3).toISOString()}</th>
                                <th scope="col">{current.toISOString() < addMonths(new Date(item.TanggalDonor),3).toISOString()?<div>Available</div>:<div>Expired</div>}</th>
                                <th><button type='button' onClick={()=>handleDelete(item.objectId) && alert("Successful Deleted Refresh The Page")}>Delete</button></th>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
    );
}
export default Tabel_PMI_Pendonor