import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
 justify-content: center;
  `

export const UserProfile = styled.div`
 padding: 1.2rem;
  margin-top: 1rem;
  display: grid;
  justify-content:flex-start;
  grid-template-columns: auto auto;
  grid-gap: 10px;
  max-width: 600px;
  max-height: 500px;
  background-color: white;
  border-radius: 5px;
  color: hsl(211, 10%, 45%);
  `

export const UserLeft = styled.div`
  display: grid;
  grid-template-columns: auto auto auto auto;
  grid-gap: 1rem;
  text-transform:capitalize;
 `

export const LinhaVertical = styled.div`
 margin-left: 2rem;
  border-left: 2px solid  hsl(211, 10%, 45%);
`

export const ProfileReplies = styled.div`
padding: 1.2rem;
  margin-top: 1rem;
  display: grid;
  justify-content: flex-start;
  grid-template-columns: auto;
  grid-gap: 10px;
  max-width: 530px;
  max-height: 500px;
  background-color: white;
  border-radius: 5px;
  color: hsl(211, 10%, 45%);
  margin-left: 3rem;
 `

// export const ProfileReplies = styled.div`

//  `
//  export const ProfileReplies = styled.div`

//  `