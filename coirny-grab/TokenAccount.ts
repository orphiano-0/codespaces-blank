import { createMint } from "@solana/spl-token"
import * as Web3 from "@solana/web3.js"
import * as token from "@solana/spl-token"
import { Connection, Keypair, clusterApiUrl } from "@solana/web3.js"
const bs58 = require("bs58")
import "dotenv/config"

async function main() {
    
    const connection = new Connection(clusterApiUrl("devnet"));
    const decoded = bs58.decode(process.env.PRIVATE_KEY ?? "");
    const myKeyPair = Keypair.fromSecretKey(decoded);

    const tokenAccount = await token.getAssociatedTokenAddress(
        new Web3.PublicKey(""), //mint
        new Web3.PublicKey(""), //owner
    )

    console.log('Token account: ', tokenAccount.toBase58)
}

main()