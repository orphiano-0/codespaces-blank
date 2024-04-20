import 'dotenv/config'
import * as Web3 from '@solana/web3.js'
import { Connection, Keypair, clusterApiUrl } from '@solana/web3.js'
import bs58 from 'bs58';

async function main() {
    
    
    const decoded = bs58.decode(process.env.PRIVATE_KEY ?? "");
    const myKeyPair = Web3.Keypair.fromSecretKey(decoded)

    console.log('Public key ', myKeyPair.publicKey)
    
    const publicKeyFrom = new Web3.PublicKey('6e8Dh1yDZXytnTDYQtZzniWgFNRQTKHbNrR2bXTLqr2n')
    const publicKeyTo = new Web3.PublicKey('CCLuijCJS5RPX1n6nznyQ4p4KM5CjusuFsK3DV7Tw5qQ')

    const instruction = Web3.SystemProgram.transfer({
        fromPubkey: publicKeyFrom,
        toPubkey: publicKeyTo,
        lamports: 10000000000
    })

    const transaction = new Web3.Transaction()
    transaction.add(transaction)

    const connection = new Connection(clusterApiUrl("devnet"), {commitment: "confirmed"})
    const txSignature = await Web3.sendAndConfirmTransaction(connection, transaction, [myKeyPair])

    console.log('txHash ', txSignature)
}
main()