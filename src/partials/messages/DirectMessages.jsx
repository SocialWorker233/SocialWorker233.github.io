import React from 'react'

import UserImage01 from '../../images/user-32-01.jpg'
import UserImage02 from '../../images/user-32-02.jpg'
import UserImage03 from '../../images/user-32-03.jpg'
import UserImage04 from '../../images/user-32-04.jpg'
import UserImage05 from '../../images/user-32-05.jpg'
import UserImage06 from '../../images/user-32-06.jpg'

function DirectMessages({ setMsgSidebarOpen }) {
  return (
    <div className="mt-4">
      <div className="text-xs font-semibold text-slate-400 dark:text-slate-500 uppercase mb-3">
        消息列表
      </div>
      <ul className="mb-6">
        <li className="-mx-2">
          <button
            className="flex items-center justify-between w-full p-2 rounded bg-indigo-500/30"
            onClick={() => setMsgSidebarOpen(false)}>
            <div className="flex items-center truncate">
              <img
                className="w-8 h-8 rounded-full mr-2"
                src={UserImage01}
                width="32"
                height="32"
                alt="User 01"
              />
              <div className="truncate">
                <span className="text-sm font-medium text-slate-800 dark:text-slate-100">
                  张三
                </span>
              </div>
            </div>
            <div className="flex items-center ml-2">
              <div className="text-xs inline-flex font-medium bg-indigo-400 text-white rounded-full text-center leading-5 px-2">
                2
              </div>
            </div>
          </button>
        </li>
        <li className="-mx-2">
          <button
            className="flex items-center justify-between w-full p-2 rounded"
            onClick={() => setMsgSidebarOpen(false)}>
            <div className="flex items-center truncate">
              <img
                className="w-8 h-8 rounded-full mr-2"
                src={UserImage02}
                width="32"
                height="32"
                alt="User 02"
              />
              <div className="truncate">
                <span className="text-sm font-medium text-slate-800 dark:text-slate-100">
                  李四
                </span>
              </div>
            </div>
            <div className="flex items-center ml-2">
              <div className="text-xs inline-flex font-medium bg-indigo-400 text-white rounded-full text-center leading-5 px-2">
                4
              </div>
            </div>
          </button>
        </li>
        <li className="-mx-2">
          <button
            className="flex items-center justify-between w-full p-2 rounded"
            onClick={() => setMsgSidebarOpen(false)}>
            <div className="flex items-center truncate">
              <img
                className="w-8 h-8 rounded-full mr-2"
                src={UserImage03}
                width="32"
                height="32"
                alt="User 03"
              />
              <div className="truncate">
                <span className="text-sm font-medium text-slate-800 dark:text-slate-100">
                  王五
                </span>
              </div>
            </div>
            <div className="flex items-center ml-2">
              <svg
                className="w-3 h-3 shrink-0 fill-current text-slate-400"
                viewBox="0 0 12 12">
                <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
              </svg>
            </div>
          </button>
        </li>
        <li className="-mx-2">
          <button
            className="flex items-center justify-between w-full p-2 rounded"
            onClick={() => setMsgSidebarOpen(false)}>
            <div className="flex items-center truncate">
              <img
                className="w-8 h-8 rounded-full mr-2"
                src={UserImage04}
                width="32"
                height="32"
                alt="User 04"
              />
              <div className="truncate">
                <span className="text-sm font-medium text-slate-800 dark:text-slate-100">
                  蓝翌宁
                </span>
              </div>
            </div>
            <div className="flex items-center ml-2">
              <svg
                className="w-3 h-3 shrink-0 fill-current text-slate-400"
                viewBox="0 0 12 12">
                <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
              </svg>
            </div>
          </button>
        </li>
        <li className="-mx-2">
          <button
            className="flex items-center justify-between w-full p-2 rounded"
            onClick={() => setMsgSidebarOpen(false)}>
            <div className="flex items-center truncate">
              <img
                className="w-8 h-8 rounded-full mr-2"
                src={UserImage05}
                width="32"
                height="32"
                alt="User 05"
              />
              <div className="truncate">
                <span className="text-sm font-medium text-slate-800 dark:text-slate-100">
                  张伟
                </span>
              </div>
            </div>
            <div className="flex items-center ml-2">
              <svg
                className="w-3 h-3 shrink-0 fill-current text-slate-400"
                viewBox="0 0 12 12">
                <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
              </svg>
            </div>
          </button>
        </li>
        <li className="-mx-2">
          <button
            className="flex items-center justify-between w-full p-2 rounded"
            onClick={() => setMsgSidebarOpen(false)}>
            <div className="flex items-center truncate">
              <img
                className="w-8 h-8 rounded-full mr-2"
                src={UserImage06}
                width="32"
                height="32"
                alt="User 06"
              />
              <div className="truncate">
                <span className="text-sm font-medium text-slate-800 dark:text-slate-100">
                  中华小子
                </span>
              </div>
            </div>
            <div className="flex items-center ml-2">
              <svg
                className="w-3 h-3 shrink-0 fill-current text-slate-400"
                viewBox="0 0 12 12">
                <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
              </svg>
            </div>
          </button>
        </li>
      </ul>
    </div>
  )
}

export default DirectMessages
