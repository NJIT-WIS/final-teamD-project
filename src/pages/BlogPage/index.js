import Image from 'next/image';
import React, { Component } from 'react'

class index extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  render() {
    return (
      <div className="bg-[url('/e2AY3k8EYn.png')] bg-cover bg-center bg-no-repeat h-full flex flex-col justify-center items-center">
        <div className='h-1/3 flex flex-col justify-center'>
          <span className='font-bold text-[220px] text-[#FFFFFF]'>THE BLOG</span>
        </div>
        <div className='h-2/3 w-full flex flex-row justify-center'>
          <div className='w-11/12 h-4/5 flex flex-row border'>
            <div className='w-1/2'>
              <div className="w-full h-1/2 ">
                <div className="w-11/12 h-4/5 bg-[url('/starbucksPhoto.jpeg')] bg-cover bg-center bg-no-repeat">
                </div>
              </div>
              <div className="w-full h-1/2 flex flex-col">
                <span className='text-[]'>
                  Sunday, 06 Aug 2023
                </span>
                <span className='text-2xl text-[#ffffff]'>Starbucks: Crafting Coffee Magic for the World</span>
                <span className='text-xl w-11/12'>
                  The magical coffee destination, aims to inspire and nurture individuals, creating meaningful connections through their high-quality coffee offerings while making a positive impact in the world through community-driven initiatives and social responsibility...
                </span>
              </div>
            </div>
            <div className='w-1/2 flex flex-col '>
              <div className='h-1/2 w-full flex flex-row'>
                <div className="h-4/5 w-1/2 bg-[url('/DunkinPhoto.jpeg')] bg-cover bg-center bg-no-repeat"></div>
                <div className='h-full w-1/2'></div>
              </div>
              <div className='h-1/2 w-full flex flex-row'>
                <div className="h-4/5 w-1/2 bg-[url('/DunkinPhoto.jpeg')] bg-cover bg-center bg-no-repeat"></div>
                <div className='h-full w-1/2'></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default index;