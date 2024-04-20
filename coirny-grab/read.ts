import * as Web3 from '@solana/web3.js'

async function main() {
    const pubKey = new Web3.PublicKey('CCLuijCJS5RPX1n6nznyQ4p4KM5CjusuFsK3DV7Tw5qQ') 
    const connection = new Web3.Connection(Web3.clusterApiUrl('mainnet-beta'))

    const accountInfo = await connection.getAccountInfo(pubKey)
    console.log('Account info ', accountInfo)
}

main()