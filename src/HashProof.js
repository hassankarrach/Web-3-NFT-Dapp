import { MerkleTree } from 'merkletreejs';
import keccak256 from 'keccak256';

  let whitelistAddresses = [
    "0x552f8e72aEE9f8f06e0Bf0613984d17D8b3f6095",
    "0x1adcf51858Bb23020aa70f814f5E88E2E1184FBc",
    "0x6D5766810bF48A748586542429bD6F63Ab938434",
    "0x78731D3Ca6b7E34aC0F824c42a7cC18A495cabaB"
  ];


  const leaves = whitelistAddresses.map((address) => keccak256(address));
  const tree = new MerkleTree(leaves, keccak256, { sort: true });
  const root = tree.getHexRoot();
  const leaf = keccak256("0x552f8e72aEE9f8f06e0Bf0613984d17D8b3f6095");
  const proof = tree.getHexProof(leaf);



console.log(proof);





