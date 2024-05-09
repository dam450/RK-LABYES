import { Container } from './styles'
import { BrokerImage } from '../../components/BrokerImage'
import { ContactBlock } from '../../components/ContactBlock'
import { ContactForm } from './components/ContactForm'

import { useBrokerProfile } from '../../../data/BrokerData'
import { useTranslation } from 'react-i18next'

export function Contact() {
  const broker = useBrokerProfile()
  const brokerAddress = broker.address
  const brokerEmail = broker.email
  const brokerPhoneNumber = broker.phone

  const { t } = useTranslation()

  return (
    <Container>
      <div className="titles">
        <h1>{t('contact.title')}</h1>
        <p>{t('contact.subtitle')}</p>
      </div>
      <div className="form">
        <ContactForm />
      </div>
      <div className="contact">
        <ContactBlock
          address={`${brokerAddress.street}, ${brokerAddress.number} ${brokerAddress.district} - ${brokerAddress.city}-${brokerAddress.state}`}
          email={brokerEmail}
          phoneNumber={brokerPhoneNumber}
        />
        <div className="image">
          <BrokerImage removeelipses={true} />
        </div>
      </div>
    </Container>
  )
}
