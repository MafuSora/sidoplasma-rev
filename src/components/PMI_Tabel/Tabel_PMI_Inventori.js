import './Tabel_PMI.css'
import React, { useEffect, useState } from 'react';
import $ from 'jquery'
// import * as whatsappWebJs from "https://cdn.skypack.dev/whatsapp-web.js";
// const { Client } = require('whatsapp-web.js');
// const client = new Client();


// client.on('qr', (qr) => {
//     console.log('QR RECEIVED', qr);
// });

// client.on('ready', () => {
//     console.log('Client is ready!');
// });

// client.initialize();


const Tabel_PMI_Inventori=(props)=>{
    
    $(document).keydown(function(event){
            if(event.keyCode === 13){                
                alert("keypressed");
            }
        });

    function clickevent()
    {                
    var e = $.Event("keydown");
    e.which = 13;
    e.keyCode = 13;
    $(document).trigger(e);     
    } 
    // var a = setTimeout(fun1, 2000);
    // function fun1()
    // {
    // var win1 = window.open();
    // win1.document.write(" <h2> Welcome to the javaTpoint.com </h2>");
    // setTimeout(function(){win1.close()}, 2000);
    // }

    const url = 'https://appsa.awanpintar.com/classes/Pendonor';
        const header = { 'X-Parse-Application-Id': 'MyAPPID' };
        
        const [pasien, setPasien] = useState([]);
        const [radioVal, setRadioVal] = useState('');
        const[jumlahDarah,setJumlahdarah]=useState({});
        var temp=[]
        useEffect(() => {
            fetch(url, {
            headers: header,
            })
            .then((res) => res.json())
            .then((res) => {
                let data = [...res.results];
                setPasien(data);
            })
            .catch((err) => console.log(err));
            
        }, [pasien]);
        function addMonths(date, months) {
            var d = date.getDate();
            date.setMonth(date.getMonth() + +months);
            if (date.getDate() != d) {
              date.setDate(0);
            }
            return date;
        }
        let current = new Date();
        let cTime = current.getHours() ;
        // console.log(cTime);
       
        function genderCount(pasien) {
            return pasien.reduce((acc, pasien) => {
                
                if (pasien.GolonganDarah === 'A' &&pasien.Rhesus === '+' && current.toISOString() < addMonths(new Date(pasien.TanggalDonor),3).toISOString()) {

                    acc.apos++;
                }
                else if (pasien.GolonganDarah === 'A' &&pasien.Rhesus === '-' && current.toISOString() < addMonths(new Date(pasien.TanggalDonor),3).toISOString()) {
                    acc.aneg++;
                }
                else if (pasien.GolonganDarah === 'B' &&pasien.Rhesus === '+' && current.toISOString() < addMonths(new Date(pasien.TanggalDonor),3).toISOString()) {
                    acc.bpos++;
                }
                else if (pasien.GolonganDarah === 'B' &&pasien.Rhesus === '-' && current.toISOString() < addMonths(new Date(pasien.TanggalDonor),3).toISOString()) {
                    acc.bneg++;
                }
                else if (pasien.GolonganDarah === 'AB' &&pasien.Rhesus === '+' && current.toISOString() < addMonths(new Date(pasien.TanggalDonor),3).toISOString()) {
                    acc.abpos++;
                }
                else if (pasien.GolonganDarah === 'AB' &&pasien.Rhesus === '-' && current.toISOString() < addMonths(new Date(pasien.TanggalDonor),3).toISOString()) {
                    acc.abneg++;
                }
                else if (pasien.GolonganDarah === 'O' &&pasien.Rhesus === '+' && current.toISOString() < addMonths(new Date(pasien.TanggalDonor),3).toISOString()) {
                    acc.opos++;
                }
                else if (pasien.GolonganDarah === 'O' &&pasien.Rhesus === '-' && current.toISOString() < addMonths(new Date(pasien.TanggalDonor),3).toISOString()) {
                    acc.oneg++;
                }
                console.log(acc)
                temp=acc
                return acc ;
                
            }, {apos: 0, aneg: 0,bpos: 0, bneg: 0,abpos: 0, abneg: 0,opos: 0, oneg: 0});
        }
        genderCount(pasien)
        
        const dict_invent=[
            {GolonganDarah:"A",
            Rhesus:"+",
            Jumlah:temp.apos},
            {GolonganDarah:"A",
            Rhesus:"-",
            Jumlah:temp.aneg},
            {GolonganDarah:"B",
            Rhesus:"+",
            Jumlah:temp.bpos},
            {GolonganDarah:"B",
            Rhesus:"-",
            Jumlah:temp.bneg},
            {GolonganDarah:"AB",
            Rhesus:"+",
            Jumlah:temp.abpos},
            {GolonganDarah:"AB",
            Rhesus:"-",
            Jumlah:temp.abneg},
            {GolonganDarah:"O",
            Rhesus:"+",
            Jumlah:temp.opos},
            {GolonganDarah:"O",
            Rhesus:"-",
            Jumlah:temp.oneg},
        ]
        console.log(pasien)
        console.log(dict_invent)
        console.log(temp)

 

        const nopeapos=[]
        const nopeaneg=[]
        const nopebpos=[]
        const nopebneg=[]
        const nopeabpos=[]
        const nopeabneg=[]
        const nopeopos=[]
        const nopeoneg=[]
        function Nope(pasien) {
            return pasien.reduce((filteredByValue, pasien) => {
                
                if (pasien.GolonganDarah === 'A' &&pasien.Rhesus === '+' && current.toISOString() < addMonths(new Date(pasien.TanggalDonor),3).toISOString()) {
                    nopeapos.push(pasien.NoHP)
                }
                else if (pasien.GolonganDarah === 'A' &&pasien.Rhesus === '-' && current.toISOString() < addMonths(new Date(pasien.TanggalDonor),3).toISOString()) {
                    nopeaneg.push(pasien.NoHP)
                }
                else if (pasien.GolonganDarah === 'B' &&pasien.Rhesus === '+' && current.toISOString() < addMonths(new Date(pasien.TanggalDonor),3).toISOString()) {
                    nopebpos.push(pasien.NoHP)
                }
                else if (pasien.GolonganDarah === 'B' &&pasien.Rhesus === '-' && current.toISOString() < addMonths(new Date(pasien.TanggalDonor),3).toISOString()) {
                    nopebneg.push(pasien.NoHP)
                }
                else if (pasien.GolonganDarah === 'AB' &&pasien.Rhesus === '+' && current.toISOString() < addMonths(new Date(pasien.TanggalDonor),3).toISOString()) {
                    nopeabpos.push(pasien.NoHP)
                }
                else if (pasien.GolonganDarah === 'AB' &&pasien.Rhesus === '-' && current.toISOString() < addMonths(new Date(pasien.TanggalDonor),3).toISOString()) {
                    nopeabneg.push(pasien.NoHP)
                }
                else if (pasien.GolonganDarah === 'O' &&pasien.Rhesus === '+' && current.toISOString() < addMonths(new Date(pasien.TanggalDonor),3).toISOString()) {
                    nopeopos.push(pasien.NoHP)
                }
                else if (pasien.GolonganDarah === 'O' &&pasien.Rhesus === '-' && current.toISOString() < addMonths(new Date(pasien.TanggalDonor),3).toISOString()) {
                    nopeoneg.push(pasien.NoHP)
                }
                return filteredByValue ;     
            }, {apos: 0, aneg: 0,bpos: 0, bneg: 0,abpos: 0, abneg: 0,opos: 0, oneg: 0});
        }
        Nope(pasien)
        console.log(nopeapos)
        console.log(nopeaneg)
        console.log(nopebpos)
        console.log(nopebneg)
        console.log(nopeabpos)
        console.log(nopeabneg)
        console.log(nopeopos)
        console.log(nopeoneg)
        console.log(cTime)
        const message='Kami Butuh Plasmamu'
        function getLinkWhastapp(number, message) {
            var url = 'https://web.whatsapp.com/send?phone=' 
                + number 
                + '&text=' 
                + encodeURIComponent(message)
          
            return url
          }
        function whatsappDialer(cTime) {
                if (cTime===21) {
                    if (temp.apos<5) {
                        console.log(nopeapos)
                        // const number='+628815143066'
                        // var win1=window.open(getLinkWhastapp(number,message),"win1")
                        // var e = $.Event("keydown");
                        // e.which = 13;
                        // e.keyCode = 13;
                        // setTimeout(function(){$(win1).trigger(e)},2000000000);
                        // console.log("gagal")
                        // eventFire(document.querySelector('span[data-icon="send"]'), 'click')
                        // console.log(e.keyCode === 13)                 
                    }
                    else if (temp.aneg===0) {
                        console.log(nopeaneg)
                    }
                    else if (temp.bpos===0) {
                        console.log(nopebpos)
                    }
                    else if (temp.bneg===0) {
                        console.log(nopebneg)
                    }
                    else if (temp.abpos===0) {
                            console.log(nopeabpos)
                        }
                    else if (temp.abneg===0) {
                            console.log(nopeabneg)
                    }
                    else if (temp.opos===0) {
                        console.log(nopeopos)
                    }
                    else if (temp.oneg===0) {
                        console.log(nopeoneg)
                }
        }}
        setTimeout(whatsappDialer(cTime),400000)

    return(
        <div className="containutama" >
            <div className="table-responsive p-2">
                    <table className="table">
                        <thead>
                            <tr>
                                <th scope="col">Golongan Darah</th>
                                <th scope="col">Rhesus</th>
                                {/* <th scope="col">Tanggal Kadaluarsa</th> */}
                                {/* <th scope="col">Cabang PMI</th>
                                <th scope="col">No Telephone</th> */}
                                <th scope="col">Stok</th>
                                
                            </tr>
                        </thead>
                        <tbody>
                        
                        {dict_invent.length > 0 &&
                            dict_invent.map((item) => (
                                <tr>
                                <th scope="col">{item.GolonganDarah}</th>
                                <th scope="col">{item.Rhesus}</th>
                                <th scope="col">{item.Jumlah}</th>
                                </tr>
                            ))}
                        </tbody>
                        
                    </table>
                </div>
                
                {/* <th scope="col">{item.NamaPendonor}</th>
                                <th scope="col">{item.CabangPMI}</th>
                                <th scope="col">{item.GolonganDarah}</th>
                                <th scope="col">{item.Rhesus}</th>
                                <th scope="col">{item.JenisKelamin}</th>
                                <th scope="col">{item.Usia}</th>
                                <th scope="col">{item.Alamat}</th>
                                <th scope="col">{item.NoHP}</th>
                                <th scope="col">{item.TanggalDonor}</th> */}
            </div>
    );
    
}

export default Tabel_PMI_Inventori