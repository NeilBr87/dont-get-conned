import { useState } from 'react';
import TopNavBar from '../TopNavBar/Index';
import BottomNavBar from '../BottomNavBar/Index';
import LoginBox from '../LoginBox/Index';
import './style.css'
export default function Container() {

    return (


        <div>
          <TopNavBar />
          <img
            style={{ width: '24vw', display: 'block', paddingLeft: '3vw'}}
            src="https://www1.bac-assets.com/homepage/spa-assets/images/assets-images-global-logos-bac-logo-v2-CSX3648cbbb.svg"
            alt="logo"
          />
          <BottomNavBar />
          <div id="loginRow">
            <LoginBox />
          </div>
            
        </div>
      );
}
