import { ReactComponent as PinIcon } from '@/assets/pin.svg'

import * as S from './styles'

type TravelCardProps = {
  title: string
  location: string
  googleMapsUrl: string
  startDate: string
  endDate: string
  description: string
  imageUrl: string
}

export const TravelCard = ({
  title,
  location,
  googleMapsUrl,
  startDate,
  endDate,
  description,
  imageUrl,
}: TravelCardProps) => {
  return (
    <S.TravelCardWrapper>
      <S.TravelImg src={imageUrl} alt={title} />

      <S.TravelInfo>
        <S.LocationContainer>
          <S.LocationName>
            <PinIcon width={10} height={10} />

            <span>{location}</span>
          </S.LocationName>

          <S.LocationUrl href={googleMapsUrl}>View on Google Maps</S.LocationUrl>
        </S.LocationContainer>

        <S.Title>{title}</S.Title>

        <S.Date>{startDate} - {endDate}</S.Date>

        <S.Desc>{description}</S.Desc>
      </S.TravelInfo>
    </S.TravelCardWrapper>
  )
}
