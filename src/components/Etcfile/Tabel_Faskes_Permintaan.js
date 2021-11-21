import './Tabel_Faskes.css'

const Tabel_Faskes_Permintaan=(props)=>{
    return(
        <div className="containutama" >
            <div className="table-responsive p-2">
                <table className="table">
                        <thead>
                            <tr>
                                <th scope="col">Nama Faskes</th>
                                <th scope="col">Golongan Darah</th>
                                <th scope="col">Rhesus</th>
                                <th scope="col">Jumlah</th>
                            </tr>
                        </thead>
                    </table>
                </div>
            </div>
    );
}
export default Tabel_Faskes_Permintaan