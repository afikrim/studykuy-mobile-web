import React, { Reducer, useReducer, useRef, useState } from 'react'

export enum USER_STATUS {
  TEACHER = 'teacher',
  STUDENT = 'student',
}

enum REGISTER_ACTIONS {
  SET_STEP = 'set-step',
  SET_FIRST_STEP = 'set-first-step',
  SET_SECOND_STEP = 'set-second-step',
  SET_THIRD_STEP = 'set-third-step',
}

export interface RegisterState {
  step: number
  user: {
    name?: string
    username?: string
    email?: string
    password?: string
    status?: USER_STATUS
    nik?: string
    nisn?: string
    phone?: string
  }
}

interface RegisterAction {
  action: REGISTER_ACTIONS
  value: any
}

const initialState: RegisterState = {
  step: 0,
  user: {},
}

const reducer: Reducer<RegisterState, RegisterAction> = (
  state: RegisterState,
  { action, value }: RegisterAction
) => {
  switch (action) {
    case REGISTER_ACTIONS.SET_STEP:
      return { ...state, step: value }
    case REGISTER_ACTIONS.SET_FIRST_STEP:
      return {
        ...state,
        user: {
          ...state.user,
          name: value.name,
          username: value.username,
          email: value.email,
          password: value.password,
        },
      }
    case REGISTER_ACTIONS.SET_SECOND_STEP:
      return {
        ...state,
        user: {
          ...state.user,
          status: value,
        },
      }
    case REGISTER_ACTIONS.SET_THIRD_STEP:
      return {
        ...state,
        user: {
          ...state.user,
          nik: value.nik,
          nisn: value.nisn,
          phone: value.phone,
        },
      }
    default:
      return state
  }
}

const RegisterLogic = () => {
  const [state, dispatch] = useReducer(reducer, initialState)

  const nameInputRef = useRef<HTMLInputElement>(null)
  const usernameInputRef = useRef<HTMLInputElement>(null)
  const emailInputRef = useRef<HTMLInputElement>(null)
  const passwordInputRef = useRef<HTMLInputElement>(null)
  const statusInputRef = useRef<HTMLInputElement>(null)
  const nisnInputRef = useRef<HTMLInputElement>(null)
  const nikInputRef = useRef<HTMLInputElement>(null)
  const phoneInputRef = useRef<HTMLInputElement>(null)

  const setRegisterFirstStep = (
    name: string,
    username: string,
    email: string,
    password: string
  ) => {
    dispatch({
      action: REGISTER_ACTIONS.SET_FIRST_STEP,
      value: {
        name: name,
        username: username,
        email: email,
        password: password,
      },
    })
  }

  const setRegisterSecondStep = (status: USER_STATUS) => {
    dispatch({
      action: REGISTER_ACTIONS.SET_SECOND_STEP,
      value: status,
    })
  }

  const setRegisterThirdStep = (phone: string, nisn?: string, nik?: string) => {
    dispatch({
      action: REGISTER_ACTIONS.SET_THIRD_STEP,
      value: {
        phone: phone,
        nisn: nisn,
        nik: nik,
      },
    })
  }

  const nextStep = () => {
    if (state.step < 3)
      dispatch({ action: REGISTER_ACTIONS.SET_STEP, value: state.step + 1 })
  }

  const prevStep = () => {
    if (state.step > 0)
      dispatch({ action: REGISTER_ACTIONS.SET_STEP, value: state.step - 1 })
  }

  const handleStepSubmit = (step: number) => {
    switch (step) {
      case 0:
        const name = nameInputRef.current?.value
        const username = usernameInputRef.current?.value
        const email = emailInputRef.current?.value
        const password = passwordInputRef.current?.value
        if (
          name === undefined ||
          username === undefined ||
          email === undefined ||
          password === undefined
        ) {
          break
        }

        setRegisterFirstStep(name, username, email, password)
        nextStep()
        break
      case 1:
        const status = statusInputRef.current?.value
        if (!status) break

        setRegisterSecondStep(status as USER_STATUS)
        nextStep()
        break
      case 2:
        const nisn = nisnInputRef.current?.value
        const nik = nikInputRef.current?.value
        const phone = phoneInputRef.current?.value
        if (phone === undefined) break
        if (status === USER_STATUS.STUDENT && nisn === undefined) break
        if (status === USER_STATUS.TEACHER && nik === undefined) break

        setRegisterThirdStep(phone, nisn, nik)
        break
    }
  }

  const handleRegisterFormOnSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    handleStepSubmit(state.step)
  }

  return {
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
    nextStep,
    prevStep,
  }
}

export default RegisterLogic
