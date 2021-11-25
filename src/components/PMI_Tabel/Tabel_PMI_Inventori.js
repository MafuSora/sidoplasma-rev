import './Tabel_PMI.css'
import React, { useEffect, useState } from 'react';
const Tabel_PMI_Inventori=(props)=>{
    const url = 'https://appsa.awanpintar.com/classes/Pendonor';
        const header = { 'X-Parse-Application-Id': 'MyAPPID' };
    
        const [pasien, setPasien] = useState([]);
        const [radioVal, setRadioVal] = useState('');
        const[jumlahDarah,setJumlahdarah]=useState({});
        var temp=[]
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
        function genderCount(pasien) {
            return pasien.reduce((acc, pasien) => {
                
                if (pasien.GolonganDarah === 'A' &&pasien.Rhesus === '+') {

                    acc.apos++;
                }
                else if (pasien.GolonganDarah === 'A' &&pasien.Rhesus === '-') {
                    acc.aneg++;
                }
                else if (pasien.GolonganDarah === 'B' &&pasien.Rhesus === '+') {
                    acc.bpos++;
                }
                else if (pasien.GolonganDarah === 'B' &&pasien.Rhesus === '-') {
                    acc.bneg++;
                }
                else if (pasien.GolonganDarah === 'AB' &&pasien.Rhesus === '+') {
                    acc.abpos++;
                }
                else if (pasien.GolonganDarah === 'AB' &&pasien.Rhesus === '-') {
                    acc.abneg++;
                }
                else if (pasien.GolonganDarah === 'O' &&pasien.Rhesus === '+') {
                    acc.opos++;
                }
                else if (pasien.GolonganDarah === 'O' &&pasien.Rhesus === '-') {
                    acc.oneg++;
                }
                console.log(acc)
                temp=acc
                return acc ;
                
            }, {apos: 0, aneg: 0,bpos: 0, bneg: 0,abpos: 0, abneg: 0,opos: 0, oneg: 0});
        }
        genderCount(pasien)
        
        const dict_invent=[
            {GolonganDarah:"A",
            Rhesus:"+",
            Jumlah:temp.apos},
            {GolonganDarah:"A",
            Rhesus:"-",
            Jumlah:temp.aneg},
            {GolonganDarah:"B",
            Rhesus:"+",
            Jumlah:temp.bpos},
            {GolonganDarah:"B",
            Rhesus:"-",
            Jumlah:temp.bneg},
            {GolonganDarah:"AB",
            Rhesus:"+",
            Jumlah:temp.abpos},
            {GolonganDarah:"AB",
            Rhesus:"-",
            Jumlah:temp.abneg},
            {GolonganDarah:"O",
            Rhesus:"+",
            Jumlah:temp.opos},
            {GolonganDarah:"O",
            Rhesus:"-",
            Jumlah:temp.oneg},
        ]
        console.log(pasien)
        console.log(dict_invent)
        console.log(temp)
    return(
        <div className="containutama" >
            <div className="table-responsive p-2">
                    <table className="table">
                        <thead>
                            <tr>
                                <th scope="col">Golongan Darah</th>
                                <th scope="col">Rhesus</th>
                                {/* <th scope="col">Tanggal Kadaluarsa</th> */}
                                {/* <th scope="col">Cabang PMI</th>
                                <th scope="col">No Telephone</th> */}
                                <th scope="col">Stok</th>
                                
                            </tr>
                        </thead>
                        <tbody>
                        {dict_invent.length > 0 &&
                            dict_invent.map((item) => (
                                <tr>
                                <th scope="col">{item.GolonganDarah}</th>
                                <th scope="col">{item.Rhesus}</th>
                                <th scope="col">{item.Jumlah}</th>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                
                {/* <th scope="col">{item.NamaPendonor}</th>
                                <th scope="col">{item.CabangPMI}</th>
                                <th scope="col">{item.GolonganDarah}</th>
                                <th scope="col">{item.Rhesus}</th>
                                <th scope="col">{item.JenisKelamin}</th>
                                <th scope="col">{item.Usia}</th>
                                <th scope="col">{item.Alamat}</th>
                                <th scope="col">{item.NoHP}</th>
                                <th scope="col">{item.TanggalDonor}</th> */}
            </div>
    );
}

export default Tabel_PMI_Inventori