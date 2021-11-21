import './Tabel_PMI.css'
const Tabel_PMI_Pendonor=(props)=>{
    return(
        <div className="containutama" >
            <div className="table-responsive p-2">
                    <table className="table">
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Nama Pendonor</th>
                                <th scope="col">Nama Pegawai PMI</th>
                                <th scope="col">Golongan Darah</th>
                                <th scope="col">Rhesus</th>
                                <th scope="col">Jenis Kelamin</th>
                                <th scope="col">Usia</th>
                                <th scope="col">Alamat</th>
                                <th scope="col">No Handphone</th>
                                <th scope="col">Tanggal Donor</th>
                            </tr>
                        </thead>
                    </table>
                </div>
            </div>
    );
}
export default Tabel_PMI_Pendonor