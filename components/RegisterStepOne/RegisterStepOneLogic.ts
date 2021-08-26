import { useEffect, useState } from 'react'

const RegisterStepOneLogic = (args: {
  name?: string
  username?: string
  email?: string
  password?: string
}) => {
  const [name, setName] = useState<string | undefined>(args.name)
  const [username, setUsername] = useState<string | undefined>(args.username)
  const [email, setEmail] = useState<string | undefined>(args.email)
  const [password, setPassword] = useState<string | undefined>(args.password)
  const [retypePassword, setRetypePassword] = useState<string | undefined>()

  const [isReadyToMoveForward, setIsReadyToMoveForward] =
    useState<boolean>(false)

  useEffect(() => {
    if (
      name &&
      name !== '' &&
      username &&
      username !== '' &&
      email &&
      email !== '' &&
      password &&
      password !== '' &&
      retypePassword &&
      retypePassword !== ''
    )
      setIsReadyToMoveForward(true)
  }, [name, username, email, password, retypePassword])

  const handleNameOnKeyUp = (e: React.KeyboardEvent<HTMLInputElement>) => {
    const target = e.currentTarget
    const value = target.value

    setName(value)
  }

  const handleUsernameOnKeyUp = (e: React.KeyboardEvent<HTMLInputElement>) => {
    const target = e.currentTarget
    const value = target.value

    setUsername(value)
  }

  const handleEmailOnKeyUp = (e: React.KeyboardEvent<HTMLInputElement>) => {
    const target = e.currentTarget
    const value = target.value

    setEmail(value)
  }

  const handlePasswordOnKeyUp = (e: React.KeyboardEvent<HTMLInputElement>) => {
    const target = e.currentTarget
    const value = target.value

    setPassword(value)
  }

  const handleRetypePasswordOnKeyUp = (
    e: React.KeyboardEvent<HTMLInputElement>
  ) => {
    const target = e.currentTarget
    const value = target.value

    if (value !== password) {
      target.classList.remove('focus:ring-indigo-500')
      target.classList.add('focus:ring-red-500')
      return
    }
    target.classList.remove('focus:ring-red-500')
    target.classList.add('focus:ring-indigo-500')

    setRetypePassword(value)
  }

  return {
    isReadyToMoveForward,
    handleNameOnKeyUp,
    handleUsernameOnKeyUp,
    handleEmailOnKeyUp,
    handlePasswordOnKeyUp,
    handleRetypePasswordOnKeyUp,
  }
}

export default RegisterStepOneLogic
