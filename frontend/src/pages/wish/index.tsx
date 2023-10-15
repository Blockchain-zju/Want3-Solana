import React, { useState } from 'react'
import { Button as AntButton, Divider } from 'antd'
import styled from 'styled-components'
import { Editor } from '@tinymce/tinymce-react'
import {
  ThirdwebNftMedia,
  useContract,
  useContractRead,
  useAddress,
  useNFT,
  useContractWrite,
  Web3Button
} from '@thirdweb-dev/react'
import NavBar from '../../components/NavBar'
import Discord from 'assets/discord.png'
import Telegram from 'assets/telegram.png'
import Twitter from 'assets/twitter.png'
import { Link } from 'react-router-dom'

const Content = styled.div`
  display: flex;
  flex: 1;
  margin-top: 20px;
  margin-left: 95px;
  margin-right: 95px;
  overflow: hidden;
`

const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`

const PreviewLabel = styled.label`
  color: #000d4f;
  font-family: Inter;
  font-size: 28px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  margin-bottom: 28px;
`

const InvitationPreview = styled.div`
  flex: 1;
  border: 1px solid #000000;
  border-radius: 12px;
  margin-bottom: 20px;
  margin-right: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  backdrop-filter: blur(2px);
  border-radius: 12px;
  border: 1px sloid #000;
`

const Right = styled.div`
  flex: 1;
  padding-left: 20px;
  overflow-y: scroll;
`

// const Image = styled.img`
//     flex: 1;
//     width: auto;
//     height: auto;
//     max-width: 100%;
//     max-height: 50%;
//     border-radius: 10px;
//     margin-bottom: 20px;
// `;

const H1Label = styled.div`
  color: #000d4f;
  font-family: Inter;
  font-size: 28px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`

const H2Label = styled.div`
  color: #000d4f;
  font-family: Inter;
  font-size: 22px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  margin-top: 20px;
`

const IndentationContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin-top: 30px;
  padding-left: 15px;
  gap: 10px;
`

const IndentationContainer_Center = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 30px;
  padding-left: 15px;
  gap: 10px;
`

const Input = styled.input`
  font-size: 30px;
  height: 100%;
  border: 1px solid #ccc;
  background: rgba(181, 209, 204, 0.3);
  border-radius: 8px;
  backdrop-filter: blur(2px);
  width: 63%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`

const MyButton = styled(AntButton)`
  display: flex;
  height: 100%;
  width: 33%;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  border-radius: 8px;
  border: 1px solid #000d4f;
  background: #f2ff26;
  box-shadow: 4px 4px 0px 0px rgba(0, 0, 0, 0.25);

  color: #b5d1cc;
  font-family: Inter;
  font-size: 24px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`

const HintLabel = styled.div`
  padding-left: 15px;
  color: #b5d1cc;
  font-family: Inter;
  font-size: 17px;
  font-style: normal;
  font-weight: 300;
  line-height: normal;
  margin-top: 20px;
`

const DividerEx = styled(Divider)`
  background: #b5d1cc;
`

const LinkButtonX = styled(Link)`
  color: #fff;
  font-family: Montserrat;
  font-size: 20px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;

  display: flex;
  padding: 15px 50px;
  justify-content: center;
  align-items: center;
  gap: 15px;

  border-radius: 10px;
  background: #000;
  box-shadow: 4px 4px 0px 0px rgba(0, 0, 0, 0.25);
`

const LinkButtonDiscord = styled(Link)`
  color: #fff;
  font-family: Montserrat;
  font-size: 20px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;

  display: flex;
  padding: 15px 50px;
  justify-content: center;
  align-items: center;
  gap: 15px;

  border-radius: 10px;
  background: #5865f2;
  box-shadow: 4px 4px 0px 0px rgba(0, 0, 0, 0.25);
`

const LinkButtonTelegram = styled(Link)`
  color: #fff;
  font-family: Montserrat;
  font-size: 20px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;

  display: flex;
  padding: 15px 50px;
  justify-content: center;
  align-items: center;
  gap: 15px;

  border-radius: 10px;
  background: #31a8db;
  box-shadow: 4px 4px 0px 0px rgba(0, 0, 0, 0.25);
`

const WishButton = styled(Web3Button)`
  display: flex !important;
  height: 100% !important;
  width: 33% !important;
  justify-content: center !important;
  align-items: center !important;
  flex-shrink: 0 !important;
  border-radius: 8px !important;
  border: 1px solid #000d4f !important;
  background: #f2ff26 !important;
  box-shadow: 4px 4px 0px 0px rgba(0, 0, 0, 0.25) !important;

  color: #b5d1cc !important;
  font-family: Inter !important;
  font-size: 24px !important;
  font-style: normal !important;
  font-weight: 500 !important;
  line-height: normal !important;

  margin-bottom: 20px !important;
`

