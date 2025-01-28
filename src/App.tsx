import { ethers } from 'ethers'
import { useState } from 'react'
import { MetamaskLogo } from './components/MetamaskLogo'

import ABI from './abi.json'

const CONTRACT_ADDRESS = '0x1A07BF27b81528cBA1582a3de001E50aEB45F009'

function App() {
  const [message, setMessage] = useState('')

  async function btnConnectClick() {
    if (!window.ethereum) return setMessage('No MetaMask found!')

    const provider = new ethers.BrowserProvider(window.ethereum)
    const accounts = await provider.send('eth_requestAccounts', [])
    if (!accounts || !accounts.length) return setMessage('Wallet not found/allowed!')

    try {
      const signer = await provider.getSigner()
      const contract = new ethers.Contract(CONTRACT_ADDRESS, ABI, signer)
      const tx = await contract.withdraw()
      setMessage('Withdrawing Cristal coins... Wait...')
      await tx.wait()
      setMessage('Tx: ' + tx.hash)
    } catch (err) {
      console.log(err)
      setMessage((err as Error).message)
    }
  }

  return (
    <div className="bg- flex h-screen flex-col bg-white p-4 dark:bg-gray-800">
      <header className="flex items-center justify-between">
        <span className="text-gray-900 dark:text-white">Cristal Faucet</span>
      </header>

      <main className="m-auto flex flex-col items-center gap-4 text-center">
        <h1 className="text-6xl font-medium tracking-tight text-gray-900 dark:text-white">Get your Cristal coins!</h1>
        <p className="text-2xl text-gray-500 dark:text-gray-400">
          Once a week, earn 0.1 coins for free just connecting your MetaMask below.
        </p>

        <button
          type="button"
          className="flex cursor-pointer items-center gap-1 rounded-md bg-white px-4 py-2 text-gray-900 hover:bg-amber-500 dark:text-gray-900"
          onClick={btnConnectClick}
        >
          <MetamaskLogo />
          <span className="text-base text-gray-500 dark:text-gray-900">Connect MetaMask</span>
        </button>
        <p className="text-gray-500 dark:text-gray-400">{message}</p>
      </main>
    </div>
  )
}

export default App
