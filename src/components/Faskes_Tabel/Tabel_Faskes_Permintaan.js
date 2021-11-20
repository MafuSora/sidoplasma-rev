import './Tabel_Faskes.css'

const Tabel_Faskes_Permintaan=(props)=>{
    return(
        <div className="containutama" >
            <div className="table-responsive p-2">
                <table className="table">
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">ID Data Permintaan Donor</th>
                                <th scope="col">ID Pegawai Faskes</th>
                                <th scope="col">Nama Permintaan</th>
                                <th scope="col">Golongan Darah</th>
                                <th scope="col">Rhesus</th>
                            </tr>
                        </thead>
                    </table>
                </div>
            </div>
    );
}
export default Tabel_Faskes_Permintaan