import React, { Component } from 'react'
import {connect} from 'react-redux'

class DienThoaiRender extends Component {
  render() {
      let{phone} = this.props
    return (
          <div className='col-4'>
            <div className="card">
            <img src={phone.hinhAnh} alt="..." className='w-100' />
            <div className="card-body">
                  <h3>{phone.tenSP}</h3>
                  <p>{phone.giaBan.toLocaleString() + "VND"}</p>
                  <button onClick={() =>{
                    this.props.xemChiTiet(phone)
                  }} className="btn btn-primary mr-2">Xem chi tiết</button>
                  <button onClick={() =>{
                    this.props.themGioHang(phone)
                  }} className="btn btn-success ml-2">Thêm vào giỏ hàng</button>
            </div>
            </div> 
        </div>
    )
  }
}


const mapDispatchToProps = (dispatch) =>{
  return{
    themGioHang : (sanPham) =>{
       let monMoi = {...sanPham, soLuong : 1}
      const action = {
        type: "THEM_GIO_HANG",
        monMoi
      }
      dispatch(action)
    },

    xemChiTiet: (sanPham) =>{
      const action = {
        type: "XEM_CHI_TIET",
        sanPham
      }
      dispatch(action)
    }
  }
}




export default connect(null, mapDispatchToProps)(DienThoaiRender)

