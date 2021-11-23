import './PMI_Form.css'
import { useFormik} from 'formik';
const validate = values => {
    const errors = {};
    if (!values.ID_Pegawai) {
        errors.ID_Pegawai = 'Required';
    } else if (values.ID_Pegawai.length > 115) {
        errors.ID_Pegawai = 'Maksimal 115 Karakter';
    }

    if (!values.Nama_PMI) {
        errors.Nama_PMI = 'Required';
    } else if (values.Nama_PMI.length > 115) {
        errors.Nama_PMI = 'Maksimal 115 Karakter';
    }

    if (!values.nama_pegawai) {
        errors.nama_pegawai = 'Required';
    } else if (values.nama_pegawai.length > 115) {
        errors.nama_pegawai = 'Maksimal 115 Karakter';
    }

    if (!values.NoHP) {
        errors.NoHP = 'Required';
    } else if (values.NoHP.length > 14) {
        errors.NoHP = 'Maksimal 14 Karakter';
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


    if (!values.email) {
        errors.email = 'Required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = 'Invalid email address';
    }
    return errors;
};

const PMI_Form_Pegawai=()=>{
        const formik = useFormik({
            initialValues: {
                ID_Pegawai: '',
                Nama_PMI:'',
                nama_pegawai: '',
                NoHP:'',
                Username :'',
                Password:''
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
                    <h1>Input Data Pegawai PMI</h1>
                        <br/>
                    <div class='set'>
                        <div class='pets-name'>
                            <label for='pets-name'>ID Pegawai PMI</label>
                            <input 
                                        id='ID_Pegawai' 
                                        name='ID_Pegawai' 
                                        placeholder="ID Pegawai PMI" 
                                        type='text'
                                        onChange={formik.handleChange}
                                        value={formik.values.ID_Pegawai}/>
                                        {formik.errors.ID_Pegawai ? <div>{formik.errors.ID_Pegawai}</div> : null}
                        </div>
                        <div class='pets-breed'>
                            <label for='pets-breed'>Nama PMI</label>
                            <input id='Nama_PMI' 
                                        name='Nama_PMI' 
                                        placeholder='Nama_PMI'
                                        type='text'
                                        onChange={formik.handleChange}
                                        value={formik.values.Nama_PMI}></input>{formik.errors.Nama_PMI ? <div>{formik.errors.Nama_PMI}</div> : null}
                        </div>
                        <div class='pets-name'>
                            <label for='pets-name'>Nama Pegawai</label>
                            <input 
                                    id='nama_pegawai' 
                                    name= "nama_pegawai"
                                    type='text'
                                    onChange={formik.handleChange}
                                    value={formik.values.nama_pegawai}
                                    placeholder='Nama Pegawai'/>
                        </div>    
                    </div>
                    <div class='set'>
                        <div class='pets-birthday'>
                                <label for='pets-birthday'>No. Handphone</label>
                                <input 
                                    id='NoHP' 
                                    name= "NoHP"
                                    type='text'
                                    onChange={formik.handleChange}
                                    value={formik.values.NoHP}
                                    placeholder='+62XXXXXXX'/>
                        </div>
                        <div class='pets-birthday'>
                            <label for='pets-birthday'>Username</label>
                            <input id='Username' 
                                        name='Username' 
                                        placeholder='Username'
                                        type='text'
                                        onChange={formik.handleChange}
                                        value={formik.values.Username}></input>{formik.errors.Username ? <div>{formik.errors.Username}</div> : null}
                        </div>
                        <div class='pets-birthday'>
                            <label for='pets-birthday'>Password</label>
                            <input id='Password' 
                                        name='Password' 
                                        placeholder='Password'
                                        type='text'
                                        onChange={formik.handleChange}
                                        value={formik.values.Password}></input>{formik.errors.Password ? <div>{formik.errors.Password}</div> : null}
                        </div>
                    </div>
                    <div class='set'>
                    <div class='pets-name'>
                                    <button className='btn-outline-danger bt-sm  px-4 py-1 mt-4'>Submit</button>
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
};
export default PMI_Form_Pegawai