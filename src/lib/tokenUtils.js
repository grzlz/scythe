import { ethers } from 'ethers';

// Scythe token contract details
export const SCYTHE_CONTRACT_ADDRESS = '0x5441a41576464C6346aE4F7c5085A973358Ad69e';

// Basic ERC-20 ABI for token interactions
const ERC20_ABI = [
  'function balanceOf(address owner) view returns (uint256)',
  'function decimals() view returns (uint8)',
  'function symbol() view returns (string)',
  'function name() view returns (string)',
  'function transfer(address to, uint256 amount) returns (bool)',
  'function allowance(address owner, address spender) view returns (uint256)',
  'function approve(address spender, uint256 amount) returns (bool)'
];

export async function getTokenBalance(walletAddress) {
  if (!window.ethereum) {
    throw new Error('MetaMask not found');
  }

  try {
    const provider = new ethers.BrowserProvider(window.ethereum);
    const contract = new ethers.Contract(SCYTHE_CONTRACT_ADDRESS, ERC20_ABI, provider);

    const balance = await contract.balanceOf(walletAddress);
    const decimals = await contract.decimals();

    // Format balance with proper decimals
    return ethers.formatUnits(balance, decimals);
  } catch (error) {
    throw new Error(`Failed to fetch token balance: ${error.message}`);
  }
}

export async function getTokenInfo() {
  if (!window.ethereum) {
    throw new Error('MetaMask not found');
  }

  try {
    const provider = new ethers.BrowserProvider(window.ethereum);
    const contract = new ethers.Contract(SCYTHE_CONTRACT_ADDRESS, ERC20_ABI, provider);

    const [name, symbol, decimals] = await Promise.all([
      contract.name(),
      contract.symbol(),
      contract.decimals()
    ]);

    return { name, symbol, decimals: Number(decimals) };
  } catch (error) {
    throw new Error(`Failed to fetch token info: ${error.message}`);
  }
}