import React from 'react';
import styled from 'styled-components';

/* ================= STYLES ================= */

const Card = styled.div`
  width: 100%;
  background: ${({ theme }) => theme.card};
  border-radius: 18px;
  padding: 18px 20px;
  display: flex;
  flex-direction: column;
  gap: 14px;
  margin-bottom: 18px;

  /* Clean modern shadow */
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.12);

  transition: transform 0.3s ease, box-shadow 0.3s ease;

  @media (hover: hover) {
    &:hover {
      transform: translateY(-4px);
      box-shadow: 0 16px 40px rgba(0, 0, 0, 0.18);
    }
  }
`;

const Top = styled.div`
  display: flex;
  gap: 14px;
  align-items: flex-start;
`;

const Logo = styled.img`
  width: 44px;
  height: 44px;
  border-radius: 12px;
  object-fit: contain;
  background: #000;
  flex-shrink: 0;

  @media (max-width: 768px) {
    width: 38px;
    height: 38px;
  }
`;

const Body = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

const School = styled.h4`
  font-size: 16px;
  font-weight: 600;
  color: ${({ theme }) => theme.text_primary};

  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

const Degree = styled.p`
  font-size: 14px;
  font-weight: 500;
  color: ${({ theme }) => theme.primary};

  @media (max-width: 768px) {
    font-size: 12px;
  }
`;

const Date = styled.span`
  font-size: 13px;
  font-weight: 500;
  color: ${({ theme }) => theme.text_secondary};
`;

const Description = styled.p`
  font-size: 14px;
  line-height: 1.5;
  color: ${({ theme }) => theme.text_secondary};

  /* Limit text for clean look */
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;

  @media (max-width: 768px) {
    font-size: 13px;
  }
`;

/* ================= COMPONENT ================= */

const EducationCard = ({ education }) => {
  return (
    <Card>
      <Date>{education.date}</Date>

      <Top>
        <Logo src={education.img} alt={education.school} />

        <Body>
          <School>{education.school}</School>
          <Degree>{education.degree}</Degree>
        </Body>
      </Top>

      <Description>{education.desc}</Description>
    </Card>
  );
};

export default EducationCard;
