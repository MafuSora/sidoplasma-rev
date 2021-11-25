import './Tabel_Faskes.css'
import React, { useEffect, useState } from 'react';
const Tabel_Faskes_Cabang=(props)=>{
    const url = 'https://appsa.awanpintar.com/classes/Nama_Faskes';
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
    console.log(pasien)
    return(
        <div className="containutama" >
            <div className="table-responsive p-2">
                <table className="table">
                        <thead>
                            <tr>
                                <th scope="col">ID Faskes</th>
                                <th scope="col">Nama Faskes</th>
                                <th scope="col">Jenis Faskes</th>
                                <th scope="col">No Telephone</th>
                                <th scope="col">Alamat</th>
                            </tr>
                        </thead>
                        <tbody>
                            {pasien.length > 0 &&
                            pasien.map((item) => (
                                <tr>
                                <td scope="col">{item.IDFaskes}</td>
                                <td scope="col">{item.Nama_Faskes}</td>
                                <td scope="col">{item.Jenis_Faskes}</td>
                                <td scope="col">{item.NoHP}</td>
                                <td scope="col">{item.Alamat}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
    );
}
export default Tabel_Faskes_Cabang