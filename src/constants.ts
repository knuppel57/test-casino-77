import { PublicKey } from '@solana/web3.js'
import { FAKE_TOKEN_MINT, PoolToken, TokenMeta, makeHeliusTokenFetcher } from 'gamba-react-ui-v2'

// Get RPC from the .env file or default to the public RPC.
export const RPC_ENDPOINT = import.meta.env.VITE_RPC_ENDPOINT ?? 'https://mainnet.helius-rpc.com/?api-key=62362705-e7eb-4a76-9a82-df7e329e2d40'

// Solana address that will receive fees when somebody plays on this platform
export const PLATFORM_CREATOR_ADDRESS = new PublicKey(
  '98a9hKosmLTtS3Bg4HSTHRewbR5MS4xREJPr7BrhUp4',
)

// Gamba explorer URL - Appears in RecentPlays
export const EXPLORER_URL = 'https://explorer.gamba.so'

// Platform URL - Appears in ShareModal
export const PLATFORM_SHARABLE_URL = 'play.gamba.so'

// Creator fee (in %)
export const PLATFORM_CREATOR_FEE = 0.031 // 1% (1/100 = 0.01)  !!max 5%!!

// Jackpot fee (in %)
export const PLATFORM_JACKPOT_FEE = 0.001 // 0.1% (0.1/100 = 0.001)

// Just a helper function
const lp = (tokenMint: PublicKey | string, poolAuthority?: PublicKey | string): PoolToken => ({
  token: new PublicKey(tokenMint),
  authority: poolAuthority !== undefined ? new PublicKey(poolAuthority) : undefined,
})

/**
 * List of pools supported by this platform
 * Make sure the token you want to list has a corresponding pool on https://explorer.gamba.so/pools
 * For private pools, add the creator of the Liquidity Pool as a second argument
 */
export const POOLS = [
  // Fake token:
  lp(FAKE_TOKEN_MINT),
  // SOL:
  lp('So11111111111111111111111111111111111111112'),
  // USDC:
  lp('EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v'),
  // Wormhole:
  lp('85VBFQZC9TZkfaptBWjvUw7YbZjy52A6mjtPGjstQAmQ'),
]

// The default token to be selected
export const DEFAULT_POOL = POOLS[0]

/**
 * List of token metadata for the supported tokens
 * Alternatively, we can provide a fetcher method to automatically fetch metdata. See TOKEN_METADATA_FETCHER below.
 */
export const TOKEN_METADATA: (Partial<TokenMeta> & {mint: PublicKey})[] = [
  {
    mint: FAKE_TOKEN_MINT,
    name: 'Fake',
    symbol: 'FAKE',
    image: '/fakemoney.png',
    baseWager: 1e9,
    decimals: 9,
    usdPrice: 0,
  },
  {
    mint: new PublicKey('85VBFQZC9TZkfaptBWjvUw7YbZjy52A6mjtPGjstQAmQ'),
    name: 'W',
    symbol: 'Wormhole',
    image: 'https://wormhole.com/token.png',
    baseWager: 1e6,
    decimals: 6,
    usdPrice: 0,
  },
]

/** HTML to display to user that they need to accept in order to continue */
export const TOS_HTML = `
<p><b>1. Age Requirement:</b> Only those 18 years and older can play in this perilous playground.</p>
<p><b>2. Legal Compliance:</b> Abide by your local laws, lest you find yourself on the wrong side of the law, ha!</p>
<p><b>3. Risk Acknowledgement:</b> These games are a gamble, my friends. No guaranteed winnings here, just the thrill of the risk!</p>
<p><b>4. No Warranty:</b> Our games come "as is," operating randomly, like a chaotic carnival of chance!</p>
<p><b>5. Limitation of Liability:</b> We're not liable for any damages. Play at your own peril, ha ha ha!</p>
<p><b>6. Licensing Disclaimer:</b> This isn’t a licensed casino, just a simulation of the splendid chaos!</p>
<p><b>7. Fair Play:</b> Rest assured, our games are conducted fairly and transparently, no tricks up our sleeves.</p>
<p><b>8. Data Privacy:</b> Your secrets are safe with us. We value your privacy!</p>
<p><b>9. Responsible Gaming:</b> Play responsibly, my dear players. If the fun turns foul, seek help.</p>
`

/**
 * A method for automatically fetching Token Metadata.
 * Here we create a fetcher that uses Helius metadata API, if an API key exists as an environment variable.
 */
export const TOKEN_METADATA_FETCHER = (
  () => {
    if (import.meta.env.VITE_HELIUS_API_KEY) {
      return makeHeliusTokenFetcher(
        import.meta.env.VITE_HELIUS_API_KEY,
        { dollarBaseWager: 1 },
      )
    }
  }
)()
