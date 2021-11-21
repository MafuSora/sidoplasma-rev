import './Tabel_PMI.css'
const Tabel_PMI_Inventori=(props)=>{
    return(
        <div className="containutama" >
            <div className="table-responsive p-2">
                    <table className="table">
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Golongan Darah</th>
                                <th scope="col">Rhesus</th>
                                <th scope="col">Tanggal Kadaluarsa</th>
                                <th scope="col">Cabang PMI</th>
                                <th scope="col">No Telephone</th>
                                <th scope="col">Stok</th>
                            </tr>
                        </thead>
                    </table>
                </div>
            </div>
    );
}
export default Tabel_PMI_Inventori