// components/Surprise.js
import { useParams } from 'react-router-dom';
import React, { useState, useRef, useEffect } from 'react';
import { Web3Button } from "@thirdweb-dev/react";
import { addWant, donateFund, getAccumulatedList, getAccumulatedUserList, getWantList, getWithdrawInfo } from '../../utils/index';

import { useContractWrite, useContract, useContractRead, useNFT, ThirdwebNftMedia } from "@thirdweb-dev/react";
import NavBar from 'components/NavBar';
import NFT from './nft';

const contractAddress = "0xf280dd5092a2ff4247273aa26009bd222150749c";


const Surprise = () => {
  const [selectedAmount, setSelectedAmount] = useState(0);
  const [donationAmount, setDonationAmount] = useState(0);
  const { wanterAddr } = useParams();

  const { contract } = useContract(contractAddress);
  const { data, isLoading, error } = useContractRead(contract, "wantList",[wanterAddr]);

  console.log("contract:", contract);
  
  if (error) {
    console.error("failed to read contract", error);
  } else {
    console.log("contract data:", data, isLoading, error);
    console.log("wanterAddr:", wanterAddr);
  }


  // await fetch().then((res) => res.json()).then((e) => {
  //   console.log(e);
  //   data = e;
  // });
  // const [loading, setLoading] = useState(false);
  // const [NFTdata, setNFTData] = useState<any[]>([]);

  // useEffect(() => {
  //   // setLoading(true);
  //   // fetch(`http://localhost:3000/api/wish/${wanterAddr}`)
  //   //   .then((res) => res.json())
  //   //   .then((e) => {
  //   //     console.log(e);
  //   //     setData(e);
  //   //     setLoading(false);
  //   //   });
  //   setNFTData([123,321,222])
  // }, [])

  return (
    <>
      <div className="flex justify-center items-center h-screen space-x-10 relative" > 
        {/* relative positioning added here */}
        <h1 className="text-xl font-bold mb-5 absolute top-5 left-5">
          Surprise
        </h1>
        <div>{isLoading ? <p>Loading...</p> : <p>AccumulatedList: </p>}</div>
        <NFT targetAddress={"0xED5AF388653567Af2F388E6224dC7C4b3241C544"} />
        
        <div className="flex-1 flex flex-col justify-center items-start p-5 border-r">
          {/* {data.toString().map((item:any, index:any) => (
            <div key={index} className="p-2.5 border mt-2.5">
              {item.content}
            </div>
          ))} */}
          {data}
        </div>

        <div className="flex-1 flex flex-col justify-center items-center p-5 space-y-24">
          {/* Increased space between items with space-y-5 */}
          
          <input
            type="range"
            min="0"
            max="10"
            step="0.01"
            value={donationAmount}
            onChange={(e) => setDonationAmount(Number(e.target.value))}
            className="w-3/4 mb-5" 
          />
          
          <input
            type="number"
            value={donationAmount}
            onChange={(e) => setDonationAmount(Number(e.target.value))}
            className="w-1/4 p-2.5 border rounded-md"
          />
          
          <button 
            onClick={() => console.log(`Donated: ${donationAmount}`)}
            className="w-1/5 bg-indigo-500 text-white p-2.5 rounded-md hover:bg-indigo-600"
          >
            助力！
          </button>
        </div>
      </div>
    </>
  ); 
};

export default Surprise;
