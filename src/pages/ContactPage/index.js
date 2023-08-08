import React, { Component } from 'react'
import { DribbbleOutlined, WhatsAppOutlined, TwitterOutlined, LinkedinOutlined, MailOutlined } from '@ant-design/icons';
class index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contentList: [

      ]
    };
  }



  render() {
    return (
      <div className="bg-[url('/e2AY3k8EYn.png')] bg-cover bg-center bg-no-repeat h-full flex flex-col ">
        <div className='ml-6'>
          <div className='text-[100px] hover:text-[105px]' >
            <DribbbleOutlined className='hover:cursor-pointer ' />
          </div>
          <div className='text-[100px] hover:text-[105px]'>
            <WhatsAppOutlined className='hover:cursor-pointer ' />
          </div>
          <div className='text-[100px] hover:text-[105px]'>
            <TwitterOutlined className='hover:cursor-pointer ' />
          </div>
          <div className='text-[100px] hover:text-[105px]'>
            <MailOutlined className='hover:cursor-pointer ' />
          </div>
          <div className='text-[100px] hover:text-[105px]'>
            <LinkedinOutlined className='hover:cursor-pointer ' />
          </div>
        </div>

      </div>
    );
  }
}

export default index;