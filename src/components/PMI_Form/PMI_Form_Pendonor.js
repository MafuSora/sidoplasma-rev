import './PMI_Form.css'
import { useFormik} from 'formik';
const validate = values => {
    const errors = {};
    if (!values.NamaPasien) {
        errors.NamaPasien = 'Required';
    } else if (values.NamaPasien.length > 115) {
        errors.NamaPasien = 'Maksimal 115 Karakter';
    }

    if (!values.JenisKelamin) {
        errors.JenisKelamin = 'Required';
    } else if (values.JenisKelamin.length > 20) {
        errors.JenisKelamin = 'Pilih Jenis Kelamin';
    }

    if (!values.email) {
        errors.email = 'Required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = 'Invalid email address';
    }
    return errors;
};
const PMI_Form_Pendonor=()=>{
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
            <div className='signup-container'>
                <div class='right-container'>
                    <header>
                        <h1>Input Data Pendonor</h1>
                        <br/>
                        <form onSubmit={formik.handleSubmit}>
                            <div class='set'>
                                
                                <div class='pets-name'>
                                    <label htmlfor='NamaPegawaiPMI'>Nama Pegawai PMI</label>
                                    <input 
                                        id='NamaPegawaiPMI' 
                                        name='NamaPegawaiPMI' 
                                        placeholder="Nama Pegawai PMI" 
                                        type='text'
                                        onChange={formik.handleChange}
                                        value={formik.values.IDPegawaiPMI}/>
                                        {formik.errors.IDPegawaiPMI ? <div>{formik.errors.IDPegawaiFaskes}</div> : null}
                                </div>
                                <div class='pets-name'>
                                    <label htmlfor='NamaPendonor'>Nama Pendonor</label>
                                    <input 
                                        id='NamaPendonor' 
                                        placeholder="Nama Pendonor" 
                                        type='text'
                                        onChange={formik.handleChange}
                                        value={formik.values.NamaPendonor}/>
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
                                <div class='pets-birthday'>
                                    <label forhtml='TanggalDonor'>Tanggal Donor</label>
                                    <input id='TanggalDonor' 
                                    name='TanggalDonor' 
                                    placeholder='DD/MM/YYYY' 
                                    type='date'
                                    onChange={formik.handleChange}
                                    value={formik.values.TanggalDonor}
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
                            <div className='set'>
                                <div class='pets-name'>
                                    <label for='NoHP'>Nomor Handphone</label>
                                    <input 
                                    id='NoHP' 
                                    name= "NoHP"
                                    type='text'
                                    onChange={formik.handleChange}
                                    value={formik.values.NoHP}
                                    placeholder='+62XXXXXXX'/>
                                </div>
                                <div class='pets-gender'>
                                            <label for='pet-gender-female'>Rhesus </label>
                                            <div class='radio-container'>
                                                <input  id='Rhesus' name='pet-gender' type='radio' value='+'/>
                                                <label for='Rhesus'>+</label>
                                                <input id='Rhesus' name='pet-gender' type='radio' value='-'/>
                                                <label for='Rhesus'>-</label>
                                            </div>
                                </div>
                                <div class='pets-name'>
                                    <button className='btn-outline-danger bt-sm  px-4 py-1 mt-4'>Submit</button>
                                </div>
                            </div>
                        </form>
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
export default PMI_Form_Pendonor