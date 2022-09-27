import react, {useState,useEffect,createContext} from 'react'
import { ethers } from "ethers";
import { contractABI, contractAdress } from "../utils/constants";
import { MerkleTree } from 'merkletreejs';
import keccak256 from 'keccak256';
//Notifications
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
//FireBase
import {db} from '../Firebase';
import {
  collection,
  getDocs,
} from "firebase/firestore";


export const StateContext = createContext();
export const StateProvider= ({ children }) => {

    //Whitelisted
     const CollectionRef = collection(db, "whitelist");
     const [Whitelisted, setWhiteListed] = useState ([]);
    //States
     const [loading, setLoading] = useState(false);
     const [Pageloading, setPageLoading] = useState(false);
     const [currentAccount, setCurrentAccount]= useState();
     const [currentNetwork, setCurrentNetwork]= useState();
     const [currentAccountBalance, setCurrentAccountBalance] = useState();
     const [ContractInfo, setContractInfo] = useState(
       {
           PriceSale    : '-',
           PricePresale : '-',
           SaleStep     : '-',
           MaxSupply    : '-',
           TotalSupply  : '-'
       }
     )
     //useEffect
     useEffect(()=>{
         HandleWalletChange();
         HandleNetworkChange();
         updateWallet();
         GetInfo();
         GetProof();
       },[])


     //************||WALLET||**************/
      //HandleConnectWallet
      const HandleConnectWallet = async() =>{
        if(window.ethereum)
        {
          if(!currentAccount)
          {
             try{
                  const accounts_ = await window.ethereum.request({ method: "eth_requestAccounts" });
                  const chainId_  = await window.ethereum.request({ method: 'eth_chainId'});

                  setCurrentAccount(accounts_[0]);
                  setCurrentNetwork(chainId_);
                  GetInfo();
                  return 1;
             }
             catch(err)
             {
                  toast.error(err.message);
             }
          }
          else{
              toast.info('you are already connected! click on metamask if you would like to change the account.')
          }
          }
          else{
               toast.info('Please make sure you have metamask installed and connected !');
          }
        }
    //GetCurrentWallet
    const GetCurrentWallet = async() => {
      if (window.ethereum)
      {
        const CurrentAccounts_ = await window.ethereum.request({
          method: "eth_accounts",
        });
        return CurrentAccounts_[0];  
      }
    }
      //GetCurrentNetwork
      const GetCurrentNetwork_ = async() => {
        if (window.ethereum)
        {
          const CurrentNetwork_ = await window.ethereum.request({
            method: 'eth_chainId'
          });
          return CurrentNetwork_;  
        }
      }
    //updateWallet
    const updateWallet = async() =>{
      const res   = await GetCurrentWallet();
      const Chain = await GetCurrentNetwork_(); 
      setCurrentAccount(res);
      setCurrentNetwork(Chain);
    }
    //HandleWalletChange
    const HandleWalletChange = async ()=>{
     try{
      window.ethereum.on('accountsChanged', async(accounts) => {
        setCurrentAccount(await GetCurrentWallet());
      })
     }
     catch(err)
     {
       console.log(err);
     }
    }

    //HandleNetworkChange 
    const HandleNetworkChange = async ()=>{
      try{
        window.ethereum.on('chainChanged', (chainId) => {
         window.location.reload();
        });
      }
      catch(err)
      {
        console.log(err);
      }
     }
    /***********||END WALLET||************/

    //************||Mint||*************/
    const Mint_ = async(counter) =>{
      if(typeof window.ethereum !=='undefined')
      {
           if(currentAccount)
           {
            const provider = new ethers.providers.Web3Provider(window.ethereum);
            const signer = provider.getSigner();
            const Base = new ethers.Contract(contractAdress, contractABI, signer);            

            let Ammount = counter;
            let overrides = {
              value: ContractInfo.PriceSale.mul(ethers.BigNumber.from(Ammount)),
              from:  currentAccount,
            }
            try{
                const Transaction = await Base.saleMint(currentAccount, Ammount, overrides);
                setLoading(true);
                await Transaction.wait();
                UpdateInfo();
                setLoading(false);
                toast.success('Minted');
            }
            catch(error)
            {
               if(typeof error === 'object')
               {
                   // Support any type of error from the Web3 Provider...
                      if (error?.error?.message !== undefined) {
                        toast.info(error.error.message);
                      } else if (error?.data?.message !== undefined) {
                        toast.info(error.data.message);
                      } else if (error?.message !== undefined) {
                        toast.info(error.message);
                      }
               }
            }
           }
           else{
               toast.info('Connect your wallet First!');
           }
      }
      else{
          toast.info('Please make sure you have metamask installed and connected !');
      }
    }
   /*************||EndMint||***************/
  //  const getWhiteListed = async () => {
  //   const res = await getDocs(CollectionRef);
  //   const WhiteListed = [];
  //   res.forEach((doc) => {
  //     WhiteListed.push(doc.data().address);
  //   });
  //   return WhiteListed;
  //   }


  const GetProof = async() =>{
    const whitelistAddresses =[
      '0x552f8e72aEE9f8f06e0Bf0613984d17D8b3f6095',
      '0x552f8e72aEE9f8f06e0Bf0613984d17D8b3f1244'
    ];
    const leaves = whitelistAddresses.map((address) => keccak256(address));
    const tree = new MerkleTree(leaves, keccak256, { sort: true });
    const root = tree.getHexRoot();

    const Addr = await GetCurrentWallet();
    const leaf = keccak256(Addr);
    const proof = tree.getHexProof(leaf);
    
    console.log("the root is : "+ root);
    return proof;
   }


  //************||PreSaleMint||*************/
     const PreSaleMint = async(counter) =>{
      if(typeof window.ethereum !=='undefined')
      {
       const provider = new ethers.providers.Web3Provider(window.ethereum);
       const signer = provider.getSigner();
       const Base = new ethers.Contract(contractAdress, contractABI, signer);
       const proof = await GetProof();

       let Ammount = counter;

       let overrides = {
         value: ContractInfo.PricePresale.mul(ethers.BigNumber.from(Ammount)),
         from:  currentAccount
       }
       try{
           const Transaction = await Base.presaleMint(currentAccount,Ammount, proof,overrides);
           setLoading(true);
           await Transaction.wait();
           toast.success('Minted');
           setLoading(false);
           UpdateInfo();
       }
       catch(error)
       {
        if(typeof error === 'object')
        {
            // Support any type of error from the Web3 Provider...
               if (error?.error?.message !== undefined) {
                 toast.info(error.error.message);
               } else if (error?.data?.message !== undefined) {
                 toast.info(error.data.message);
               } else if (error?.message !== undefined) {
                 toast.info(error.message);
               }

               console.log(error.message)
        }
       }
      }
      else{
          toast.info('Please make sure you have metamask installed and connected !');
      }
   }
   /*************||EndPreSaleMint||************   


   /************||GetInfo||***************/
   const GetInfo = async() =>{
      setPageLoading(true);
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();
      const Base = new ethers.Contract(contractAdress, contractABI, signer);

        let Price_        = await Base.priceSale();
        let PricePresale_ = await Base.pricePresale();
        let SaleStep_     = await Base.sellingStep();
        let MaxSupply_    = await Base.MAX_SUPPLY();
        let TotalSupply_  = await Base.totalSupply();
        
      setContractInfo(
         {
          PriceSale    : Price_,
          PricePresale : PricePresale_,
          SaleStep     : SaleStep_,
          MaxSupply    : MaxSupply_,
          TotalSupply  : TotalSupply_
         }
      )
      setPageLoading(false);
   }

   const UpdateInfo = async()=>{
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();
    const Base = new ethers.Contract(contractAdress, contractABI, signer);

    let Price_        = await Base.priceSale();
    let PricePresale_ = await Base.pricePresale();
    let SaleStep_     = await Base.sellingStep();
    let MaxSupply_    = await Base.MAX_SUPPLY();
    let TotalSupply_  = await Base.totalSupply();
    
  setContractInfo(
     {
      PriceSale    : Price_,
      PricePresale : PricePresale_,
      SaleStep     : SaleStep_,
      MaxSupply    : MaxSupply_,
      TotalSupply  : TotalSupply_
     }
  )
   }

   /**********||EndGetInfo||***************/
    return(
        <StateContext.Provider
        value={{
            HandleConnectWallet,
            Mint_,
            PreSaleMint,
            setWhiteListed,
            Whitelisted,
            ContractInfo,
            currentAccount,
            currentAccountBalance,
            currentNetwork,
            loading,
            Pageloading
        }}
        >
            {children}
        </StateContext.Provider>
    );
}