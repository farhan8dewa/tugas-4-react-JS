import React, {Component} from 'react';
import ListMakanan from '../ListData/ListMakanan.js'

class MenuMakanan extends Component{
  constructor(props){
    super(props);
      this.state={
        pesan: "nasi padang",
        jumlah:this.state.jumlah + 1,
        target:true
    };
    this.pilihpesanan =this.pilihpesanan.bind(this);
    this.nasipadang=this.nasipadang.bind(this);
    this.sate=this.sate.bind(this);
    this.soto=this.soto.bind(this);
    this.uduk=this.uduk.bind(this);
    this.kuning=this.kuning.bind(this);
    this.batal=this.batal.bind(this);
  }


    pilihpesanan(value,e){
      this.setState ({ [value] : e.target.pesan, jumlah: true });
    }

    nasipadang(){
      this.setState ({
        pesan :"nasi padang",
        jumlah : this.state.jumlah + 1,
        tampil:true
      });
    }

    sate(){
      this.setState ({
        pesan :"sate",
        jumlah : this.state.jumlah + 1,
        tampil:true
      });
    }

    soto(){
      this.setState ({
        pesan :"soto",
        jumlah : this.state.jumlah + 1,
        tampil:true
      });
    }

    uduk(){
      this.setState ({
        pesan :"nasi uduk",
        jumlah : this.state.jumlah + 1,
        tampil:true
      });
    }

      kuning(){
        this.setState ({
        pesan :"nasi kuning",
        jumlah : this.state.jumlah + 1,
        tampil:true
      });
    }


    batal(){
      this.setState ({
        pesan :" ",
        jumlah : 0,
        tampil:false
      });
    }


  render() {
    return (
    <div>
        <h3>dafatar makanan yang kami sediakan :</h3>
      <table>
        <tbody>
          <tr>
            <td>
              <ListMakanan datalist="https://s3-ap-southeast-1.amazonaws.com/niomic/img/sample/nasipadang.jpg"
                />
              <center>
                <button onClick={this.nasipadang}>pesan sekarang</button>
              </center>
            </td>


        <td>
        <ListMakanan  datalist="https://s3-ap-southeast-1.amazonaws.com/niomic/img/sample/sate.png"
          />
          <center>
            <button onClick={this.sate}>pesan sekarang</button>
          </center>
        </td>

          <td>
          <ListMakanan  datalist="https://s3-ap-southeast-1.amazonaws.com/niomic/img/sample/sotolamongan.png"
            />
            <center>
              <button onClick={this.soto}>pesan sekarang</button>
            </center>
          </td>

          <td>
          <ListMakanan datalist="https://www.dbs.com/iwov-resources/images/newsroom/indonesia/Blog/masakan%20nusantara/nasi%20kentut.png"
            />
            <center>
              <button onClick={this.uduk}>pesan sekarang</button>
            </center>
          </td>

          <td>
            <ListMakanan datalist="https://pesona.travel/media/nasi-kuning-sarapan-khas-nusantara-bermakna-mendalam_144651_1140.jpg"
              />
            <center>
              <button onClick={this.kuning}>pesan sekarang</button>
            </center>
          </td>
          </tr>
          </tbody>
          </table>

          <br />
            <input type="text"
              placeholder="masukan pesanan anda"
              onChange={e => this.pilihpesanan("pesan", +1)}
            />

            <input type="number"
              placeholder="jumlah pesanan"
              onChange={e => this.pilihpesanan("jumlah", +1)}
            />

            <button onClick={this.batal}>batalkan semua pesanan</button>

            {this.state.tampil === true ? (
              <div>
                <h3>pesanan anda : {this.state.pesan}</h3>
                <h4>jumlah pesanan anda : {this.state.jumlah}</h4>
              </div>

            ) : (
              <h1>anda belum memesan</h1>
            )}

      </div>
    );
  }
}

export default MenuMakanan;
