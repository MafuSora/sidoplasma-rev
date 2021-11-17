
import { Button, ButtonGroup,ToggleButton } from 'react-bootstrap';
import reactDom from 'react-dom';
import react,{useState} from 'react';
import suntik from '../img/suntik.png';
const Faskes_Konten_1=()=>{
    const [checked, setChecked] = useState(false);
    const [radioValue, setRadioValue] = useState('1');

    
    return(
        <div className="framebody">
            <div>
                <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">
                    <div class="carousel-indicators p-3">
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    </div>
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                        <img src={suntik} alt="sidoplasma" class="carousel slide m-4 rounded ukuran" class = "suntik" alt="..."  ></img>
                        {/* <img src="https://th.bing.com/th/id/OIP.VGxLRyJbW-GrRGN-lPUIvgHaE8?pid=ImgDet&rs=1" class="carousel slide m-4 rounded ukuran" alt="..."/> */}
                        <div class="container">
                            <h1>Selamat Datang</h1>
                            <p>Penggunaan media berupa website yang terintegrasi dengan auto message digunakan untuk pendataan calon pendonor plasma konvalesen COVID-19 oleh berbagai fasilitas kesehatan dan dapat diakses oleh Palang Merah Indonesia (PMI).</p>
                            <a href="#" class="btn btn-lg btn-danger"> Gabung Sekarang </a>
                        </div>
                        </div>
                    </div>
                    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Previous</span>
                    </button>
                    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Next</span>
                    </button>
                </div>
            </div>
        </div>

    );
}
export default Faskes_Konten_1

import { Button, ButtonGroup,ToggleButton } from 'react-bootstrap';
import reactDom from 'react-dom';
import react,{useState} from 'react';
import suntik from '../img/suntik.png';
const Faskes_Konten_1=()=>{
    const [checked, setChecked] = useState(false);
    const [radioValue, setRadioValue] = useState('1');

    
    return(
        <div className="framebody">
            <div class ="carousel-inner">
                <div class="carousel-item active"
                style="background-image:url(../img/suntik.png);">
                    <div class="container">
                        <h1>Selamat Datang</h1>
                        <p>
                            Sidoplasma merupakan media berupa website yang terintegrasi dengan auto message digunakan untuk pendataan calon pendonor plasma konvalesen COVID-19 oleh berbagai fasilitas kesehatan dan dapat diakses oleh Palang Merah Indonesia (PMI)
                        </p>
                        <a href="#" class="btn btn-lg
                        btn-danger"> Gabung Sekarang</a>
                    </div>
                </div>
            </div>
        </div>

    );
}
export default Faskes_Konten_1


