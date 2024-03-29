import React from 'react'
import { Link } from 'react-router-dom'

import MeetupsThumb01 from '../../images/meetups-thumb-01.jpg'
import MeetupsThumb02 from '../../images/meetups-thumb-02.jpg'
import MeetupsThumb03 from '../../images/meetups-thumb-03.jpg'
import MeetupsThumb04 from '../../images/meetups-thumb-04.jpg'
import MeetupsThumb05 from '../../images/meetups-thumb-05.jpg'
import MeetupsThumb06 from '../../images/meetups-thumb-06.jpg'
import MeetupsThumb07 from '../../images/meetups-thumb-07.jpg'
import MeetupsThumb08 from '../../images/meetups-thumb-08.jpg'
import UserImage01 from '../../images/avatar-01.jpg'
import UserImage02 from '../../images/avatar-02.jpg'
import UserImage03 from '../../images/avatar-03.jpg'
import UserImage04 from '../../images/avatar-04.jpg'
import UserImage05 from '../../images/avatar-05.jpg'
import UserImage06 from '../../images/avatar-06.jpg'

function MeetupsPosts() {
  return (
    <div className="grid xl:grid-cols-2 gap-6">
      {/* Item 1 */}
      <article className="flex bg-white dark:bg-slate-800 shadow-lg rounded-sm border border-slate-200 dark:border-slate-700 overflow-hidden">
        {/* Image */}
        <Link
          className="relative block w-24 sm:w-56 xl:sidebar-expanded:w-40 2xl:sidebar-expanded:w-56 shrink-0"
          to="/community/meetups-post">
          <img
            className="absolute object-cover object-center w-full h-full"
            src={MeetupsThumb01}
            width="220"
            height="236"
            alt="Meetup 01"
          />
          {/* Like button */}
          <button className="absolute top-0 right-0 mt-4 mr-4">
            <div className="text-slate-100 bg-slate-900 bg-opacity-60 rounded-full">
              <span className="sr-only">Like</span>
              <svg className="h-8 w-8 fill-current" viewBox="0 0 32 32">
                <path d="M22.682 11.318A4.485 4.485 0 0019.5 10a4.377 4.377 0 00-3.5 1.707A4.383 4.383 0 0012.5 10a4.5 4.5 0 00-3.182 7.682L16 24l6.682-6.318a4.5 4.5 0 000-6.364zm-1.4 4.933L16 21.247l-5.285-5A2.5 2.5 0 0112.5 12c1.437 0 2.312.681 3.5 2.625C17.187 12.681 18.062 12 19.5 12a2.5 2.5 0 011.785 4.251h-.003z" />
              </svg>
            </div>
          </button>
        </Link>
        {/* Content */}
        <div className="grow p-5 flex flex-col">
          <div className="grow">
            <div className="text-sm font-semibold text-indigo-500 uppercase mb-2">
              2024年3月15日
            </div>
            <Link className="inline-flex mb-2" to="/community/meetups-post">
              <h3 className="text-lg font-bold text-slate-800 dark:text-slate-100">
                全国社工日特别报道
              </h3>
            </Link>
            <div className="text-sm">
              在全国社工日之际，我们深入探访社工在各行各业的重要作用和影响，展示他们在社会各界的卓越贡献。
            </div>
          </div>
          {/* Footer */}
          <div className="flex justify-between mt-3">
            {/* Tag */}
            <div className="text-xs inline-flex items-center font-medium bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-400 rounded-full text-center px-2.5 py-1">
              <svg
                className="w-4 h-3 fill-slate-400 dark:fill-slate-500 mr-2"
                viewBox="0 0 16 12">
                <path d="m16 2-4 2.4V2a2 2 0 0 0-2-2H2a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V7.6l4 2.4V2ZM2 10V2h8v8H2Z" />
              </svg>
              <span>查看详情</span>
            </div>
            {/* Avatars */}
            <div className="flex items-center space-x-2">
              <div className="flex -space-x-3 -ml-0.5">
                <img
                  className="rounded-full border-2 border-white dark:border-slate-800 box-content"
                  src={UserImage01}
                  width="28"
                  height="28"
                  alt="User 01"
                />
                <img
                  className="rounded-full border-2 border-white dark:border-slate-800 box-content"
                  src={UserImage04}
                  width="28"
                  height="28"
                  alt="User 04"
                />
                <img
                  className="rounded-full border-2 border-white dark:border-slate-800 box-content"
                  src={UserImage05}
                  width="28"
                  height="28"
                  alt="User 05"
                />
              </div>
              <div className="text-xs font-medium text-slate-400 dark:text-slate-500 italic">
                +22
              </div>
            </div>
          </div>
        </div>
      </article>

      {/* Item 2 */}
      <article className="flex bg-white dark:bg-slate-800 shadow-lg rounded-sm border border-slate-200 dark:border-slate-700 overflow-hidden">
        {/* Image */}
        <Link
          className="relative block w-24 sm:w-56 xl:sidebar-expanded:w-40 2xl:sidebar-expanded:w-56 shrink-0"
          to="/community/meetups-post">
          <img
            className="absolute object-cover object-center w-full h-full"
            src={MeetupsThumb02}
            width="220"
            height="236"
            alt="Meetup 02"
          />
          {/* Like button */}
          <button className="absolute top-0 right-0 mt-4 mr-4">
            <div className="text-slate-100 bg-slate-900 bg-opacity-60 rounded-full">
              <span className="sr-only">Like</span>
              <svg className="h-8 w-8 fill-current" viewBox="0 0 32 32">
                <path d="M22.682 11.318A4.485 4.485 0 0019.5 10a4.377 4.377 0 00-3.5 1.707A4.383 4.383 0 0012.5 10a4.5 4.5 0 00-3.182 7.682L16 24l6.682-6.318a4.5 4.5 0 000-6.364zm-1.4 4.933L16 21.247l-5.285-5A2.5 2.5 0 0112.5 12c1.437 0 2.312.681 3.5 2.625C17.187 12.681 18.062 12 19.5 12a2.5 2.5 0 011.785 4.251h-.003z" />
              </svg>
            </div>
          </button>
        </Link>
        {/* Content */}
        <div className="grow p-5 flex flex-col">
          <div className="grow">
            <div className="text-sm font-semibold text-indigo-500 uppercase mb-2">
              2024年4月10日
            </div>
            <Link className="inline-flex mb-2" to="/community/meetups-post">
              <h3 className="text-lg font-bold text-slate-800 dark:text-slate-100">
                儿童保护计划的先行者
              </h3>
            </Link>
            <div className="text-sm">
              深入报道一位在儿童保护领域工作多年的社工，她如何运用专业技能和无限热情保护每一个孩子的安全。
            </div>
          </div>
          {/* Footer */}
          <div className="flex justify-between mt-3">
            {/* Tag */}
            <div className="text-xs inline-flex items-center font-medium bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-400 rounded-full text-center px-2.5 py-1">
              <svg
                className="w-4 h-3 fill-slate-400 dark:fill-slate-500 mr-2"
                viewBox="0 0 16 12">
                <path d="m16 2-4 2.4V2a2 2 0 0 0-2-2H2a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V7.6l4 2.4V2ZM2 10V2h8v8H2Z" />
              </svg>
              <span>查看详情</span>
            </div>
            {/* Avatars */}
            <div className="flex items-center space-x-2">
              <div className="flex -space-x-3 -ml-0.5">
                <img
                  className="rounded-full border-2 border-white dark:border-slate-800 box-content"
                  src={UserImage02}
                  width="28"
                  height="28"
                  alt="User 02"
                />
                <img
                  className="rounded-full border-2 border-white dark:border-slate-800 box-content"
                  src={UserImage03}
                  width="28"
                  height="28"
                  alt="User 03"
                />
                <img
                  className="rounded-full border-2 border-white dark:border-slate-800 box-content"
                  src={UserImage04}
                  width="28"
                  height="28"
                  alt="User 04"
                />
              </div>
              <div className="text-xs font-medium text-slate-400 dark:text-slate-500 italic">
                +132
              </div>
            </div>
          </div>
        </div>
      </article>

      {/* Item 3 */}
      <article className="flex bg-white dark:bg-slate-800 shadow-lg rounded-sm border border-slate-200 dark:border-slate-700 overflow-hidden">
        {/* Image */}
        <Link
          className="relative block w-24 sm:w-56 xl:sidebar-expanded:w-40 2xl:sidebar-expanded:w-56 shrink-0"
          to="/community/meetups-post">
          <img
            className="absolute object-cover object-center w-full h-full"
            src={MeetupsThumb03}
            width="220"
            height="236"
            alt="Meetup 03"
          />
          {/* Like button */}
          <button className="absolute top-0 right-0 mt-4 mr-4">
            <div className="text-slate-100 bg-slate-900 bg-opacity-60 rounded-full">
              <span className="sr-only">Like</span>
              <svg className="h-8 w-8 fill-current" viewBox="0 0 32 32">
                <path d="M22.682 11.318A4.485 4.485 0 0019.5 10a4.377 4.377 0 00-3.5 1.707A4.383 4.383 0 0012.5 10a4.5 4.5 0 00-3.182 7.682L16 24l6.682-6.318a4.5 4.5 0 000-6.364zm-1.4 4.933L16 21.247l-5.285-5A2.5 2.5 0 0112.5 12c1.437 0 2.312.681 3.5 2.625C17.187 12.681 18.062 12 19.5 12a2.5 2.5 0 011.785 4.251h-.003z" />
              </svg>
            </div>
          </button>
        </Link>
        {/* Content */}
        <div className="grow p-5 flex flex-col">
          <div className="grow">
            <div className="text-sm font-semibold text-indigo-500 uppercase mb-2">
              2024年5月5日
            </div>
            <Link className="inline-flex mb-2" to="/community/meetups-post">
              <h3 className="text-lg font-bold text-slate-800 dark:text-slate-100">
                青少年心理健康倡导者
              </h3>
            </Link>
            <div className="text-sm">
              专访一位致力于提高青少年心理健康意识的社工，了解他在帮助青少年应对心理挑战方面的经验和成就。
            </div>
          </div>
          {/* Footer */}
          <div className="flex justify-between mt-3">
            {/* Tag */}
            <div className="text-xs inline-flex items-center font-medium bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-400 rounded-full text-center px-2.5 py-1">
              <svg
                className="w-4 h-3 fill-slate-400 dark:fill-slate-500 mr-2"
                viewBox="0 0 16 12">
                <path d="m16 2-4 2.4V2a2 2 0 0 0-2-2H2a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V7.6l4 2.4V2ZM2 10V2h8v8H2Z" />
              </svg>
              <span>查看详情</span>
            </div>
            {/* Avatars */}
            <div className="flex items-center space-x-2">
              <div className="flex -space-x-3 -ml-0.5">
                <img
                  className="rounded-full border-2 border-white dark:border-slate-800 box-content"
                  src={UserImage06}
                  width="28"
                  height="28"
                  alt="User 06"
                />
                <img
                  className="rounded-full border-2 border-white dark:border-slate-800 box-content"
                  src={UserImage03}
                  width="28"
                  height="28"
                  alt="User 03"
                />
                <img
                  className="rounded-full border-2 border-white dark:border-slate-800 box-content"
                  src={UserImage01}
                  width="28"
                  height="28"
                  alt="User 01"
                />
              </div>
              <div className="text-xs font-medium text-slate-400 dark:text-slate-500 italic">
                +12
              </div>
            </div>
          </div>
        </div>
      </article>

      {/* Item 4 */}
      <article className="flex bg-white dark:bg-slate-800 shadow-lg rounded-sm border border-slate-200 dark:border-slate-700 overflow-hidden">
        {/* Image */}
        <Link
          className="relative block w-24 sm:w-56 xl:sidebar-expanded:w-40 2xl:sidebar-expanded:w-56 shrink-0"
          to="/community/meetups-post">
          <img
            className="absolute object-cover object-center w-full h-full"
            src={MeetupsThumb04}
            width="220"
            height="236"
            alt="Meetup 04"
          />
          {/* Like button */}
          <button className="absolute top-0 right-0 mt-4 mr-4">
            <div className="text-slate-100 bg-slate-900 bg-opacity-60 rounded-full">
              <span className="sr-only">Like</span>
              <svg className="h-8 w-8 fill-current" viewBox="0 0 32 32">
                <path d="M22.682 11.318A4.485 4.485 0 0019.5 10a4.377 4.377 0 00-3.5 1.707A4.383 4.383 0 0012.5 10a4.5 4.5 0 00-3.182 7.682L16 24l6.682-6.318a4.5 4.5 0 000-6.364zm-1.4 4.933L16 21.247l-5.285-5A2.5 2.5 0 0112.5 12c1.437 0 2.312.681 3.5 2.625C17.187 12.681 18.062 12 19.5 12a2.5 2.5 0 011.785 4.251h-.003z" />
              </svg>
            </div>
          </button>
        </Link>
        {/* Content */}
        <div className="grow p-5 flex flex-col">
          <div className="grow">
            <div className="text-sm font-semibold text-indigo-500 uppercase mb-2">
              2024年6月20日
            </div>
            <Link className="inline-flex mb-2" to="/community/meetups-post">
              <h3 className="text-lg font-bold text-slate-800 dark:text-slate-100">
                老年福利服务的守护者
              </h3>
            </Link>
            <div className="text-sm">
              报道一位专注于改善老年人生活质量的社工，探讨她如何为老年人提供支持和帮助，让他们的晚年生活更加幸福。
            </div>
          </div>
          {/* Footer */}
          <div className="flex justify-between mt-3">
            {/* Tag */}
            <div className="text-xs inline-flex items-center font-medium bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-400 rounded-full text-center px-2.5 py-1">
              <svg
                className="w-4 h-3 fill-slate-400 dark:fill-slate-500 mr-2"
                viewBox="0 0 16 12">
                <path d="m16 2-4 2.4V2a2 2 0 0 0-2-2H2a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V7.6l4 2.4V2ZM2 10V2h8v8H2Z" />
              </svg>
              <span>查看详情</span>
            </div>
            {/* Avatars */}
            <div className="flex items-center space-x-2">
              <div className="flex -space-x-3 -ml-0.5">
                <img
                  className="rounded-full border-2 border-white dark:border-slate-800 box-content"
                  src={UserImage05}
                  width="28"
                  height="28"
                  alt="User 05"
                />
                <img
                  className="rounded-full border-2 border-white dark:border-slate-800 box-content"
                  src={UserImage02}
                  width="28"
                  height="28"
                  alt="User 02"
                />
              </div>
              <div className="text-xs font-medium text-slate-400 dark:text-slate-500 italic">
                +17
              </div>
            </div>
          </div>
        </div>
      </article>

      {/* Item 5 */}
      <article className="flex bg-white dark:bg-slate-800 shadow-lg rounded-sm border border-slate-200 dark:border-slate-700 overflow-hidden">
        {/* Image */}
        <Link
          className="relative block w-24 sm:w-56 xl:sidebar-expanded:w-40 2xl:sidebar-expanded:w-56 shrink-0"
          to="/community/meetups-post">
          <img
            className="absolute object-cover object-center w-full h-full"
            src={MeetupsThumb05}
            width="220"
            height="236"
            alt="Meetup 05"
          />
          {/* Like button */}
          <button className="absolute top-0 right-0 mt-4 mr-4">
            <div className="text-slate-100 bg-slate-900 bg-opacity-60 rounded-full">
              <span className="sr-only">Like</span>
              <svg className="h-8 w-8 fill-current" viewBox="0 0 32 32">
                <path d="M22.682 11.318A4.485 4.485 0 0019.5 10a4.377 4.377 0 00-3.5 1.707A4.383 4.383 0 0012.5 10a4.5 4.5 0 00-3.182 7.682L16 24l6.682-6.318a4.5 4.5 0 000-6.364zm-1.4 4.933L16 21.247l-5.285-5A2.5 2.5 0 0112.5 12c1.437 0 2.312.681 3.5 2.625C17.187 12.681 18.062 12 19.5 12a2.5 2.5 0 011.785 4.251h-.003z" />
              </svg>
            </div>
          </button>
        </Link>
        {/* Content */}
        <div className="grow p-5 flex flex-col">
          <div className="grow">
            <div className="text-sm font-semibold text-indigo-500 uppercase mb-2">
              2024年7月15日
            </div>
            <Link className="inline-flex mb-2" to="/community/meetups-post">
              <h3 className="text-lg font-bold text-slate-800 dark:text-slate-100">
                社区发展的推动者
              </h3>
            </Link>
            <div className="text-sm">
              聚焦一位致力于社区发展和改善居民生活的社工，展示他如何通过各种项目和活动，促进社区的和谐与进步。
            </div>
          </div>
          {/* Footer */}
          <div className="flex justify-between mt-3">
            {/* Tag */}
            <div className="text-xs inline-flex items-center font-medium bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-400 rounded-full text-center px-2.5 py-1">
              <svg
                className="w-4 h-3 fill-slate-400 dark:fill-slate-500 mr-2"
                viewBox="0 0 16 12">
                <path d="m16 2-4 2.4V2a2 2 0 0 0-2-2H2a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V7.6l4 2.4V2ZM2 10V2h8v8H2Z" />
              </svg>
              <span>查看详情</span>
            </div>
            {/* Avatars */}
            <div className="flex items-center space-x-2">
              <div className="flex -space-x-3 -ml-0.5">
                <img
                  className="rounded-full border-2 border-white dark:border-slate-800 box-content"
                  src={UserImage02}
                  width="28"
                  height="28"
                  alt="User 02"
                />
                <img
                  className="rounded-full border-2 border-white dark:border-slate-800 box-content"
                  src={UserImage01}
                  width="28"
                  height="28"
                  alt="User 01"
                />
              </div>
              <div className="text-xs font-medium text-slate-400 dark:text-slate-500 italic">
                +117
              </div>
            </div>
          </div>
        </div>
      </article>

      {/* Item 6 */}
      <article className="flex bg-white dark:bg-slate-800 shadow-lg rounded-sm border border-slate-200 dark:border-slate-700 overflow-hidden">
        {/* Image */}
        <Link
          className="relative block w-24 sm:w-56 xl:sidebar-expanded:w-40 2xl:sidebar-expanded:w-56 shrink-0"
          to="/community/meetups-post">
          <img
            className="absolute object-cover object-center w-full h-full"
            src={MeetupsThumb06}
            width="220"
            height="236"
            alt="Meetup 06"
          />
          {/* Like button */}
          <button className="absolute top-0 right-0 mt-4 mr-4">
            <div className="text-slate-100 bg-slate-900 bg-opacity-60 rounded-full">
              <span className="sr-only">Like</span>
              <svg className="h-8 w-8 fill-current" viewBox="0 0 32 32">
                <path d="M22.682 11.318A4.485 4.485 0 0019.5 10a4.377 4.377 0 00-3.5 1.707A4.383 4.383 0 0012.5 10a4.5 4.5 0 00-3.182 7.682L16 24l6.682-6.318a4.5 4.5 0 000-6.364zm-1.4 4.933L16 21.247l-5.285-5A2.5 2.5 0 0112.5 12c1.437 0 2.312.681 3.5 2.625C17.187 12.681 18.062 12 19.5 12a2.5 2.5 0 011.785 4.251h-.003z" />
              </svg>
            </div>
          </button>
        </Link>
        {/* Content */}
        <div className="grow p-5 flex flex-col">
          <div className="grow">
            <div className="text-sm font-semibold text-indigo-500 uppercase mb-2">
              2024年8月25日
            </div>
            <Link className="inline-flex mb-2" to="/community/meetups-post">
              <h3 className="text-lg font-bold text-slate-800 dark:text-slate-100">
                无家可归者援助项目的领航者
              </h3>
            </Link>
            <div className="text-sm">
              介绍一位在帮助无家可归者重返社会方面做出巨大贡献的社工，了解她如何为这一群体提供实际的帮助和支持。
            </div>
          </div>
          {/* Footer */}
          <div className="flex justify-between mt-3">
            {/* Tag */}
            <div className="text-xs inline-flex items-center font-medium bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-400 rounded-full text-center px-2.5 py-1">
              <svg
                className="w-4 h-3 fill-slate-400 dark:fill-slate-500 mr-2"
                viewBox="0 0 16 12">
                <path d="m16 2-4 2.4V2a2 2 0 0 0-2-2H2a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V7.6l4 2.4V2ZM2 10V2h8v8H2Z" />
              </svg>
              <span>查看详情</span>
            </div>
            {/* Avatars */}
            <div className="flex items-center space-x-2">
              <div className="flex -space-x-3 -ml-0.5">
                <img
                  className="rounded-full border-2 border-white dark:border-slate-800 box-content"
                  src={UserImage03}
                  width="28"
                  height="28"
                  alt="User 03"
                />
                <img
                  className="rounded-full border-2 border-white dark:border-slate-800 box-content"
                  src={UserImage05}
                  width="28"
                  height="28"
                  alt="User 05"
                />
                <img
                  className="rounded-full border-2 border-white dark:border-slate-800 box-content"
                  src={UserImage04}
                  width="28"
                  height="28"
                  alt="User 04"
                />
              </div>
              <div className="text-xs font-medium text-slate-400 dark:text-slate-500 italic">
                +64
              </div>
            </div>
          </div>
        </div>
      </article>

      {/* Item 7 */}
      <article className="flex bg-white dark:bg-slate-800 shadow-lg rounded-sm border border-slate-200 dark:border-slate-700 overflow-hidden">
        {/* Image */}
        <Link
          className="relative block w-24 sm:w-56 xl:sidebar-expanded:w-40 2xl:sidebar-expanded:w-56 shrink-0"
          to="/community/meetups-post">
          <img
            className="absolute object-cover object-center w-full h-full"
            src={MeetupsThumb07}
            width="220"
            height="236"
            alt="Meetup 07"
          />
          {/* Like button */}
          <button className="absolute top-0 right-0 mt-4 mr-4">
            <div className="text-slate-100 bg-slate-900 bg-opacity-60 rounded-full">
              <span className="sr-only">Like</span>
              <svg className="h-8 w-8 fill-current" viewBox="0 0 32 32">
                <path d="M22.682 11.318A4.485 4.485 0 0019.5 10a4.377 4.377 0 00-3.5 1.707A4.383 4.383 0 0012.5 10a4.5 4.5 0 00-3.182 7.682L16 24l6.682-6.318a4.5 4.5 0 000-6.364zm-1.4 4.933L16 21.247l-5.285-5A2.5 2.5 0 0112.5 12c1.437 0 2.312.681 3.5 2.625C17.187 12.681 18.062 12 19.5 12a2.5 2.5 0 011.785 4.251h-.003z" />
              </svg>
            </div>
          </button>
        </Link>
        {/* Content */}
        <div className="grow p-5 flex flex-col">
          <div className="grow">
            <div className="text-sm font-semibold text-indigo-500 uppercase mb-2">
              2024年9月10日
            </div>
            <Link className="inline-flex mb-2" to="/community/meetups-post">
              <h3 className="text-lg font-bold text-slate-800 dark:text-slate-100">
                残疾人权益的捍卫者
              </h3>
            </Link>
            <div className="text-sm">
              报道一位专注于提升残疾人生活质量和权益保护的社工，探索他在推动残疾人社会融入方面的努力和成果。
            </div>
          </div>
          {/* Footer */}
          <div className="flex justify-between mt-3">
            {/* Tag */}
            <div className="text-xs inline-flex items-center font-medium bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-400 rounded-full text-center px-2.5 py-1">
              <svg
                className="w-4 h-3 fill-slate-400 dark:fill-slate-500 mr-2"
                viewBox="0 0 16 12">
                <path d="m16 2-4 2.4V2a2 2 0 0 0-2-2H2a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V7.6l4 2.4V2ZM2 10V2h8v8H2Z" />
              </svg>
              <span>查看详情</span>
            </div>
            {/* Avatars */}
            <div className="flex items-center space-x-2">
              <div className="flex -space-x-3 -ml-0.5">
                <img
                  className="rounded-full border-2 border-white dark:border-slate-800 box-content"
                  src={UserImage02}
                  width="28"
                  height="28"
                  alt="User 02"
                />
                <img
                  className="rounded-full border-2 border-white dark:border-slate-800 box-content"
                  src={UserImage04}
                  width="28"
                  height="28"
                  alt="User 04"
                />
              </div>
              <div className="text-xs font-medium text-slate-400 dark:text-slate-500 italic">
                +112
              </div>
            </div>
          </div>
        </div>
      </article>

      {/* Item 8 */}
      <article className="flex bg-white dark:bg-slate-800 shadow-lg rounded-sm border border-slate-200 dark:border-slate-700 overflow-hidden">
        {/* Image */}
        <Link
          className="relative block w-24 sm:w-56 xl:sidebar-expanded:w-40 2xl:sidebar-expanded:w-56 shrink-0"
          to="/community/meetups-post">
          <img
            className="absolute object-cover object-center w-full h-full"
            src={MeetupsThumb08}
            width="220"
            height="236"
            alt="Meetup 08"
          />
          {/* Like button */}
          <button className="absolute top-0 right-0 mt-4 mr-4">
            <div className="text-slate-100 bg-slate-900 bg-opacity-60 rounded-full">
              <span className="sr-only">Like</span>
              <svg className="h-8 w-8 fill-current" viewBox="0 0 32 32">
                <path d="M22.682 11.318A4.485 4.485 0 0019.5 10a4.377 4.377 0 00-3.5 1.707A4.383 4.383 0 0012.5 10a4.5 4.5 0 00-3.182 7.682L16 24l6.682-6.318a4.5 4.5 0 000-6.364zm-1.4 4.933L16 21.247l-5.285-5A2.5 2.5 0 0112.5 12c1.437 0 2.312.681 3.5 2.625C17.187 12.681 18.062 12 19.5 12a2.5 2.5 0 011.785 4.251h-.003z" />
              </svg>
            </div>
          </button>
        </Link>
        {/* Content */}
        <div className="grow p-5 flex flex-col">
          <div className="grow">
            <div className="text-sm font-semibold text-indigo-500 uppercase mb-2">
              2024年10月30日
            </div>
            <Link className="inline-flex mb-2" to="/community/meetups-post">
              <h3 className="text-lg font-bold text-slate-800 dark:text-slate-100">
                社工在公共卫生危机中的角色
              </h3>
            </Link>
            <div className="text-sm">
              深度报道社工在面对公共卫生危机，如疫情爆发时，如何发挥其关键作用，支持社区和个人渡过难关。
            </div>
          </div>
          {/* Footer */}
          <div className="flex justify-between mt-3">
            {/* Tag */}
            <div className="text-xs inline-flex items-center font-medium bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-400 rounded-full text-center px-2.5 py-1">
              <svg
                className="w-4 h-3 fill-slate-400 dark:fill-slate-500 mr-2"
                viewBox="0 0 16 12">
                <path d="m16 2-4 2.4V2a2 2 0 0 0-2-2H2a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V7.6l4 2.4V2ZM2 10V2h8v8H2Z" />
              </svg>
              <span>查看详情</span>
            </div>
            {/* Avatars */}
            <div className="flex items-center space-x-2">
              <div className="flex -space-x-3 -ml-0.5">
                <img
                  className="rounded-full border-2 border-white dark:border-slate-800 box-content"
                  src={UserImage01}
                  width="28"
                  height="28"
                  alt="User 01"
                />
                <img
                  className="rounded-full border-2 border-white dark:border-slate-800 box-content"
                  src={UserImage05}
                  width="28"
                  height="28"
                  alt="User 05"
                />
                <img
                  className="rounded-full border-2 border-white dark:border-slate-800 box-content"
                  src={UserImage06}
                  width="28"
                  height="28"
                  alt="User 06"
                />
              </div>
              <div className="text-xs font-medium text-slate-400 dark:text-slate-500 italic">
                +32
              </div>
            </div>
          </div>
        </div>
      </article>
    </div>
  )
}

export default MeetupsPosts
