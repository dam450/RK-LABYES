import styled from 'styled-components'

export const Container = styled.div`
  height: 100%;
  padding: 16.5rem 2.5rem 8rem 2.5rem;

  display: flex;
  flex-direction: column;
  gap: 4.8rem;

  animation: topToBot 1s ease-in;

  @keyframes topToBot {
    from {
      opacity: 0;
      transform: translateY(-80px);
    }
    to {
      opacity: 1;
    }
  }

  @media screen and (min-width: 1440px) {
    margin-top: 5rem;
  }
`
