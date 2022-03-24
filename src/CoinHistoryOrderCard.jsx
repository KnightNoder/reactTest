import './css/coinHistoryOrderCard.css'
import pic from './images/fire.png';
import calenderPic from './images/calender.png';
import coinPic from './images/500coin.jpg';
export default function CoinHistoryOrderCard() {
    return (
        <>
            <div className='orderCardContainer'>
                <img className='fire' src={pic} alt="" />
                <div className='historyContentCard'>
                    <div className='historyContent'>
                        Burnt 500 coins on Order Number #123494
                    </div>
                    <div className='historyInfo'>
                        <img src={calenderPic} className='calender' alt="" />
                        <span className='historyDate'> 13 Jan 2021</span>
                        <img src={coinPic} className='coin' alt="" />
                    </div>
                </div>
            </div>
        </>
    )
}