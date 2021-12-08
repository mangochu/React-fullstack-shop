import { useState } from "react";
import { publicRequest } from "../../requestMethods";
import { Agreement, Button, Container, Error, Form, Input, Title, Wrapper } from "./SignUpElements";

const SignUp = () => {
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [error, setError] = useState(false)
  const [blank, setBlank] = useState(false)
  const [wrong, setWrong] = useState(false)

  const handleClick = async e => {
    e.preventDefault()
    setError(false)
    setBlank(false)
    setWrong(false)
    if (username === '' || email === '' || password === '') {
      setBlank(true)
    } else if (confirmPassword !== password) {
      setWrong(true)
    } else {
      try {
        const res = await publicRequest.post('/auth/register', {
          username,
          email,
          password
        })
        res.data && window.location.replace('/login')
      } catch (err) {
        setError(true)
      }
    }
  }

  return (
    <Container>
      <Wrapper>
        <Title>CREATE AN ACCOUNT</Title>
        <Form>
          <Input placeholder="first name" />
          <Input placeholder="last name" />
          <Input placeholder="username" onChange={e => setUsername(e.target.value)} />
          <Input placeholder="email" onChange={e => setEmail(e.target.value)} />
          <Input placeholder="password" onChange={e => setPassword(e.target.value)} />
          <Input placeholder="confirm password" onChange={e => setConfirmPassword(e.target.value)} />
          <Agreement>
            By creating an account, I consent to the processing of my personal
            data in accordance with the <b>PRIVACY POLICY</b>
          </Agreement>
          <Button onClick={handleClick}>CREATE</Button>
          {blank && <Error>username, email, password cannot be blank!</Error>}
          {wrong && <Error>Please recheck your password!</Error>}
          {error && <Error>Something went wrong!</Error>}
        </Form>
      </Wrapper>
    </Container>
  );
};

export default SignUp;
