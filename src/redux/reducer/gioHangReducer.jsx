const stateDefault =[
]


export const gioHangReducerDemo = (state = stateDefault, action) =>{
    switch(action.type){
        case "THEM_GIO_HANG" :{
            let gioHang = [...state];
            let result = gioHang.find(phone => phone.maSP == action.monMoi.maSP)
            console.log(result);
            if(result){
                result.soLuong += 1
            }else{
                gioHang.push(action.monMoi)
            }
            return gioHang

        }
        case "XOA_GIO_HANG":{
            let gioHang = [...state];
            if(window.confirm("bạn có muốn xóa không ?")){
                gioHang = gioHang.filter(phone => phone.maSP !== action.maSPClick)
            }
            return gioHang
        }
        case "TANG_GIAM_SO_LUONG":{
            let gioHang = [...state];
            let result = gioHang.find(phone => phone.maSP == action.maSPClick)
            if(result){
                result.soLuong += action.soLuong
                if(result.soLuong <1) {
                    if(window.confirm("bạn có muốn xóa không ?")){
                        gioHang = gioHang.filter(phone =>phone.maSP !== action.maSPClick)
                    }else{
                        result.soLuong -= action.soLuong
                    }
                }
            }
            return gioHang
            
        }
        default: return state
    }
}