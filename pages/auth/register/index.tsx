import type { NextPage } from 'next'
import React from 'react'

import RegisterStepOne from '../../../components/RegisterStepOne/RegisterStepOne'
import RegisterStepThreeStudent from '../../../components/RegisterStepThreeStudent/RegisterStepThreeStudent'
import RegisterStepThreeTeacher from '../../../components/RegisterStepThreeTeacher/RegisterStepThreeTeacher'
import RegisterStepTwo from '../../../components/RegisterStepTwo/RegisterStepTwo'
import RegisterLogic, { USER_STATUS } from './logic'

const Register: NextPage = () => {
  const {
    state,
    nameInputRef,
    usernameInputRef,
    emailInputRef,
    passwordInputRef,
    statusInputRef,
    nisnInputRef,
    nikInputRef,
    phoneInputRef,
    handleRegisterFormOnSubmit,
    prevStep,
  } = RegisterLogic()

  const form =
    state.step === 0 ? (
      <RegisterStepOne
        state={state}
        nameInputRef={nameInputRef}
        usernameInputRef={usernameInputRef}
        emailInputRef={emailInputRef}
        passwordInputRef={passwordInputRef}
        handleRegisterFormSubmit={handleRegisterFormOnSubmit}
      />
    ) : state.step === 1 ? (
      <RegisterStepTwo
        state={state}
        prevStep={prevStep}
        statusInputRef={statusInputRef}
        handleRegisterFormSubmit={handleRegisterFormOnSubmit}
      />
    ) : state.step === 2 && state.user.status === USER_STATUS.STUDENT ? (
      <RegisterStepThreeStudent
        state={state}
        prevStep={prevStep}
        handleRegisterFormSubmit={handleRegisterFormOnSubmit}
        nisnInputRef={nisnInputRef}
        phoneInputRef={phoneInputRef}
      />
    ) : state.step === 2 && state.user.status === USER_STATUS.TEACHER ? (
      <RegisterStepThreeTeacher
        state={state}
        prevStep={prevStep}
        handleRegisterFormSubmit={handleRegisterFormOnSubmit}
        nikInputRef={nikInputRef}
        phoneInputRef={phoneInputRef}
      />
    ) : (
      <></>
    )

  return (
    <div className='flex flex-nowrap justify-center h-screen w-screen p-4'>
      <div className='container h-full w-full'>
        <div className='mx-auto w-4/5 p-4'>
          <img
            src='/assets/img/logo.png'
            width='192'
            height='192'
            className='object-cover mx-auto'
          />
          <h1
            className='text-center font-semibold uppercase tracking-wider mb-6'
            style={{ fontSize: '24px' }}
          >
            Register
          </h1>
          {form}
        </div>
      </div>
    </div>
  )
}

export default Register
