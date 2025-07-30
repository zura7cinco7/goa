import guineaPig from './assets/guineaPig.webp';
import guineaPigs from './assets/guinea pigs.jpg';
import travelWithGuineaPig from './assets/travelWithGuineaPig.jpeg';
import lion from './assets/lionPhoto1.png';
import lion2 from './assets/lionPhoto2.webp';
import lion3 from './assets/lionPhoto3.jpeg';
import lion4 from './assets/lionPhoto4.jpg';
import hedehog from './assets/hedgehog.webp';
import hedgehog2 from './assets/hedgehog2.jpeg';
function App() {
  return (
    <>
      <h1 className='text-6xl mb-10 text-center'>Guinea Pigs</h1>
      <div className='flex flex-row justify-center items-center gap-10'>
        <img src={guineaPig} className='w-100 h-100 rounded-full'/>
        <div>
          <h1 className='text-4xl mb-5'>Guinea pigs</h1>
          <p className='mb-10'>The guinea pig or domestic guinea pig, also known as the cavy or domestic cavy, <br /> is a species of rodent belonging to the genus Cavia, family Caviidae. Breeders tend <br /> to use the name "cavy" for the animal, but "guinea pig" is more commonly used in <br /> scientific and laboratory contexts.</p>
          <button className='bg-yellow-500 p-2 w-30 rounded-2xs'>See More</button>
        </div>
      </div>
      <div className='flex flex-row justify-center items-center mb-10'>
        <div className='bg-blue-900 h-200 w-150 pl-15 pt-10'>
          <img src={guineaPigs} className='w-120 mb-5'/>
          <p className='text-white text-right pr-15 text-lg'>Ut enim ad minim veniam, quis nostrud exercitation <br /> <br /> ullamco laboris nisi ut aliquip ex ea commodo consequat. <br /> <br /> Duis aute irure dolor in reprehenderit in voluptate velit <br /> <br /> esse cillum dolore eu fugiat nulla pariatur. Excepteur sint <br /> <br /> occaecat cupidatat non proident, sunt in culpa qui officia <br /> <br /> deserunt mollit anim id est laborum.</p>
        </div>
        <div className='pl-10 bg-yellow-500 h-200 w-150 flex flex-col justify-center items-center'>
          <h1 className='text-6xl mb-10'>The Complete <br /> Guid​e to <br /> Traveling With<br /> Your Guinea Pig</h1>
          <img src={travelWithGuineaPig} className='w-100 h-100 mb-5 rounded-full'/>
        </div>
      </div>
      <h1 className='text-6xl mb-10 text-center'>Lions</h1>
      <div className='relative mb-20'>
        <img src={lion} />
        <h1 className='text-6xl mb-10 text-white absolute left-100 top-30'>Lions</h1>
        <p className='text-white absolute left-45 top-60 text-center'>Powerful and social, lions are the only big cats that live in groups, known as prides.<br /> These majestic animals roam the savannas and grasslands of Africa, where lionesses <br /> hunt in coordinated teams while males defend the territory. </p>
        <div className='text-white absolute left-100 top-90 text-center flex gap-10'>
          <button className='bg-blue-900 p-2 w-30 rounded-2xs'>See More</button>
        </div>
      </div>
      <div className='flex flex-row justify-center items-center gap-10 mb-10'>
        <img src={lion2} />
        <div>
          <h1 className='text-4xl mb-5'>Leading with <br /> Strength and Purpose</h1>
          <p className='mb-5'>No other animal embodies the blend of strength, unity,<br /> discipline, and purpose quite like the lion. In the wild,<br /> lions thrive in tightly bonded prides—each member valued, each <br /> voice essential. </p>
          <div className='flex flex-row gap-5'>
            <img src={lion3} className='w-55 h-70'/>
            <img src={lion4} className='w-55 h-70'/>
          </div>
        </div>
      </div>
      <div>
        <h1 className='text-6xl mb-10 text-center'>Hedgehog</h1>
        <div className='flex justify-center relative mb-50'>
          <img src={hedehog} className='w-300'/>
          <div className='absolute top-120 bg-white w-180 h-80'>
            <h1 className='text-center text-2xl mb-10 pt-10'>About HedgeHogs</h1>
            <p className='text-center mb-10'>Hedgehogs are small, nocturnal mammals known for their distinctive spines and quiet charm.<br /> Found across Europe, Asia, and Africa, they spend their nights foraging for insects and their days <br /> curled up in cozy nests. Despite their prickly appearance, hedgehogs are gentle creatures that <br /> thrive in peaceful environments and bring a unique sense of wonder to the natural world.</p>
            <div className='flex justify-center'>
              <button className='bg-blue-900 p-2 w-30 rounded-2xs text-white'>Read More</button>
            </div>
          </div>
        </div>
        <div className='flex flex-row justify-center items-center gap-10'>
          <img src={hedgehog2} className='w-100 h-100 rounded-full'/>
          <div>
            <h1 className='text-4xl mb-5'>Hedgehogs</h1>
            <p className='mb-10'>The hedgehog is a small, nocturnal mammal known for its distinctive coat <br /> of spines, which are actually modified hairs made stiff with keratin. Belonging <br /> to the family Erinaceidae, hedgehogs are found across parts of Europe, Asia,<br /> and Africa, with 17 species recognized globally</p>
            <button className='bg-yellow-500 p-2 w-30 rounded-2xs'>See More</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default App