import React, { Component } from 'react'
import DienThoaiRender from './DienThoaiRender'
import GioHang from './GioHang'
import XemChiTiet from './XemChiTiet'

export default class DienThoai extends Component {

    arrProduct = [
        { "maSP": 1, "tenSP": "VinSmart Live", "manHinh": "AMOLED, 6.2, Full HD+", "heDieuHanh": "Android 9.0 (Pie)", "cameraTruoc": "20 MP", "cameraSau": "Chính 48 MP & Phụ 8 MP, 5 MP", "ram": "4 GB", "rom": "64 GB", "giaBan": 5700000, "hinhAnh": "./img/vsphone.jpg" },
        { "maSP": 2, "tenSP": "Meizu 16Xs", "manHinh": "AMOLED, FHD+ 2232 x 1080 pixels", "heDieuHanh": "Android 9.0 (Pie); Flyme", "cameraTruoc": "20 MP", "cameraSau": "Chính 48 MP & Phụ 8 MP, 5 MP", "ram": "4 GB", "rom": "64 GB", "giaBan": 7600000, "hinhAnh": "./img/meizuphone.jpg" },
        { "maSP": 3, "tenSP": "Iphone XS Max", "manHinh": "OLED, 6.5, 1242 x 2688 Pixels", "heDieuHanh": "iOS 12", "cameraSau": "Chính 12 MP & Phụ 12 MP", "cameraTruoc": "7 MP", "ram": "4 GB", "rom": "64 GB", "giaBan": 27000000, "hinhAnh": "./img/applephone.jpg" }
    ]

    renderDienThoai = () =>{
        return this.arrProduct.map((phone, key) =>{
            return <DienThoaiRender key={key} phone ={phone}/>
        })
    }



  render() {
    return (
      <div className='container'>
          <GioHang/>
          <div class="row mt-5 mb-5">
                  {this.renderDienThoai()}
          </div>
          <XemChiTiet/>
      </div>
    )
  }
}
