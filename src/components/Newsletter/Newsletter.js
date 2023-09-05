import React from 'react';
import { useState } from 'react';
import { motion } from "framer-motion";

// styles
import './Newsletter.css'

import { CalendarDaysIcon, HandRaisedIcon } from '@heroicons/react/24/outline'

export default function Newsletter() {

  const [emailInfo, setEmailInfo] = useState("");
  const [subscription, setSubscription] = useState(false);
  const [errMsg, setErrMsg] = useState("");

  const emailValidation = () => {
    return String(emailInfo)
      .toLocaleLowerCase()
      .match(/^\w+([-]?\w+)*@\w+([-]?\w+)*(\.\w{2,3})+$/);
  };

  const handleSubscription = (e) => {
    e.preventDefault()
    if (emailInfo === "") {
      setErrMsg("Please provide an Email !");
    } else if (!emailValidation(emailInfo)) {
      setErrMsg("Please give a valid Email!");
    } else {
      setSubscription(true);
      setErrMsg("");
      setEmailInfo("");
    }
  };


  return (
    <div>
      <div className="section-razor font-blender400">
        __ /// PRODUCT.MODULE
        <br />
      </div>
      <div className="newsletter relative isolate overflow-hidden newsletter-bg py-16 sm:py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2">
            <div className="max-w-xl lg:max-w-lg">
              <h2 className="text-3x sm:text-4xl font-blender700">SIGN UP FOR THE CYBERPUNK COMPUTERS NEWSLETTER!</h2>
              <p className="mt-4 text-lg leading-8 text-gray-900">
                Be the first to get updates on Cyberpunk Computers and the upcoming Pnomotions and Sales — delivered directly to your inbox!
              </p>
              <form className="mt-6 flex max-w-md gap-x-4">
                <label htmlFor="email-address" className="sr-only">
                  Email address
                </label>
                {subscription ? (
                  <motion.p
                    initial={{ x: 20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    className="w-full text-center font-extrabold text-xl text-cyan"
                  >
                    Subscribed Successfully!
                  </motion.p>
                ) : (
                  <div className="w-full flex-col xl:flex-row flex justify-center items-start gap-4">
                    <div className="flex flex-col w-full">
                      <input
                        onChange={(e) => setEmailInfo(e.target.value)}
                        // onChange={setEmailInfo}
                        value={emailInfo}
                        // value={email}
                        id="email-address"
                        name="email"
                        type="email"
                        autoComplete="email"
                        className="min-w-0 flex-auto rounded-md border-0 px-3.5 py-1.5 sm:text-sm sm:leading-6"
                        placeholder="Enter your email"
                      />
                      {errMsg && (
                        <p className="text-red text-sm font-semibold font-titleFont text-center animate-bounce mt-2">
                          {errMsg}
                        </p>
                      )}
                    </div>
                    <button
                      onClick={handleSubscription}
                      type="submit"
                      className="cp-btn cp-btn-cyan text-lg font-blender700"
                    >
                      Subscribe
                    </button>
                  </div>
                )}
              </form>
            </div>
            <dl className="grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:pt-2">
              <div className="flex flex-col items-start">
                <div className="rounded-md bg-red p-2 ring-1 ring-white/10">
                  <CalendarDaysIcon className="h-6 w-6" aria-hidden="true" />
                </div>
                <dt className="mt-4 lg:text-xl">Weekly articles</dt>
                <dd className="mt-2 leading-7">
                  Stay in the loop with our weekly newsletter! Get the latest updates, news, and insights delivered straight to your inbox. From exciting developments to helpful tips and trends, our newsletter is your key to staying informed and connected. Sign up today and never miss a beat!
                </dd>
              </div>
              <div className="flex flex-col items-start">
                <div className="rounded-md bg-red p-2 ring-1 ring-white/10">
                  <HandRaisedIcon className="h-6 w-6" aria-hidden="true" />
                </div>
                <dt className="mt-4 lg:text-xl">No spam</dt>
                <dd className="mt-2 leading-7">
                  <p>
                    We value your time and promise to deliver only valuable content that enhances your knowledge and keeps you informed. Join our community and stay connected without the spam hassle. Your inbox is important to us!
                  </p>
                </dd>

              </div>
            </dl>
          </div>
        </div>
      </div>
    </div>
  )
}
