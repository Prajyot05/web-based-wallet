import { useState } from 'react'
import './App.css'
import { generateMnemonic } from "bip39";
import { SolanaWallet } from './components/SolanaWallet';
import { EthWallet } from './components/EthWallet';

function App() {
  const [mnemonic, setMnemonic] = useState("");
  return (
    <main>
    <h1>Web Based Wallet</h1>
    <div className="create-wallet">
      <button className='button-30' onClick={async function() {
        const mn = await generateMnemonic();
        setMnemonic(mn)
      }}>
        Create Seed Phrase
      </button>
      <input type="text" value={mnemonic}></input>
    </div>
    <div className="wallets">
      <SolanaWallet />
      <EthWallet />
    </div>
    </main>
  )
}

export default App