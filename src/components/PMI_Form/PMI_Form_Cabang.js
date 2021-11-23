import './PMI_Form.css'
import { useFormik} from 'formik';
const validate = values => {
    const errors = {};


    if (!values.Nama_PMI) {
        errors.Nama_PMI = 'Required';
    } else if (values.Nama_PMI.length > 115) {
        errors.Nama_PMI = 'Maksimal 115 Karakter';
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

    return errors;
};
const PMI_Form_Cabang=()=>{
    const formik = useFormik({
        initialValues: {
            Nama_PMI : '',
            Alamat:'',
            NoHP: '',
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
                                        name='Nama_PMI' 
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
                                    name='NoHP' 
                                    type='text'
                                    onChange={formik.handleChange}
                                    value={formik.values.NoHP}
                                    placeholder='+62XXXXXXX'/>
                                    {formik.errors.NoHP ? <div>{formik.errors.NoHP}</div> : null}
                            </div>
                        </div>
                        <div className="set">
                        <div class='pets-weight'>
                            <label for='Alamat'>Alamat</label>
                                    <input 
                                    id='Alamat' 
                                    name='Alamat' 
                                    placeholder="Alamat" 
                                    type='text'
                                    onChange={formik.handleChange}
                                    value={formik.values.Alamat}/>
                                    {formik.errors.Alamat ? <div>{formik.errors.Alamat}</div> : null}
                        </div>
                        <div class='pets-name'>
                                    <button className='btn-outline-danger bt-sm  px-4 py-1 mt-4'>Submit</button>
                                </div></div>
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