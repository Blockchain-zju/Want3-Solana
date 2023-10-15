//
// import React, {useState} from 'react';
// import {ThirdwebNftMedia, useContract, useContractRead, useNFT , useContractWrite} from "@thirdweb-dev/react";
//
// const contractAddress = "0xf280dd5092a2ff4247273aa26009bd222150749c"
// const { contract } = useContract(contractAddress);
// const { data, isLoading, error } = useContractRead(contract, "wantList",['0xf280dd5092a2ff4247273aa26009bd222150749c']);
//
// const MakeAWish = () => {
//   const inputAddress = '0x4F1A18E83ABFB281Cc2af30BaFd513a3192AFA36';
//   const slogan = 'Your wish slogan';
//
//   console.log('NFT Address:', inputAddress);
//   console.log('Text:', slogan);
//
//   const { mutateAsync: setWant, isLoading } = useContractWrite(contract, 'setWant');
//
//   const call = async () => {
//     try {
//       const data = await setWant({ args: ['0x4F1A18E83ABFB281Cc2af30BaFd513a3192AFA36','0x4F1A18E83ABFB281Cc2af30BaFd513a3192AFA30'] });
//       console.info('contract call success', data);
//     } catch (err) {
//       console.error('contract call failure', err);
//     }
//   };
//
//   // 组件的其他代码和返回逻辑...
// };
//
// export default MakeAWish;
//
