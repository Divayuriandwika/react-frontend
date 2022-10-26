import React from 'react'
import { Typography } from '@mui/material'
import makeStyles from '@mui/styles/makeStyles'

import styles from './styles'

const useStyles = makeStyles(styles)

const Home = () => {
  const classes = useStyles()
  return (
    <Typography className={classes.text}>
        Main Page
    </Typography>
  )
}

export default Home