<template>
  <div class="category-heading text-center">
    <div class="text-5xl text-white font-bold pb-6">Ranks</div>
    <div class="info-wrap">
      <button @click="show = !show" class="text-gray-500 inline-flex items-center mx-auto rounded-md py-3 px-5 font-bold border border-lighten transition-colors duration-150 ease-in-out hover:border-yellow-400 hover:text-white focus:outline-none">
        <svg class="w-6 h-6 opacity-50 mr-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clip-rule="evenodd"/>
        </svg>
        <span>How does the rank system work?</span>
      </button>
      <div :class="show ? '' : 'opacity-0 pointer-events-none'" class="info-text lg:w-2/3 mx-auto text-gray-500 transition-all duration-200 ease-in-out" :style="{height: show ? '356px' : '0px'}">
        <div class="px-10 pt-8 pb-4">
          <div class="text-xl font-bold text-white mb-4">This is where things get interesting!</div>
          <p class="mb-3">Here on Origin Realms, we believe your rank should simply be a thank you for your support. As you'll see below, each rank has a price range that you'll need to meet before automatically being given the benefits.</p>
          <p class="mb-3">This means you will be given the rank as a free bonus, depending on how much you have spent in total on the store. Let's say you spend $3 to gain the VIP rank, you could then spend more the next week and climb your way to PRO or above!</p>
          <p>To see how much money you have spent in total, simply run the /donate command in-game!</p>
          <div @click="show = !show" class="text-red-500 font-bold mt-6 cursor-pointer select-none">Close</div>
        </div>
      </div>
    </div>
  </div>
  <div class="rank-grid grid md:grid-cols-2 lg:grid-cols-4 gap-4 mt-12">
    <div class="rank bg-gray-800 rank-vip">
      <div class="heading text-center text-base font-bold py-8 px-4 text-shadow-md" style="background-color: rgb(233, 179, 8);">
        <div class="tag">
          <svg class="h-4 mx-auto" fill="white" style="filter:drop-shadow(4px 0px 0 rgba(0,0,0,0.3))" viewBox="0 0 15 5" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 0H1V3H0V0Z"/>
            <path d="M2 4H1V3H2V4Z"/>
            <path d="M3 4V5H2V4H3Z"/>
            <path d="M4 3V4H3V3H4Z"/>
            <path d="M4 3V0H5V3H4Z"/>
            <path d="M6 0H9V1H8V4H9V5H6V4H7V1L6 1V0Z"/>
            <path d="M10 0H14V1H11V2H14V3H11V5H10V0Z"/>
            <path d="M14 2H15V1H14V2Z"/>
          </svg>
        </div>
        <div>
          <div class="leading-0 pt-4">$1.00 - 10.00 USD</div>
        </div>
      </div>
      <div class="content font-bold text-gray-500 p-6">
        <div class="title text-white text-left font-bold pb-3">Realm</div>
        <ul class="pb-8">
          <li class="flex items-center pb-2">
            <svg class="w-5 h-5 mr-3 opacity-50" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M3 4a1 1 0 011-1h4a1 1 0 010 2H6.414l2.293 2.293a1 1 0 11-1.414 1.414L5 6.414V8a1 1 0 01-2 0V4zm9 1a1 1 0 010-2h4a1 1 0 011 1v4a1 1 0 01-2 0V6.414l-2.293 2.293a1 1 0 11-1.414-1.414L13.586 5H12zm-9 7a1 1 0 012 0v1.586l2.293-2.293a1 1 0 111.414 1.414L6.414 15H8a1 1 0 010 2H4a1 1 0 01-1-1v-4zm13-1a1 1 0 011 1v4a1 1 0 01-1 1h-4a1 1 0 010-2h1.586l-2.293-2.293a1 1 0 111.414-1.414L15 13.586V12a1 1 0 011-1z" clip-rule="evenodd"/>
            </svg>
            <span>325x325 Size</span>
          </li>
          <li class="flex items-center pb-2">
            <svg class="w-5 h-5 mr-3 opacity-50" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd"/>
            </svg>
            <span>8 Members</span>
          </li>
          <li class="flex items-center">
            <svg class="w-5 h-5 mr-3 opacity-50" fill="currentColor" viewBox="0 0 20 20">
              <path d="M10 2a5 5 0 00-5 5v2a2 2 0 00-2 2v5a2 2 0 002 2h10a2 2 0 002-2v-5a2 2 0 00-2-2H7V7a3 3 0 015.905-.75 1 1 0 001.937-.5A5.002 5.002 0 0010 2z"/>
            </svg>
            <span>Not always open</span>
          </li>
        </ul>
        <div class="title text-white text-left font-bold pb-3">Auction House</div>
        <ul class="pb-6">
          <li class="flex items-center pb-2">
            <svg class="w-5 h-5 mr-3 opacity-50" fill="currentColor" viewBox="0 0 20 20">
              <path d="M10 3.5a1.5 1.5 0 013 0V4a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-.5a1.5 1.5 0 000 3h.5a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-.5a1.5 1.5 0 00-3 0v.5a1 1 0 01-1 1H6a1 1 0 01-1-1v-3a1 1 0 00-1-1h-.5a1.5 1.5 0 010-3H4a1 1 0 001-1V6a1 1 0 011-1h3a1 1 0 001-1v-.5z"/>
            </svg>
            <span>4 Items</span>
          </li>
          <li class="flex items-center">
            <svg class="w-5 h-5 mr-3 opacity-50" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clip-rule="evenodd"/>
            </svg>
            <span>8 Hours</span>
          </li>
        </ul>
        <div class="title text-white text-left font-bold pb-3">Miscellaneous</div>
        <ul>
          <li class="flex items-center pb-2">
            <svg class="w-5 h-5 mr-3 opacity-50" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM7 9a1 1 0 100-2 1 1 0 000 2zm7-1a1 1 0 11-2 0 1 1 0 012 0zm-.464 5.535a1 1 0 10-1.415-1.414 3 3 0 01-4.242 0 1 1 0 00-1.415 1.414 5 5 0 007.072 0z" clip-rule="evenodd"/>
            </svg>
            <span>Basic Emoji Pack</span>
          </li>
          <li class="flex items-center">
            <svg class="w-5 h-5 mr-3 opacity-50" fill="currentColor" viewBox="0 0 20 20">
              <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"/>
            </svg>
            <span>6 Personal Homes</span>
          </li>
        </ul>
      </div>
    </div>
    <div class="rank bg-gray-800 rank-pro">
      <div class="heading text-center text-base font-bold py-8 px-4 text-shadow-md" style="background-color: rgb(133, 204, 22);">
        <div class="tag">
          <svg class="h-4 mx-auto" fill="white" style="filter:drop-shadow(4px 0px 0 rgba(0,0,0,0.3))" viewBox="0 0 17 5">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M0 0V5H1V3H4V2H5V1H4V0H0ZM4 1H1V2H4V1Z"/>
            <path d="M6 0H10V1H7V2H10V3H7V5H6V0Z"/>
            <path d="M10 3H11V5H10V3Z"/>
            <path d="M10 2H11V1H10V2Z"/>
            <path d="M16 1.19209e-07V1H13V0L16 1.19209e-07Z"/>
            <path d="M13 4H12V1H13V4Z"/>
            <path d="M16 4V5H13V4H16Z"/>
            <path d="M16 4H17V1H16V4Z"/>
          </svg>
        </div>
        <div>
          <div class="leading-0 pt-4">$11.00 - 30.00 USD</div>
        </div>
      </div>
      <div class="content font-bold text-gray-500 p-6">
        <div class="title text-white text-left font-bold pb-3">Realm</div>
        <ul class="pb-8">
          <li class="flex items-center pb-2">
            <svg class="w-5 h-5 mr-3 opacity-50" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M3 4a1 1 0 011-1h4a1 1 0 010 2H6.414l2.293 2.293a1 1 0 11-1.414 1.414L5 6.414V8a1 1 0 01-2 0V4zm9 1a1 1 0 010-2h4a1 1 0 011 1v4a1 1 0 01-2 0V6.414l-2.293 2.293a1 1 0 11-1.414-1.414L13.586 5H12zm-9 7a1 1 0 012 0v1.586l2.293-2.293a1 1 0 111.414 1.414L6.414 15H8a1 1 0 010 2H4a1 1 0 01-1-1v-4zm13-1a1 1 0 011 1v4a1 1 0 01-1 1h-4a1 1 0 010-2h1.586l-2.293-2.293a1 1 0 111.414-1.414L15 13.586V12a1 1 0 011-1z" clip-rule="evenodd"/>
            </svg>
            <span>350x350 Size</span>
          </li>
          <li class="flex items-center pb-2">
            <svg class="w-5 h-5 mr-3 opacity-50" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd"/>
            </svg>
            <span>10 Members</span>
          </li>
          <li class="flex items-center">
            <svg class="w-5 h-5 mr-3 opacity-50" fill="currentColor" viewBox="0 0 20 20">
              <path d="M10 2a5 5 0 00-5 5v2a2 2 0 00-2 2v5a2 2 0 002 2h10a2 2 0 002-2v-5a2 2 0 00-2-2H7V7a3 3 0 015.905-.75 1 1 0 001.937-.5A5.002 5.002 0 0010 2z"/>
            </svg>
            <span>Not always open</span>
          </li>
        </ul>
        <div class="title text-white text-left font-bold pb-3">Auction House</div>
        <ul class="pb-6">
          <li class="flex items-center pb-2">
          <svg class="w-5 h-5 mr-3 opacity-50" fill="currentColor" viewBox="0 0 20 20">
            <path d="M10 3.5a1.5 1.5 0 013 0V4a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-.5a1.5 1.5 0 000 3h.5a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-.5a1.5 1.5 0 00-3 0v.5a1 1 0 01-1 1H6a1 1 0 01-1-1v-3a1 1 0 00-1-1h-.5a1.5 1.5 0 010-3H4a1 1 0 001-1V6a1 1 0 011-1h3a1 1 0 001-1v-.5z"/>
          </svg>
            <span>5 Items</span>
          </li>
          <li class="flex items-center">
            <svg class="w-5 h-5 mr-3 opacity-50" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clip-rule="evenodd"/>
            </svg>
            <span>12 Hours</span>
          </li>
        </ul>
        <div class="title text-white text-left font-bold pb-3">Miscellaneous</div>
        <ul>
          <li class="flex items-center pb-2">
            <svg class="w-5 h-5 mr-3 opacity-50" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM7 9a1 1 0 100-2 1 1 0 000 2zm7-1a1 1 0 11-2 0 1 1 0 012 0zm-.464 5.535a1 1 0 10-1.415-1.414 3 3 0 01-4.242 0 1 1 0 00-1.415 1.414 5 5 0 007.072 0z" clip-rule="evenodd"/>
            </svg>
            <span>Basic Emoji Pack</span>
          </li>
          <li class="flex items-center">
            <svg class="w-5 h-5 mr-3 opacity-50" fill="currentColor" viewBox="0 0 20 20">
              <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"/>
            </svg>
            <span>8 Personal Homes</span>
          </li>
        </ul>
      </div>
    </div>
    <div class="rank bg-gray-800 rank-mvp">
      <div class="heading text-center text-base font-bold py-8 px-4 text-shadow-md" style="background-color: rgb(14, 166, 233);">
        <div class="tag">
          <svg class="h-4 mx-auto" fill="white" style="filter:drop-shadow(4px 0px 0 rgba(0,0,0,0.3))" viewBox="0 0 17 5">
            <path d="M0 0H1V1H2V2H1V5H0V0Z"/>
            <path d="M3 2V3H2V2H3Z"/>
            <path d="M3 2V1H4V0H5V5H4V2H3Z"/>
            <path d="M6 0H7V3H6V0Z"/>
            <path d="M8 4H7V3H8V4Z"/>
            <path d="M9 4V5H8V4H9Z"/>
            <path d="M10 3V4H9V3H10Z"/>
            <path d="M10 3V0H11V3H10Z"/>
            <path d="M12 0H16V1H13V2H16V3H13V5H12V0Z"/>
            <path d="M16 2H17V1H16V2Z"/>
          </svg>
        </div>
        <div>
          <div class="leading-0 pt-4">$31.00 - 80.00 USD</div>
        </div>
      </div>
      <div class="content font-bold text-gray-500 p-6">
        <div class="title text-white text-left font-bold pb-3">Realm</div>
        <ul class="pb-8">
          <li class="flex items-center pb-2">
            <svg class="w-5 h-5 mr-3 opacity-50" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M3 4a1 1 0 011-1h4a1 1 0 010 2H6.414l2.293 2.293a1 1 0 11-1.414 1.414L5 6.414V8a1 1 0 01-2 0V4zm9 1a1 1 0 010-2h4a1 1 0 011 1v4a1 1 0 01-2 0V6.414l-2.293 2.293a1 1 0 11-1.414-1.414L13.586 5H12zm-9 7a1 1 0 012 0v1.586l2.293-2.293a1 1 0 111.414 1.414L6.414 15H8a1 1 0 010 2H4a1 1 0 01-1-1v-4zm13-1a1 1 0 011 1v4a1 1 0 01-1 1h-4a1 1 0 010-2h1.586l-2.293-2.293a1 1 0 111.414-1.414L15 13.586V12a1 1 0 011-1z" clip-rule="evenodd"/>
            </svg>
            <span>375x375 Size</span>
          </li>
          <li class="flex items-center pb-2">
            <svg class="w-5 h-5 mr-3 opacity-50" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd"/>
            </svg>
            <span>12 Members</span>
          </li>
          <li class="flex items-center">
            <svg class="w-5 h-5 mr-3 opacity-50" fill="currentColor" viewBox="0 0 20 20">
              <path d="M10 2a5 5 0 00-5 5v2a2 2 0 00-2 2v5a2 2 0 002 2h10a2 2 0 002-2v-5a2 2 0 00-2-2H7V7a3 3 0 015.905-.75 1 1 0 001.937-.5A5.002 5.002 0 0010 2z"/>
            </svg>
            <span>Not always open</span>
          </li>
        </ul>
        <div class="title text-white text-left font-bold pb-3">Auction House</div>
        <ul class="pb-6">
          <li class="flex items-center pb-2">
            <svg class="w-5 h-5 mr-3 opacity-50" fill="currentColor" viewBox="0 0 20 20">
              <path d="M10 3.5a1.5 1.5 0 013 0V4a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-.5a1.5 1.5 0 000 3h.5a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-.5a1.5 1.5 0 00-3 0v.5a1 1 0 01-1 1H6a1 1 0 01-1-1v-3a1 1 0 00-1-1h-.5a1.5 1.5 0 010-3H4a1 1 0 001-1V6a1 1 0 011-1h3a1 1 0 001-1v-.5z"/>
            </svg>
            <span>6 Items</span>
          </li>
          <li class="flex items-center">
            <svg class="w-5 h-5 mr-3 opacity-50" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clip-rule="evenodd"/>
            </svg>
            <span>18 Hours</span>
          </li>
        </ul>
        <div class="title text-white text-left font-bold pb-3">Miscellaneous</div>
        <ul>
          <li class="flex items-center pb-2">
            <svg class="w-5 h-5 mr-3 opacity-50" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM7 9a1 1 0 100-2 1 1 0 000 2zm7-1a1 1 0 11-2 0 1 1 0 012 0zm-.464 5.535a1 1 0 10-1.415-1.414 3 3 0 01-4.242 0 1 1 0 00-1.415 1.414 5 5 0 007.072 0z" clip-rule="evenodd"/>
            </svg>
            <span>Basic Emoji Pack</span>
          </li>
          <li class="flex items-center">
            <svg class="w-5 h-5 mr-3 opacity-50" fill="currentColor" viewBox="0 0 20 20">
              <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"/>
            </svg>
            <span>10 Personal Homes</span>
          </li>
        </ul>
      </div>
    </div>
    <div class="rank bg-gray-800 rank-elite">
      <div class="heading text-center text-base font-bold py-8 px-4 text-shadow-md" style="background-color: rgb(235, 72, 153);">
        <div class="tag">
          <svg class="h-4 mx-auto" fill="white" style="filter:drop-shadow(4px 0px 0 rgba(0,0,0,0.3))" viewBox="0 0 27 5">
            <path d="M0 0V5H5V4H1V3H3V2H1V1H5V0H0Z"/>
            <path d="M22 0V5H27V4H23V3H25V2H23V1H27V0H22Z"/>
            <path d="M6 0H7V4H11V5H6V0Z"/>
            <path d="M12 0H15V1H14V4H15V5H12V4H13V1H12V0Z"/>
            <path d="M21 0H16V1H18V5H19V1H21V0Z"/>
          </svg>
        </div>
        <div>
          <div class="leading-0 pt-4">$81.00+ USD</div>
        </div>
      </div>
      <div class="content font-bold text-gray-500 p-6">
        <div class="title text-white text-left font-bold pb-3">Realm</div>
        <ul class="pb-8">
          <li class="flex items-center pb-2">
            <svg class="w-5 h-5 mr-3 opacity-50" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M3 4a1 1 0 011-1h4a1 1 0 010 2H6.414l2.293 2.293a1 1 0 11-1.414 1.414L5 6.414V8a1 1 0 01-2 0V4zm9 1a1 1 0 010-2h4a1 1 0 011 1v4a1 1 0 01-2 0V6.414l-2.293 2.293a1 1 0 11-1.414-1.414L13.586 5H12zm-9 7a1 1 0 012 0v1.586l2.293-2.293a1 1 0 111.414 1.414L6.414 15H8a1 1 0 010 2H4a1 1 0 01-1-1v-4zm13-1a1 1 0 011 1v4a1 1 0 01-1 1h-4a1 1 0 010-2h1.586l-2.293-2.293a1 1 0 111.414-1.414L15 13.586V12a1 1 0 011-1z" clip-rule="evenodd"/>
            </svg>
            <span>400x400 Size</span>
          </li>
          <li class="flex items-center pb-2">
            <svg class="w-5 h-5 mr-3 opacity-50" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd"/>
            </svg>
            <span>14 Members</span>
          </li>
          <li class="flex items-center">
            <svg class="w-5 h-5 mr-3 opacity-50" fill="currentColor" viewBox="0 0 20 20">
              <path d="M10 2a5 5 0 00-5 5v2a2 2 0 00-2 2v5a2 2 0 002 2h10a2 2 0 002-2v-5a2 2 0 00-2-2H7V7a3 3 0 015.905-.75 1 1 0 001.937-.5A5.002 5.002 0 0010 2z"/>
            </svg>
            <span>Always open!</span>
          </li>
        </ul>
        <div class="title text-white text-left font-bold pb-3">Auction House</div>
        <ul class="pb-6">
          <li class="flex items-center pb-2">
            <svg class="w-5 h-5 mr-3 opacity-50" fill="currentColor" viewBox="0 0 20 20">
              <path d="M10 3.5a1.5 1.5 0 013 0V4a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-.5a1.5 1.5 0 000 3h.5a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-.5a1.5 1.5 0 00-3 0v.5a1 1 0 01-1 1H6a1 1 0 01-1-1v-3a1 1 0 00-1-1h-.5a1.5 1.5 0 010-3H4a1 1 0 001-1V6a1 1 0 011-1h3a1 1 0 001-1v-.5z"/>
            </svg>
            <span>7 Items</span>
          </li>
          <li class="flex items-center">
            <svg class="w-5 h-5 mr-3 opacity-50" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clip-rule="evenodd"/>
            </svg>
            <span>24 Hours</span>
          </li>
        </ul>
        <div class="title text-white text-left font-bold pb-3">Miscellaneous</div>
        <ul>
          <li class="flex items-center pb-2">
            <svg class="w-5 h-5 mr-3 opacity-50" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM7 9a1 1 0 100-2 1 1 0 000 2zm7-1a1 1 0 11-2 0 1 1 0 012 0zm-.464 5.535a1 1 0 10-1.415-1.414 3 3 0 01-4.242 0 1 1 0 00-1.415 1.414 5 5 0 007.072 0z" clip-rule="evenodd"/>
            </svg>
            <span>Basic Emoji Pack</span>
          </li>
          <li class="flex items-center">
            <svg class="w-5 h-5 mr-3 opacity-50" fill="currentColor" viewBox="0 0 20 20">
              <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"/>
            </svg>
            <span>12 Personal Homes</span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "RankComponent"
}
</script>

<script setup>
import {shallowRef} from "vue";

const show = shallowRef(false)
</script>