import { Container } from './styles'

import mapIcon from '../../assets/contactMap.png'
import emailIcon from '../../assets/envelopeEmail.png'
import whatsappIcon from '../../assets/contactWhatsappIcon.svg'
import instagramIcon from '../../assets/instagram-icon.svg'

export function ContactBlock({ address, email, phoneNumber, instagram }) {
  const phoneDigits = phoneNumber.replace(/\D/g, '')
  return (
    <Container>
      <ul>
        {address && (
          <li>
            <img src={mapIcon} alt="Icone de um mapa desenhado." />
            <p>
              <a
                href={
                  'https://www.google.com.br/maps/place/RK/@-27.4232696,-48.4016947,3a,75y,234.74h,91.99t/data=!3m6!1e1!3m4!1sb9QPUO91m8kBQzoYTIg-QA!2e0!7i16384!8i8192!4m16!1m9!3m8!1s0x9527420b0fdb2cb9:0xc0cb19ae8e111a32!2sR.+das+Gaivotas,+1709+-+Ingleses+Norte,+Florian%C3%B3polis+-+SC,+88058-500!3b1!8m2!3d-27.4231126!4d-48.4020627!10e5!16s%2Fg%2F11c5j12tcd!3m5!1s0x9527420b068878f5:0x4b86a614a636e7a9!8m2!3d-27.4233434!4d-48.4018518!16s%2Fg%2F1tdbxyhw?entry=ttu'
                }
                target="_blank"
                rel="noopener noreferrer"
              >
                {address}
              </a>
            </p>
          </li>
        )}

        {email && (
          <li>
            <img src={emailIcon} alt="Icone de um envelope desenhado." />
            <p>
              <a
                href={`mailto:${email}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                {email}
              </a>
            </p>
          </li>
        )}

        {instagram && (
          <li>
            <img
              src={instagramIcon}
              alt="Icone do aplicativo instagram desenhado."
            />
            <p>
              <a
                href={`https://www.instagram.com/${instagram}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                {`@${instagram}`}
              </a>
            </p>
          </li>
        )}

        {phoneNumber && (
          <li>
            <img
              src={whatsappIcon}
              alt="Icone do aplicativo Whatsapp desenhado."
            />
            <p>
              <a
                href={`https://api.whatsapp.com/send?phone=${phoneDigits}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                {phoneNumber}
              </a>
            </p>
          </li>
        )}
      </ul>
    </Container>
  )
}
