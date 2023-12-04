import React from 'react'
import Image from './Image'
import styles from './style.module.css'
import Crop75RoundedIcon from '@mui/icons-material/Crop75Rounded';
import PlayCircleFilledRoundedIcon from '@mui/icons-material/PlayCircleFilledRounded';
const Home = () => {

 const link = "https://templatesunit.lemonsqueezy.com/checkout/buy/181cb12c-ca54-44c6-bebd-46e3b656defc";

  return (
    <>
      <div className={styles.Navbar}>
        <div className={styles.logo}>
          <img src={Image.Mlogo} />
        </div>
        <div className={styles.content}>
          <div className={styles.features}>
            <p>Features</p>
          </div>
          <div className={styles.dot}>
          <Crop75RoundedIcon
            style= {{
              width: '4px',
            background: '#e7c8c8',
            color: 'gray',
            height: '4px'
            }}
             />
          </div>
          <div className={styles.features}>
            <p>FAQ</p>
          </div>
          <div className={styles.dot}>
            <Crop75RoundedIcon
            style= {{
              width: '4px',
            background: '#e7c8c8',
            color: 'gray',
            height: '4px'
            }}
             />
          </div>
          <div className={styles.features}>
            <p>Pricing</p>
          </div>
          <div className={styles.dot}>
          <Crop75RoundedIcon
            style= {{
              width: '4px',
            background: '#e7c8c8',
            color: 'gray',
            height: '4px'
            }}
             />
          </div>

          <div className={styles.Testimonal}>
            <p>Testimonials</p>
          </div>
          <div className={styles.btn1}>
      <button>Buy Template</button>
    </div>
        </div>

      </div>


      <div className={styles.manage}>
        <button><span>👋</span>WELCOME TO MANAGE WISE!</button>
      </div>
      <div className={styles.maincontent}>
        <h1>Empower Your Business with <span>Strategic</span> Insights</h1>
        <p>Powerful management platform designed to streamline your business operations,
          boost productivity, and drive success</p>
      </div>
      <div className={styles.btn2}>
      <button onClick={() => window.location.href = link}>
        Get Started
      </button>
      <div className={styles.watch}>
        <button className={styles.btn3}>Watch Demo <span><PlayCircleFilledRoundedIcon
        style= {{ height : '19px'  }} /></span> </button>
        </div>
      </div>
      
    </>
  )
}

export default Home
