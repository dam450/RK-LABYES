import { Card } from '../../components/Card'
import { Carousel } from '../../components/Carousel'
import { SplideSlide } from '@splidejs/react-splide'
import { RealEstateBrokerDescription } from './components/RealEstateBrokerDescription'
import { Container } from './styles'
import { useBrokerProfile } from '../../../data/BrokerData'

export function Profile() {
  const brokerProfile = useBrokerProfile()
  const { tips: quotes } = useBrokerProfile()

  return (
    <Container>
      <RealEstateBrokerDescription brokerData={brokerProfile} />

      <Carousel option="card" length={quotes.length}>
        {quotes.map((quote, index) => (
          <SplideSlide key={quote.id}>
            <Card key={quote.id} {...quote} counter={index+1} />
          </SplideSlide>
        ))}
      </Carousel>
    </Container>
  )
}
