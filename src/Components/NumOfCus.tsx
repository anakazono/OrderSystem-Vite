import "./numOfCus.css"
//@ts-ignore TS6133: "Order" is declared but its value is never read.
import type { Order } from "../App.tsx"

type NumOfCusProps = {
  num : number
  handleNum : (i : boolean)=>void
  handleStartOrder : ()=>void
}

export default function NumOfCus({num, handleNum, handleStartOrder} : NumOfCusProps){
  const message = num ? "注文を始める" : "ようこそ"
  return (
    <div className="NumOfCus">
      <p>人数を入力してください</p>

      <div>
        <a className={num !== 0 ? "button" : "button ghostbutton"} onClick={() => handleNum(false)}>-</a>
        <a className="num">{num}</a>
        <a className="button" onClick={() => handleNum(true)}>+</a>
      </div>

      <p className="message" onClick={handleStartOrder}>{message}</p>
    </div>
  )
}
