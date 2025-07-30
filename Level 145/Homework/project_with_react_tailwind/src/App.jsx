import image from './assets/image-header-desktop.jpg';

function App() {
  return (
    <>
    <div className='flex flex-col-reverse justify-center items-center h-screen lg:flex-row' style={{backgroundColor: 'var(--color-dark_blue, hsl(233, 47%, 7%))'}}>
      <div className='rounded-bl-[10px] rounded-br-[10px] w-[300px] h-[530px] pt-[2px] lg:w-[540px] lg:h-[446px] flex flex-col justify-center items-center lg:rounded-tl-[10px] lg:rounded-bl-[10px] lg:rounded-br-none' style={{backgroundColor: 'var(--color-blue, hsl(244, 38%, 16%))'}}>
        <h1 className='mb-2 text-[27px] text-center w-[270px] lg:text-left lg:text-[33px] lg:w-[340px] font-bold lg:mb-5 text-white' style={{fontFamily: 'var(--font-inter, "Inter", sans-serif)'}}>Get <span  style={{color: 'var(--color-purple, hsl(277, 64%, 61%))', fontFamily: 'var(--font-lexend, "Lexend Deca", sans-serif)'}}>insights</span> that help your business grow.</h1>
        <p style={{color: 'var(--color-gray, hsla(0, 0%, 100%, 0.75))'}} className='mb-10 w-[260px] text-center lg:text-start lg:mb-15 lg:text-[14px] lg:flex lg:justify-start lg:w-[337.37px]'> Discover the benefits of data analytics and make better decisions regarding revenue, customer experience, and overall efficiency.</p>
        <div className='flex flex-col gap-[20px] lg:flex lg:flex-row lg:w-[337.37px] lg:justify-between'>
          <div>
            <h2 className='text-center text-[22px] font-bold text-white lg:mb-[5px] lg:text-left' style={{fontFamily: 'var(--font-inter, "Inter", sans-serif)'}}>10k+</h2>
            <p style={{color: 'var(--color-gray, hsla(0, 0%, 100%, 0.75))', fontFamily: 'var(--font-inter, "Inter", sans-serif)'}} className='text-xs'>COMPANIES</p>
          </div>
          <div>
            <h2 className='text-center text-[22px] font-bold text-white lg:mb-[5px] lg:text-left' style={{fontFamily: 'var(--font-inter, "Inter", sans-serif)'}}>314</h2>
            <p style={{color: 'var(--color-gray, hsla(0, 0%, 100%, 0.75))', fontFamily: 'var(--font-inter, "Inter", sans-serif)'}} className='text-xs'>TEMPLATES</p>
          </div>
          <div>
            <h2 className='text-center text-[22px] font-bold text-white lg:mb-[5px] lg:text-left' style={{fontFamily: 'var(--font-inter, "Inter", sans-serif)'}}>12M+</h2>
            <p style={{color: 'var(--color-gray, hsla(0, 0%, 100%, 0.75))', fontFamily: 'var(--font-inter, "Inter", sans-serif)'}} className='text-center text-xs'>QUERIES</p>
          </div>
        </div>
      </div>
      <div style={{backgroundColor: 'var(--color-dark_purple,#4c0e70)'}} className='overflow-hidden w-[300px] lg:w-[540px] rounded-tl-[10px] rounded-tr-[10px] rounded-br-none lg:rounded-tr-[10px] lg:rounded-br-[10px] lg:rounded-tl-none lg:rounded-bl-none'>
        <img src={image} className='w-[300px] h-[250px] opacity-[0.30] rounded-tl-[10px] rounded-tr-[10px] rounded-br-none lg:w-[540px] lg:h-[446px] lg:rounded-tr-[10px] lg:rounded-br-[10px] lg:rounded-tl-none'/>
      </div>
    </div>
    </>
  )
}

export default App