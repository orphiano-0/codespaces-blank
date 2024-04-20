import { createMint } from "@solana/spl-token"
import { Connection, Keypair, clusterApiUrl } from "@solana/web3.js"
import bs58 from "bs58"
import "dotenv/config"

const main = async () => {

    const connection = new Connection(clusterApiUrl("devnet"));

    const decoded = bs58.decode(process.env.PRIVATE_KEY ?? "");
    const myKeyPair = Keypair.fromSecretKey(decoded);

    // 1. Create Mint (A new crypto coin)
    const mint = await createMint(connection, myKeyPair, myKeyPair.publicKey, myKeyPair.publicKey, 6);
    console.log(mint);


    // 2. Creating ATA (Identity inside the blockchain) - Wallet
    // 3. Minting To
}

main()

