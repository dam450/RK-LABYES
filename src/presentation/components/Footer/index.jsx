import { useTranslation } from 'react-i18next'
import { Container } from './styles'

export function Footer() {
  const { t } = useTranslation()
  const year = new Date().getFullYear()

  return (
    <Container>
      <p>
        &copy; {year}{' '}
        <b>
          <a
            href="https://lab-links.netlify.app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Team Lab Yes!
          </a>
        </b>{' '}
        <span>{t('footer.footer-span')}</span>
      </p>
    </Container>
  )
}
