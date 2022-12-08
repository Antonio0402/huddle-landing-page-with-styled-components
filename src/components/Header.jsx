import {StyledHeader, HeaderButton, StyledHero} from '../components/styled/Header.styled';
import logo from '../assets/images/logo.svg'
import mockups from '../assets/images/illustration-mockups.svg'
import { Cta } from './styled/Cta.styled';
import { Wrapper } from './styled/Wrapper.styled';

function Header() {
  return (
    <Wrapper>
      <StyledHeader>
        <nav>
          <div>
            <img src={logo} alt="logo" />
          </div>
          <HeaderButton type='button' tabIndex='0'>Try It Free</HeaderButton>
        </nav>
        <StyledHero>
        <div>
          <h1>
            Build The Community Your Fans Will Love
          </h1>
          <p>
            Huddle re-imagines the way we build communities. You have a voice, but so does your audience. Create connections with your users as you engage in genuine discussion.
          </p>
          <Cta>
            Get Started For Free
          </Cta>
        </div>
        <img src={mockups} alt="mockups image"/>
        </StyledHero>
      </StyledHeader>
    </Wrapper>
  )
}

export default Header;