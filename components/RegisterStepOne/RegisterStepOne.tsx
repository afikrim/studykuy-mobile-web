import { PropsWithoutRef } from 'react'

import { RegisterState } from '../../pages/auth/register/logic'
import RegisterStepOneLogic from './RegisterStepOneLogic'

const RegisterStepOne = (
  props: PropsWithoutRef<{
    state: RegisterState
    handleRegisterFormSubmit: (e: React.FormEvent<HTMLFormElement>) => void
    nameInputRef: React.RefObject<HTMLInputElement>
    usernameInputRef: React.RefObject<HTMLInputElement>
    emailInputRef: React.RefObject<HTMLInputElement>
    passwordInputRef: React.RefObject<HTMLInputElement>
  }>
) => {
  const {
    state,
    handleRegisterFormSubmit,
    nameInputRef,
    usernameInputRef,
    emailInputRef,
    passwordInputRef,
  } = props

  const {
    isReadyToMoveForward,
    handleNameOnKeyUp,
    handleUsernameOnKeyUp,
    handleEmailOnKeyUp,
    handlePasswordOnKeyUp,
    handleRetypePasswordOnKeyUp,
  } = RegisterStepOneLogic(state.user)

  return (
    <form action='#' onSubmit={handleRegisterFormSubmit}>
      <div className='flex flex-nowrap justify-center my-4'>
        <input
          type='text'
          name='name'
          id='name'
          className='border-2 w-full rounded-md outline-none px-2 py-1 focus:border-0 focus:ring-4 focus:ring-indigo-500 focus:ring-opacity-50'
          placeholder='Nama'
          ref={nameInputRef}
          defaultValue={state.user.name}
          onKeyUp={handleNameOnKeyUp}
          required
        />
      </div>
      <div className='flex flex-nowrap justify-center my-4'>
        <input
          type='text'
          name='username'
          id='username'
          className='border-2 w-full rounded-md outline-none px-2 py-1 focus:border-0 focus:ring-4 focus:ring-indigo-500 focus:ring-opacity-50'
          placeholder='Username'
          ref={usernameInputRef}
          defaultValue={state.user.username}
          onKeyUp={handleUsernameOnKeyUp}
          required
        />
      </div>
      <div className='flex flex-nowrap justify-center my-4'>
        <input
          type='email'
          name='email'
          id='email'
          className='border-2 w-full rounded-md outline-none px-2 py-1 focus:border-0 focus:ring-4 focus:ring-indigo-500 focus:ring-opacity-50'
          placeholder='Email'
          ref={emailInputRef}
          defaultValue={state.user.email}
          onKeyUp={handleEmailOnKeyUp}
          required
        />
      </div>
      <div className='flex flex-nowrap justify-center my-4'>
        <input
          type='password'
          name='password'
          id='password'
          className='border-2 w-full rounded-md outline-none px-2 py-1 focus:border-0 focus:ring-4 focus:ring-indigo-500 focus:ring-opacity-50'
          placeholder='Password'
          ref={passwordInputRef}
          defaultValue={state.user.password}
          onKeyUp={handlePasswordOnKeyUp}
          required
        />
      </div>
      <div className='flex flex-nowrap justify-center my-4'>
        <input
          type='password'
          name='re-password'
          id='re-password'
          className='border-2 w-full rounded-md outline-none px-2 py-1 focus:border-0 focus:ring-4 focus:ring-indigo-500 focus:ring-opacity-50'
          placeholder='Re-type Password'
          onKeyUp={handleRetypePasswordOnKeyUp}
          required
        />
      </div>

      <div className='flex flex-nowrap justify-between'>
        <a href='/auth/login' className='px-5 py-1 text-blue-400'>
          Login
        </a>

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

export default RegisterStepOne
