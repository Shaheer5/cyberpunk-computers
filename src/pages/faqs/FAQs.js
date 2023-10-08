import React from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";

import { HiPlus, HiMinus } from "react-icons/hi2";
import './FAQs.css'
import Footer from "../../components/Footer/Footer";

const FAQs = () => {
  const [open, setOpen] = React.useState(1);

  const handleOpen = (value) => setOpen(open === value ? 0 : value);

  return (
    <div id="FAQs" className="flex flex-col items-center min-h-screen">
      <img src="../assets/bg-images/cp-city-bg.jpg" alt="" className="w-full" />
      <div id="accordion" className="w-full md:w-6/12 xs:w-10/12">

        <Accordion open={open === 1} className="accordion-block mb-2 rounded-lg font-blender400 border border-darkcyan px-4">
          <AccordionHeader
            onClick={() => handleOpen(1)}
            className={`border-b-0 transition-colors ${open === 1 ? "text-darkcyan hover:text-cyan" : "hover:text-darkcyan"
              }`}
          >
            Payments/Delivery/Shipments
            <span className="icons">{open === 1 ? <HiMinus /> : <HiPlus />}</span>
          </AccordionHeader>
          <AccordionBody className="pt-0">
            <h2 className="text-lg font-bold">1. Is it possible to place an order online and if so, what are the available payment options?</h2>
            Online ordering is available and upon receipt of payment, orders will be processed and shipped as soon as possible. The total time for delivery will depend on payment confirmation, processing time, and transit time. It can take anywhere from 24 hours to 10 days for in-stock items. To avoid any delays, please confirm that the shipping address provided to us is accurate.
          </AccordionBody>
          <AccordionBody className="pt-0">
            <h2 className="text-lg font-bold">2. Is the option of paying in cash upon delivery available?</h2>
            Cash On Delivery is not available, only online payments are accepted.
          </AccordionBody>
          <AccordionBody className="pt-0">
            <h2 className="text-lg font-bold">3. Are the prices of "On Order" products subject to change?</h2>
            We strive to keep the prices on our website accurate and consistent. However, due to fluctuations in foreign exchange rates or government policies, we may need to make adjustments to prices without prior notice. Cyberpunk Computers reserves the right to change prices on the website at any time. To avoid any confusion, it is recommended to confirm the prices of "On Order" products by a phone call before making any payments.
          </AccordionBody>
        </Accordion>

      </div>
      <Footer />
    </div>
  );
}

export default FAQs;
