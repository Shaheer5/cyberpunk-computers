import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
// import Breadcrumbs from '../../components/Breadcrumbs/Breadcrumbs';

// styles
import './PrivacyPolicy.css'

function PrivacyPolicy() {

  // const location = useLocation();
  // const [prevLocation, setPrevLocation] = useState("");
  // useEffect(() => {
  //   if (location.state?.data) {
  //     setPrevLocation(location.state.data);
  //   }
  // }, [location]);
  
  return (
    <React.Fragment>
      {/* <Breadcrumbs prevLocation={prevLocation} /> */}
      <div className="privacy-policy py-8 max-h-full px-4 -bg--yellow flex flex-col justify-center items-center">
        <div className="max-w-screen-2xl xs:mt-8 lg:mt-0 -bg--white shadow-md p-6 rounded-md">
          <h1 className="text-2xl mb-4 font-refinery700">Privacy Policy</h1>
          <div className='font-blender400 xs:px-2 md:px-10 py-4'>
            <p className="text-gray-600">
              At our Cyberpunk computer hardware e-commerce store, we understand and prioritize the importance of your privacy and data security. This Privacy Policy outlines our commitment to safeguarding your personal and sensitive information throughout your interactions with our platform. When you browse, purchase, or engage with our products and services, you entrust us with certain data, and we take this responsibility seriously.
            </p>
            <p className="text-gray-600 mt-2">
              We collect and use your information to facilitate seamless transactions and enhance your shopping experience. This may include personal details such as your name, contact information, billing and shipping addresses, and payment information. Rest assured that these details are exclusively used for order processing, delivery, and customer support, and are never shared with third parties for unrelated purposes.
            </p>
            <p className="text-gray-600 mt-2">
              We implement robust security measures to protect your data from unauthorized access, alteration, or disclosure. Our website employs encrypted connections and industry-standard security protocols to ensure that your sensitive information remains confidential. Additionally, our employees are trained to follow strict data protection guidelines, reinforcing our commitment to maintaining your privacy.
            </p>
            <p className="text-gray-600 mt-2">
              Cookies and similar technologies are utilized on our platform to enhance your browsing experience and provide personalized recommendations. These tools help us understand your preferences and tailor our offerings to your needs, but you retain the ability to manage or disable them through your browser settings.
            </p>
            <p className="text-gray-600 mt-2">
              Our Privacy Policy extends to the communication channels we use to connect with you. We may send you relevant updates, promotions, and newsletters, but you can easily opt out of receiving these communications if you prefer. Your communication preferences are respected, and we never share your contact details with third-party marketing entities.
            </p>
            <p className="text-gray-600 mt-2">
              We may share aggregated and anonymized data for analytical purposes, enabling us to enhance our offerings and understand broader trends. However, this information cannot be linked back to any individual user.
            </p>
            <p className="text-gray-600 mt-2">
              In the event of any changes to this Privacy Policy, we will notify you and provide the opportunity to review and accept the updated terms before they take effect. Your continued use of our services constitutes your acknowledgment and consent to these terms.
            </p>
            <p className="text-gray-600 mt-2">
              Your trust is of utmost importance to us, and we are committed to continuously enhancing our data protection measures and ensuring compliance with relevant privacy regulations. If you have any questions, concerns, or requests regarding your personal data, please don't hesitate to contact our dedicated customer support team. Thank you for choosing us as your computer hardware partner, and we look forward to serving you while upholding the highest standards of privacy and security.
            </p>
          </div>

          <Link className='cp-btn cp-btn-yellow px-2' to="/warranty-policy">Learn About Warranty Policy</Link>

        </div>
      </div>
    </React.Fragment>
  );
}

export default PrivacyPolicy;
