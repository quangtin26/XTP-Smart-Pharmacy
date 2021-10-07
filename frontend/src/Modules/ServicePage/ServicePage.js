import React, { Component } from 'react';
import './ServicePage.scss';
import ServiceIntro from './Components/ServiceIntro/ServiceIntro';
import ServiceBenifitForOwner from './Components/ServiceBenefitForOwnerPhar/ServiceBenefitForOwner';
import ServiceSolution from './Components/ServiceSolution/ServiceSolution';
import ServiceFact from './Components/ServiceFact/ServiceFact';
import ServiceListPharDemo from './Components/ServiceListPharDemo/ServiceListPharDemo';
import ServiceGrowUp from './Components/ServiceGrowUp/ServiceGrowUp';

class ServicePage extends Component {

  render() {

    return (
        <div className="m-size m-auto">
          <ServiceIntro />
          <ServiceBenifitForOwner />
          <ServiceSolution />
          <ServiceFact />
          <ServiceListPharDemo />
          <ServiceGrowUp />
        </div>
    );
  }
}

export default ServicePage;
