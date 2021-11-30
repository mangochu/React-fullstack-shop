import styled from "styled-components";

export const Container = styled.div`
  position: fixed;
  z-index: 999;
  width: 100vw;
  height: 100vh;
  background-color: white;
  transition: 0.3s ease-in-out;
  opacity: ${({ isOpen }) => (isOpen ? '100%' : '0')};
  top: ${({ isOpen }) => (isOpen ? '0' : '-100%')};
`
export const Icon = styled.div`

  font-size: 2rem;
  cursor: pointer;
  margin: 40px 10px 60px;
`
export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 2rem;
  justify-content: center;
  align-items: center;
`
export const MenuItem = styled.div``

export const Bottom = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  bottom: 0;
`

export const Logo = styled.h1`
  display: flex;
  justify-content: center;
`

export const Desc = styled.div`
  display: flex;
  justify-content: center;
`