import React, {Component,useState, useEffect} from 'react'
import "./home.css"
import { Link } from 'react-router-dom';
import Grid from '@material-ui/core/Grid'
import auth from './../auth/auth-helper'
import FindPeople from './../user/FindPeople'
import Newsfeed from './../post/Newsfeed'
import { makeStyles } from '@material-ui/core/styles'
import Menu from './../core/Menu'

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    margin: 30,
  },
  card: {
    maxWidth: 600,
    margin: 'auto',
    marginTop: theme.spacing(5),
    marginBottom: theme.spacing(5)
  },
  title: {
    padding:`${theme.spacing(3)}px ${theme.spacing(2.5)}px ${theme.spacing(2)}px`,
    color: theme.palette.text.secondary
  },
  media: {
    minHeight: 400
  },
  credit: {
    padding: 10,
    textAlign: 'right',
    backgroundColor: '#ededed',
    borderBottom: '1px solid #d0d0d0',
    '& a':{
      color: '#3f4771'
    } 
  }
}))

export default function Home({history}){
  const classes = useStyles()
  const [defaultPage, setDefaultPage] = useState(false)

  useEffect(()=> {
    setDefaultPage(auth.isAuthenticated())
    const unlisten = history.listen (() => {
      setDefaultPage(auth.isAuthenticated())
    })
    return () => {
      unlisten()
    }
  }, [])

    return (
      <div>
        { !defaultPage &&
          <div className="muck-up">
                     <div className="overlay"></div>
                     <div className="content">
                       <div className="logo">
                         <a href="#"><span></span></a>
                       </div>
                       <div className="header">
                         <h4>Ins<span>taB</span>ook</h4>
                         <p>Welcome to My Social App</p>
                       </div>
                       <div className="login">
                         <Link to="/signin" className="btn sign-in">Sign In</Link>
                         <Link to="/signup" className="btn sign-up">Sign Up</Link>
                       </div>
                     </div>
                  </div>
        }
        {defaultPage &&
          <div>
            <Menu></Menu>
          <div  className={classes.root}>
          <Grid container spacing={8}>
          <Grid item xs={6} sm={5}>
              <FindPeople/>
            </Grid>
            <Grid item xs={8} sm={7}>
              <Newsfeed/>
            </Grid>
          </Grid>
          </div> 
          </div>
        }
      </div>
    )
}