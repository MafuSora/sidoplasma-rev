import './PMI_Form.css'
const PMI_Form_Pegawai=()=>{
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
                            <input id='pets-name' placeholder="ID Pegawai PMI" type='text'/>
                        </div>
                        <div class='pets-breed'>
                            <label for='pets-breed'>Nama PMI</label>
                            <input id='pets-breed' placeholder="ID PMI" type='text'/>
                        </div>
                        <div class='pets-name'>
                            <label for='pets-name'>Nama Pegawai</label>
                            <input id='pets-name' placeholder="Nama Pegawai" type='text'/>
                        </div>    
                    </div>
                    <div class='set'>
                        <div class='pets-birthday'>
                                <label for='pets-birthday'>No. Handphone</label>
                                <input id='pets-birthday' placeholder='+62' type='text'></input>
                        </div>
                    </div>
                    <div class='set'>
                        
                        <div class='pets-birthday'>
                            <label for='pets-birthday'>Username</label>
                            <input id='pets-birthday' placeholder='Username' type='text'></input>
                        </div>
                        <div class='pets-birthday'>
                            <label for='pets-birthday'>Password</label>
                            <input id='pets-birthday' placeholder='Password' type='password'></input>
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
export default PMI_Form_Pegawai