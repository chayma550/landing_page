import React, { Fragment } from 'react'
import Landing from '../components/Landing'
import Features from '../components/Features'
import Stayproductive from "../components/StayProductive"
import Testmonials from '../components/Testmonials'
import GetStarted from '../components/GetStarted'

export default function Home() {
  return (
    <Fragment>
<Landing/>
<Features/>
<Stayproductive/>
<Testmonials/>
<GetStarted/>

      </Fragment>
  )
}
