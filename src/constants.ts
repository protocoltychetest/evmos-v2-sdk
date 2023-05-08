import JSBI from 'jsbi'
import {ChainId} from "@uniswap/sdk-core";

export const FACTORY_ADDRESS: {[key: number]: string} = {
    // [ChainId.EVMOS]: '0x1279aF64A33138792395B16832F9C0fa6F068FCa',
    [ChainId.EVMOS_TESTNET]: '0x1279aF64A33138792395B16832F9C0fa6F068FCa',
    [ChainId.ZKSYNC_TESTNET]: '0x59E5Dd8C2252250d643D010ba438327e7c430FA3',
} // Tyche Factory on TestNet of EVMOS

export const INIT_CODE_HASH = '0x2be903b0269b1a1dc2aab081cb7198ec282d010df1d848f2e8d54ee4ceda4eba'

export const MINIMUM_LIQUIDITY = JSBI.BigInt(1000)

// exports for internal consumption
export const ZERO = JSBI.BigInt(0)
export const ONE = JSBI.BigInt(1)
export const FIVE = JSBI.BigInt(5)
export const _997 = JSBI.BigInt(997)
export const _1000 = JSBI.BigInt(1000)