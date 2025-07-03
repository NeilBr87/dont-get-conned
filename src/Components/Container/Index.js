import { useState } from 'react';
import TopNavBar from '../TopNavBar/Index';
import BottomNavBar from '../BottomNavBar/Index';
import LoginBox from '../LoginBox/Index';
import CardBox from '../CardBox/Index';
import Scam from '../Scam/Index'
import './style.css'
import BottomContent from '../BottomContent/Index';
export default function Container() {

    const [scammed, setScammed] = useState(false)

    return (

      <div>

        {!scammed && <div style={{width: '80vw', marginLeft: '10vw'}}>
          <TopNavBar />
          <img
            style={{ width: '14vw', display: 'block', paddingLeft: '3vw'}}
            src="https://www1.bac-assets.com/homepage/spa-assets/images/assets-images-global-logos-bac-logo-v2-CSX3648cbbb.svg"
            alt="logo"
          />
          <BottomNavBar />
          <div id="loginRow">
            <LoginBox setScammed={setScammed} />
            <CardBox />
          </div>

          <BottomContent />
            
        </div>}

        {scammed && <Scam />}

        </div>
      );
}
