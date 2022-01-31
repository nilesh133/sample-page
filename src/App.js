import React from 'react';
import './App.css';
import { MdVerified } from "react-icons/md"
import { AiFillFire } from "react-icons/ai"
import { RiVipDiamondFill } from "react-icons/ri"
import { GiTempleGate } from "react-icons/gi"
import { BsTornado } from "react-icons/bs"

const App = () => {
  return (
    <>
      <div className='container'>
        <h1>Live Spaces</h1>
        <div className='heading'>
          <span><MdVerified /></span>
          <span>All NFT on Cyber either belong to or were minted by their space creator.</span>
        </div>

        <div className='option_container'>
          <div className='option' style={{backgroundColor: "black", color: "white"}}>
            <span>🔥</span>
            <span>24h Trending</span>
          </div>
          <div className='option'>
            <span></span>
            <span>Latest Shows</span>
          </div>
          <div className='option'>
            <span></span>
            <span>Most Popular</span>
          </div>
          <div className='option'>
            <span style={{ color: "lightblue" }}><RiVipDiamondFill /></span>
            <span>In Genesis</span>
          </div>
          <div className='option'>
            <span style={{ color: "orangered" }}><GiTempleGate /></span>
            <span>In Temple</span>
          </div>
          <div className='option'>
            <span><BsTornado /></span>
            <span>In Void</span>
          </div>
          <div className='option'>
            <span>🔥</span>
            <span>#BAYC</span>
          </div>
        </div>
        <div className='content_container'>
          <div className='content content-1'>
            <div className='content_details'>
              <h3>leg bar</h3>
              <div className='content_details_inner'>
              <span>@0x2bc08c...</span>
              <span>@0x2bc08c...</span>
              </div>
             
            </div>
          </div>
          <div className='content content-2'>
            <div className='content_details'>
              <h3>Meta Trap House</h3>
              <div className='content_details_inner'>
              <span>@freezecorle...</span>
              <span>@0x2bc08c...</span>
              </div>
             
            </div>
          </div>
          <div className='content content-3'>
            <div className='content_details'>
              <h3>Girls Gone Wild</h3>
              <div className='content_details_inner'>
              <span>@0xbe0fd...</span>
              <span>@0xbe0fd...</span>
              </div>
             
            </div>
          </div>
        </div>
      </div>
    </>
  )
};

export default App;
