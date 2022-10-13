
import Navigation from "./Navigation"
import Wave from "../images/wave.svg"
import Wave1 from "../images/wave1.svg"
import Wave2 from "../images/wave2.svg"
import Unstoppable from "./Unstoppable"
// import { WorldIDWidget } from "@worldcoin/id";

function mainpage(props) {

  return (
    <>
      <Navigation />
      <header id='header'>
        <div className='intro'>
          <div className='overlay'>
            <div className='container'>
              <div className='row'>
                <div className=' col-md-offset-2 intro-text'>
                  <h1>
                    Can you see the truth in what you read?
                    <span></span>
                  </h1>
                  <p></p>
                  <h3 className="secondary-text">
                    With <span>VettingDAO </span>you can!
                  </h3>
                  <Unstoppable />
                </div>
                {/*                  
                  <WorldIDWidget
                      actionId="wid_BPZsRJANxct2cZxVRyh80SFG" // obtain this from developer.worldcoin.org
                      signal="my_signal"
                      enableTelemetry
                      onSuccess={(verificationResponse) => console.log(verificationResponse)} // pass the proof to the API or your smart contract
                      onError={(error) => console.error(error)}
                      debug={true} // to aid with debugging, remove in production
                  /> */}
              </div>
            </div>
          </div>
        </div>
      </header>
      <div class="learnpage">
        <img src={Wave} className="wave-design" />
        <div class="learncontent">
          <h3>
            If you’re a social media DAO, get your content verified by us. If you’re just any other DAO, we can still help you verify your proposals.
          </h3>
          <h2>
            FactStationDAO is designed to collect information from your DAO platform and get it verified by consulting a group of experts. We have experts for each topic who help with verification and authentication of information
          </h2>
        </div>
      </div>
      <div class="learnpage learnpage-2">
        <img src={Wave1} className="wave-design1" />
        <div class="learncontent">
          <h3>
            Factual Accuracy
          </h3>
          <h2>
            Facts backed by industry experts
            Before any information consumes your platform we verify if it is accurate or not.
          </h2>
        </div>
      </div>
      <div class="learnpage learnpage-3">
        <img src={Wave2} className="wave-design1" />
        <div class="learncontent">
          <h3>
            Immune to breaches
          </h3>
          <h2>
            Made using Smart Contracts
            FactStationDAO involves pre-determined smart contracts to lay some ground rules and regulations.
          </h2>
        </div>
      </div>
    </>
  );

}


export default mainpage;