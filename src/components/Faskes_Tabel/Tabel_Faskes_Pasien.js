import './Tabel_Faskes.css'
// import { MDBDataTable } from 'mdbreact';


const Tabel_Faskes_Pasien=(props)=>{
    // const rawdata= fetch("./pmi.json")
    return(
        <div classname="contain">
                <div className="table-responsive p-2">
                    <table className="table">
                        <thead>
                            <tr>
                                <th scope="col">Nama Pasien</th>
                                <th scope="col">Jenis Kelamin</th>
                                <th scope="col">Usia</th>
                                <th scope="col">No Handphone</th>
                                <th scope="col">Golongan Darah</th>
                                <th scope="col">Rhesus</th>
                                <th scope="col">Tanggal Sembuh</th>
                                <th scope="col">Nama Pegawai Faskes</th>
                                <th scope="col">Ingin Donor</th>
                            </tr>
                        </thead>
                        <tr></tr>
                    </table>
                </div>
                {/* <MDBDataTable
                        striped
                        bordered
                        small
                        data={data}
                        /> */}
            </div>
    );
}
export default Tabel_Faskes_Pasien