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
                                <th scope="col">{item.IDFaskes}</th>
                                <th scope="col">{item.Nama_Faskes}</th>
                                <th scope="col">{item.Jenis_Faskes}</th>
                                <th scope="col">{item.NoHP}</th>
                                <th scope="col">{item.Alamat}</th>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
    );
}
export default Tabel_Faskes_Cabang