import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  height: 100px;
  background-color: #343a40;
  color: white;
  border-top: 1px solid #495057;
  width: 100%;
`;

const FooterWrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  padding: 0 40px;
`;

const FooterLogo = styled.div`
  .logo {
    font-size: 20px;
    font-weight: bold;
    color: #adb5bd;
  }
`;

const FooterCopyright = styled.div`
  position: absolute;
  left: 50%;         
  transform: translateX(-50%);   
  text-align: center;
  
  p {
    margin: 2px 0;
    font-size: 14px;
    color: #adb5bd;
    
    &:first-child {
      font-size: 12px;
      color: #6c757d;
    }
  }
`;

const FooterSocial = styled.div`
  h4 {
    margin: 0 0 10px 0;
    font-size: 14px;
    color: #adb5bd;
    text-align: center;
    
  }
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 15px;
`;

const SocialLink = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 35px;
  height: 35px;
  background-color: #495057;
  border-radius: 50%;
  text-decoration: none;
  transition: all 0.3s ease;
  
  &:hover {
    background-color: #007bff;
    transform: translateY(-2px);
  }
`;

const SocialIcon = styled.span`
  font-size: 16px;
`;

const Footer = () => {
  const socialLinks = [
    { id: 1, name: 'Facebook', icon: '📘', url: '#' },
    { id: 2, name: 'Twitter', icon: '🐦', url: '#' },
    { id: 3, name: 'Instagram', icon: '📷', url: '#' },
    { id: 4, name: 'YouTube', icon: '📺', url: '#' }
  ];

  return (
    <FooterContainer>
      <FooterWrapper>
        <FooterLogo>
          <div className="logo">JUST shopping mall</div>
        </FooterLogo>

        <FooterCopyright>
          <p>© 2025 Company Name. All rights reserved.</p>
          <p>Copyright</p>
        </FooterCopyright>

        <FooterSocial>
          <h4>SNS</h4>
          <SocialLinks>
            {socialLinks.map((social) => (
              <SocialLink
                key={social.id}
                href={social.url}
                title={social.name}
              >
                <SocialIcon>{social.icon}</SocialIcon>
              </SocialLink>
            ))}
          </SocialLinks>
        </FooterSocial>
      </FooterWrapper>
    </FooterContainer>
  );
};

export default Footer;
