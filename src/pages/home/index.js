import React, { useCallback, useMemo } from 'react'
import { useForm  } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
// import { Typography } from '@mui/material'
// import makeStyles from '@mui/styles/makeStyles'

import Form from '../../components/form'

// import styles from './styles'
import schema from './schema'
import { Button } from '@mui/material'

// const useStyles = makeStyles(styles)

const Home = () => {
  const {
    control,
    handleSubmit,
    // formState: { errors },
    // reset,
    // setValue,
  } = useForm({
    resolver: yupResolver(schema),
  })

  const formData = useMemo(() => {
    return [
      {
        title: 'Nama',
        name: 'name',
        // errorMessage: errors?.name?.message,
      },
      {
        title: 'Email',
        name: 'email',
        // errorMessage: errors?.email?.message,
      },
      {
        title: 'Tanggal Lahir',
        name: 'birthDate',
        // errorMessage: errors?.phoneNumber?.message,
      },
    ]
  }, [])

  const onSubmit = useCallback((data => console.log(data)), [])
  // const classes = useStyles()
  return (
    <>
      {formData.map((item) => {
        return (
          <Form
            key={item.name}
            title={item.title}
            name={item.name}
            control={control}
          />
        )
      })}
      {/* <Controller
        defaultValue=""
        render={({
          field,
          fieldState: { error },
        }) => (
          <FormControl>
            <InputLabel>Gender</InputLabel>
            <RadioGroup
              aria-labelledby="demo-radio-buttons-group-label"
              defaultValue="female"
              name="radio-buttons-group"
            >
              <FormControlLabel value="female" control={<Radio />} label="Female" />
              <FormControlLabel value="male" control={<Radio />} label="Male" />
              <FormControlLabel value="other" control={<Radio />} label="Other" />
            </RadioGroup>
          </FormControl>
        )}
        name={name}
        control={control}
        rules={{ required: true }}
      /> */}
      <Button
        variant="outlined"
        onClick={handleSubmit(onSubmit)}
      >
        Submit
      </Button>
    </>
  )
}

export default Home