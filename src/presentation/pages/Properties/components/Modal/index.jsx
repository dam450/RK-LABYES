import { useCallback, useEffect, useState } from 'react'
import { toast } from 'react-toastify'

import { sendMail } from '../../../../../services/sendMail'
import { useBrokerProfile } from '../../../../../data/BrokerData'

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
} from './styles'

import closeIcon from '../../../../assets/x-close-icon.svg'

/**
 * Creates a styled Modal component.
 * @param {Boolean} isOpen - Modal state.
 * @param {requestCallback} onCloseModal - Cb function to change open modal state to false.
 * @param {String} propertyCode - Property code information.
 * @return {JSX.Element} The styled Modal component.
 */
export function Modal({ isOpen, onCloseModal, propertyCode }) {
  const [isLoading, setIsLoading] = useState(false)
  const [formState, setFormState] = useState('default') // 2 estados: default, success

  const { email } = useBrokerProfile()

  const devMode = import.meta.env.DEV

  let sendMailTo = devMode ? import.meta.env.VITE_EMAILJS_MAIL_TEST : email

  const handleSubmit = useCallback(
    event => {
      if (event && event.target) {
        event.preventDefault()

        setIsLoading(true)

        const formData = new FormData(event.target)
        const data = Object.fromEntries(formData)

        const messageText = `Dados pessoais: \n
          Nome: ${data?.name ?? '(Informação não preenchida)'}
          Email: ${data?.email ? data?.email : '(Informação não preenchida)'}
          Whatsapp: ${data?.whatsapp ?? '(Informação não preenchida)'}
          Código do Imóvel: ${propertyCode ?? '(Informação não preenchida)'}
          `

        setIsLoading(false)
        setFormState('success')

        sendMail(data.name, messageText, sendMailTo)
          .then(response => {
            onCloseModal()

            if (response.status === 200) {
              toast.success('Mensagem enviada com sucesso!')
              setIsLoading(false)
              event.target.reset()
            }
          })
          .catch(error => {
            toast.error(
              'Ocorreu um erro. \nPor favor, tente novamente mais tarde.',
            )
            console.error(error)
          })
      }
    },
    [onCloseModal, propertyCode, sendMailTo],
  )

  useEffect(() => {
    window.addEventListener('keyup', event => {
      if (event.key === 'Escape' && isOpen) onCloseModal()

      if (event.key === 'Enter' && isOpen) handleSubmit()
    })

    return () => {
      window.removeEventListener('keyup', event => {
        if (event.key === 'Escape' && isOpen) onCloseModal()

        if (event.key === 'Enter' && isOpen) handleSubmit()
      })
    }
  }, [handleSubmit, isOpen, onCloseModal])

  return isOpen ? (
    <Container>
      {formState === 'default' ? (
        <DefaultModal>
          <Header>
            <img
              src={closeIcon}
              alt="Ícone de X para fechar o modal"
              onClick={onCloseModal}
            />
          </Header>

          <Title>Por gentileza, preencha os campos abaixo:</Title>

          <Form onSubmit={handleSubmit}>
            <label htmlFor="name">
              Nome: <span>(Campo obrigatório)</span>
            </label>
            <input
              name="name"
              id="name"
              placeholder="Seu nome"
              minLength="2"
              required
              title=""
            />

            <InputGroup>
              <div>
                <label htmlFor="email">E-mail:</label>
                <input
                  name="email"
                  type="email"
                  id="email"
                  placeholder="Seu melhor e-mail"
                  pattern=".*\.com$"
                  title=""
                />
              </div>

              <div>
                <label htmlFor="whatsapp">
                  Whatsapp: <span>(Campo obrigatório)</span>
                </label>

                <input
                  id="whatsapp"
                  name="whatsapp"
                  placeholder="+55 (00) 00000-0000"
                  pattern="^[0-9+ ]+$"
                  minLength="9"
                  maxLength="17"
                  required
                  title=""
                />
              </div>
            </InputGroup>

            <Button type="submit" isLoading={isLoading}>
              Envie seu contato
            </Button>
          </Form>
        </DefaultModal>
      ) : (
        <SuccessModal>
          <Header>
            <img
              src={closeIcon}
              alt="Ícone de X para fechar o modal"
              onClick={onCloseModal}
            />
          </Header>

          <SuccessBody>
            <img
              src="/verified.gif"
              alt="Gif de Verificação"
              className="verifiedGif"
            />

            <SuccessTitle>Obrigado por confiar em nós!</SuccessTitle>

            <SuccessText>
              Em breve, um de nossos especialistas entrará em contato para
              fornecer todas as informações necessárias. Estamos ansiosos para
              ajudar você a encontrar o lar dos seus sonhos!
            </SuccessText>
          </SuccessBody>
        </SuccessModal>
      )}
    </Container>
  ) : null
}
