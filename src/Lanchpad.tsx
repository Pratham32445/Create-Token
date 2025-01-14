import { useWallet } from "@solana/wallet-adapter-react";
import {createMint, getMinimumBalanceForRentExemptMint, } from "@solana/spl-token"
import {
  WalletDisconnectButton,
  WalletMultiButton,
} from "@solana/wallet-adapter-react-ui"; 

const Lanchpad = () => {
  const wallet = useWallet();
  const createToken = async () => {
    const lamports = await getMinimumBalanceForRentExemptMint(connection);
  }
  return (
    <div>
      <div className="flex justify-between p-4 absolute w-full">
        <div></div>
        <div>
          {wallet.publicKey ? (
            <WalletDisconnectButton />
          ) : (
            <WalletMultiButton />
          )}
        </div>
      </div>
      <div className="w-full min-h-screen bg-neutral-900 flex justify-center items-center">
        <div>
          <div>
            <p className="text-white text-4xl">Solana Token LaunchPad</p>
            <div>
              <input
                placeholder="Name"
                className="block p-4 w-full bg-neutral-700 my-4 text-white"
              />
              <input
                placeholder="Symbol"
                className="block p-4 w-full bg-neutral-700 my-4 text-white"
              />
              <input
                placeholder="Image Url"
                className="block p-4 w-full bg-neutral-700 my-4 text-white"
              />
              <input
                placeholder="Initial Supply"
                className="block p-4 w-full bg-neutral-700 my-4 text-white"
              />
              <div className="flex justify-center">
                <button onClick={createToken} className="bg-black p-4 text-white">
                  Create Token
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Lanchpad;
