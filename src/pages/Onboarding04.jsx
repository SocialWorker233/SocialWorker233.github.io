import React from 'react'
import { Link } from 'react-router-dom'

import OnboardingImage from '../images/onboarding-image.jpg'
import OnboardingDecoration from '../images/auth-decoration.png'

function Onboarding04() {
  return (
    <main className="bg-white dark:bg-slate-900">
      <div className="relative flex">
        {/* Content */}
        <div className="w-full md:w-1/2">
          <div className="min-h-[100dvh] h-full flex flex-col after:flex-1">
            <div className="flex-1">
              {/* Header */}
              <div className="flex items-center justify-between h-16 px-4 sm:px-6 lg:px-8">
                <div className="text-sm">
                  已有账号？{' '}
                  <Link
                    className="font-medium text-indigo-500 hover:text-indigo-600 dark:hover:text-indigo-400"
                    to="/signin">
                    登录
                  </Link>
                </div>
              </div>

              {/* Progress bar */}
              <div className="px-4 pt-12 pb-8">
                <div className="max-w-md mx-auto w-full">
                  <div className="relative">
                    <div
                      className="absolute left-0 top-1/2 -mt-px w-full h-0.5 bg-slate-200 dark:bg-slate-700"
                      aria-hidden="true"></div>
                    <ul className="relative flex justify-between w-full">
                      <li>
                        <Link
                          className="flex items-center justify-center w-6 h-6 rounded-full text-xs font-semibold bg-indigo-500 text-white"
                          to="/onboarding-01">
                          1
                        </Link>
                      </li>
                      <li>
                        <Link
                          className="flex items-center justify-center w-6 h-6 rounded-full text-xs font-semibold bg-indigo-500 text-white"
                          to="/onboarding-02">
                          2
                        </Link>
                      </li>
                      <li>
                        <Link
                          className="flex items-center justify-center w-6 h-6 rounded-full text-xs font-semibold bg-indigo-500 text-white"
                          to="/onboarding-03">
                          3
                        </Link>
                      </li>
                      <li>
                        <Link
                          className="flex items-center justify-center w-6 h-6 rounded-full text-xs font-semibold bg-indigo-500 text-white"
                          to="/onboarding-04">
                          4
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="px-4 py-8">
              <div className="max-w-md mx-auto">
                <div className="text-center">
                  <svg
                    className="inline-flex w-16 h-16 fill-current mb-6"
                    viewBox="0 0 64 64">
                    <circle
                      className="text-emerald-100 dark:text-emerald-400/30"
                      cx="32"
                      cy="32"
                      r="32"
                    />
                    <path
                      className="text-emerald-500 dark:text-emerald-400"
                      d="m28.5 41-8-8 3-3 5 5 12-12 3 3z"
                    />
                  </svg>
                  <h1 className="text-3xl text-slate-800 dark:text-slate-100 font-bold mb-8">
                    欢迎您的加入 🙌
                  </h1>
                  <Link
                    className="btn bg-indigo-500 hover:bg-indigo-600 text-white"
                    to="/">
                    进入官网 -&gt;
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Image */}
        <div
          className="hidden md:block absolute top-0 bottom-0 right-0 md:w-1/2"
          aria-hidden="true">
          <img
            className="object-cover object-center w-full h-full"
            src={OnboardingImage}
            width="760"
            height="1024"
            alt="Onboarding"
          />
          <img
            className="absolute top-1/4 left-0 -translate-x-1/2 ml-8 hidden lg:block"
            src={OnboardingDecoration}
            width="218"
            height="224"
            alt="Authentication decoration"
          />
        </div>
      </div>
    </main>
  )
}

export default Onboarding04
