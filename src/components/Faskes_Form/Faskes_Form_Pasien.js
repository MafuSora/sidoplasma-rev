import './Faskes_Form.css';
import { useState } from 'react';
import { useFormik } from 'formik';
const validate = (values) => {
  const errors = {};
  if (!values.NamaPegawaiFaskes) {
    errors.NamaPegawaiFaskes = 'Required';
  } else if (values.NamaPegawaiFaskes.length > 115) {
    errors.NamaPegawaiFaskes = 'Maksimal 115 Karakter';
  }

  if (!values.Nama_Pasien) {
    errors.Nama_Pasien = 'Required';
  } else if (values.Nama_Pasien.length > 115) {
    errors.Nama_Pasien = 'Maksimal 115 Karakter';
  }

  if (!values.Alamat) {
    errors.Alamat = 'Required';
  } else if (values.Alamat.length > 115) {
    errors.Alamat = 'Maksimal 115 Karakter';
  }

  if (!values.NoHP) {
    errors.NoHP = 'Required';
  } else if (values.NoHP.length > 115) {
    errors.NoHP = 'Maksimal 115 Karakter';
  }

  if (!values.JenisKelamin) {
    errors.JenisKelamin = 'Required';
  } else if (values.JenisKelamin.length > 115) {
    errors.JenisKelamin = 'Maksimal 115 Karakter';
  }
  if (!values.Rhesus) {
    errors.Rhesus = 'Required';
  } else if (values.Rhesus.length > 115) {
    errors.Rhesus = 'Maksimal 115 Karakter';
  }

  if (!values.GolonganDarah) {
    errors.GolonganDarah = 'Required';
  } else if (values.GolonganDarah.length > 115) {
    errors.GolonganDarah = 'Maksimal 115 Karakter';
  }

  if (!values.TanggalSembuh) {
    errors.TanggalSembuh = 'Required';
  } else if (values.TanggalSembuh.length > 115) {
    errors.TanggalSembuh = 'Maksimal 115 Karakter';
  }

  if (!values.Usia) {
    errors.Usia = 'Required';
  } else if (values.Usia.length > 3) {
    errors.Usia = 'Maksimal 3 Karakter';
  }

 
  return errors;
};
const Faskes_Form_Pasien = () => {
  const [radioValRhesus, setRadioValRhesus] = useState('');
  const [radioValGender, setRadioValGender] = useState('');
  const [radioValGoldar, setRadioValGoldar] = useState('');

  const url = 'https://appsa.awanpintar.com/classes/Pasien_Positif';
  const headers = { 'X-Parse-Application-Id': 'MyAPPID' };

  const formik = useFormik({
    initialValues: {
      NamaPegawaiFaskes: '',
      Nama_Pasien: '',
      Alamat: '',
      NoHP: '',
      TanggalSembuh: '',
      Usia: '',
      GolonganDarah: '',
      Rhesus: '',
      JenisKelamin: '',
    },
    validate,
    onSubmit: (values) => {
      console.log(values);

      let data = {
        Nama_Pasien: values.Nama_Pasien,
        NamaPegawaiFaskes: values.NamaPegawaiFaskes,
        Alamat: values.Alamat,
        NoHP: values.NoHP,
        TanggalSembuh: values.TanggalSembuh,
        JenisKelamin: values.JenisKelamin,
        GolonganDarah: values.GolonganDarah,
        Rhesus: values.Rhesus,
        Usia: values.Usia,
      };

      fetch(url, {
        method: 'POST',
        headers: headers,
        body: JSON.stringify(data),
      })
        .then((res) => res.json)
        .then((res) => console.log(res))
        .catch((err) => console.log(err));
    },
  });

  return (
    <div className="containutama">
      <div className="signup-container">
        <div class="right-container">
          <header className="konten">
            <h1>Input Data Pasien Positif</h1>
            <br />
            <form>
              <div class="set">
                <div class="pets-name">
                  <label htmlfor="Nama_Pasien">Nama Pasien</label>
                  <input
                    id="Nama_Pasien"
                    placeholder="Nama Pasien"
                    type="text"
                    onChange={formik.handleChange}
                    value={formik.values.Nama_Pasien}
                  />
                  {formik.errors.Nama_Pasien ? (
                    <div>{formik.errors.Nama_Pasien}</div>
                  ) : null}
                </div>
                <div class="pets-name">
                  <label htmlfor="NamaPegawaiFaskes">Nama Pegawai Faskes</label>
                  <input
                    id="NamaPegawaiFaskes"
                    name="NamaPegawaiFaskes"
                    placeholder="Nama Pegawai Faskes"
                    type="text"
                    onChange={formik.handleChange}
                    value={formik.values.NamaPegawaiFaskes}
                  />
                  {formik.errors.NamaPegawaiFaskes ? (
                    <div>{formik.errors.NamaPegawaiFaskes}</div>
                  ) : null}
                </div>
                <div class="pets-birthday">
                  <label for="Usia">Usia</label>
                  <input
                    id="Usia"
                    name="Usia"
                    placeholder="XXX"
                    type="text"
                    onChange={formik.handleChange}
                    value={formik.values.Usia}
                  ></input>
                  {formik.errors.Usia ? <div>{formik.errors.Usia}</div> : null}
                </div>
              </div>
              <div class="set">
                <div class="pets-gender">
                  <label for="gender">Jenis Kelamin</label>
                  <div class="radio-container">
                    <input
                      id="pet-gender-female"
                      name="JenisKelamin"
                      type="radio"
                      value="Perempuan"
                      onChange={formik.handleChange}
                      defaultChecked={formik.values.JenisKelamin==="Perempuan" }
                    />
                    <label for="pet-gender-female">Female</label>
                    <input
                      id="pet-gender-male"
                      name="JenisKelamin"
                      type="radio"
                      value="Laki Laki"
                      onChange={formik.handleChange}
                      defaultChecked={formik.values.JenisKelamin==="Laki Laki" }
                    />
                    <label for="pet-gender-male">Male</label>
                  </div>
                  {formik.errors.JenisKelamin ? (
                    <div>{formik.errors.JenisKelamin}</div>
                  ) : null}
                </div>
                <div class="pets-name">
                  <label for="Alamat">Alamat</label>
                  <input
                    id="Alamat"
                    placeholder="Alamat"
                    type="text"
                    onChange={formik.handleChange}
                    value={formik.values.Alamat}
                  />
                  {formik.errors.Alamat ? (
                    <div>{formik.errors.Alamat}</div>
                  ) : null}
                </div>
                <div class="pets-birthday">
                  <label forhtml="TanggalSembuh">Tanggal Sembuh</label>
                  <input
                    id="TanggalSembuh"
                    name="TanggalSembuh"
                    placeholder="DD/MM/YYYY"
                    type="date"
                    onChange={formik.handleChange}
                    value={formik.values.TanggalSembuh}
                  ></input>
                  {formik.errors.TanggalSembuh ? (
                    <div>{formik.errors.TanggalSembuh}</div>
                  ) : null}
                </div>
              </div>
              <div className="set">
                <div class="pets-name">
                  <label for="NoHP">Nomor Handphone</label>
                  <input
                    id="NoHP"
                    name="NoHP"
                    type="text"
                    onChange={formik.handleChange}
                    value={formik.values.NoHP}
                    placeholder="+62XXXXXXX"
                  />
                  {formik.errors.NoHP ? <div>{formik.errors.NoHP}</div> : null}
                </div>
                <div class="pets-gender">
                  <label for="pet-gender-female">Rhesus </label>
                  <div class="radio-container">
                    <input
                      id="RhesusPositif"
                      name="Rhesus"
                      type="radio"
                      value="+"
                      onChange={formik.handleChange}
                      defaultChecked={formik.values.Rhesus==="+" }
                    />
                    <label for="RhesusPositif">+</label>
                    <input
                      id="RhesusNegatif"
                      name="Rhesus"
                      type="radio"
                      value="-"
                      onChange={formik.handleChange}
                      defaultChecked={formik.values.Rhesus==="-" }
                    />
                    <label for="RhesusNegatif">-</label>
                  </div>
                  {formik.errors.Rhesus ? (
                    <div>{formik.errors.Rhesus}</div>
                  ) : null}
                </div>
              </div>
              <div className="set">
                <div class="pets-name">
                  <label for="Alamat">Golongan Darah</label>
                  <div class="radio-container">
                    <input
                      id="goldar-A"
                      name="GolonganDarah"
                      type="radio"
                      value="A"
                      onChange={formik.handleChange}
                      defaultChecked={formik.values.GolonganDarah==="A" }
                    />
                    <label for="goldar-A">A</label>
                    <input
                      id="goldar-B"
                      name="GolonganDarah"
                      type="radio"
                      value="B"
                      onChange={formik.handleChange}
                      defaultChecked={formik.values.GolonganDarah==="B" }
                    />
                    <label for="goldar-B">B</label>
                    <input
                      id="goldar-AB"
                      name="GolonganDarah"
                      type="radio"
                      value="AB"
                      onChange={formik.handleChange}
                      defaultChecked={formik.values.GolonganDarah==="AB" }
                    />
                    <label for="goldar-AB">AB</label>
                    <input
                      id="goldar-O"
                      name="GolonganDarah"
                      type="radio"
                      value="O"
                      onChange={formik.handleChange}
                      defaultChecked={formik.values.GolonganDarah==="O" }
                    />
                    <label for="goldar-O">O</label>
                  </div>
                  {formik.errors.GolonganDarah ? (
                    <div>{formik.errors.GolonganDarah}</div>
                  ) : null}
                </div>
                <div class="pets-name">
                  <button
                    type="submit"
                    className="btn-outline-danger bt-sm  px-4 py-1 mt-4"
                    onClick={formik.handleSubmit}
                  >
                    Submit
                  </button>
                </div>
              </div>
            </form>
          </header>
          {/* <footer>
            <div class="set">
              <button id="back">Back</button>
              <button id="next">Next</button>
            </div>
          </footer> */}
        </div>
      </div>
    </div>
  );
};
export default Faskes_Form_Pasien;
