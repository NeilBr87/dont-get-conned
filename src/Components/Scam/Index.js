import './style.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSkullCrossbones } from '@fortawesome/free-solid-svg-icons';

export default function Scam() {

    return (
        <div id="scamOuter">
            <div id="scamHeader">
                <div id="scamText">
                <h1>Woah!</h1>
                <h2>You just had a near-miss.</h2>
                <p>This is an imitation of the scam websites designed to steal your money.</p>
                <p>These scam websites are designed to look just like your normal banking website, right down to the URL.</p>
                <p>When you enter your login details, these will go straight to the scammers, who will be able to gain access to your bank account and other logins.</p>
                <p>But don't worry - this hasn't happened here! This is an educational tool designed to make sure you can recognise the warning signs when you get a <b>real</b> malicious link.</p>
                <p>Here are some of the things to look out for:</p>
                    <div>
                        <div className="iconLine">
                            <FontAwesomeIcon icon={faSkullCrossbones} />
                            <p>The URL (the address in the top bar) <i>looks</i> like Bank of America, but it's not the same</p>
                        </div>
                        <div className="iconLine">
                            <FontAwesomeIcon icon={faSkullCrossbones} />
                            <p>None of the other page features other than the login box work. Scam pages are designed just to get your banking info</p>
                        </div>
                        <div className="iconLine">
                            <FontAwesomeIcon icon={faSkullCrossbones} />
                            <p>You get to your Bank of America page through Google or bookmarks. You will have been given a link to this page</p>
                        </div>

                    <p>Please visit the <a href="https://www.gasa.org/">Global Anti-Scam Alliance</a> for more resources.</p>

                    </div>
                </div>
            </div>
        </div>

    )
}