import { Container, Content } from './styles'
import { Video } from '../../components/Video'
import { Card } from '../../components/Card'
import { WhatsappButton } from '../../components/WhatsappButton'
import { SplideSlide } from '@splidejs/react-splide'
import { useTranslation } from 'react-i18next'
import { Carousel } from '../../components/Carousel'

import { useBrokerProfile } from '../../../data/BrokerData'

import videoMobile from '../../assets/RK_IMOB_FINAL_VERTICAL.mp4'
import videoMobilePoster from '../../assets/RK_IMOB_FINAL_VERTICAL.png'
import videoDesktop from '../../assets/RK_IMOB_FINAL__720.mp4'
import videoDesktopPoster from '../../assets/RK_IMOB_FINAL__720.jpg'

export function Home() {
  const { t } = useTranslation()
  const broker = useBrokerProfile()
  const { comments: quotes } = useBrokerProfile()
  const brokerPhoneNumber = broker.phone

  const isDeviceScreenPortrait = window.matchMedia(
    '(orientation: portrait)',
  ).matches

  return (
    <Container>
      <div className="bg-img" />
      <Content>
        <h2>{t('home.home-title')}</h2>

        {isDeviceScreenPortrait ? (
          <Video src={videoMobile} poster={videoMobilePoster} />
        ) : (
          <Video src={videoDesktop} poster={videoDesktopPoster} />
        )}

        <Carousel option="card" length={quotes.length}>
          {quotes.map(quote => (
            <SplideSlide key={quote.id}>
              <Card {...quote} />
            </SplideSlide>
          ))}
        </Carousel>
      </Content>
      <WhatsappButton phoneNumber={brokerPhoneNumber} />
    </Container>
  )
}
