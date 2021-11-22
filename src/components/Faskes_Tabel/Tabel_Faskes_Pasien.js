import './Tabel_Faskes.css';
// import { MDBDataTable } from 'mdbreact';

import React, { useEffect, useState } from 'react';

const Tabel_Faskes_Pasien = (props) => {
  const url = 'https://appsa.awanpintar.com/classes/Pasien_Positif';
  const header = { 'X-Parse-Application-Id': 'MyAPPID' };

  const [pasien, setPasien] = useState([]);

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

  // const rawdata= fetch("./pmi.json")
  return (
    <div classname="contain">
      <div className="table-responsive p-2 container-table-pasien">
        <table className="table table-pasien">
          <thead>
            <tr>
              <th scope="col">Nama Pasien</th>
              <th scope="col">Jenis Kelamin</th>
              <th scope="col">Usia</th>
              <th scope="col">No Handphone</th>
              <th scope="col">Golongan Darah</th>
              <th scope="col">Rhesus</th>
              <th scope="col">Tanggal Sembuh</th>
              <th scope="col">Nama Pegawai Faskes</th>
              <th scope="col">Ingin Donor</th>
            </tr>
          </thead>
          <tbody>
            {pasien.length > 0 &&
              pasien.map((item) => (
                <tr>
                  <th scope="col">{item.nama}</th>
                  <th scope="col">{item.Jenis_Kelamin}</th>
                  <th scope="col">{item.usia}</th>
                  <th scope="col">{item.no_hp}</th>
                  <th scope="col">{item.golongan_darah.toUpperCase()}</th>
                  <th scope="col">{item.rhesus}</th>
                  <th scope="col">{item.tanggal_Sembuh_covid}</th>
                  <th scope="col">Joni</th>
                  <th scope="col">{item.ingin_donor ? 'Iya' : 'Tidak'}</th>
                </tr>
              ))}
          </tbody>
          <tr></tr>
        </table>
      </div>
    </div>
  );
};
export default Tabel_Faskes_Pasien;
