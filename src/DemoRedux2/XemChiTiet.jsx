import React, { Component } from 'react'
import {connect} from 'react-redux'

class XemChiTiet extends Component {
  render() {
      let{manHinh,giaBan, heDieuHanh, tenSP, hinhAnh, ram,rom, cameraTruoc, cameraSau} = this.props.stateXemChiTiet
    return (
    <div className="row mt-5 mb-5">
        <div className="col-6">
          <h3 className="text-center">{tenSP}</h3>
          <img src={hinhAnh} alt="..." width={350} height={350} />
        </div>
        <div className="col-6">
          <table className="table">
              <thead>
                  <tr>
                      <th>Màn hình</th>
                      <th>{manHinh}</th>
                  </tr>
                  <tr>
                      <th>Hệ điều hành</th>
                      <th>{heDieuHanh}</th>
                  </tr>
                  <tr>
                      <th>Ram</th>
                      <th>{ram}</th>
                  </tr>
                  <tr>
                      <th>Rom</th>
                      <th>{rom}</th>
                  </tr>
                  <tr>
                      <th>Camera Trước</th>
                      <th>{cameraTruoc}</th>
                  </tr>
                  <tr>
                      <th>Camera Sau</th>
                      <th>{cameraSau}</th>
                  </tr>
                  <tr>
                      <th>Giá Bán</th>
                      <th>{giaBan.toLocaleString() + 'VND'}</th>
                  </tr>
              </thead>
          </table>
        </div>
    </div>
    )
  }
}


const mapStateToProps  = (rootReducer) =>{
    return{
        stateXemChiTiet : rootReducer.sanPhamChiTietReducer

    }
}

export default connect(mapStateToProps)(XemChiTiet)
