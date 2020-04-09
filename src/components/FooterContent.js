import React from 'react'
import { Footer ,FooterSection} from 'react-mdl';
import withStyles from './HOCS/withStyles';

function FooterContent(props) {

  const { classes } = props;

  return (
    <div>
      <div className={classes.footerWrapper}>
        <Footer size="mega" className={classes.footerContainer}>
          <div className={classes.flexFoot}>
            <FooterSection type="bottom" >
              <h3 className={classes.footerBold}>Beast Kitchen</h3>
              <p>Beast Kitchen AB <br></br>
              <b>Call us at:</b> 00-000000-00 <br></br>
              <b>Or email us:</b> BeastKitchen@gmail.com</p>

              <p className={classes.footerBold}>BeastKitchen.com</p>
              <p className={classes.footerBold}>Follow us!</p>
              
              <div className={classes.mdlLogo}>
                <i className="fa fa-facebook-square"/>
                <i className="fa fa-instagram"/>
                <i className="fa fa-snapchat-ghost"/>
                <i className="fa fa-envelope"/> 
              </div>                        
            </FooterSection>
          </div>
        </Footer>
      </div>
    </div>
  )
}

export default withStyles(FooterContent);