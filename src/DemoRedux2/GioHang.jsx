import React, { Component } from 'react'
import {connect} from 'react-redux'
class GioHang extends Component {
    renderTong = () =>{
        let sum =0
        let total = 0
        for(let index of this.props.stateGioHang){
            sum += index.giaBan * index.soLuong
            total += index.soLuong
        }
        return ` giỏ hàng ${total} cái ${sum.toLocaleString()} VND`
    }
  render() {
    return (
          <div className="row mt-5 mb-5">
              <div className="col-12">
                  <h3 className="text-center">Giỏ Hàng</h3>
                  <p className="text-right">{this.renderTong()}</p>
                  <table className="table">
                      <thead>
                          <tr>
                              <th>Mã sản phẩm</th>
                              <th>Tên sản phẩm</th>
                              <th>Hinh ảnh</th>
                              <th>Số lượng</th>
                              <th>Gia bán</th>
                              <th>Thành tiền</th>
                          </tr>
                      </thead>
                      <tbody>
                          {this.props.stateGioHang.map((phone,key) =>{
                              return <tr key={key}>
                              <td>{phone.maSP}</td>
                              <td>{phone.tenSP}</td>
                              <td>
                                  <img src={phone.hinhAnh} alt="..." width={50} height={50} />
                              </td>
                              <td>
                                  <button onClick={() =>{
                                      this.props.tangGiamSoLuong(phone.maSP, 1)
                                  }} className="btn btn-primary mr-2">+</button>
                                  {phone.soLuong}
                                  <button onClick={() =>{
                                      this.props.tangGiamSoLuong(phone.maSP, -1)
                                  }} className="btn btn-primary ml-2">-</button>
                              </td>
                              <td>
                                  {phone.giaBan.toLocaleString() + "VND"}
                              </td>
                              <td>
                                  {(phone.giaBan * phone.soLuong).toLocaleString() + "VND"}
                              </td>
                              <td>
                                  <button onClick={() =>{
                                      this.props.xoaGioHang(phone.maSP)
                                  }} className="btn btn-danger">xóa</button>
                              </td>
                          </tr>
                          })}
                      </tbody>
                  </table>
              </div>
          </div>
    )
  }
}

const mapStateToProps = (rootReducer) =>{
    return{
        stateGioHang : rootReducer.gioHangReducerDemo

    }
}

const mapDispatchToProps = (dispatch) =>{
    return{
        xoaGioHang : (maSPClick) =>{
            const action = {
                type: "XOA_GIO_HANG",
                maSPClick
            }
            dispatch(action)
        },

        tangGiamSoLuong : (maSPClick,soLuong) =>{
            const action = {
                type: "TANG_GIAM_SO_LUONG",
                maSPClick, soLuong
            }
            dispatch(action)
        }
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(GioHang)
