import './style.css'

export default function BottomContent() {

    return (
        <div id="bcOuter">
            <div className="bcInnerRow">
                <div className="bcInnerCol" id="newCheckingOffer">
                    <p style={{fontSize: '12px'}}>NEW CHECKING OFFER</p>
                    <p style={{color: '#e31837', fontSize: '20px', marginTop: '0', marginBottom: '0' }}>Open a checking account</p>
                    <p><b>Earn a $300 cash offer</b> when you open a new eligible checking account and make qualifying direct deposits</p>
                    <a href="/">See offer details</a>
                </div>
                <div className="bcInnerCol">
                    <img style={{width: '16vw'}} src="https://www2.bac-assets.com/homepage/spa-assets/images/assets-images-site-hp-assets-mastheads-icons-shl_offer_art_6819646_e.svg" alt="bottomcontent" />
                </div>
            </div>
            <div className="bcInnerRow" id="bcRight">
                <div className="bcInnerCol">
                    <div id="bcZIndex">
                    <p style={{color: '#e31837', fontSize: '20px', marginTop: '0', marginBottom: '0' }}>From one Champion to another</p>
                    <p>Employee volunteers deliver Better Money Habits to Special Olympics athletes</p>
                    <a href="/">Watch now</a>
                    </div>
                </div>
            </div>

        </div>
    )
}