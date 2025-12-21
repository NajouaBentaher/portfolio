import React from 'react'
import styled from 'styled-components'
import Timeline from '@mui/lab/Timeline'
import TimelineItem from '@mui/lab/TimelineItem'
import TimelineSeparator from '@mui/lab/TimelineSeparator'
import TimelineConnector from '@mui/lab/TimelineConnector'
import TimelineContent from '@mui/lab/TimelineContent'
import useMediaQuery from '@mui/material/useMediaQuery'

import { education } from '../../data/constants'
import EducationCard from '../Cards/EducationCard'

/* ---------------- STYLES ---------------- */

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: left;
  padding-bottom: 60px;
`;

const Wrapper = styled.div`
  width: 100%;
  max-width: 1350px;
  padding-top: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
`;

const Title = styled.h2`
  font-size: 42px;
  font-weight: 600;
  color: ${({ theme }) => theme.text_primary};
  text-align: center;

  @media (max-width: 768px) {
    font-size: 32px;
  }
`;

const Desc = styled.p`
  font-size: 18px;
  max-width: 600px;
  text-align: center;
  color: ${({ theme }) => theme.text_secondary};

  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

const TimelineSection = styled.div`
  width: 100%;
  max-width: 1000px;
  margin-top: 20px;
`;

const NumberDot = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  border: 2px solid ${({ theme }) => theme.text_primary};
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
  background: ${({ theme }) => theme.card};
  color: ${({ theme }) => theme.text_primary};
`;

/* ---------------- COMPONENT ---------------- */

const Education = () => {
  const isMobile = useMediaQuery('(max-width:768px)');

  return (
    <Container id="education">
      <Wrapper>
        <Title>Education</Title>
        <Desc>
          My education has been a journey of self-discovery and growth.
        </Desc>

        <TimelineSection>
          {isMobile ? (
            // ✅ Mobile: simple stacked cards
            education.map((item, index) => (
              <EducationCard key={index} education={item} />
            ))
          ) : (
            // ✅ Desktop & Tablet: timeline
            <Timeline position="alternate">
              {education.map((item, index) => (
                <TimelineItem key={index}>
                  <TimelineSeparator>
                    <NumberDot>{education.length - index}</NumberDot>
                    {index !== education.length - 1 && <TimelineConnector />}
                  </TimelineSeparator>
                  <TimelineContent>
                    <EducationCard education={item} />
                  </TimelineContent>
                </TimelineItem>
              ))}
            </Timeline>
          )}
        </TimelineSection>
      </Wrapper>
    </Container>
  );
};

export default Education;
