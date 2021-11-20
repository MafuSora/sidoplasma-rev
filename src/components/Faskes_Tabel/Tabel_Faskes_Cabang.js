import './Tabel_Faskes.css'
const Tabel_Faskes_Cabang=(props)=>{
    return(
        <div className="containutama" >
            <div className="table-responsive p-2">
                <table className="table">
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">ID Faskes</th>
                                <th scope="col">Nama Faskes</th>
                                <th scope="col">Jenis Faskes</th>
                                <th scope="col">Alamat</th>
                                <th scope="col">No Handphone</th>
                            </tr>
                        </thead>
                    </table>
                </div>
            </div>
    );
}
export default Tabel_Faskes_Cabang