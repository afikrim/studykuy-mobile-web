import { PropsWithoutRef } from 'react'

import { RegisterState } from '../../handlers/pages/Auth/Register'
import RegisterStepThreeStudentLogic from './RegisterStepThreeStudentLogic'

const RegisterStepThreeStudent = (
  props: PropsWithoutRef<{
    state: RegisterState
    prevStep: () => void
    handleRegisterFormSubmit: (e: React.FormEvent<HTMLFormElement>) => void
    nisnInputRef: React.RefObject<HTMLInputElement>
    phoneInputRef: React.RefObject<HTMLInputElement>
  }>
) => {
  const {
    state,
    prevStep,
    handleRegisterFormSubmit,
    nisnInputRef,
    phoneInputRef,
  } = props

  const {
    isReadyToRegister,
    handleNisnOnKeyUp,
    handlePhoneOnKeyUp,
    handleCheckboxChecked,
  } = RegisterStepThreeStudentLogic(state.user)

  return (
    <form action='#' onSubmit={handleRegisterFormSubmit}>
      <div className='flex flex-nowrap justify-center my-4'>
        <input
          type='text'
          name='nisn'
          id='nisn'
          className='border-2 w-full rounded-md outline-none px-2 py-1 focus:border-0 focus:ring-4 focus:ring-indigo-500 focus:ring-opacity-50'
          ref={nisnInputRef}
          defaultValue={state.user.nisn}
          onKeyUp={handleNisnOnKeyUp}
          placeholder='NISN'
          required
        />
      </div>
      <div className='flex flex-nowrap justify-center my-4'>
        <span className='w-1/5 text-center mr-2' style={{ lineHeight: '32px' }}>
          +62{' '}
        </span>
        <input
          type='text'
          name='phone'
          id='phone'
          className='border-2 w-full rounded-md outline-none px-2 py-1 focus:border-0 focus:ring-4 focus:ring-indigo-500 focus:ring-opacity-50'
          ref={phoneInputRef}
          defaultValue={state.user.phone}
          onKeyUp={handlePhoneOnKeyUp}
          placeholder='812xxxxxxxx'
          required
        />
      </div>
      <div className='flex flex-nowrap my-4'>
        <input
          type='checkbox'
          name='term-agreement'
          id='term-agreement'
          className='mr-2'
          onChange={handleCheckboxChecked}
        />
        <span style={{ fontSize: '0.7rem' }}>
          <label htmlFor='term-agreement'>
            I agree with the Terms and Agreements
          </label>
        </span>
      </div>

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
            isReadyToRegister
              ? 'blue-400 hover:bg-blue-600 focus:bg-blue-600'
              : 'blue-200 cursor-default'
          }`}
          disabled={isReadyToRegister}
        >
          Register
        </button>
      </div>
    </form>
  )
}

export default RegisterStepThreeStudent
