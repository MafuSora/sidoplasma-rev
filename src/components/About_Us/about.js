
import { Button, ButtonGroup,ToggleButton } from 'react-bootstrap';
import reactDom from 'react-dom';
import react,{useState} from 'react';
const Faskes_Konten_1=()=>{
    const [checked, setChecked] = useState(false);
    const [radioValue, setRadioValue] = useState('1');

    const radios = [
    { name: 'Active', value: '1' },
    { name: 'Radio', value: '2' },
    { name: 'Radio', value: '3' },
    { name: 'Radio', value: '4' },
    ];
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
                        <img src="https://th.bing.com/th/id/OIP.VGxLRyJbW-GrRGN-lPUIvgHaE8?pid=ImgDet&rs=1" class="carousel slide m-4 rounded ukuran" alt="..."/>
                        <div class="carousel-caption d-none d-md-block">
                            <h5>First slide label</h5>
                            <p>Some representative placeholder content for the first slide.</p>
                        </div>
                        </div>
                        <div class="carousel-item">
                        <img src="https://th.bing.com/th/id/OIP.VGxLRyJbW-GrRGN-lPUIvgHaE8?pid=ImgDet&rs=1" class="carousel slide m-4 rounded ukuran" alt="..."/>
                        <div class="carousel-caption d-none d-md-block">
                            <h5>Second slide label</h5>
                            <p>Some representative placeholder content for the second slide.</p>
                        </div>
                        </div>
                        <div class="carousel-item">
                        <img src="https://th.bing.com/th/id/OIP.VGxLRyJbW-GrRGN-lPUIvgHaE8?pid=ImgDet&rs=1" class="carousel slide m-4 rounded ukuran" alt="..."/>
                        <div class="carousel-caption d-none d-md-block">
                            <h5>Third slide label</h5>
                            <p>Some representative placeholder content for the third slide.</p>
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
                
                <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
                    <h1 class="display-1 text-center ahaha">Alur Pemesanan </h1>
                    <div class="carousel-inner">
                            <div class="carousel-item active">
                            <img src="https://th.bing.com/th/id/OIP.VGxLRyJbW-GrRGN-lPUIvgHaE8?pid=ImgDet&rs=1" class="carousel slide m-4 rounded ukuran2" alt="..."/>
                            </div>
                            <div class="carousel-item">
                                <img src="https://th.bing.com/th/id/OIP.VGxLRyJbW-GrRGN-lPUIvgHaE8?pid=ImgDet&rs=1" class="carousel slide m-4 rounded ukuran2" alt="..."/>
                            </div>
                            <div class="carousel-item">
                                <img src="https://th.bing.com/th/id/OIP.VGxLRyJbW-GrRGN-lPUIvgHaE8?pid=ImgDet&rs=1" class="carousel slide m-4 rounded ukuran2" alt="..."/>
                            </div>
                            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span class="visually-hidden">Previous</span>
                            </button>
                            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                <span class="visually-hidden">Next</span>
                            </button>
                    </div>
                </div>
            </div>
        </div>
    
    );
}
export default Faskes_Konten_1