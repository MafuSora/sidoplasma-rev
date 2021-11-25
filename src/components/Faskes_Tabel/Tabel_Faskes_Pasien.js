import './Tabel_Faskes.css';
// import { MDBDataTable } from 'mdbreact';

import React, { useEffect, useState } from 'react';

const Tabel_Faskes_Pasien = (props) => {
  const url = 'https://appsa.awanpintar.com/classes/Pasien_Positif';
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
  // const rawdata= fetch("./pmi.json")
  return (
    <div classname="contain">
      <div className="table-responsive p-2 container-table-pasien">
        <table className="table table-pasien">
          <thead>
            <tr>
              <th scope="col">Nama Pasien</th>
              <th scope="col">Nama Pegawai Faskes</th>
              <th scope="col">Jenis Kelamin</th>
              <th scope="col">Alamat</th>
              <th scope="col">Tanggal Sembuh</th>
              <th scope="col">Usia</th>
              <th scope="col">Golongan Darah </th>
              <th scope="col">Rhesus</th>
              <th scope="col">No Handphone</th>
              <th scope="col">Hapus</th>
              
              
            </tr>
          </thead>
          <tbody>
            {pasien.length > 0 &&
              pasien.map((item) => (
                <tr>
                  <th scope="col">{item.Nama_Pasien}</th>
                  <th scope="col">{item.NamaPegawaiFaskes}</th>
                  <th scope="col">{item.JenisKelamin}</th>
                  <th scope="col">{item.alamat}</th>
                  <th scope="col">{item.TanggalSembuh}</th>
                  <th scope="col">{item.Usia}</th>
                  <th scope="col">{item.GolonganDarah}</th>
                  <th scope="col">{item.Rhesus}</th>
                  <th scope="col">{item.NoHP}</th>
                  <th><button type='button' onClick={()=>handleDelete(item.objectId) && alert("Successful Deleted Refresh The Page")}>Delete</button></th>
                </tr>
              ))}
          </tbody>
          <tr></tr>
        </table>
        {/* CONTOH RADIO */}
        <div
          class="form-check"
          //   style={{ display: 'flex', flexDirection: 'column' }}
        >
          <input
            class="form-check-input"
            type="radio"
            name="flexRadioDefault"
            value="hafiz"
            onChange={(e) => setRadioVal(e.target.value)}
          />
          <label class="form-check-label" for="flexRadioDefault1">
            Hafizh
          </label>
          <input
            class="form-check-input"
            type="radio"
            name="flexRadioDefault"
            value="nisa"
            onChange={(e) => setRadioVal(e.target.value)}
          />
          <label
            class="form-check-label"
            for="flexRadioDefault1"
            onClick={console.log(radioVal)}
          >
            Nisa
          </label>
        </div>
      </div>
    </div>
  );
};
export default Tabel_Faskes_Pasien;
