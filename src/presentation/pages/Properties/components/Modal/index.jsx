import { useCallback, useEffect, useState } from 'react'
import { toast } from 'react-toastify'

import { sendMail } from '../../../../../services/sendMail'
import { useBrokerProfile } from '../../../../../data/BrokerData'

import { useTranslation } from 'react-i18next'

import { PhoneInput } from '../../../../components/PhoneInput'
import { Button } from '../../../../components/Button'
import {
  Container,
  DefaultModal,
  Header,
  Title,
  SuccessTitle,
  SuccessBody,
  Form,
  InputGroup,
  SuccessModal,
  SuccessText,
  ErrorText,
} from './styles'

import closeIcon from '../../../../assets/x-close-icon.svg'
import { usePhoneInputValidation } from '../../../../../validation/phoneInput'

/**
 * Creates a styled Modal component.
 * @param {Boolean} isOpen - Modal is open.
 * @param {requestCallback} onCloseModal - Cb function to change open modal state to false.
 * @param {String} propertyCode - Property code information.
 * @param {Boolean} success - Modal state (You can use false for default page and true for success page).
 * @return {JSX.Element} The styled Modal component.
 */
export function Modal({
  isOpen,
  onCloseModal,
  propertyCode = 0,
  success = false,
}) {
  const [isLoading, setIsLoading] = useState(false)
  const [isSuccess, setIsSuccess] = useState(success)
  const [phone, setPhone] = useState('')
  const { isPhoneValid } = usePhoneInputValidation(phone)

  const [hasUserStartedTyping, setHasUserStartedTyping] = useState(false)

  const { t } = useTranslation()

  const { email } = useBrokerProfile()

  const devMode = import.meta.env.DEV

  let sendMailTo = devMode ? import.meta.env.VITE_EMAILJS_MAIL_TEST : email

  const handleCloseModal = useCallback(() => {
    setIsLoading(false)
    setIsSuccess(success)
    onCloseModal()
  }, [onCloseModal, success])

  const handleSubmit = useCallback(
    event => {
      if (event && event.target) {
        event.preventDefault()

        if (!isPhoneValid) return

        setIsLoading(true)

        const formData = new FormData(event.target)
        const data = Object.fromEntries(formData)

        const messageText = `Dados pessoais: \n
            Nome: ${data?.name ?? '(Informação não preenchida)'}
            Email: ${data?.email ? data?.email : '(Informação não preenchida)'}
            Whatsapp: ${data?.whatsapp ?? '(Informação não preenchida)'}
            Código do Imóvel: ${propertyCode ?? '(Informação não preenchida)'}
            `

        sendMail(data.name, messageText, sendMailTo)
          .then(response => {
            if (response.status === 200) {
              setIsSuccess(true)
              setIsLoading(false)
              event.target.reset()
            }
          })
          .catch(error => {
            toast.error(
              'Ocorreu um erro. \nPor favor, tente novamente mais tarde.',
            )
            console.error(error)
            handleCloseModal()
          })
      }
    },
    [isPhoneValid, propertyCode, sendMailTo, handleCloseModal],
  )

  useEffect(() => {
    window.addEventListener('keyup', event => {
      if (event.key === 'Escape' && isOpen) handleCloseModal()

      if (event.key === 'Enter' && isOpen) handleSubmit()

      if (event.key.match(/[a-zA-Z0-9]/)) setHasUserStartedTyping(true)
    })

    return () => {
      window.removeEventListener('keyup', event => {
        if (event.key === 'Escape' && isOpen) handleCloseModal()

        if (event.key === 'Enter' && isOpen) handleSubmit()
      })
    }
  }, [handleSubmit, isOpen, handleCloseModal, hasUserStartedTyping])

  return isOpen ? (
    <Container>
      {isSuccess == false ? (
        <DefaultModal>
          <Header>
            <img
              src={closeIcon}
              alt={t('modal.alt.close')}
              onClick={handleCloseModal}
            />
          </Header>

          <Title>{t('modal.title')}:</Title>

          <Form onSubmit={handleSubmit}>
            <label htmlFor="name">
              {t('modal.field-name')}: <span>({t('form.required-field')})</span>
            </label>
            <input
              name="name"
              id="name"
              placeholder={t('modal.field-name-placeholder')}
              minLength="2"
              required
              title=""
            />

            <InputGroup>
              <div>
                <label htmlFor="email">{t('modal.field-email')}:</label>
                <input
                  name="email"
                  type="email"
                  id="email"
                  placeholder={t('modal.field-email-placeholder')}
                  pattern=".*\.com$"
                  title=""
                />
              </div>

              <div>
                <label htmlFor="whatsapp">
                  Whatsapp: <span>({t('form.required-field')})</span>
                </label>

                <PhoneInput
                  value={phone}
                  setValue={setPhone}
                  isPhoneValid={isPhoneValid || !hasUserStartedTyping}
                  inputProps={{
                    // placeholder: '+55 (00) 00000-0000',
                    name: 'whatsapp',
                    id: 'whatsapp',
                    required: true,
                  }}
                />

                {!isPhoneValid ||
                  (!hasUserStartedTyping && (
                    <ErrorText>O formato é inválido.</ErrorText>
                  ))}
              </div>
            </InputGroup>

            <Button type="submit" isLoading={isLoading}>
              {t('modal.button')}
            </Button>
          </Form>
        </DefaultModal>
      ) : (
        <SuccessModal>
          <Header>
            <img
              src={closeIcon}
              alt={t('modal.alt.close')}
              onClick={handleCloseModal}
            />
          </Header>

          <SuccessBody>
            <img
              src="https://i.ibb.co/tKDWfbN/verified-Copy.gif"
              alt={t('modal.alt.gif')}
              className="verifiedGif"
            />

            <SuccessTitle>{t('modal.success-title')}</SuccessTitle>

            <SuccessText>{t('modal.success-text')}</SuccessText>
          </SuccessBody>
        </SuccessModal>
      )}
    </Container>
  ) : null
}
