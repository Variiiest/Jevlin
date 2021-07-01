import React, { Component } from 'react'

export class Navbar extends Component {
    render() {
        return (
          <div>
          <style dangerouslySetInnerHTML={{__html: "\n        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@200;400;500&display=swap');\n        \n        .font-inter{\n          font-family: 'Inter', sans-serif;\n        }\n        \n        .bgmap{\n          background-image:url('https://cdn.pixabay.com/photo/2013/06/06/15/36/world-117174_960_720.png');\n          background-repeat:no-repeat;\n        }\n      " }} />
  {/*Header */}
  <section className="w-full px-6 antialiased font-inter bg-gray-50">
    <div className="mx-auto max-w-7xl">
      <div className="container max-w-lg px-4 py-24 mx-auto text-left md:max-w-none md:text-center">
        <p className="text-base text-blue-600 mb-4 font-bold">WE HELP TO SETUP YOUR STORE</p>
        <h1 className="text-4xl font-bold leading-20 tracking-tight text-left text-gray-900 md:text-center sm:leading-none md:text-6xl lg:text-7xl">
          <span className="inline md:block">
            Smart Invoice tool to 
          </span>
          <span className="relative mt-4 mb-2 md:inline-block">
            grow your business
          </span>
        </h1>
        <div className="mx-auto mt-4 text-gray-600 md:mt-12 md:max-w-xl md:text-center lg:text-2xl tracking-tight tex-lg">Paperless Invoices Generation to help grow your business seamlessly with Easiest tool.</div>
        <div className="flex flex-col items-center mt-12 text-center"> <span className="relative inline-flex w-full md:w-auto">
            <a href="#_" type="button" className="inline-flex items-center justify-center w-full px-8 py-4 text-lg leading-6 text-white bg-blue-600  border border-transparent md:w-auto hover:bg-blue-700focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-700 rounded-md">
              Start Free Trial
            </a>
          </span>
        </div>
      </div>
    </div>
  </section>
  {/*- Product -*/}
  <section className="text-gray-800 body-font font-bold bg-gray-50">
    <div className="container mx-auto flex px-5 py-6 items-center justify-center flex-col">
      <img className="lg:w-5/6 mb-10 object-cover object-center rounded" alt="hero" src="https://cdn.pixabay.com/photo/2013/06/06/15/36/world-117174_960_720.png" />
    </div>
  </section>
  {/* Benifits -*/}
  <section className="text-gray-800 body-font bg-white">
    <div className="container max-w-6xl mx-auto flex px-5 py-6 items-center justify-center flex-col">
      <div className="flex flex-wrap items-center pb-12">
        <div className="md:w-1/2 lg:w-2/3 w-full xl:pr-20 md:pr-6">
          <div className="py-2">
            <h1 className="text-3xl lg:text-5xl md:leading-snug tracking-tighter text-gray-900 font-bold ">Create your shop
              <span className="text-green-300"> We create your value</span></h1>
            <h2 className="text-lg lg:text-2xl lg:leading-7 md:leading-10 py-4 md:py-8 text-gray-600">Phasellus fermentum, enim quis laoreet fermentum, nisl purus tempor sapien, quis sodales ante lorem non ipsum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus condimentum eget leo quis lacinia. Suspendisse at finibus enim.</h2>
            <button className="px-4 py-2 rounded-lg bg-green-300 text-lg text-white mb-4 focus:outline-none">Inventory</button>
          </div>
        </div>
        <div className="lg:w-1/3 md:w-1/2 w-full relative h-96 flex items-end justify-center">
          <img className="absolute w-full h-full inset-0 object-cover object-center rounded-md" src="https://cdn.pixabay.com/photo/2020/09/19/12/50/woman-5584377_960_720.jpg" alt="" />
          <div className="relative z-10 bg-white rounded-md shadow-2xl border p-6 w-10/12 -mb-20">
            <div className="flex items-center justify-between w-full sm:w-full">
              <div className="rounded-lg">
                <div className="w-12 h-12 inline-flex items-center justify-center rounded-md bg-green-400 text-white mb-4">
                  <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-6 h-6" viewBox="0 0 24 24">
                    <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
                  </svg>
                </div>
                <h2 className="text-lg text-gray-900 font-medium title-font mb-2">Shooting Stars</h2>
                <p className="leading-relaxed text-base">Fingerstache flexitarian street art 8-bit waist co, subway tile poke farm.</p>
              </div>
              <div />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="container max-w-6xl mx-auto py-24 flex px-5 py-6 items-center justify-center flex-col">
      <div className="flex flex-wrap flex-row-reverse items-center">
        <div className="md:w-1/2 lg:w-2/3 w-full lg:pl-20 md:pl-10 sm:pl-0 pl-0">
          <div className="py-2 text-color">
            <h1 className="text-3xl lg:text-5xl md:leading-snug tracking-tighter text-gray-900 font-bold">Generate Invoice 
              <span className="text-blue-600"> Share by multiple channels </span></h1>
            <h2 className="text-lg lg:text-2xl lg:leading-7 md:leading-10 py-4 md:py-8 text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum sed sodales tellus. Donec varius velit porttitor, pretium erat in, hendrerit nisl. Nullam ex nisl, pulvinar sit amet ultrices sit amet, consectetur a eros. </h2>
            <button className="px-4 py-2 mb-4 rounded-lg bg-blue-600 text-lg text-white focus:outline-none">Invoice</button>
          </div>
        </div>
        <div className="lg:w-1/3 md:w-1/2 w-full relative h-96 flex items-end justify-center">
          <img className="absolute w-full h-full inset-0 object-cover object-center rounded-md" src="https://cdn.pixabay.com/photo/2016/03/09/09/22/meeting-1245776_960_720.jpg" alt="" />
          <div className="relative z-10 p-4 bg-white shadow-2xl border rounded mx-auto w-9/12 -mb-20">
            <div className="rounded-lg">
              <div className="w-12 h-12 inline-flex items-center justify-center rounded-md bg-blue-100 text-white mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-file-text" width={44} height={44} viewBox="0 0 24 24" strokeWidth="1.5" stroke="#2c3e50" fill="none" strokeLinecap="round" strokeLinejoin="round">
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M14 3v4a1 1 0 0 0 1 1h4" />
                  <path d="M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z" />
                  <line x1={9} y1={9} x2={10} y2={9} />
                  <line x1={9} y1={13} x2={15} y2={13} />
                  <line x1={9} y1={17} x2={15} y2={17} />
                </svg>
              </div>
              <h4 className="text-lg text-gray-900 font-medium title-font mb-2">Generated Invoices File</h4>
              <p className="leading-relaxed text-base">Fingerstache flexitarian street art 8-bit waist co, subway tile poke farm.</p>
              <button className="relative focus:outline-none mt-4 py-2 pr-10 rounded-md bg-blue-600 text-white tracking-normal text-xs pl-3">View Invoice
                <svg xmlns="http://www.w3.org/2000/svg" className="absolute inset-0 m-auto mr-3 icon icon-tabler icon-tabler-arrow-right" width={16} height={16} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                  <path stroke="none" d="M0 0h24v24H0z" />
                  <line x1={5} y1={12} x2={19} y2={12} />
                  <line x1={13} y1={18} x2={19} y2={12} />
                  <line x1={13} y1={6} x2={19} y2={12} />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/*-Stats -*/}
  <section className="text-gray-900 body-font bg-blue-600">
    <div className="container max-w-6xl px-5 py-48 mx-auto lg:px-8 rounded-md bgmap">
      <div className="flex flex-wrap -m-4 text-center">
        <div className="p-4 sm:w-1/4 w-1/2">
          <div className="p-4 bg-white rounded-md">
            <h2 className="title-font font-medium sm:text-4xl text-3xl">27mn+</h2>
            <p className="leading-relaxed">Users</p>
          </div>
        </div>
        <div className="p-3 sm:w-1/4 w-1/2">
          <div className="p-6 bg-white rounded-md">
            <h2 className="title-font font-medium sm:text-4xl text-3xl">14mn+</h2>
            <p className="leading-relaxed">Downloads</p>
          </div>
        </div>
        <div className="p-3 sm:w-1/4 w-1/2">
          <div className="p-6 bg-gradient-to-r from-blue-300 to-pink-200 rounded-md border shadow-xl border-blue-500">
            <h2 className="title-font font-medium sm:text-4xl text-3xl">36k+</h2>
            <p className="leading-relaxed">Stores</p>
          </div>
        </div>
        <div className="p-4 sm:w-1/4 w-1/2">
          <div className="p-4 bg-white rounded-md">
            <h2 className="title-font font-medium sm:text-4xl text-3xl">9K+</h2>
            <p className="leading-relaxed">Companies</p>
          </div>
        </div>
      </div>
    </div>
    <svg className="fill-current text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 225">
      <path fillOpacity={1} d="M0,224L1440,32L1440,320L0,320Z" />
    </svg>
  </section>
  <footer className="text-gray-900 body-font bg-white">
    <div className="container max-w-6xl px-5 sm:pb-6 py-12 mx-auto flex lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
      <div className="sm:w-1/3 w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
        <a href="#_" className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900"> <span className="text-2xl font-bold font-inter">Invoice</span>
        </a>
        <p className="mt-2 text-sm text-gray-600 mb-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum sed sodales tellus. Donec varius velit porttitor, pretium erat in, hendrerit nisl.</p>
        <p className="text-gray-500 text-sm text-center sm:text-left mb-5">© 2021 Invoices</p>
      </div>
      <div className="flex-grow flex flex-wrap sm:ml-24 mx-auto justify-center md:text-left text-center">
        <div className="lg:w-1/3 md:w-1/2 w-full px-4">
          <h2 className="title-font font-bold text-blue-700 tracking-tighter mb-3">CATEGORIES</h2>
          <nav className="list-none mb-10">
            <li> <a href="#_" className="text-gray-600 hover:text-gray-800">First Link</a>
            </li>
            <li> <a href="#_" className="text-gray-600 hover:text-gray-800">Second Link</a>
            </li>
            <li> <a href="#_" className="text-gray-600 hover:text-gray-800">Third Link</a>
            </li>
            <li> <a href="#_" className="text-gray-600 hover:text-gray-800">Fourth Link</a>
            </li>
          </nav>
        </div>
        <div className="lg:w-1/3 md:w-1/2 w-full px-4">
          <h2 className="title-font font-bold text-blue-700 tracking-tighter mb-3">CATEGORIES</h2>
          <nav className="list-none mb-10">
            <li> <a href="#_" className="text-gray-600 hover:text-gray-800">First Link</a>
            </li>
            <li> <a href="#_" className="text-gray-600 hover:text-gray-800">Second Link</a>
            </li>
            <li> <a href="#_" className="text-gray-600 hover:text-gray-800">Third Link</a>
            </li>
            <li> <a href="#_" className="text-gray-600 hover:text-gray-800">Fourth Link</a>
            </li>
          </nav>
        </div>
        <div className="lg:w-1/3 md:w-1/2 w-full px-4">
          <h2 className="title-font font-bold text-blue-700 tracking-tighter mb-3">CATEGORIES</h2>
          <nav className="list-none mb-10">
            <li> <a href="#_" className="text-gray-600 hover:text-gray-800">First Link</a>
            </li>
            <li> <a href="#_" className="text-gray-600 hover:text-gray-800">Second Link</a>
            </li>
            <li> <a href="#_" className="text-gray-600 hover:text-gray-800">Third Link</a>
            </li>
            <li> <a href="#_" className="text-gray-600 hover:text-gray-800">Fourth Link</a>
            </li>
          </nav>
        </div>
      </div>
    </div>
  </footer>
      </div>
        )
    }
}

export default Navbar
