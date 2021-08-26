import { useEffect, useState } from 'react'

const RegisterStepThreeTeacherLogic = (args: {
  nik?: string
  phone?: string
}) => {
  const [nik, setNik] = useState<string | undefined>(args.nik)
  const [phone, setPhone] = useState<string | undefined>(args.phone)
  const [agreement, setAgreement] = useState<boolean>(false)

  const [isReadyToRegister, setIsReadyToRegister] = useState<boolean>(false)

  useEffect(() => {
    if (nik && nik !== '' && phone && phone !== '' && agreement)
      setIsReadyToRegister(true)
  }, [nik, phone, agreement])

  const handleNikOnKeyUp = (e: React.KeyboardEvent<HTMLInputElement>) => {
    const target = e.currentTarget
    const value = target.value

    setNik(value)
  }

  const handlePhoneOnKeyUp = (e: React.KeyboardEvent<HTMLInputElement>) => {
    const target = e.currentTarget
    const value = target.value

    setPhone(value)
  }

  const handleCheckboxChecked = (e: React.ChangeEvent<HTMLInputElement>) => {
    const target = e.currentTarget
    const checked = target.checked

    setAgreement(checked)
  }

  return {
    isReadyToRegister,
    handleNikOnKeyUp,
    handlePhoneOnKeyUp,
    handleCheckboxChecked,
  }
}

export default RegisterStepThreeTeacherLogic
