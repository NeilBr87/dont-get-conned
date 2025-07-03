import './style.css'

export default function CardBox() {


    return (
        <div id="cardBoxContainer">
            <h1>Choose the card that works for you</h1>
            <div id="cardBoxRow">
                <div className="cardBoxCol">
                    <p className="cardPrice"><span style={{fontSize: '40px'}}>$</span>200</p>
                    <p className="cardOffer">Online bonus offer</p>
                    <p className="cardFee">No annual fee</p>
                    <img className="cardBoxImg" src="https://secure.bankofamerica.com/content/images/ContextualSiteGraphics/CreditCardArt/en_US/Approved_PCM/8ckn_cshsigcm_v_250x158.png" alt="card" />
                    <p className="cardFee">Customized Cash Rewards</p>
                    <a className="cardURL" href="/">New! 6% choice cash back offer of your choice</a>
                </div>
                <div className="cardBoxCol">
                    <p className="cardPrice"><span style={{fontSize: '40px'}}>$</span>200</p>
                    <p className="cardOffer">Online bonus offer</p>
                    <p className="cardFee">No annual fee</p>
                    <img className="cardBoxImg" src="https://www2.bac-assets.com/homepage/spa-assets/images/assets-images-site-hp-assets-mastheads-consumer-cards-en-4-card-card_mh_un_newoffer4960977_e.webp" alt="card" />
                    <p className="cardFee">Unlimited Cash Rewards</p>
                    <a className="cardURL" href="/">New! 2% unlimited cash back offer</a>
                </div>
                <div className="cardBoxCol">
                    <p className="cardPrice">25,000</p>
                    <p className="cardOffer">Online bonus points offer</p>
                    <p className="cardFee">No annual fee</p>
                    <img className="cardBoxImg" src="https://www2.bac-assets.com/homepage/spa-assets/images/assets-images-site-hp-assets-mastheads-consumer-cards-en-4-card-5779014_Travel_3.webp" alt="card" />
                    <p className="cardFee">Travel Rewards</p>
                    <a className="cardURL" href="/">New! Unlimited 1.5 points for every $1 spent</a>
                </div>
                <div className="cardBoxCol">
                    <p className="cardPrice">0%</p>
                    <p className="cardOffer">Intro APR Offer</p>
                    <p className="cardFee">No annual fee</p>
                    <img className="cardBoxImg" src="https://www2.bac-assets.com/homepage/spa-assets/images/assets-images-site-hp-assets-mastheads-consumer-cards-en-4-card-5779014_Nonrewards_4.webp" alt="card" />
                    <p className="cardFee">BankAmericard</p>
                    <a className="cardURL" href="/">Intro APR offer for 18 billing cycles</a>
                </div>
                
            </div>
        </div>
    )
}