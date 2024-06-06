import { BrokerImage } from '../../../../components/BrokerImage'

import {
  CommentCard,
  Container,
  CopyGroup,
  ImageContainer,
  LinksCard,
  TitleGroup,
} from './styles'

import emailIcon from '../../../../assets/email-icon.svg'
import whatsappIcon from '../../../../assets/whatsapp-icon.svg'
import mapPinIcon from '../../../../assets/map-pin-icon.svg'
import instagramIcon from '../../../../assets/instagram-icon.svg'
/**
 * Renders the description of a real estate broker.
 * @param {Object<string, import('../../../../../data/BrokerData').BrokerProfile>} brokerData - the information of the broker
 * @return {JSX.Element} the rendered broker description
 */
export function RealEstateBrokerDescription({ brokerData }) {
  const {
    description: { title, paragraph },
    clientReview,
  } = brokerData
  const phoneDigits = brokerData.phone.replace(/\D/g, '')

  return (
    <Container>
      <ImageContainer>
        <BrokerImage removeelipses={false} />
      </ImageContainer>

      <article>
        <TitleGroup>
          <h4>{brokerData.name}</h4>
          <span>CRECI/SC {brokerData.CRECI}</span>
        </TitleGroup>

        <CopyGroup>
          <strong>{title}</strong>

          <div className="paragraphs">
            {paragraph.map(paragraph => (
              <p key={crypto.randomUUID()}>{paragraph}</p>
            ))}
          </div>
        </CopyGroup>
      </article>

      <div className="description_card_footer">
        <LinksCard>
          <a
            href={
              'https://www.google.com.br/maps/place/RK/@-27.4232696,-48.4016947,3a,75y,234.74h,91.99t/data=!3m6!1e1!3m4!1sb9QPUO91m8kBQzoYTIg-QA!2e0!7i16384!8i8192!4m16!1m9!3m8!1s0x9527420b0fdb2cb9:0xc0cb19ae8e111a32!2sR.+das+Gaivotas,+1709+-+Ingleses+Norte,+Florian%C3%B3polis+-+SC,+88058-500!3b1!8m2!3d-27.4231126!4d-48.4020627!10e5!16s%2Fg%2F11c5j12tcd!3m5!1s0x9527420b068878f5:0x4b86a614a636e7a9!8m2!3d-27.4233434!4d-48.4018518!16s%2Fg%2F1tdbxyhw?entry=ttu'
            }
            rel="noreferrer"
            target="_blank"
          >
            <img src={mapPinIcon} alt="Ícone de Mapa" />
            <span>{brokerData.address.city}</span>
          </a>

          <a
            href={'mailto:' + brokerData.email}
            rel="noreferrer"
            target="_blank"
          >
            <img src={emailIcon} alt="Ícone do Gmail" />
            <span>{brokerData.email}</span>
          </a>
          {brokerData.instagram && (
            <a
              href={`https://www.instagram.com/${brokerData.instagram}`}
              rel="noreferrer"
              target="_blank"
            >
              <img src={instagramIcon} alt="Ícone do Instagram" />
              <span>{`@${brokerData.instagram}`}</span>
            </a>
          )}

          <a
            href={`https://api.whatsapp.com/send?phone=${phoneDigits}`}
            rel="noreferrer"
            target="_blank"
          >
            <img src={whatsappIcon} alt="Ícone do WhatsApp" />
            <span>{brokerData.phone}</span>
          </a>
        </LinksCard>

        {clientReview?.review && clientReview?.client && (
          <CommentCard>
            <p>&rdquo;{clientReview.review}&rdquo;</p>

            <h3>{clientReview.client}</h3>
          </CommentCard>
        )}
      </div>
    </Container>
  )
}
