import './Faskes_Form.css'
const Faskes_Form_Permintaan=()=>{
    return(
        <div className="containutama" >
            <div class='signup-container'>
                <div class='right-container'>
                <header>
                    <h1>Input Data Inventori Plasma</h1>
                        <br/>
                        <div class='set'>
                            <div class='pets-name'>
                                <label for='pets-name'>ID Data Permintaan Donor</label>
                                <input id='pets-name' placeholder="ID Data Permintaan Donor" type='text'/>
                            </div>
                            <div class='pets-breed'>
                                <label for='pets-breed'>ID Pegawai Faskes</label>
                                <input id='pets-breed' placeholder="ID Pegawai Faskes" type='text'/>
                            </div>    
                            <div class='pets-name'>
                                <label for='pets-name'>Nama Pegawai Faskes </label>
                                <input id='pets-name' placeholder="Nama Pegawai Faskes" type='text'/>
                            </div>
                        </div>
                        <div class='set'>
                            <div class='pets-birthday'>
                                    <label for='pets-birthday'>Tanggal Permintaaan </label>
                                    <input id='pets-birthday' placeholder='DD/MM/YYYY' type='date'></input>
                            </div>
                        </div>
                        <div class='set'>
                            <div class='pets-gender'>
                                <label for='pet-gender-female'>Golongan Darah </label>
                                <div class='radio-container'>
                                    <input id='pet-gender-A' name='pet-gender' type='radio' value='female'/>
                                    <label for='pet-gender-A'>A</label>
                                    <input id='pet-gender-B' name='pet-gender' type='radio' value='male'/>
                                    <label for='pet-gender-B'>B</label>
                                    <input id='pet-gender-O' name='pet-gender' type='radio' value='male'/>
                                    <label for='pet-gender-O'>O</label>
                                    <input id='pet-gender-AB' name='pet-gender' type='radio' value='male'/>
                                    <label for='pet-gender-AB'>AB</label>
                                </div>
                            </div>
                            <div class='pets-gender'>
                                <label for='pet-gender-female'>Rhesus </label>
                                <div class='radio-container'>
                                    <input  id='pet-gender-female2' name='pet-gender' type='radio' value='positive'/>
                                    <label for='pet-gender-female2'>+</label>
                                    <input id='pet-gender-male2' name='pet-gender' type='radio' value='negative'/>
                                    <label for='pet-gender-male2'>-</label>
                                </div>
                            </div>
                        </div>
                        <div class="set">
                            
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
export default Faskes_Form_Permintaan