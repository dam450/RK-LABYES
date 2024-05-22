import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { useBrokerProfile } from '../../../../../data/BrokerData'
import { sendMail } from '../../../../../services/sendMail'
import { toast } from 'react-toastify'

import { TextInput } from '../../../../components/TextInput'
import { TextArea } from '../../../../components/TextArea'
import { SelectOption } from '../../../../components/SelectOption'
import { Modal } from '../../../Properties/components/Modal'

import { FormContainer, ShortButton, ErrorText } from './styles'
import { PhoneInput } from '../../../../components/PhoneInput'
import { usePhoneInputValidation } from '../../../../../validation/phoneInput'

export function ContactForm() {
  const [isFormSubmitted, setIsFormSubmitted] = useState(false)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [hasUserStartedTyping, setHasUserStartedTyping] = useState(false)
  const [phone, setPhone] = useState('')
  const { isPhoneValid } = usePhoneInputValidation(phone)

  const { t } = useTranslation()

  const { email: brokerEmail } = useBrokerProfile()
  const devMode = import.meta.env.DEV
  let sendMailTo = ''

  if (devMode) {
    sendMailTo = import.meta.env.VITE_EMAILJS_MAIL_TEST
  } else {
    sendMailTo = brokerEmail
  }

  function handleSubmit(event) {
    event.preventDefault()

    if (!isPhoneValid) return

    const formData = new FormData(event.target)
    const data = Object.fromEntries(formData)

    const messageText = `Dados pessoais: \n
      Nome: ${data?.name}
      Email: ${data?.email}
      Whatsapp: ${data?.whatsapp} \n\n
      Dados do Imóvel: \n
      Localização: ${data?.local}
      Finalidade: ${data?.purpose}
      Categoria: ${data?.category}
      Quartos: ${data?.bedroom}
      Valor mínimo: ${data?.min_value}
      Valor máximo: ${data?.max_value}
      Informações extras: ${data?.extra_info}`

    setIsFormSubmitted(true)

    sendMail(data.name, messageText, sendMailTo)
      .then(response => {
        if (response.status === 200) {
          event.target.reset()
        }
      })
      .catch(error => {
        toast.error('Ocorreu um erro. \nPor favor, tente novamente mais tarde.')
        console.error(error)
      })
      .finally(() => {
        setIsModalOpen(true)
        setIsFormSubmitted(false)
      })
  }

  useEffect(() => {
    window.addEventListener('keyup', event => {
      if (event.key.match(/[a-zA-Z0-9]/)) setHasUserStartedTyping(true)
    })
  }, [hasUserStartedTyping])

  return (
    <FormContainer onSubmit={handleSubmit}>
      <div className="fieldsContainer">
        <fieldset>
          <legend>
            <span>{t('contact.form-title')} </span>
          </legend>

          <div className="inputWrapper">
            <label htmlFor="name">
              {t('contact.form-field-name')}
              <span> ({t('form.required-field')}):</span>
            </label>
            <TextInput
              placeholder={t('contact.form-field-name-placeholder')}
              name="name"
              id="name"
              required
              minLength={2}
            />
          </div>

          <div className="inRow">
            <div className="inputWrapper">
              <label htmlFor="email">{t('contact.form-field-email')} :</label>
              <TextInput
                placeholder={t('contact.form-field-email-placeholder')}
                type="email"
                name="email"
                id="email"
                pattern="^((?!\.)[\w\-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$"
              />
            </div>

            <div className="inputWrapper">
              <label htmlFor="whatsapp">
                Whatsapp <span> ({t('form.required-field')}):</span>
              </label>

              <PhoneInput
                value={phone}
                setValue={setPhone}
                isPhoneValid={isPhoneValid || !hasUserStartedTyping}
                inputProps={{
                  name: 'whatsapp',
                  id: 'whatsapp',
                  required: true,
                }}
              />

              {!isPhoneValid && hasUserStartedTyping && (
                <ErrorText>O formato é inválido.</ErrorText>
              )}
            </div>
          </div>
        </fieldset>

        <fieldset>
          <legend>
            <span>{t('contact.form-subtitle')}</span>
          </legend>

          <div className="inRow">
            <div className="inputWrapper">
              <label htmlFor="local">
                {t('contact.form-field-location')}:{' '}
              </label>
              <TextInput
                placeholder={t('contact.form-field-location-placeholder')}
                name="local"
                id="local"
              />
            </div>

            <div className="inputWrapper">
              <label htmlFor="purpose">
                {t('contact.form-field-purpose')}:
              </label>
              <SelectOption name="purpose" id="purpose" defaultValue="">
                <option value="" hidden>
                  {t('contact.form-field-select-placeholder')}
                </option>
                <option value="comprar">
                  {t('contact.form-field-purpose-option-one')}
                </option>
                <option value="vender">
                  {t('contact.form-field-purpose-option-two')}
                </option>
              </SelectOption>
            </div>
          </div>

          <div className="inRow">
            <div className="inputWrapper">
              <label htmlFor="category">
                {t('contact.form-field-category')}:
              </label>
              <SelectOption name="category" id="category" defaultValue="">
                <option value="" hidden>
                  {t('contact.form-field-select-placeholder')}
                </option>
                <option value="apartmento">
                  {t('contact.form-field-category-option-one')}
                </option>
                <option value="casa">
                  {t('contact.form-field-category-option-two')}
                </option>
                <option value="galpão">
                  {t('contact.form-field-category-option-three')}
                </option>
                <option value="terreno">
                  {t('contact.form-field-category-option-four')}
                </option>
                <option value="outros">
                  {t('contact.form-field-category-option-five')}
                </option>
              </SelectOption>
            </div>

            <div className="inputWrapper">
              <label htmlFor="bedroom">
                {t('contact.form-field-bedrooms')}:
              </label>
              <SelectOption name="bedroom" id="bedroom" defaultValue="">
                <option value="" hidden>
                  {t('contact.form-field-select-placeholder')}
                </option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5 ou mais">
                  {t('contact.form-field-bedrooms-option-five')}
                </option>
              </SelectOption>
            </div>
          </div>

          <div className="inRow">
            <div className="inputWrapper">
              <label htmlFor="min_value">
                {t('contact.form-field-min-value')}:
              </label>
              <TextInput
                min={100}
                placeholder="Mín (R$)"
                type="number"
                name="min_value"
                id="min_value"
              />
            </div>

            <div className="inputWrapper">
              <label htmlFor="max_value">
                {t('contact.form-field-max-value')}:
              </label>
              <TextInput
                min={100}
                placeholder="Máx (R$)"
                type="number"
                name="max_value"
                id="max_value"
              />
            </div>
          </div>

          <div className="inputWrapper">
            <label htmlFor="extra_info">
              {t('contact.form-field-textarea')}:
            </label>
            <TextArea
              placeholder={t('contact.form-field-textarea-placeholder')}
              name="extra_info"
              id="extra_info"
              rows="6"
            />
          </div>
        </fieldset>
      </div>
      <footer>
        <p>
          {t('contact.form-footer-text')}{' '}
          <a href="/privatePolicy" target="_blank">
            {t('contact.form-footer-link')}
          </a>
        </p>

        <ShortButton size="small" type="submit" isLoading={isFormSubmitted}>
          {t('contact.form-button')}
        </ShortButton>
      </footer>

      <Modal
        isOpen={isModalOpen}
        onCloseModal={() => setIsModalOpen(false)}
        success={true}
      />
    </FormContainer>
  )
}
