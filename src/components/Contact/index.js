import React, { useRef } from 'react';
import styled from 'styled-components';
import emailjs from '@emailjs/browser';
import { Snackbar } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import EmailIcon from '@mui/icons-material/Email';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import { Bio } from '../../data/constants';

// ---------- STYLED COMPONENTS ----------

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  z-index: 1;
  align-items: center;
  @media (max-width: 960px) {
    padding: 0px;
  }
`;

const SocialMediaIcons = styled.div`
  display: flex;
  margin-top: 1rem;
  justify-content: center;
`;

const SocialMediaIcon = styled.a`
  background: ${({ theme }) => theme.card};
  border: 2px solid ${({ theme }) => theme.primary};
  border-radius: 50%;
  width: 45px;
  height: 45px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  color: ${({ theme }) => theme.primary};
  transition: all 0.3s ease-in-out;
  margin-right: 15px;
  box-shadow: 0 2px 8px ${({ theme }) => theme.shadow};
  
  &:hover {
    background: ${({ theme }) => theme.primary};
    color: ${({ theme }) => theme.white};
    box-shadow: 0 4px 16px ${({ theme }) => theme.shadow};
  }
`;

const Wrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  width: 100%;
  max-width: 1350px;
  padding: 0px 0px 80px 0px;
  gap: 12px;
`;

const Title = styled.div`
  font-size: 42px;
  text-align: center;
  font-weight: 600;
  margin-top: 20px;
  color: ${({ theme }) => theme.text_primary};
  @media (max-width: 768px) {
    margin-top: 12px;
    font-size: 32px;
  }
`;

const Desc = styled.div`
  font-size: 18px;
  text-align: center;
  max-width: 600px;
  color: ${({ theme }) => theme.text_secondary};
  @media (max-width: 768px) {
    margin-top: 12px;
    font-size: 16px;
  }
`;

const ContactForm = styled.form`
  width: 100%;
  max-width: 900px;
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.card};
  padding: 32px;
  border-radius: 16px;
  box-shadow: rgba(23, 92, 230, 0.15) 0px 4px 24px;
  margin-top: 28px;
  gap: 16px;
`;

const Row = styled.div`
  display: flex;
  width: 100%;
  gap: 20px;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const FormRight = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const ContactInput = styled.input`
  flex: 1;
  background-color: transparent;
  border: 1px solid ${({ theme }) => theme.text_secondary};
  outline: none;
  font-size: 18px;
  color: ${({ theme }) => theme.text_primary};
  border-radius: 10px;
  padding: 12px 16px;
  &:focus {
    border: 1px solid ${({ theme }) => theme.primary};
  }
`;

const ContactInputMessage = styled.textarea`
  background-color: transparent;
  border: 1px solid ${({ theme }) => theme.text_secondary};
  outline: none;
  font-size: 18px;
  color: ${({ theme }) => theme.text_primary};
  border-radius: 10px;
  padding: 12px 16px;
  &:focus {
    border: 1px solid ${({ theme }) => theme.primary};
  }
`;

const ContactButton = styled.input`
  width: 100%;
  text-align: center;
  background: linear-gradient(
    225deg,
    hsla(271, 100%, 50%, 1) 0%,
    hsla(294, 100%, 50%, 1) 100%
  );
  padding: 13px 16px;
  margin-top: 8px;
  border-radius: 12px;
  border: none;
  color: ${({ theme }) => theme.text_primary};
  font-size: 18px;
  font-weight: 600;
  cursor: pointer;
`;

const ContactDetails = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 12px 16px;
  background-color: ${({ theme }) => theme.background};
  border-radius: 12px;
  font-size: 16px;
  color: ${({ theme }) => theme.text_primary};
`;

const DetailTitle = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  position: relative;
  font-weight: 600;
  color: ${({ theme }) => theme.text_primary};
  cursor: pointer;
  &::after {
    content: "";
    position: absolute;
    bottom: -5px;
    left: 0;
    width: 30px;
    height: 3px;
    background: linear-gradient(
      225deg,
      hsla(271, 100%, 50%, 1) 0%,
      hsla(294, 100%, 50%, 1) 100%
    );
    transition: width 0.3s ease;
  }

  &:hover::after {
    width: 20%;
  }
`;


const DetailItem = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;  
  color: ${({ theme }) => theme.text_primary + 95};
`;

// ---------- COMPONENT ----------

const Contact = () => {
  const [open, setOpen] = React.useState(false);
  const form = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        'service_tox7kqs',
        'template_nv7k7mj',
        form.current,
        'SybVGsYS52j2TfLbi'
      )
      .then(
        (result) => {
          setOpen(true);
          form.current.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <Container id="contact">
      <Wrapper>
        <Title>Contact</Title>
        <Desc>Have You Any Project ? Please Drop a Message</Desc>
        <ContactForm ref={form} onSubmit={handleSubmit}>
          <Row>
            {/* LEFT SIDE INPUTS */}
            <FormRight>
              <ContactInput placeholder="Your Email" name="from_email" />
              <ContactInput placeholder="Your Name" name="from_name" />
              <ContactInput placeholder="Subject" name="subject" />
              <ContactInputMessage
                placeholder="Message"
                rows="5"
                name="message"
              />
              <ContactButton type="submit" value="Send 🚀" />
            </FormRight>

            {/* RIGHT SIDE CONTACT DETAILS - VERSION 1 */}
            <ContactDetails>
              <Desc>
                I am available on almost every social media. You can message me, I
                will reply within 24 hours.
              </Desc>
              
              <DetailTitle>
                Address
              </DetailTitle>
              <DetailItem style={{ marginLeft: '16px', color: '${({ theme }) => theme.text_secondary}' }}>
                📍 Casablanca, Morocco
              </DetailItem>
              
              <DetailTitle>
                Phone
              </DetailTitle>
              <DetailItem style={{ marginLeft: '16px'}}>
                📱 +212 618 030 413 <strong>|</strong> +212 773 121 349
              </DetailItem>
              
              <SocialMediaIcons>
                <SocialMediaIcon href={Bio.linkedin} target="display"><LinkedInIcon /></SocialMediaIcon>
                <SocialMediaIcon href={Bio.gmail} target="display"><EmailIcon /></SocialMediaIcon>
                <SocialMediaIcon href={Bio.facebook} target="display"><FacebookIcon /></SocialMediaIcon>
                <SocialMediaIcon href={Bio.insta} target="display"><InstagramIcon /></SocialMediaIcon>
              </SocialMediaIcons>
            </ContactDetails>
          </Row>
        </ContactForm>

        <Snackbar
          open={open}
          autoHideDuration={6000}
          onClose={() => setOpen(false)}
          message="Email sent successfully!"
          severity="success"
        />
      </Wrapper>
    </Container>
  );
};

export default Contact;