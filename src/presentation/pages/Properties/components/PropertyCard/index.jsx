import {
  Container,
  ImageSection,
  DescriptionSection,
  Header,
  Tags,
  Description,
  Price,
  PropertiesButton,
} from './styles'
import { Tag } from '../../../../components/Tag'
import { Carousel } from '../../../../components/Carousel'

import { useTranslation } from 'react-i18next'

import garageIcon from '../../../../assets/garageIcon.svg'
import roomIcon from '../../../../assets/room-icon.svg'
import squareIcon from '../../../../assets/square-icon.svg'
import showerIcon from '../../../../assets/shower-icon.svg'
import { SplideSlide } from '@splidejs/react-splide'
import Markdown from 'markdown-to-jsx'

import { useState } from 'react'

const IconsMap = {
  garage: garageIcon,
  rooms: roomIcon,
  square: squareIcon,
  bathrooms: showerIcon,
}

const defaultInfo = {
  id: crypto.randomUUID(),
  brokerId: 1,
  RKCode: 'N/A',
  title: 'N/A',
  region: 'N/A',
  details: {
    square: 'N/A',
    rooms: 'N/A',
    bathrooms: 'N/A',
    garage: 'N/A',
  },
  description: 'N/A',
  price: 'R$ N/A',
  pictures: ['N/A', 'N/A', 'N/A', 'N/A', 'N/A'],
}
/**
 * Creates a styled PropertyCard component.
 * @param {Property} propertyInfo - Property information.
 * @param {requestCallback} onInterestingProperty - Get RKCode info from current property.
 * @return {JSX.Element} The styled PropertyCard component.
 */
export function PropertyCard({
  propertyInfo = defaultInfo,
  onInterestingProperty = () => {},
  ...rest
}) {
  const [details, _] = useState(Object.keys(propertyInfo.details))

  const { t } = useTranslation()

  return (
    <Container {...rest}>
      <ImageSection>
        <Carousel option="picture">
          {propertyInfo.pictures.map((picture, index) => (
            <SplideSlide key={index}>
              <img src={picture} alt="Imagem do imóvel" />
            </SplideSlide>
          ))}
        </Carousel>
      </ImageSection>
      <DescriptionSection>
        <Header>
          <h2>{propertyInfo.title}</h2>
          <h3>{propertyInfo.region}</h3>
        </Header>
        <Tags>
          {details &&
            details.map(detail => (
              <Tag
                key={detail}
                src={IconsMap[detail]}
                title={propertyInfo.details[detail]}
              />
            ))}
        </Tags>
        <Description>
          <Markdown
            options={{ disableParsingRawHTML: true }}
            className="description-text"
          >
            {propertyInfo.description}
          </Markdown>
          <p className="disclaimer">
            <small>{t('properties.disclaimer')}</small>
          </p>
        </Description>
        <Price>{`${propertyInfo.price}`}</Price>
        <PropertiesButton
          size="large"
          onClick={() => onInterestingProperty(propertyInfo.RKCode)}
        >
          {t('properties.button')}
        </PropertiesButton>
      </DescriptionSection>
    </Container>
  )
}
