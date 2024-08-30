import React from 'react';
import Features from "../../components/home/Features";
import FeaturesGrid from '../../components/home/FeaturesGrid';
import UpliftDelivery from '../../components/home/UpliftDelivery';
import CollectiveDelivery from '../../components/home/CollectiveDelivery';
import Framework from '../../components/home/Framework';
import ProcessMap from '../../components/home/ProcessMap';
import JoinUs from '../../components/home/JoinUs';

const HomeScreen = () => {
  return (
    <div>
      <Features />
      <FeaturesGrid />
      <UpliftDelivery />
      <CollectiveDelivery />
      <Framework />
      <ProcessMap />
      <JoinUs />
    </div>
  )
}

export default HomeScreen
