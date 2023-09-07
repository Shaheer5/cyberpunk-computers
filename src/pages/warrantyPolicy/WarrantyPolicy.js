import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Breadcrumbs from '../../components/Breadcrumbs/Breadcrumbs';

// styles
import './WarrantyPolicy.css'

function WarrantyPolicy() {
  
  const location = useLocation();
  const [prevLocation, setPrevLocation] = useState("");
  useEffect(() => {
    if (location.state?.data) {
      setPrevLocation(location.state.data);
    }
  }, [location]);

  return (
    <React.Fragment>
      <Breadcrumbs prevLocation={prevLocation} />
      <div className="warranty-policy py-8 px-4 -bg--yellow flex flex-col justify-center items-center">
        <div className="max-w-screen-2xl xs:mt-8 lg:mt-0 -bg--white shadow-md p-6 rounded-md">
          <h1 className="text-2xl mb-4 font-refinery700">Warranty Policy</h1>
          <div className='font-blender400 text-md xs:px-2 md:px-10 px-10 py-4 text-left'>
            <ol>
              <li>
                Warranty is given on behalf of the Manufacturer/Supplier/Distributor.&nbsp; If the product was sold in good working condition then the reseller/vendor is not responsible for any defect which may appear later.</li>
              <li>
                If the "Warranty Card Issued" is mentioned on the invoice then the customer should ensure that he/she receives the same along with the invoice, else our customer support Centre will not handle the warranty.</li>
              <li>
                The manufacturer/supplier/distributor reserves the right to reject any warranty claim whereby the original invoice is missing.</li>
              <li>
                It is strongly recommended that customers should check the product before leaving our counter, as warranty begins once the receipt has been generated. In case of any problem, the product will be treated in a normal warranty claim process.</li>
              <li>
                The manufacturer/supplier/distributor reserves the right to reject any claim whereby the product/component is broken or shows signs of burning, rust due to weather conditions.</li>
              <li>
                The manufacturer/supplier/distributor reserves the right to reject any warranty claim whereby the product/component is submitted in improper condition. The product should be well packed in protective material supplied while selling.</li>
              <li>
                &nbsp;Warranty claim due to accidental damage or electrical surge will not be entertained.</li>
              <li>
                Computer hardware does not include software support. Information in this regard may be obtained from the manufacturer's website directly.&nbsp;</li>
              <li>
                The warranty claim may be rejected where the warranty sticker/serial numbers are torn or tampered with.</li>
              <li>
                The product/component may be replaced or repaired at the discretion of the manufacturer/supplier/distributor once the warranty claim is accepted. The duration of return may range from 3 to 6 weeks.&nbsp;</li>
              <li>
                The warranty claim may be accepted on a "conditional" basis if we are not satisfied that the defect is due to a manufacturing fault. Acceptance of warranty claim, in this case, will depend solely on the discretion of the manufacturer/supplier/distributor. Please note that this may take more time than normal.</li>
              <li>
                Warranty will not be entertained in case of appearance of the dot on LCDs / LEDs.</li>
              <li>
                The manufacturer reserves the right to alter the warranty terms/conditions. The changes are updated on the manufacturer/supplier website.</li>
              <li>
                Power adapters, cables, printer cartridges/toners and all the additional accessories do not carry any warranty. Warranty claims for the same will not be entertained.</li>
              <li>
                International warranty depicts that the products should be registered with the manufacturer directly and the warranty claim will be handled by the user himself. Instruction of the manufacturer should be followed.</li>
              <li>
                Used hardware carries checking warranty only. Please ensure to check purchased hardware is in good condition before leaving the counter.</li>
              <li>
                We accept warranties from Mon to Fri between 11.30am to 6.30pm.&nbsp;</li>
              <li>
                The PC covers full warranty subject to assurance that the user did not open Pc-case, During the warranty period, no component addition or removal is allowed without pre-approval of service centre.</li>
              <li>
                The manufacturer/supplier/distributor reserves the right to charge a certain amount to upgrade the product/component in case if the product is discontinued by the manufacturer. If the customer is not willing to upgrade then the manufacturer/supplier/distributor may return the amount after deduction.</li>
              <li>
                Limited Warranty means that the first year is free warranty and the remaining years are paid warranty.&nbsp;</li>
              <li>
                If "Without Warranty" is mentioned on any item then please check the item before leaving the store. We will not be responsible afterwards.&nbsp;</li>
            </ol>
          </div>
          <Link className='cp-btn cp-btn-yellow px-2' to="/privacy-policy">Learn About Privacy Policy</Link>
        </div>
      </div>
    </React.Fragment>
  );
}

export default WarrantyPolicy;
