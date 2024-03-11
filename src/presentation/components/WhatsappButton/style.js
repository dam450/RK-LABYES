import styled from 'styled-components'

export const Container = styled.button`
  @keyframes pulse {
    0% {
      box-shadow: 0 0 0 0 #fdfdfd;
    }

    100% {
      box-shadow: 0 0 0 clamp(1rem, 0.5768rem + 1.1161vw, 2.3125rem) #69ffa800;
    }
  }
  @keyframes appear {
    from {
      transform: translateY(-10vh);
      opacity: 0;
    }
    to {
      transform: translateY(0);
      opacity: 1;
    }
  }
  display: flex;

  position: fixed;
  bottom: 2.2rem;
  right: 3.2rem;

  z-index: 3;

  background: none;
  border: none;

  a {
    position: relative;
    display: flex;
    height: fit-content;
    width: fit-content;

    transition: all 0.3s ease-in;

    animation: appear 1.8s;

    &::before {
      content: '';
      position: absolute;
      z-index: -1;
      left: 6%;
      top: 1%;
      width: 87%;
      height: 87%;
      border-radius: 50%;
      animation: 1.6s pulse infinite ease-in-out;
    }

    > svg {
      > g {
        :nth-child(1) {
          fill: ${({ theme }) => theme.COLORS.white};
        }

        :nth-child(2) {
          fill: ${({ theme }) => theme.COLORS['blue-sky-500']};
        }

        :nth-child(3) {
          fill: ${({ theme }) => theme.COLORS.white};
        }
      }
    }

    &:hover {
      transform: scale(1.1);
      filter: brightness(150%);
    }

    @media (max-width: 768px) {
      > img {
        width: 5.8rem;
        height: 5.8rem;
      }
      bottom: 4rem;
      right: 2rem;
    }
  }
`
