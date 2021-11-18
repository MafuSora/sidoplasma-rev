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
                    <img src={gambar1} alt="..." width="100%" height="100%"></img>
                    <div className="carousel-caption d-none d-md-block">
                        {/* <img src="https://i.pinimg.com/564x/22/2e/40/222e4048c228885608cc11aa7cc608b2.jpg" className="carousel slide m-4 rounded ukuran" alt="..." className="suntik"/> */}
                        <h5>Selamat Datang</h5>
                        <p>Sidoplasma merupakan website yang terintegrasi dengan auto message digunakan untuk pendataan calon pendonor plasma konvalesen COVID-19 oleh berbagai fasilitas kesehatan dan dapat diakses oleh Palang Merah Indonesia (PMI).</p>
                        <a href="#" className="btn btn-lg btn-danger"> Gabung Sekarang </a>
                    </div>
                </div>
                <div className="Container active p-2">
                    <img src={gambar2} alt="..." width="100%" height="100%"></img>
                    <div className="carousel-caption d-none d-md-block">
                        {/* <img src="https://i.pinimg.com/564x/22/2e/40/222e4048c228885608cc11aa7cc608b2.jpg" className="carousel slide m-4 rounded ukuran" alt="..." className="suntik"/> */}
                        <h5>Selamat Datang</h5>
                        <p>Sidoplasma merupakan website yang terintegrasi dengan auto message digunakan untuk pendataan calon pendonor plasma konvalesen COVID-19 oleh berbagai fasilitas kesehatan dan dapat diakses oleh Palang Merah Indonesia (PMI).</p>
                        <a href="#" className="btn btn-lg btn-danger"> Gabung Sekarang </a>
                    </div>
                </div>   
                <div className="Container active">
                        <CardGroup className="p-2">
                                <Card >
                                    <Card.Img variant="top" src={card1} className ="card"/>
                                    <Card.Body>
                                    <Card.Title>Card title</Card.Title>
                                    <Card.Text>
                                        This is a wider card with supporting text below as a natural lead-in to
                                        additional content. This content is a little bit longer.
                                    </Card.Text>
                                    </Card.Body>
                                    <Card.Footer>
                                    <small className="text-muted">Last updated 3 mins ago</small>
                                    </Card.Footer>
                                </Card>
                                <Card>
                                    <Card.Img variant="top" src={card2} className ="card"  />
                                    <Card.Body>
                                    <Card.Title>Card title</Card.Title>
                                    <Card.Text>
                                        This card has supporting text below as a natural lead-in to additional
                                        content.{' '}
                                    </Card.Text>
                                    </Card.Body>
                                    <Card.Footer>
                                    <small className="text-muted">Last updated 3 mins ago</small>
                                    </Card.Footer>
                                </Card>
                                <Card>
                                    <Card.Img variant="top" src={card3} className ="card" />
                                    <Card.Body>
                                    <Card.Title>Card title</Card.Title>
                                    <Card.Text>
                                        This is a wider card with supporting text below as a natural lead-in to
                                        additional content. This card has even longer content than the first to
                                        show that equal height action.
                                    </Card.Text>
                                    </Card.Body>
                                    <Card.Footer>
                                    <small className="text-muted">Last updated 3 mins ago</small>
                                    </Card.Footer>
                                </Card>
                        </CardGroup>
                    </div>
        </div>
                            
   

    );
}
export default Faskes_Konten_1