import styled from 'styled-components'

export const TravelCardWrapper = styled.div`
  display: flex;
  gap: 1.1875em;
`

export const TravelImg = styled.img`
  max-width: 7.8125em;
  height: 10.5em;
  border-radius: 0.3125em;
  object-fit: cover;
`

export const TravelInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.4375em;
  justify-content: center;
`

export const LocationContainer = styled.div`
  display: flex;
  gap: 1.2em;
  font-size: 0.625rem;
  line-height: 1.2em;
`

export const LocationName = styled.div`
  display: flex;
  align-items: center;
  gap: 0.4375em;
  letter-spacing: 0.17em;
  text-transform: uppercase;
`

export const LocationUrl = styled.a`
  text-decoration-line: underline;
  color: #918E9B;
`

export const Title = styled.h2`
  font-size: 1.5625rem;
  line-height: 30px;
`
