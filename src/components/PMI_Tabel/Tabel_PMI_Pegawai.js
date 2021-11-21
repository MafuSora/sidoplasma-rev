import './Tabel_PMI.css'
const Tabel_PMI_Pegawai=(props)=>{
    return(
        <div className="containutama" >
            <div className="table-responsive p-2">
                    <table className="table">
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">ID Pegawai PMI</th>
                                <th scope="col">Nama Pegawai</th>
                                <th scope="col">Nama PMI</th>
                                <th scope="col">No Handphone</th>
                    
                            </tr>
                        </thead>
                    </table>
                </div>
            </div>
    );
}
export default Tabel_PMI_Pegawai