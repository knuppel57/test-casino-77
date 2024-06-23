import { useWalletModal } from '@solana/wallet-adapter-react-ui'
import { GambaUi } from 'gamba-react-ui-v2'
import { useTransactionError } from 'gamba-react-v2'
import React from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import { Modal } from './components/Modal'
import { useToast } from './hooks/useToast'
import { useUserStore } from './hooks/useUserStore'
import Dashboard from './sections/Dashboard/Dashboard'
import Game from './sections/Game/Game'
import Header from './sections/Header'
import RecentPlays from './sections/RecentPlays/RecentPlays'
import Toasts from './sections/Toasts'
import { MainWrapper, TosInner, TosWrapper } from './styles'
import { TOS_HTML } from './constants'

function ScrollToTop() {
  const { pathname } = useLocation()
  React.useEffect(() => window.scrollTo(0, 0), [pathname])
  return null
}

function ErrorHandler() {
  const walletModal = useWalletModal()
  const toast = useToast()
  const [error, setError] = React.useState<Error>()

  useTransactionError(
    (error) => {
      if (error.message === 'NOT_CONNECTED') {
        walletModal.setVisible(true)
        return
      }
      toast({ title: '❌ Transaction error', description: error.error?.errorMessage ?? error.message })
    },
  )

  return (
    <>
      {error && (
        <Modal onClose={() => setError(undefined)}>
          <h1>Error occured</h1>
          <p>{error.message}</p>
        </Modal>
      )}
    </>
  )
}

export default function App() {
  const newcomer = useUserStore((state) => state.newcomer)
  const set = useUserStore((state) => state.set)
  return (
    <>
      {newcomer && (
        <Modal>
          <h1>Welcome</h1>
          <TosWrapper>
            <TosInner dangerouslySetInnerHTML={{ __html: TOS_HTML }} />
          </TosWrapper>
          <p>
            By playing on our platform, you confirm your compliance.
          </p>
          <GambaUi.Button main onClick={() => set({ newcomer: false })}>
            Acknowledge
          </GambaUi.Button>
        </Modal>
      )}
      <ScrollToTop />
      <ErrorHandler />
      <Header />
      <Toasts />
      <MainWrapper>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/:gameId" element={<Game />} />
        </Routes>
      <h2 style={{ textAlign: 'center' }}>Why so serious? $JOKE</h2>
        <h2 style={{ textAlign: 'center' }}></h2>
        <RecentPlays />       

<h1 style={{ textAlign: 'center' }}></h1>      
<h1 style={{ textAlign: 'center' }}></h1>      
<h1 style={{ textAlign: 'center' }}></h1>   
<h3 style={{ textAlign: 'center' }}> ~ In a market that’s in flames only one coin can rise. That’s the $JOKE ~</h3>
<h1 style={{ textAlign: 'center' }}></h1>      
<h1 style={{ textAlign: 'center' }}></h1>      
<h1 style={{ textAlign: 'center' }}></h1>         
<h1 style={{ textAlign: 'center' }}>Road map</h1>       
<h1 style={{ textAlign: 'center' }}></h1>  
        
<h2 style={{ textAlign: 'center' }}> Fase 1: Launch on pump.fun</h2>
<h3 style={{ textAlign: 'center' }}> Build community - Grow X account</h3>
<h3 style={{ textAlign: 'center' }}>  </h3>

<h2 style={{ textAlign: 'center' }}> Fase 2: Raydium </h2>
<h3 style={{ textAlign: 'center' }}> Grow community - Dex update - Grow organically </h3>
        
<h2 style={{ textAlign: 'center' }}> Fase 3: Listing - NFT</h2>
<h3 style={{ textAlign: 'center' }}> List $JOKE everywhere - Get partners for $JOKE and make their tokens playable in our casino </h3>

<h2 style={{ textAlign: 'center' }}> Fase 4: Profit sharing</h2>
<h3 style={{ textAlign: 'center' }}> Launch a NFT program for profit sharing of the casino income - moon </h3>
<h3 style={{ textAlign: 'center' }}>  </h3>

      </MainWrapper>
    </>
  )
}
