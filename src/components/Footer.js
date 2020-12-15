import React from 'react'
import './Footer.css'
import FbIcon from './fb-icon'
import IgIcon from './ig-icon'
import EmailIcon from './email-icon'
import FooterLogo from './FooterLogo'

export default () => (
  <div>
    <footer className="footer">
      <div className="marginContainer">
        <div className="footerContainer">
          <FooterLogo />

          <div className="textContainer">
            <h3>Office Location</h3>
            <a href="https://www.google.com/search?client=safari&rls=en&q=University+of+Calgary&ie=UTF-8&oe=UTF-8#">University of Calgary</a>
            <a href="https://www.google.com/search?client=safari&rls=en&q=University+of+Calgary&ie=UTF-8&oe=UTF-8#">Calgary, AB</a>
            <a href="https://www.google.com/search?client=safari&rls=en&q=University+of+Calgary&ie=UTF-8&oe=UTF-8#">Canada</a>
          </div>

          <div className="textContainer">
            <h3>Company</h3>
            <a href="/programs/">Programs</a>
            <a href="/about/">About</a>
            <a href="/partners/">Partners</a>
            <a href="/getinvolved/">Get Involved</a>
            <a href="/news/">News</a>
            <a href="/contact/">Contact</a>
          </div>

          <div className="textContainer">
            <h3>Connect with Us</h3>
            <a href="https://www.facebook.com/pages/category/Youth-Organization/Stars-for-Sheltered-Youth-113006647108687/"><FbIcon/></a>
            <br />
            <a href="https://www.instagram.com/starsfsy/"><IgIcon /></a>
            <br />
            <a href="https://github.com/noelfranthomas"><EmailIcon /></a>
          </div>
        </div>

        <br />

        <hr width="70%" size="2" align="center" />

      </div>





      <div className="container taCenter">
        <span>
          © Stars for Sheltered Youth {new Date().getFullYear()} All rights reserved. Built by{' '}
          <a href="https://github.com/noelfranthomas">noelfranthomas</a>.
        </span>
      </div>
    </footer>



    <div className="footerLogic">
      <footer ClassName="footer">
        <div className="container taCenter">
          <div className="footerPadding">
            <span>
          © Stars for Sheltered Youth {new Date().getFullYear()} All rights reserved.{' '}
              <a href="https://github.com/noelfranthomas">Developer</a>.
          </span>
          </div>
        </div>
      </footer>
    </div>

  </div>
)
