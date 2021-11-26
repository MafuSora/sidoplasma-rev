import './PMI_Form.css';
import { useFormik } from 'formik';
const validate = (values) => {
  const errors = {};
  if (!values.NamaPendonor) {
    errors.NamaPendonor = 'Required';
  } else if (values.NamaPendonor.length > 115) {
    errors.NamaPendonor = 'Maksimal 115 Karakter';
  }

  if (!values.Alamat) {
    errors.Alamat = 'Required';
  } else if (values.Alamat.length > 115) {
    errors.Alamat = 'Maksimal 115 Karakter';
  }

  if (!values.CabangPMI) {
    errors.CabangPMI = 'Required';
  } else if (values.CabangPMI.length > 115) {
    errors.CabangPMI = 'Maksimal 115 Karakter';
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

  if (!values.TanggalDonor) {
    errors.TanggalDonor = 'Required';
  } else if (values.TanggalDonor.length > 115) {
    errors.TanggalDonor = 'Maksimal 115 Karakter';
  }

  if (!values.Usia) {
    errors.Usia = 'Required';
  } else if (values.Usia > 200) {
    errors.Usia = 'Pilih Jenis Kelamin';
  }


  return errors;
};
const PMI_Form_Pendonor = () => {
  const url = 'https://appsa.awanpintar.com/classes/Pendonor';
  const headers = { 'X-Parse-Application-Id': 'MyAPPID' };

  const formik = useFormik({
    initialValues: {
      NamaPendonor: '',
      Alamat: '',
      NoHP: '',
      TanggalDonor: '',
      Usia:0,
      JenisKelamin: '',
      GolonganDarah: '',
      Rhesus: '',
      CabangPMI: '',
    },
    validate,
    onSubmit: (values) => {
      let data = {
        NamaPendonor: values.NamaPendonor,
        Alamat: values.Alamat,
        NoHP: values.NoHP,
        TanggalDonor: values.TanggalDonor,
        Usia: values.Usia,
        JenisKelamin: values.JenisKelamin,
        GolonganDarah: values.GolonganDarah,
        Rhesus: values.Rhesus,
        CabangPMI: values.CabangPMI,
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
      <div className="signup-container">
        <div class="right-container">
          <header>
            <h1>Input Data Pendonor</h1>
            <br />
            <form>
              <div class="set">
                <div class="pets-name">
                  <label htmlfor="NamaPendonor">Nama Pendonor</label>
                  <input
                    id="NamaPendonor"
                    name="NamaPendonor"
                    placeholder="Nama Pendonor"
                    type="text"
                    onChange={formik.handleChange}
                    value={formik.values.NamaPendonor}
                  />
                  {formik.errors.NamaPendonor ? (
                    <div>{formik.errors.NamaPendonor}</div>
                  ) : null}
                </div>
                <div class="pets-birthday">
                  <label for="Usia">Usia</label>
                  <input
                    id="Usia"
                    name="Usia"
                    placeholder="XXX"
                    type="number"
                    onChange={formik.handleChange}
                    value={formik.values.Usia}
                  ></input>
                  {formik.errors.Usia ? <div>{formik.errors.Usia}</div> : null}
                </div>
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
              </div>
              <div class="set">
                <div class="pets-name">
                  <label for="NoHP">Nomor Handphone</label>
                  <input
                    id="NoHP"
                    name="NoHP"
                    type="text"
                    onChange={formik.handleChange}
                    value={formik.values.NoHP}
                    placeholder="+62XXXXXXX"
                  />{formik.errors.NoHP ? (
                    <div>{formik.errors.NoHP}</div>
                  ) : null}
                </div>
                <div class="pets-name">
                  <label for="Alamat">Alamat</label>
                  <input
                    id="Alamat"
                    name="Alamat"
                    type="text"
                    onChange={formik.handleChange}
                    value={formik.values.Alamat}
                    placeholder="Alamat"
                  />
                  {formik.errors.Alamat ? (
                    <div>{formik.errors.Alamat}</div>
                  ) : null}
                </div>
                <div class="pets-birthday">
                  <label forhtml="TanggalDonor">Tanggal Donor</label>
                  <input
                    id="TanggalDonor"
                    name="TanggalDonor"
                    placeholder="DD/MM/YYYY"
                    type="date"
                    onChange={formik.handleChange}
                    value={formik.values.TanggalDonor}
                  ></input>
                  {formik.errors.TanggalDonor ? (
                    <div>{formik.errors.TanggalDonor}</div>
                  ) : null}
                </div>
              </div>
              <div class="set">
                <div class="pets-name">
                  <label htmlfor="NamaPendonor">Cabang PMI </label>
                  <input
                    id="CabangPMI"
                    placeholder="Cabang PMI"
                    type="text"
                    onChange={formik.handleChange}
                    value={formik.values.CabangPMI}
                  />
                  {formik.errors.CabangPMI ? (
                    <div>{formik.errors.CabangPMI}</div>
                  ) : null}
                </div>
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
              </div>
              <div className="set"></div>
              <div className="set">
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
            </form>
          </header>
        </div>
      </div>
    </div>
  );
};
export default PMI_Form_Pendonor;