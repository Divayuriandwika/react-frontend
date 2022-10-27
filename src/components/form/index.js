import React, { memo } from 'react'
import PropTypes from 'prop-types'
import { Controller } from 'react-hook-form'

import { InputLabel, FormControl, TextField } from '@mui/material'

const Form = ({
  title,
  name,
  control,
}) => {
  return (
    <>
      <InputLabel required>
        {title}
      </InputLabel>
      <Controller
        defaultValue=""
        render={({
          field,
          fieldState: { error },
        }) => (
          <FormControl fullWidth>
            <TextField
              {...field}
              placeholder={title}
              variant="outlined"
              size="small"
              //   className={classes.input}
              helperText={error?.message}
              error={!!error?.message}
            />
          </FormControl>
        )}
        name={name}
        control={control}
        rules={{ required: true }}
      />
    </>
  )
}

Form.propTypes = {
  title: PropTypes.string,
  name: PropTypes.string,
  control: PropTypes.object,
}

export default memo(Form)