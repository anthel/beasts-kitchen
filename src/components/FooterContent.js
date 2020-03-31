import React from 'react'
import { Footer ,FooterSection} from 'react-mdl';

function FooterContent() {
  return (
    <div>
      <div className="footer-content">
        <Footer size="mega" style={{backgroundColor: '#84C984', color: 'black'}}>
          <div className="flex-foot">
            <FooterSection type="bottom" style={{textAlign: 'center'}}>
              <h3 style={{fontWeight: 'bold'}}>Beast Kitchen</h3>
              <p>Beast Kitchen AB <br></br>
              <b>Call us at:</b> 00-000000-00 <br></br>
              <b>Or email us:</b> BeastKitchen@gmail.com</p>

              <p style={{fontWeight: 'bold'}}>BeastKitchen.com</p>
              <p style={{fontWeight: 'bold'}}>Follow us!</p>
              
              <i className="fa fa-facebook-square"/>
              <i className="fa fa-instagram"/>
              <i className="fa fa-snapchat-ghost"/>
              <i className="fa fa-envelope"/>                         
            </FooterSection>
          </div>
        </Footer>
      </div>
    </div>
  )
}

export default FooterContent;