import './Faskes_Form.css'
import {  Form, useFormik } from 'formik';
const validate = values => {
    const errors = {};
    if (!values.firstName) {
        errors.firstName = 'Required';
    } else if (values.firstName.length > 15) {
        errors.firstName = 'Must be 15 characters or less';
    }

    if (!values.lastName) {
        errors.lastName = 'Required';
    } else if (values.lastName.length > 20) {
        errors.lastName = 'Must be 20 characters or less';
    }

    if (!values.email) {
        errors.email = 'Required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = 'Invalid email address';
    }
    return errors;
};
const Faskes_Form_Pasien=()=>{
    const formik = useFormik({
        initialValues: {
            IDPasien: '',
            IDPegawaiFaskes: '',
            NamaPasien: '',
            Alamat:'',
            NoHP: '',
            TanggalSembuh:'',
            Usia :'',
            BeratBadan:'',
            GolonganDarah:'',
            Rhesus: ''
        },
        validate,
        onSubmit: values => {
            alert(JSON.stringify(values, null, 2));
        },
        });
    return(
        <div className="containutama" >
            <div className="signup-container">
                <div class='right-container'>
                    <header className="konten">
                    <h1>Input Data Fasilitas Kesehatan</h1>
                        <br/>
                        <Form onSubmit={formik.handleSubmit}>
                            <div class='set'>
                                 <div class='pets-name'> {/*petsname */}
                                    <label htmlFor='IDPasien'>ID Pasien</label>
                                    <input 
                                        id='IDPasien'
                                        name='IDPasien'
                                        type="text"
                                        onChange={formik.handleChange}
                                        value={formik.values.IDPasien}
                                        placeholder="ID Pasien" 
                                        />
                                        {formik.errors.IDPasien ? <div>{formik.errors.IDPasien}</div> : null}
                                </div>
                                <div class='pets-name'>
                                    <label htmlfor='IDPegawaiFaskes'>ID Pegawai Faskes</label>
                                    <input 
                                        id='IDPegawaiFaskes' 
                                        name='IDPegawaiFaskes' 
                                        placeholder="ID Pegawai Faskes" 
                                        type='text'
                                        onChange={formik.handleChange}
                                        value={formik.values.IDPegawaiFaskes}/>
                                        {formik.errors.IDPegawaiFaskes ? <div>{formik.errors.IDPegawaiFaskes}</div> : null}
                                </div>
                                
                                <div class='pets-name'>
                                    <label for='Komorbid'> Komorbid </label>
                                    <input id='Komorbid' 
                                    name='Komorbid' 
                                    placeholder="Komorbid" 
                                    type='text'
                                    onChange={formik.handleChange}
                                    value={formik.values.Komorbid}/>
                                    {formik.errors.Komorbid ? <div>{formik.errors.Komorbid}</div> : null}
                                </div>    
                            </div>
                            <div class='set'>
                            <div class='pets-gender'>
                                    <label for='gender'>Jenis Kelamin</label>
                                    <div class='radio-container'>
                                        <input  id='pet-gender-female' name='pet-gender' type='radio' value='female'/>
                                        <label for='pet-gender-female'>Female</label>
                                        <input id='pet-gender-male' name='pet-gender' type='radio' value='male'/>
                                        <label for='pet-gender-male'>Male</label>
                                    </div>
                                </div>
                                {/* pets-birthday */}
                                <div class='pets-name'>
                                    <label for='Berat_Badan'>Berat Badan</label>
                                    <input id='Berat_Badan' 
                                    
                                    name='Berat_Badan' 
                                    placeholder='XXX' 
                                    type='text'
                                    onChange={formik.handleChange}
                                    value={formik.values.BeratBadan}>
                                    
                                    </input>{formik.errors.BeratBadan ? <div>{formik.errors.BeratBadan}</div> : null}
                                </div>
                                <div class='pets-birthday'>
                                    <label for='Usia'>Usia</label>
                                    <input id='Usia' 
                                    name='Usia' 
                                    placeholder='XXX'
                                    type='text'
                                    onChange={formik.handleChange}
                                    value={formik.values.Usia}></input>{formik.errors.Usia ? <div>{formik.errors.Usia}</div> : null}
                                </div>
                                
                            </div>
                            <div class='set'>
                            <div class='pets-gender'>
                                    <label for='donor-plasma'>Apakah Ingin Mendonorkan Plasma?</label>
                                    <div class='radio-container'>
                                        <input  id='donor-plasma-ya' name='kesediaan' type='radio' value='Yes'/>
                                        <label for='donor-plasma-ya'>Ya</label>
                                        <input id='donor-plasma-tidak' name='kesediaan' type='radio' value='No'/>
                                        <label for='donor-plasma-tidak'>Tidak</label>
                                    </div>
                                </div>
                                <div class='pets-name'>
                                    <label htmlfor='Nama_Pasien'>Nama Pasien</label>
                                    <input 
                                        id='Nama_Pasien' 
                                        placeholder="Nama Pasien" 
                                        type='text'
                                        onChange={formik.handleChange}
                                        value={formik.values.NamaPasien}/>
                                        
                                </div>
                            
                                <div class='pets-birthday'>
                                    <label for='TanggalSembuh'>Tanggal Sembuh</label>
                                    <input id='TanggalSembuh' 
                                    placeholder='DD/MM/YYYY' 
                                    type='date'
                                    onChange={formik.handleChange}
                                    value={formik.values.TanggalSembuh}
                                    ></input>
                                </div>
                            </div>
                            <div className="set">
                            <div class='pets-name'>
                                <label for='Alamat'>Alamat</label>
                                <input 
                                id='Alamat' 
                                name= "Alamat"
                                type='text'
                                onChange={formik.handleChange}
                                value={formik.values.Alamat}
                                placeholder='Alamat'/>
                            </div>
                            <div class='pets-name'>
                                <label for='Alamat'>Alamat</label>
                                <input 
                                id='Alamat' 
                                name= "Alamat"
                                type='text'
                                onChange={formik.handleChange}
                                value={formik.values.Alamat}
                                placeholder='Alamat'/>
                            </div>
                            <div class='pets-name'>
                                <label for='Alamat'>Golongan Darah</label>
                                    <div class='radio-container'>
                                        <input  id='goldar-A' name='kesediaan' type='radio' value='A'/>
                                        <label for='goldar-A'>A</label>
                                        <input id='goldar-B' name='kesediaan' type='radio' value='B'/>
                                        <label for='goldar-B'>B</label>
                                        <input id='goldar-AB' name='kesediaan' type='radio' value='AB'/>
                                        <label for='goldar-AB'>AB</label>
                                        <input id='goldar-O' name='kesediaan' type='radio' value='O'/>
                                        <label for='goldar-O'>O</label>
                                    </div>
                            </div>
                            </div>
                        </Form>
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
export default Faskes_Form_Pasien