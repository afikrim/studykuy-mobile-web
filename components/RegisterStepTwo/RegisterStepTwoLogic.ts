import { useEffect, useState } from 'react'

import { USER_STATUS } from '../../handlers/pages/Auth/Register'

const RegisterStepTwoLogic = (args: { status?: USER_STATUS }) => {
  const [status, setStatus] = useState<USER_STATUS | undefined>(args.status)

  const [isReadyToMoveForward, setIsReadyToMoveForward] =
    useState<boolean>(false)

  useEffect(() => {
    if (status) setIsReadyToMoveForward(true)
  }, [status])

  const handleStatusBtnOnClick = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    const target = e.currentTarget
    const value = target.value

    target?.classList.remove('bg-white')
    target?.classList.add('bg-gray-100')

    document.getElementById('status')?.setAttribute('value', value)

    switch (value) {
      case 'teacher':
        document
          .querySelector('[name="btn-student"]')
          ?.classList.add('bg-white')
        document
          .querySelector('[name="btn-student"]')
          ?.classList.remove('bg-gray-100')
        break
      case 'student':
        document
          .querySelector('[name="btn-teacher"]')
          ?.classList.add('bg-white')
        document
          .querySelector('[name="btn-teacher"]')
          ?.classList.remove('bg-gray-100')
        break
    }

    setStatus(value as USER_STATUS)
  }

  return { status, isReadyToMoveForward, handleStatusBtnOnClick }
}

export default RegisterStepTwoLogic
