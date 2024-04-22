import { useState } from 'react'

import { Container, StyledVideo, MessageError } from './styles'

import VideoCameraSlash from '../../assets/VideoCameraSlash.svg'

import video from '../../assets/video-sample.mp4'

export function Video({ src = video, poster = null, ...rest }) {
  const [videoError, setVideoError] = useState(false)

  return (
    <Container>
      {!videoError ? (
        <StyledVideo
          controls
          autoPlay
          muted
          poster={poster}
          onError={() => setVideoError(true)}
          {...rest}
        >
          <source src={src} type="video/mp4" />
        </StyledVideo>
      ) : (
        <MessageError>
          <img src={VideoCameraSlash} alt="Ícone da câmera cortada" />
          <span> Não foi possível carregar o vídeo.</span>
        </MessageError>
      )}
    </Container>
  )
}
