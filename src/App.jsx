import { React } from 'react'
import { Image } from '@chakra-ui/react'
import { Routes, Route} from 'react-router-dom'

import { LaunchList } from './components/LaunchList'
import { LaunchDetail } from './components/LaunchDetail'
import logo from './assets/spacex-logo.png'

export function App() {

  return (
    <>
      <Image m={4} src={ logo } alt="logo space-x" width={300} />
      <Routes>
        <Route path='/' element={<LaunchList/>} />
        <Route path='launch/:launchId' element={<LaunchDetail/>} />
      </Routes>
    </>
  )

}