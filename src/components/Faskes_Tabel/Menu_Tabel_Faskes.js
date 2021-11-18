import './Menu_Tabel_Faskes.css'
// import { MDBDataTable } from 'mdbreact';


const PMI_Menu_1=(props)=>{
    // const rawdata= fetch("./pmi.json")
    return(
        <div classname="contain">
                <div className="table-responsive p-2">
                    <table className="table">
                        <thead>
                            <tr>
                            <th scope="col">#</th>
                            <th scope="col">ID Pasien</th>
                            <th scope="col">ID Pegawai Faskes</th>
                            <th scope="col">Nama</th>
                            <th scope="col">Alamat</th>
                            <th scope="col">No Handphone</th>
                            <th scope="col">Tanggal Sembuh</th>
                            <th scope="col">Usia</th>
                            <th scope="col">Golongan Darah</th>
                            <th scope="col">Rhesus</th>
                            <th scope="col">Komorbid</th>
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
export default PMI_Menu_1