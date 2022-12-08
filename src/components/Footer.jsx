import { StyledFooter } from './styled/Footer.styled'
import { FooterContainer } from './styled/Footer.styled'
import Contact from './Contact';
import Icon from './Icon';
import contact from '../contact';
import icons from '../icons';
import logoWhite from '../assets/images/logo-white.svg';
function Footer() {
  return (
    <StyledFooter>
      <FooterContainer>
        <div>
          <img src={logoWhite} alt='logo white color'/>
          <div>
            {contact.map((item, index) => <Contact key={index} contact={item}/>)}
          </div>
        </div>
        <div>
          <ul role="list">
            <li><a>About Us</a></li>
            <li><a>What We Do</a></li>
            <li><a>FAQ</a></li>
          </ul>
          <ul role="list">
            <li><a>Career</a></li>
            <li><a>Blog</a></li>
            <li><a>Contact Us</a></li>
          </ul>
        </div>
        <div>
          <ul role="list">
            {icons.map((icon, index) => <Icon key={index} icon={icon}/>)}
          </ul>
          <p>&copy; Copyright 2018 Huddle. All rights reserved.</p>
        </div>
      </FooterContainer>
    </StyledFooter>
  )
}

export default Footer