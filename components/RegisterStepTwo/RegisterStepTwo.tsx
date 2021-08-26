import { PropsWithoutRef } from 'react'

import { RegisterState, USER_STATUS } from '../../handlers/pages/Auth/Register'
import RegisterStepTwoLogic from './RegisterStepTwoLogic'

const RegisterStepTwo = (
  props: PropsWithoutRef<{
    state: RegisterState
    prevStep: () => void
    handleRegisterFormSubmit: (e: React.FormEvent<HTMLFormElement>) => void
    statusInputRef: React.RefObject<HTMLInputElement>
  }>
) => {
  const { state, prevStep, handleRegisterFormSubmit, statusInputRef } = props

  const { status, isReadyToMoveForward, handleStatusBtnOnClick } =
    RegisterStepTwoLogic(state.user)

  return (
    <form action='#' onSubmit={handleRegisterFormSubmit}>
      <div className='grid grid-cols-2 gap-4 mb-4'>
        <div className='text-center'>
          <button
            name='btn-teacher'
            type='button'
            value='teacher'
            className={`border h-24 mb-1 rounded-md flex flex-nowrap justify-center items-center w-full shadow bg-${
              state.user.status === USER_STATUS.TEACHER ? 'gray-100' : 'white'
            } text-blue-400 duration-100 hover:bg-gray-100 focus:bg-gray-100`}
            onClick={handleStatusBtnOnClick}
          >
            <i className='bx bxs-graduation' style={{ fontSize: '3em' }}></i>
          </button>
          Teacher
        </div>
        <div className='text-center'>
          <button
            name='btn-student'
            type='button'
            value='student'
            className={`border h-24 mb-1 rounded-md flex flex-nowrap justify-center items-center w-full shadow bg-${
              state.user.status === USER_STATUS.STUDENT ? 'gray-100' : 'white'
            } text-blue-400 duration-100 hover:bg-gray-100 focus:bg-gray-100`}
            onClick={handleStatusBtnOnClick}
          >
            <i className='bx bxs-user' style={{ fontSize: '3em' }}></i>
          </button>
          Student
        </div>
      </div>
      <input
        type='hidden'
        name='status'
        id='status'
        ref={statusInputRef}
        defaultValue={status}
      />

      <div className='flex flex-nowrap justify-between'>
        <button
          type='button'
          className='px-5 py-1 text-white rounded shadow-md duration-100 bg-blue-400 hover:bg-blue-600 focus:bg-blue-600'
          onClick={prevStep}
        >
          Prev
        </button>

        <button
          type='submit'
          className={`px-5 py-1 text-white rounded shadow-md duration-100 bg-${
            isReadyToMoveForward
              ? 'blue-400 hover:bg-blue-600 focus:bg-blue-600'
              : 'blue-200 cursor-default'
          }`}
          disabled={!isReadyToMoveForward}
        >
          Next
        </button>
      </div>
    </form>
  )
}

export default RegisterStepTwo
