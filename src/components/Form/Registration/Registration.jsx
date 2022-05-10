import React from 'react'
import { useForm } from 'react-hook-form'
import styles from './Registration.module.scss'

const Registration = (props) => {
  const {
    register,
    formState: { errors, isValid },
    handleSubmit,
    reset
  } = useForm({
    mode: 'onBlur'
  })

  const onSubmit = (data) => {
    alert(JSON.stringify(data))
    reset()
  }
  return (<div>
      <h1 className={styles.title}>Регистрация</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="">
          Логин:
          <input className={styles.login} type="text"
                 placeholder="login"
                 {...register('login', {
                   required: 'Поле обязательное к заполнению',
                   minLength: {
                     value: 5,
                     message: 'Логин должен иметь минимум 5 символов'
                   },
                 })}/>
        </label>
        <div style={{ height: '40' }}>
          {errors?.login && <p>{errors?.login?.message || 'Error!!!'}</p>}
        </div>
        <label htmlFor="">
          Пароль:
          <input className={styles.password} type="password"
                 placeholder="password"
                 {...register('password', {
                   required: 'Поле обязательное к заполнению',
                   minLength: {
                     value: 8,
                     message: 'Пароль должен иметь не менее 8 символов'
                   },
                 })}/>
        </label>
        <div style={{ height: '40' }}>
          {errors?.password && <p>{errors?.password?.message || 'Error!!!'}</p>}
        </div>
        <button type="submit" disabled={!isValid} className={!isValid ? '' : styles.active}>Регистрация</button>
      </form>
    </div>
  )

}

export default Registration