import './PMI_Form.css'
import { useFormik} from 'formik';
const validate = values => {
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
const PMI_Form_Cabang=()=>{
    const formik = useFormik({
        initialValues: {
            NamaPegawaiFaskes: '',
            Nama_Pasien: '',
            Alamat:'',
            NoHP: '',
            TanggalSembuh:'',
            Usia :'',
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
            <div class='signup-container'>
                <div class='right-container'>
                    <header>
                        <h1>Input Data PMI</h1>
                        <br/>
                        <div class='set'>
                            <div class='pets-name'>
                                <label for='pets-name'>Nama PMI</label>
                                <input 
                                        id='Nama_PMI' 
                                        placeholder="Nama_PMI" 
                                        type='text'
                                        onChange={formik.handleChange}
                                        value={formik.values.Nama_PMI}/>
                                        {formik.errors.Nama_PMI ? <div>{formik.errors.Nama_PMI}</div> : null}
                            </div>    
                            <div class='pets-birthday'>
                                    <label for='pets-birthday'>No. Telephone</label>
                                    <input 
                                    id='NoHP' 
                                    name= "No Telephone"
                                    type='text'
                                    onChange={formik.handleChange}
                                    value={formik.values.NoHP}
                                    placeholder='+62XXXXXXX'/>
                                    {formik.errors.NoHP ? <div>{formik.errors.NoHP}</div> : null}
                            </div>
                        </div>
                        <div class='pets-weight'>
                            <label for='pet-weight-0-25'>Alamat</label>
                            <div class='radio-container'>
                            <label for='Alamat'>Alamat</label>
                                    <input 
                                    id='Alamat' 
                                    placeholder="Alamat" 
                                    type='text'
                                    onChange={formik.handleChange}
                                    value={formik.values.Alamat}/>
                                    {formik.errors.Alamat ? <div>{formik.errors.Alamat}</div> : null}
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
export default PMI_Form_Cabang