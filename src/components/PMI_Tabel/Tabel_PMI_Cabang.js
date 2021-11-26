import './Tabel_PMI.css'
import React, { useEffect, useState } from 'react';
const Tabel_PMI_Cabang=(props)=>{
    const url = 'https://appsa.awanpintar.com/classes/PMI';
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
    return(
                <div className="table-responsive p-2">
                    <table className="table">
                        <thead>
                            <tr>
                                <th scope="col">Nama PMI</th>
                                <th scope="col">No Telephone</th>
                                <th scope="col">Alamat</th>
                                <th scope="col">Hapus</th>
                            </tr>
                        </thead>
                        <tbody>
                            {pasien.length > 0 &&
                            pasien.map((item) => (
                                <tr>
                                <th scope="col">{item.Nama_PMI}</th>
                                <th scope="col">{item.Alamat}</th>
                                <th scope="col">{item.NoHP}</th>
                                <th><button type='button' onClick={()=>handleDelete(item.objectId) && alert("Successful Deleted Refresh The Page")}>Delete</button></th>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
    );
}
export default Tabel_PMI_Cabang