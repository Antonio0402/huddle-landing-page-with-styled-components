import { StyledContact } from './styled/Contact.styled';

function Contact({contact}) {
  return (
    <StyledContact>
      <img src={"../src/assets/images/" + contact.icon}  alt={"icon" + contact.icon}/>
      <span>
        {contact.text}
      </span>
    </StyledContact>
  )
}

export default Contact;