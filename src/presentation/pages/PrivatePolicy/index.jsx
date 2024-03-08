import { Container } from './styles'
import { WhatsappButton } from '../../components/WhatsappButton'
import { useBrokerProfile } from '../../../data/BrokerData'

import { useTranslation } from 'react-i18next'

export function PrivatePolicy() {
  const { phone } = useBrokerProfile()
  const { t } = useTranslation()

  return (
    <Container>
      <main>
        <h1>{t('privatePolicy.title')}</h1>
        <section>
          <strong>{t('privatePolicy.caption')}</strong>
          <p>
            {t('privatePolicy.paragraph-one')}
            <span>
              <strong className="title">RK Imóveis</strong> <br />
              Rua das Gaivotas, 1709 – Sala 104 <br />
              Ingleses do Rio Vermelho - Florianópolis-SC <br />
              CEP: 88058-500 <br />
              {t('privatePolicy.phone')}: (48) 3266-0866 <br />
              {t('privatePolicy.email')}: contato@rkimoveis.com.br
            </span>
            {t('privatePolicy.paragraph-two')}
          </p>
          <strong>{t('privatePolicy.caption-two')}</strong>
          <p>
            {t('privatePolicy.text-one')} <br />
            {t('privatePolicy.text-two')} <br />
            {t('privatePolicy.text-three')}
          </p>
        </section>
      </main>
      <WhatsappButton phoneNumber={phone} />
    </Container>
  )
}
