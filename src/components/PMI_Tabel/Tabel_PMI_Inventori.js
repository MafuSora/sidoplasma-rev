import './Tabel_PMI.css'
import React, { useEffect, useState } from 'react';
const Tabel_PMI_Inventori=(props)=>{
    const url = 'https://appsa.awanpintar.com/classes/Pendonor';
        const header = { 'X-Parse-Application-Id': 'MyAPPID' };
    
        const [pasien, setPasien] = useState([]);
        const [radioVal, setRadioVal] = useState('');
        const [Apos, setApos] = useState(0);const [Aneg, setAneg] = useState(0);
        const [Bpos, setBpos] = useState(0);const [Bneg, setBneg] = useState(0);
        const [ABpos, setABpos] = useState(0);const [ABneg, setABneg] = useState(0);
        const [Opos, setOpos] = useState(0);const [Oneg, setOneg] = useState(0);
       
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
                if (pasien.GolonganDarah === 'A') {
                    acc.male++;
                }
                else if (pasien.GolonganDarah === 'B') {
                    acc.female++;
                }
                else if (pasien.GolonganDarah === 'AB') {
                    acc.female++;
                }
                else if (pasien.GolonganDarah === 'O') {
                    acc.female++;
                }
                console.log(acc)
                return acc;
                
            }, {male: 0, female: 0});
        }
        genderCount(pasien)
        const dict_invent={
            GolonganDarah:["A","A","B","B","AB","AB","O","O"],
            Rhesus:["+","-","+","-","+","-","+","-"],
            Jumlah:[Apos,Aneg,Bpos,Bneg,ABpos,ABneg,Opos,Oneg]
        }
        console.log(pasien)
        console.log(dict_invent)
    return(
        <div className="containutama" >
            <div className="table-responsive p-2">
                    <table className="table">
                        <thead>
                            <tr>
                                <th scope="col">Golongan Darah</th>
                                <th scope="col">Rhesus</th>
                                {/* <th scope="col">Tanggal Kadaluarsa</th> */}
                                <th scope="col">Cabang PMI</th>
                                <th scope="col">No Telephone</th>
                                <th scope="col">Stok</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* {pasien.length > 0 &&
                                pasien.map((item) => (
                             
                                
                            ))} */}
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