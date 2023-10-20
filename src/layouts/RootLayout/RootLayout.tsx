import styles from './RootLayout.module.css'
import { Footer } from '../../components/Footer/Footer'
import { Header } from '../../components/Header/Header'
import { Outlet } from 'react-router-dom'
import { Container } from '@mui/material'

const RoootLayout = () => {
  return (
    <div className={ styles.layout }>
      <Header />
      <main className={ styles.main }>
        <Container>
          <Outlet />
        </Container>
      </main>
      <Footer />
    </div>
  )
}

export { RoootLayout }