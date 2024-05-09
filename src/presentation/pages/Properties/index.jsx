import { Container, Content } from './styles'
import { useProperties } from '../../../data/RealStateData'
import { Carousel } from '../../components/Carousel'
import { SplideSlide } from '@splidejs/react-splide'
import { PropertyCard } from './components/PropertyCard'
import { WhatsappButton } from '../../components/WhatsappButton'
import { Modal } from './components/Modal'

import { useBrokerProfile } from '../../../data/BrokerData'
import { useState } from 'react'
import { useTranslation } from 'react-i18next'

export function Properties() {
  const properties = useProperties()
  const { phone } = useBrokerProfile()
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [PropertyCodeInfo, setPropertyCodeInfo] = useState('')
  const { t } = useTranslation()

  function handleGetPropertyCodeInfo(code) {
    setIsModalOpen(true)
    setPropertyCodeInfo(code)
  }

  return (
    <Container>
      <Content>
        <h1>{t('properties.title')}</h1>
        <Carousel option="cardProperty" length={properties.length}>
          {properties.map(property => (
            <SplideSlide key={property.id}>
              <PropertyCard
                propertyInfo={property}
                onInterestingProperty={handleGetPropertyCodeInfo}
              />
            </SplideSlide>
          ))}
        </Carousel>
      </Content>
      <Modal
        isOpen={isModalOpen}
        onCloseModal={() => setIsModalOpen(false)}
        propertyCode={PropertyCodeInfo}
      />
      <WhatsappButton phoneNumber={phone} />
    </Container>
  )
}
