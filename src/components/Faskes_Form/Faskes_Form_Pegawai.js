import './Faskes_Form.css';
import { useState } from 'react';
import { useFormik } from 'formik';
const validate = (values) => {
  const errors = {};
  if (!values.IDPegawaiFaskes) {
    errors.IDPegawaiFaskes = 'Required';
  } else if (values.IDPegawaiFaskes.length > 20) {
    errors.IDPegawaiFaskes = 'Maksimal 20 Karakter';
  }

  if (!values.NamaPegawaiFaskes) {
    errors.NamaPegawaiFaskes = 'Required';
  } else if (values.NamaPegawaiFaskes.length > 115) {
    errors.NamaPegawaiFaskes = 'Maksimal 115 Karakter';
  }

  if (!values.NamaCabangFaskes) {
    errors.NamaCabangFaskes = 'Required';
  } else if (values.NamaCabangFaskes.length > 115) {
    errors.NamaCabangFaskes = 'Maksimal 115 Karakter';
  }

  if (!values.NoHP) {
    errors.NoHP = 'Required';
  } else if (values.NoHP.length > 115) {
    errors.NoHP = 'Maksimal 115 Karakter';
  }

  if (!values.Username) {
    errors.Username = 'Required';
  } else if (values.Username.length > 115) {
    errors.Username = 'Maksimal 115 Karakter';
  }

  if (!values.Password) {
    errors.Password = 'Required';
  } else if (values.Password.length > 115) {
    errors.Password = 'Maksimal 115 Karakter';
  }
  return errors;
};
const Faskes_Form_Pegawai = () => {
  const url = 'https://appsa.awanpintar.com/classes/Pegawai_Faskes';
  const headers = { 'X-Parse-Application-Id': 'MyAPPID' };

  const formik = useFormik({
    initialValues: {
      IDPegawaiFaskes: '',
      NamaPegawaiFaskes: '',
      NamaCabangFaskes: '',
      NoHP: '',
      Username: '',
      Password: '',
    },
    validate,
    onSubmit: (values) => {
      let data = {
        IDPegawaiFaskes:values.IDPegawaiFaskes,
        NamaPegawaiFaskes: values.NamaPegawaiFaskes,
        NamaCabangFaskes: values.NamaCabangFaskes,
        NoHP: values.NoHP,
        Username: values.Username,
        Password: values.Password,
      };

      fetch(url, {
        method: 'POST',
        headers: headers,
        body: JSON.stringify(data),
      })
        .then((res) => res.json())
        .then((res) => console.log(res))
        .catch((err) => console.log(err));
    },
  });
  return (
    <div className="containutama">
      <div class="signup-container">
        <div class="right-container">
          <header>
            <h1>Input Data Pegawai Fasilitas Kesehatan</h1>
            <br />
            <div class="set">
              <div class="pets-name">
                <label for="IDPegawai">ID Pegawai</label>
                <input
                  id="IDPegawaiFaskes"
                  name="IDPegawaiFaskes"
                  placeholder="ID Pegawai Fasilitas Kesehatan"
                  type="text"
                  onChange={formik.handleChange}
                  value={formik.values.IDPegawaiFaskes}
                />{formik.errors.IDPegawaiFaskes ? (
                  <div>{formik.errors.IDPegawaiFaskes}</div>
                ) : null}
              </div>
              <div class="pets-name">
                <label for="NamaPegawaiFaskes">Nama Pegawai Faskes</label>
                <input
                  id="NamaPegawaiFaskes"
                  name="NamaPegawaiFaskes"
                  placeholder="Nama Pegawai Faskes"
                  type="text"
                  onChange={formik.handleChange}
                  value={formik.values.NamaPegawaiFaskes}
                />{formik.errors.NamaPegawaiFaskes ? (
                  <div>{formik.errors.NamaPegawaiFaskes}</div>
                ) : null}
              </div>
              <div class="pets-breed">
                <label for="NamaCabangFaskes">Nama Cabang Faskes</label>
                <input
                  id="NamaCabangFaskes"
                  name="NamaCabangFaskes"
                  placeholder="Nama Cabang Faskes"
                  type="text"
                  onChange={formik.handleChange}
                  value={formik.values.NamaCabangFaskes}
                />{formik.errors.NamaCabangFaskes ? (
                  <div>{formik.errors.NamaCabangFaskes}</div>
                ) : null}
              </div>
              {/* <div class='pets-name'>
                                    <div></div>
                                </div> */}
            </div>
            <div class="set">
              <div class="pets-birthday">
                <label for="NoHP">No. Handphone</label>
                <input
                  id="NoHP"
                  name="NoHP"
                  placeholder="+62"
                  type="text"
                  onChange={formik.handleChange}
                  value={formik.values.NoHP}
                ></input>{formik.errors.NoHP ? (
                  <div>{formik.errors.NoHP}</div>
                ) : null}
              </div>
              <div class="pets-birthday">
                <label for="Username">Username</label>
                <input
                  id="Username"
                  name="Username"
                  placeholder="Username"
                  type="text"
                  onChange={formik.handleChange}
                  value={formik.values.Username}
                ></input>{formik.errors.Username ? (
                  <div>{formik.errors.Username}</div>
                ) : null}
              </div>
              <div class="pets-birthday">
                <label for="Password">Password</label>
                <input
                  id="Password"
                  name="Password"
                  placeholder="Password"
                  type="password"
                  onChange={formik.handleChange}
                  value={formik.values.Password}
                ></input>{formik.errors.Password ? (
                  <div>{formik.errors.Password}</div>
                ) : null}
              </div>
              </div>
              <div class="set">
              <div class="pets-name">
                <button
                  className="btn-outline-danger bt-sm  px-4 py-1 mt-4"
                  onClick={formik.handleSubmit}
                  type="button"
                >
                  Submit
                </button>
              </div>
            
            </div>
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
export default Faskes_Form_Pegawai;
