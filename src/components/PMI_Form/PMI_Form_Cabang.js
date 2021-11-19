import './PMI_Form.css'
const PMI_Form_Cabang=()=>{
    return(
        <div className="containutama" >
            <div class='signup-container'>
                <div class='right-container'>
                    <header>
                        <h1>Input Data PMI</h1>
                        <br/>
                        <div class='set'>
                            <div class='pets-name'>
                                <label for='pets-name'>ID PMI</label>
                                <input id='pets-name' placeholder="ID PMI" type='text'/>
                            </div>
                            <div class='pets-name'>
                                <label for='pets-name'>Nama PMI</label>
                                <input id='pets-name' placeholder="Nama PMI" type='text'/>
                            </div>    
                            <div class='pets-birthday'>
                                    <label for='pets-birthday'>No. Telephone</label>
                                    <input id='pets-birthday' placeholder='(0341) XXXXXX' type='text'></input>
                            </div>
                        </div>
                        <div class='pets-weight'>
                            <label for='pet-weight-0-25'>Alamat</label>
                            <div class='radio-container'>
                                <input className="alamat"  type='text'  placeholder='Alamat'/>
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