import './Faskes_Form.css';
import { useFormik } from 'formik';
const validate = (values) => {
  const errors = {};
  if (!values.IDFaskes) {
    errors.IDFaskes = 'Required';
  } else if (values.IDFaskes.length > 20) {
    errors.IDFaskes = 'Maksimal 20 Karakter';
  }

  if (!values.Nama_Faskes) {
    errors.Nama_Faskes = 'Required';
  } else if (values.Nama_Faskes.length > 115) {
    errors.Nama_Faskes = 'Maksimal 115 Karakter';
  }

  if (!values.Alamat) {
    errors.Alamat = 'Required';
  } else if (values.Alamat.length > 115) {
    errors.Alamat = 'Maksimal 115 Karakter';
  }

  if (!values.NoHP) {
    errors.NoHP = 'Required';
  } else if (values.NoHP.length > 14) {
    errors.NoHP = 'Maksimal 14 Karakter';
  }

  if (!values.Jenis_faskes) {
    errors.Jenis_faskes = 'Required';
  } else if (values.Jenis_faskes.length > 115) {
    errors.Jenis_faskes = 'Maksimal 115 Karakter';
  }
  return errors;
};
const Faskes_Form_Cabang = () => {
  const url = 'https://appsa.awanpintar.com/classes/Nama_Faskes';
  const headers = { 'X-Parse-Application-Id': 'MyAPPID' };

  const formik = useFormik({
    initialValues: {
      IDFaskes: '',
      Nama_Faskes: '',
      Jenis_faskes: '',
      NoHP: '',
      Alamat: '',
    },
    validate,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
      let data = {
        IDFaskes: values.IDFaskes,
        Nama_Faskes: values.Nama_Faskes,
        Jenis_Faskes: values.Jenis_faskes,
        Alamat: values.Alamat,
        NoHP: values.NoHP,
      };

      fetch(url, {
        method: 'POST',
        body: JSON.stringify(data),
        headers: headers,
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
          <header className="isi">
            <h1>Input Data Fasilitas Kesehatan</h1>
            <br />
            <div class="set">
              <div class="pets-name">
                <label for="IDFaskes">ID Fasilitas Kesehatan</label>
                <input
                  id="IDFaskes"
                  name="IDFaskes"
                  className="mt-4"
                  placeholder="ID Faskes"
                  type="text"
                  onChange={formik.handleChange}
                  value={formik.values.IDFaskes}
                />
                {formik.errors.IDFaskes ? (
                  <div>{formik.errors.IDFaskes}</div>
                ) : null}
              </div>
              <div class="pets-weight ">
                <label for="pet-weight-0-25">Nama Fasilitas Kesehatan</label>
                <input
                  id="Nama_Faskes"
                  name="Nama_Faskes"
                  placeholder="Nama Fasilitas Kesehatan"
                  type="text"
                  onChange={formik.handleChange}
                  value={formik.values.Nama_Faskes}
                />
                {formik.errors.Nama_Faskes ? (
                  <div>{formik.errors.Nama_Faskes}</div>
                ) : null}
              </div>
              <div class="pets-name">
                <label for="pets-name">Jenis Fasilitas Kesehatan</label>
                <input
                  id="Jenis_faskes"
                  name="Jenis_faskes"
                  placeholder="Jenis Fasilitas Kesehatan"
                  type="text"
                  onChange={formik.handleChange}
                  value={formik.values.Jenis_faskes}
                />
                {formik.errors.Jenis_faskes ? (
                  <div>{formik.errors.Jenis_faskes}</div>
                ) : null}
              </div>
            </div>

            <div class="set">
              <div class="pets-birthday">
                <label for="pets-birthday">No. Telephone</label>
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
              <div class="pets-weight">
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
              <div class="pets-name">
                <button
                  className="btn-outline-danger bt-sm  px-4 py-1 mt-4"
                  type="button"
                  onClick={formik.handleSubmit}
                >
                  Submit
                </button>
              </div>
            </div>
            {/* <div class='radio-container'>
                            </div> */}
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
export default Faskes_Form_Cabang;
