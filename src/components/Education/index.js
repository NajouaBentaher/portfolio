
import React from 'react'
import styled from 'styled-components'
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import { education } from '../../data/constants';
import EducationCard from '../Cards/EducationCard';
import useMediaQuery from '@mui/material/useMediaQuery';

// const isMobile = useMediaQuery('(max-width:768px)');
const isMobile = window.innerWidth <= 768;

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: relative;
    z-index: 1;
    align-items: center;
    padding: 0px 0px 60px 0px;
    @media (max-width: 960px) {
        padding: 0px;
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
    padding: 40px 0px 0px 0px;
    gap: 12px;
    @media (max-width: 960px) {
        flex-direction: column;
    }
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

const TimelineSection = styled.div`
    width: 100%;
    max-width: 1000px;
    margin-top: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 12px;
    @media (max-width: 660px) {
        align-items: end;
    }
`;

const NumberDot = styled.div`
  width: 30px;
  height: 30px;
  border: 2px solid ${({ theme }) => theme.text_primary};
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  font-weight: 600;
  color: ${({ theme }) => theme.text_primary};
  background: ${({ theme }) => theme.card};
  box-shadow: 0 2px 8px ${({ theme }) => theme.shadow};
  
  &:hover {
    background: ${({ theme }) => theme.primary};
    color: ${({ theme }) => theme.white};
    box-shadow: 0 4px 16px ${({ theme }) => theme.shadow};
  }
`;


const index = () => {
    const isMobile = window.innerWidth <= 768;

    return (
        <Container id="education">
            <Wrapper>
                <Title>Education</Title>
                <Desc>
                    My education has been a journey of self-discovery and growth.
                </Desc>

                <TimelineSection>
                    {isMobile ? (
                        education.map((item, index) => (
                            <EducationCard key={index} education={item} />
                        ))
                    ) : (
                        <Timeline position="alternate">
                            {education.map((item, index) => {
                                const number = education.length - index;
                                return (
                                    <TimelineItem key={index}>
                                        <TimelineSeparator>
                                            <NumberDot>{number}</NumberDot>
                                            {index !== education.length - 1 && (
                                                <TimelineConnector />
                                            )}
                                        </TimelineSeparator>
                                        <TimelineContent>
                                            <EducationCard education={item} />
                                        </TimelineContent>
                                    </TimelineItem>
                                );
                            })}
                        </Timeline>
                    )}
                </TimelineSection>
            </Wrapper>
        </Container>
    );
};


export default index
