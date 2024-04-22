import { CardContainer } from './styles'

/**
 * Renders a card component with a quote and an optional author.
 *
 * @param {string} quote - The quote to display in the card.
 * @param {string | undefined} author - The optional author of the quote.
 * @return {JSX.Element} The rendered card component.
 */
export function Card({ counter = false, quote, author = undefined }) {
  return (
    <CardContainer data-count={counter} $counter={counter}>
      <blockquote>{`"${quote}"`}</blockquote>
      {author && <cite>{author}</cite>}
    </CardContainer>
  )
}
