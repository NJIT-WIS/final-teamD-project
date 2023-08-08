import React, { Component } from 'react'
import SubscibeForm from '@/components/subscribeForm'
class index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contentList: [
        "Peet's Coffee: Peet's Coffee is an artisanal with a focus on quality and sustainability, offering a unique coffee experience to a community of enthusiasts who value the art of coffee-making and itspositive impact on the environment.",
        "Dunkin Donuts: Dunkin Donuts is a globally recognized brand, delighting customers with a wide array of freshly made donuts and exceptional coffee, providing convenient and friendly atmosphere for people of all walks of life to enjoy their favorite treats.",
        "Starbucks: Starbucks, the magical coffee destination, aims to inspire and nurture individuals, creating meaningful connections through their high-quality coffee offerings, while making a positive impact in the world through community-driven initiatives and social responsibility."
      ]
    };
  }
  render() {
    return (
      <div className="bg-[url('/e2AY3k8EYn.png')] bg-cover bg-center bg-no-repeat h-full">
        <div className='w-1/2 h-full flex justify-center items-center'>
          <SubscibeForm ></SubscibeForm>
        </div>

      </div>
    );
  }
}

export default index;