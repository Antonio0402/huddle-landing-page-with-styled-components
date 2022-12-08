import contents from '../contents';
import Card from './Card';
import { Cta } from './styled/Cta.styled';
import { StyledMain } from './styled/Main.styled';

function Main() {
  return (
    <StyledMain as="main">
       {contents.map((content, index) => {
        return (
          <Card key={index} content={content}/>
        )
      })}
      <div>
        <h2>Ready To Build Your Community?</h2>
        <Cta>
          Get Started For Free
        </Cta>
      </div>
    </StyledMain>
  )
}

export default Main;