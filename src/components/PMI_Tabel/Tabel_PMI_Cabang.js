import './Tabel_PMI.css'
const Tabel_PMI_Cabang=(props)=>{
    return(
                <div className="table-responsive p-2">
                    <table className="table">
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Cabang PMI</th>
                                <th scope="col">No Telephone</th>
                                <th scope="col">Alamat</th>
                            </tr>
                        </thead>
                    </table>
                </div>
    );
}
export default Tabel_PMI_Cabang