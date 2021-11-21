import './Faskes_Form.css'

const Faskes_Form_Cabang=()=>{
    return(
        <div className="containutama" >
            <div class='signup-container'>
                <div class='right-container'>
                <header>
                        <h1>Input Data Fasilitas Kesehatan</h1>
                        <br/>
                        <div class='set'>
                            <div class='pets-name'>
                                <label for='IDFaskes'>ID Fasilitas Kesehatan</label>
                                <input id='IDFaskes' placeholder="ID Fasilitas Kesehatan" type='text'/>
                            </div>
                            <div class='pets-weight'>
                                <label for='pet-weight-0-25'>Nama Fasilitas Kesehatan</label>
                                <input className="alamat"  type='text'  placeholder='Nama Fasilitas Kesehatan'/>
                            </div>
                        </div>
                        
                        <div class='set'>
                            <div class='pets-name'>
                                <label for='pets-name'>Jenis Fasilitas Kesehatan</label>
                                <input id='pets-name' placeholder="Jenis Fasilitas Kesehatan" type='text'/>
                            </div>    
                            <div class='pets-birthday'>
                                    <label for='pets-birthday'>No. Telephone</label>
                                    <input id='pets-birthday' placeholder='(0341) XXXXXX' type='text'></input>
                            </div>
                            <div class='pets-weight'>
                                <label for='pet-weight-0-25'>Alamat</label>
                                <input className="alamat"  type='text'  placeholder='Alamat'/>
                        </div>
                        </div>
                            {/* <div class='radio-container'>
                            </div> */}
                        
                        
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
export default Faskes_Form_Cabang