const Page: React.FC = () => {
  const [inputAddress, setinputAddress] = useState('')
  const [inputTitle, setinputTitle] = useState('')
  const [slogan, setSlogan] = useState('')
  const [contractAddress, setContractAddress] = useState(
    '0xf280dd5092a2ff4247273aa26009bd222150749c'
  )
  const [loading, setLoading] = useState<boolean>(false)

  const { contract } = useContract(contractAddress)
  const {
    data: wantListData,
    isLoading: islg1,
    error: iserr1
  } = useContractRead(contract, 'wantList', [
    '0xf280dd5092a2ff4247273aa26009bd222150749c'
  ])

  console.log('contract:', contract)

  let editorRef = null

  const getEditorContent = () => {
    if (editorRef) {
      setSlogan(editorRef.getContent())
      console.log(slogan)
    }
  }

  const { mutateAsync, isLoading, error } = useContractWrite(
    contract,
    'addWant'
  )

  //   function NFTCollectionRender({
  //     contractAddress
  //   }: {
  //     contractAddress: string
  //   }) {
  //     const { contract } = useContract(contractAddress)
  //     const { data: nft, isLoading, error } = useNFT(contract, 72)
  //     if (isLoading) {
  //       setLoading(true)
  //     } else {
  //       setLoading(false)
  //     }
  //     return (
  //       <div>
  //         {!isLoading && nft ? (
  //           <ThirdwebNftMedia metadata={nft.metadata} />
  //         ) : (
  //           <p>Loading...</p>
  //         )}
  //       </div>
  //     )
  //   }

  const fetchImage = () => {
    setContractAddress(inputAddress)
  }
  return (
    <Content>
      <Left>
        <PreviewLabel>Preview</PreviewLabel>
        <InvitationPreview>Invitation Preview Here</InvitationPreview>
      </Left>
      <Right>
        <H1Label>Put your wish link here:</H1Label>
        <IndentationContainer>
          <Input
            type="text"
            value={inputAddress}
            onChange={(e) => setinputAddress(e.target.value)}
          />

          <MyButton loading={loading} onClick={fetchImage}>
            Upload
          </MyButton>
        </IndentationContainer>
        <HintLabel>
          Your wish will be appear in the preview once you submit it.
        </HintLabel>
        <DividerEx />
        <H1Label>Invitation Letter Contents</H1Label>
        <H2Label>Title</H2Label>
        <IndentationContainer>
          <Input
            type="text"
            value={inputTitle}
            onChange={(e) => setinputTitle(e.target.value)}
            style={{ width: '98%' }}
          />
        </IndentationContainer>
        <H2Label>Invitation Contents</H2Label>
        <IndentationContainer>
          <Editor
            onInit={(evt, editor) => (editorRef = editor)}
            apiKey="8unr8c1gn7mq5ilod91w36omll3lynnca8sgpeip87f3w4rh"
            initialValue="<p>This is the initial content of the editor</p>"
            init={{
              width: '98%',
              height: 500,
              menubar: false,
              plugins: [
                'advlist autolink lists link image charmap print preview anchor',
                'searchreplace visualblocks code fullscreen',
                'insertdatetime media table paste code help wordcount'
              ],
              toolbar:
                'undo redo | formatselect | bold italic backcolor | \
                            alignleft aligncenter alignright alignjustify | \
                            bullist numlist outdent indent | removeformat | help'
            }}
          />
        </IndentationContainer>
        <DividerEx />
        <H1Label>Social Media</H1Label>
        <IndentationContainer_Center>
          <LinkButtonX to="https://twitter.com/" target="_blank">
            <img src={Twitter} style={{ width: '20px', height: '20px' }} />
            Twitter
          </LinkButtonX>
          <LinkButtonDiscord to="https://discord.com/" target="_blank">
            <img src={Discord} style={{ width: '20px', height: '20px' }} />
            Discord
          </LinkButtonDiscord>
          <LinkButtonTelegram to="https://telegram.org/" target="_blank">
            <img src={Telegram} style={{ width: '20px', height: '20px' }} />
            Telegram
          </LinkButtonTelegram>
        </IndentationContainer_Center>
        <DividerEx />
        <H1Label>Receive Address</H1Label>
        <IndentationContainer>
          <Input
            type="text"
            value={inputTitle}
            onChange={(e) => setinputTitle(e.target.value)}
            style={{ width: '98%' }}
          />
        </IndentationContainer>
        <DividerEx />
        <IndentationContainer_Center>
          <WishButton
            contractAddress={contractAddress}
            action={() => mutateAsync({ args: [inputAddress] })}
          >
            Make a Wish
          </WishButton>
        </IndentationContainer_Center>
      </Right>
    </Content>
  )
}

export default Page
