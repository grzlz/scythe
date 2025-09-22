export async function connectWallet() {
  if (!window.ethereum) {
    throw new Error('MetaMask or compatible wallet not found');
  }

  try {
    const accounts = await window.ethereum.request({
      method: 'eth_requestAccounts'
    });

    return accounts[0];
  } catch (error) {
    throw new Error(`Failed to connect wallet: ${error.message}`);
  }
}

export async function signMessage(message) {
  if (!window.ethereum) {
    throw new Error('MetaMask or compatible wallet not found');
  }

  try {
    const accounts = await window.ethereum.request({
      method: 'eth_accounts'
    });

    if (!accounts.length) {
      throw new Error('No wallet connected');
    }

    const signature = await window.ethereum.request({
      method: 'personal_sign',
      params: [message, accounts[0]]
    });

    return { signature, address: accounts[0] };
  } catch (error) {
    throw new Error(`Failed to sign message: ${error.message}`);
  }
}

export function isWalletAvailable() {
  return typeof window !== 'undefined' && !!window.ethereum;
}