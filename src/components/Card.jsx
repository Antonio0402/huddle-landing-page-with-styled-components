import {StyledCard} from './styled/Main.styled';

function Card({content}) {
  return (
    <StyledCard isReverse={content.id % 2 !== 0 && 'row-reverse'}>
      <div>
        <img src={'./assets/images/' + content.image} alt={content.image} />
      </div>
      <div>
        <h3>{content.heading}</h3>
        <p>{content.body}</p>
      </div>
    </StyledCard>
  )
}

export default Card;