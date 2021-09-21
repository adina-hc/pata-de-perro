import styled from 'styled-components'


export const FooterContainer = styled.footer`
    // height: 5%;
    width: 100%;
    position: absolute;
    bottom: 0;
    left: 0;
    z-index:-130;


@keyframes wave {
  0% {
    margin-left: 0;
  }

  100% {
    margin-left: -1600px;
  }
}

@keyframes swell {
  0%, 100% {
    transform: translate3d(0, -25px, 0);
  }

  50% {
    transform: translate3d(0, 5px, 0);
  
}
`;

export const FooterWrap = styled.div`
    background: transparent;
    padding-bottom: 200px;
    min-height: 100%;
    box-sizing: border-box;
    -moz-box-sizing: border-box;
`

export const Wave = styled.div`
    background: url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/85486/wave.svg) repeat-x;
    position: absolute;
    height: 198px;
    left: 0;
    right: 0;
    animation: wave 7s cubic-bezier(0.36, 0.45, 0.63, 0.53) infinite;
    transform: translate3d(0, 0, 0);

    &:nth-of-type(2) {
    animation: wave 7s cubic-bezier(0.36, 0.45, 0.63, 0.53) -0.125s infinite, swell 7s ease -1.25s infinite;
    opacity: 1;
    }
`