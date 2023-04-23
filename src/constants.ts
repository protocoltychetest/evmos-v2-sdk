import JSBI from 'jsbi'
import {ChainId} from "@uniswap/sdk-core";

export const FACTORY_ADDRESS: {[key: number]: string} = {
    // [ChainId.EVMOS]: '0x1279aF64A33138792395B16832F9C0fa6F068FCa',
    [ChainId.EVMOS_TESTNET]: '0x1279aF64A33138792395B16832F9C0fa6F068FCa',
    [ChainId.ZKSYNC_TESTNET]: '0x59E5Dd8C2252250d643D010ba438327e7c430FA3',
} // Tyche Factory on TestNet of EVMOS

export const INIT_CODE_HASH = '0xd1c22c9265a6b299435d450062fe36d684a63bd3c86362640d444d20b3f90701'

export const MINIMUM_LIQUIDITY = JSBI.BigInt(1000)

// exports for internal consumption
export const ZERO = JSBI.BigInt(0)
export const ONE = JSBI.BigInt(1)
export const FIVE = JSBI.BigInt(5)
export const _997 = JSBI.BigInt(997)
export const _1000 = JSBI.BigInt(1000)