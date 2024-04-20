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

    const mintToken = await token.mintTo(
        connection,
        myKeyPair,    
        new Web3.PublicKey(""), //mint account
        new Web3.PublicKey(""), //owner
        new Web3.PublicKey(""), //authority
        70 * Web3.LAMPORTS_PER_SOL,
    )
    console.log('mint Token', mintToken)
}
main()