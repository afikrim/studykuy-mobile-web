import { useEffect, useState } from 'react'

const RegisterStepThreeStudentLogic = (args: {
  nisn?: string
  phone?: string
}) => {
  const [nisn, setNisn] = useState<string | undefined>(args.nisn)
  const [phone, setPhone] = useState<string | undefined>(args.phone)
  const [agreement, setAgreement] = useState<boolean>(false)

  const [isReadyToRegister, setIsReadyToRegister] = useState<boolean>(false)

  useEffect(() => {
    if (nisn && nisn !== '' && phone && phone !== '' && agreement)
      setIsReadyToRegister(true)
  }, [nisn, phone, agreement])

  const handleNisnOnKeyUp = (e: React.KeyboardEvent<HTMLInputElement>) => {
    const target = e.currentTarget
    const value = target.value

    setNisn(value)
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
    handleNisnOnKeyUp,
    handlePhoneOnKeyUp,
    handleCheckboxChecked,
  }
}

export default RegisterStepThreeStudentLogic
