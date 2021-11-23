import './Faskes_Form.css'
import {useState}from 'react';
import { useFormik} from 'formik';
const validate = values => {
    const errors = {};
    if (!values.IDPegawai) {
        errors.IDpegawai = 'Required';
    } else if (values.IDPegawai.length > 20) {
        errors.IDpegawai = 'Maksimal 20 Karakter';
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
    } else if (values.TanggalSembuh.length > 115) {
        errors.TanggalSembuh = 'Maksimal 115 Karakter';
    }

    if (!values.TanggalSembuh) {
        errors.TanggalSembuh = 'Required';
    } else if (values.TanggalSembuh.length > 115) {
        errors.TanggalSembuh = 'Maksimal 115 Karakter';
    }

    if (!values.Usia) {
        errors.Usia = 'Required';
    } else if (values.Usia.length > 20) {
        errors.Usia = 'Pilih Jenis Kelamin';
    }

    if (!values.email) {
        errors.email = 'Required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = 'Invalid email address';
    }
    return errors;
};
const Faskes_Form_Pegawai=()=>{
    const formik = useFormik({
        initialValues: {
            IDPegawai: '',
            NamaPegawaiFaskes: '',
            NamaCabangFaskes:'',
            NoHP: '',
            Username:'',
            Password :''
           
        },
        validate,
        onSubmit: values => {
            alert(JSON.stringify(values, null, 2));
        },
        });
    return(
        
        <div className="containutama" >
            <div class='signup-container'>
                <div class='right-container'>
                    <header>
                    <h1>Input Data Pegawai Fasilitas Kesehatan</h1>
                        <br/>
                        <div class='set'>
                            <div class='pets-name'>
                                <label for='IDPegawai'>ID Pegawai</label>
                                <input id='IDPegawaiFaskes' name='IDPegawaiFaskes'  placeholder="ID Pegawai PMI" type='text' onChange={formik.handleChange}
                                        value={formik.values.IDpegawai}/>
                            </div>
                            <div class='pets-name'>
                                <label for='NamaPegawaiFaskes'>Nama Pegawai Faskes</label>
                                <input id='NamaPegawaiFaskes' name="NamaPegawaiFaskes" placeholder="Nama Pegawai Faskes" type='text' onChange={formik.handleChange}
                                        value={formik.values.NamaPegawaiFaskes}/>
                            </div>
                            <div class='pets-breed'>
                                <label for='NamaCabangFaskes'>Nama Cabang Faskes</label>
                                <input id='NamaCabangFaskes' name="NamaCabangFaskes" placeholder="Nama Cabang Faskes" type='text' onChange={formik.handleChange}
                                        value={formik.values.NamaCabangFaskes}/>
                            </div>
                        </div>
                        <div class='set'>
                            
                        </div>
                        <div class='set'>
                            <div class='pets-birthday'>
                                    <label for='NoHP'>No. Handphone</label>
                                    <input id='NoHP' name="NoHP" placeholder='+62' type='text' onChange={formik.handleChange}
                                        value={formik.values.NoHP}></input>
                            </div>
                            <div class='pets-birthday'>
                                <label for='Username'>Username</label>
                                <input id='Username' name="Username" placeholder='Username' type='text' onChange={formik.handleChange}
                                        value={formik.values.Username}></input>
                            </div>
                            <div class='pets-birthday'>
                                <label for='Password'>Password</label>
                                <input id='Password' name="Password" placeholder='Password' type='password' onChange={formik.handleChange}
                                        value={formik.values.Password}></input>
                            </div>
                        </div>
                    </header>
                    <footer>
                        <div class='set'>
                            <button id='back'>Back</button>
                            <button id='next'>Next</button>
                        </div>
                    </footer>
                </div>
            </div>
        </div>
    
    );
}
export default Faskes_Form_Pegawai