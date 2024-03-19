import { topDealUsers } from "../../data"
import "./topBox.scss"

const TopBox = () => {
    const user=topDealUsers;
  return (
   <div className="topBox">
    <h1>Top Deals</h1>
    <div className="list">
        {
            user?.map((el)=>{
                return <div className="listItem" key={el.id}>
                    <div className="user">
                        <img src={el.img} alt="" />
                        <div className="userTexts">
                            <span className="username">{el.username}</span>
                            <span className="email">{el.email}</span>
                        </div>
                    </div>
                    <span className="amount">${el.amount}</span>
                </div>
            })
        }
    </div>
   </div>
  )
}

export default TopBox