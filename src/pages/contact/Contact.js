
import React, { useState, useEffect } from 'react'
// import { ChevronDownIcon } from '@heroicons/react/20/solid'
import { Switch } from '@headlessui/react'
import { Link, useLocation } from 'react-router-dom'
import Breadcrumbs from '../../components/Breadcrumbs/Breadcrumbs'

// styles
import './Contact.css'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Example() {

  const location = useLocation();
  const [prevLocation, setPrevLocation] = useState("");
  useEffect(() => {
    if (location.state?.data) {
      setPrevLocation(location.state.data);
    }
  }, [location]);

  const [agreed, setAgreed] = useState(false);

  const handleAgreeChange = () => {
    setAgreed(!agreed);
  };

  const handleSubmit = () => {
    if (agreed) {
      // Perform the form submission
      // This can be an API call or any other action you want to take
      alert("Form submitted successfully!");
    } else {
      // Display an error message or inform the user that they need to agree
      alert("Please agree to the terms and conditions.");
    }
  };

  return (
    <React.Fragment>
      <Breadcrumbs prevLocation={prevLocation} />
      <div className="contact isolate px-6 md:py-16 xs:py-32 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight font-refinery700 sm:text-4xl">Email Us</h2>
          <p className="mt-2 text-xl leading-8 font-blender700">
            Feel free to ask us anything
          </p>
        </div>
        <form action="#" method="POST" className="mx-auto mt-16 max-w-xl sm:mt-20">
          <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
            <div>
              <label htmlFor="first-name" className="block text-sm font-semibold leading-6 text-gray-900">
                First name
              </label>
              <div className="mt-2.5">
                <input
                  type="text"
                  name="first-name"
                  id="first-name"
                  required
                  autoComplete="given-name"
                  className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div>
              <label htmlFor="last-name" className="block text-sm font-semibold leading-6 text-gray-900">
                Last name
              </label>
              <div className="mt-2.5">
                <input
                  type="text"
                  name="last-name"
                  id="last-name"
                  required
                  autoComplete="family-name"
                  className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="email" className="block text-sm font-semibold leading-6 text-gray-900">
                Email
              </label>
              <div className="mt-2.5">
                <input
                  type="email"
                  name="email"
                  required
                  placeholder='email@cyberbyte.com'
                  id="email"
                  autoComplete="email"
                  className="email block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="phone-number" className="block text-sm font-semibold leading-6 text-gray-900">
                Phone number
              </label>
              <div className="relative mt-2.5">
                <div className="absolute inset-y-0 left-0 flex items-center">
                  <label htmlFor="country" className="sr-only">
                    Country
                  </label>
                  <select
                    id="country"
                    name="country"
                    className="h-full rounded-md border-0 bg-transparent bg-none py-0 pl-4 pr-10text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm"
                  >
                    <option>PK</option>
                  </select>
                </div>
                <input
                  type="tel"
                  name="phone-number"
                  id="phone-number"
                  required
                  autoComplete="tel"
                  className="block w-full rounded-md border-0 px-3.5 py-2 pl-20 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="message" className="block text-sm font-semibold leading-6 text-gray-900">
                Message
              </label>
              <div className="mt-2.5">
                <textarea
                  name="message"
                  id="message"
                  required
                  placeholder='type here...'
                  rows={4}
                  className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  defaultValue={''}
                />
              </div>
            </div>
            <Switch.Group as="div" className="flex gap-x-4 sm:col-span-2">
              <div className="flex h-6 items-center">
                <Switch
                  checked={agreed}
                  onChange={handleAgreeChange}
                  className={classNames(
                    agreed ? '-bg--cyan' : 'bg-gray-300',
                    'flex w-8 flex-none cursor-pointer rounded-full p-px ring-1 ring-inset ring-gray-900/5 transition-colors'
                  )}
                >
                  <span className="sr-only">Agree to policies</span>
                  <span
                    aria-hidden="true"
                    className={classNames(
                      agreed ? 'translate-x-3.5' : 'translate-x-0',
                      'h-4 w-4 transform rounded-full bg-white shadow-sm ring-1 ring-gray-900/5 transition duration-200 ease-in-out'
                    )}
                  />
                </Switch>
              </div>
              <Switch.Label className="leading-6">
                By selecting this, you agree to our{' '}
                <Link to="/privacy-policy" className="font-semibold text-cyan">
                  privacy&nbsp;policy
                </Link>
                .
              </Switch.Label>
            </Switch.Group>
          </div>
          <div className="mt-10">
            <button
              onClick={handleSubmit}
              type="submit"
              disabled={!agreed}
              className="block cp-btn cp-btn-cyan"
            >
              Send
            </button>
          </div>
        </form>
      </div>
    </React.Fragment>
  )
}
