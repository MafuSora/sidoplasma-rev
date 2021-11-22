import { Button, ButtonGroup,ToggleButton } from 'react-bootstrap';
import reactDom from 'react-dom';
import react,{useState} from 'react';
import suntik from '../img/suntik.png';
import gambar1 from "../img/wallpaper.jpg";
import gambar2 from "../img/covid.jpg";
import card1 from "../img/hubungi.jpg";
import card2 from "../img/verifikasi.jpg";
import card3 from "../img/berhasil.jpg";
// import gambar3 from "../img/newnormal.jpg"
import './about.css'
import { Card, Row, Col,CardGroup } from 'react-bootstrap';
const Faskes_Konten_1=()=>{
    const [checked, setChecked] = useState(false);
    const [radioValue, setRadioValue] = useState('1');


    
    return(
        <div className="">
                <div className="Container active p-2">
                    <img src={gambar1} alt="..." width="100%" height="100%" className="gambar" ></img>
                    <div className="carousel-caption d-none d-md-block">
                        {/* <img src="https://i.pinimg.com/564x/22/2e/40/222e4048c228885608cc11aa7cc608b2.jpg" className="carousel slide m-4 rounded ukuran" alt="..." className="suntik"/> */}
                        <h1 className="tulisanlanding">Selamat Datang</h1>
                        <p className="tulisanlanding">Sidoplasma merupakan website yang terintegrasi dengan auto message digunakan untuk pendataan calon pendonor plasma konvalesen COVID-19 oleh berbagai fasilitas kesehatan dan dapat diakses oleh Palang Merah Indonesia (PMI).</p>
                        <a href="#" className="btn btn-lg btn-danger"> Gabung Sekarang </a>
                    </div>
                </div>  
                <div className="Container active">
                <div>
                    <h3 id="headerTitle" className="joinus">Bagaimana Cara untuk Bergabung?</h3>
                </div>
                        <CardGroup className="p-2">
                                <Card className="card" >
                                    <Card.Img variant="top" src={card1} className ="kartu" />
                                    <Card.Body>
                                    <Card.Title className="judulkartu">Kontak Kami!</Card.Title>
                                    <Card.Text className="tulisankartu ">
                                        Kontak kami melalui email <a href="mailto:sidoplasma@gmail.com?
										&subject=Contact Us For Register">sidoplasmateam@gmail.com</a> dengan menyerahkan beberapa dokumen yang membuktikan bahwa anda berasal dari fasilitas kesehatan yang telah diakui oleh pemerintah
                                    </Card.Text>
                                    </Card.Body>
                                    <Card.Footer>
                                    <small className="text-muted">  </small>
                                    </Card.Footer>
                                </Card>
                                <Card>
                                    <Card.Img variant="top" src={card2} className ="kartu"  />
                                    <Card.Body>
                                    <Card.Title className="judulkartu">Verifikasi dan Validasi</Card.Title>
                                    <Card.Text className="tulisankartu">
                                        Dokumen yang telah dikirimkan akan kami verifikasi dan validasi, bila sudah terverifikasi admin akan mengaktifkan akun{' '}
                                    </Card.Text>
                                    </Card.Body>
                                    <Card.Footer>
                                    <small className="text-muted"></small>
                                    </Card.Footer>
                                </Card>
                                <Card>
                                    <Card.Img variant="top" src={card3} className ="kartu" />
                                    <Card.Body>
                                    <Card.Title className="judulkartu">Pemberian Akun Sidoplasma</Card.Title>
                                    <Card.Text className="tulisankartu">
                                        Setelah terverifikasi maka admin akan memberikan akun sidoplasma yang berisikan username dan password agar user dapat mengakses website sidoplasma
                                    </Card.Text>
                                    </Card.Body>
                                    <Card.Footer>
                                    <small className="text-muted"></small>
                                    </Card.Footer>
                                </Card>
                        </CardGroup>
                    </div>
        </div>
                            
   

    );
}
export default Faskes_Konten_1