import { useEffect, useState } from 'react'
import './App.css'
import perfil from './assets/perfil.jpg'
import { backAndData, contacts, frontEnd, otherTech } from './Data/Data'
import Carrusel from './Carrusel/Carrusel'
import { ochoBits } from './Data/Projects'
import video from './assets/Demo-8-Bits-Proyecto-bootcamp-Henry.mp4'
import responsive from './assets/Responsive.png'

function App() {  

  const [valorScroll, setValorScroll] = useState(0); // Estado para almacenar el valor de scroll
  const [valorMouse, setValorMouse] = useState({});
  const [valorClic, setValorClic] = useState({});
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };


  const handleClick = (event, id) => {
    event.preventDefault();

    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };


  const deslizadorMouse = (index, value) => {
    setValorMouse({
      [index]: value
    });
  };

  const botonClicVideo = (index, value) => {
    setValorClic({
      [index]: value
    });
  }

  useEffect(() => {
    // Función de manejo del evento de desplazamiento
    const handleScroll = () => {
      setValorScroll(window.scrollY); // Actualizar el estado valorScroll cuando ocurre un desplazamiento
    };

    // Suscribirse al evento de desplazamiento cuando se monta el componente
    window.addEventListener('scroll', handleScroll);

    // Limpiar el evento de desplazamiento cuando el componente se desmonta
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []); // La matriz vacía de dependencias garantiza que el efecto se ejecute solo una vez al montar el componente
  
  const proyect = [
    {
      description: 'Proyecto: 8bits. Este proyecto fue creado en conjunto con mis compañeros del bootcamp de Henry. En él, tuve la oportunidad de realizar parte del front-end, tales como el componente del carrito, las bases del componente home, el paginado y la búsqueda por filtros, haciendo uso de tecnologías como Redux, Axios y localStorage.',
      images: ochoBits,
      botonVideo: video,
    },
    // {
    //   description: 'Proyecto: 8bits. Este proyecto fue creado en conjunto con mis compañeros del bootcamp de Henry. En él, tuve la oportunidad de realizar parte del front-end, tales como el componente del carrito, las bases del componente home, el paginado y la búsqueda por filtros, haciendo uso de tecnologías como Redux, Axios y localStorage.',
    //   images: ochoBits,
    //   botonVideo: 'https://youtu.be/rtqPIOXaSdI?si=n9whlHWefQnqeW1k',
    // },
    // {
    //   description: 'Proyecto: 8bits. Este proyecto fue creado en conjunto con mis compañeros del bootcamp de Henry. En él, tuve la oportunidad de realizar parte del front-end, tales como el componente del carrito, las bases del componente home, el paginado y la búsqueda por filtros, haciendo uso de tecnologías como Redux, Axios y localStorage.',
    //   images: ochoBits,
    //   botonVideo: video,
    // }
  ]
  
  return (
    <div className='bg-stone-800 min-h-[1760px] font-josefin'>
      <div id='header' className='flex justify-around items-center'>
        <div className='bg-stone-800 opacity-90 h-20 border-b-2 border-white flex justify-around items-center w-full fixed z-50 top-0 '>
          <div>
            <h1 className='text-white text-3xl md:text-5xl text-left'>Alejandro Tarico</h1>
          </div>
          <div className='hidden md:block'>
            <div className=' text-white flex justify-between w-[35rem] pt-4'>
              <a href="#about" onClick={(e) => handleClick(e, 'about')} className="cursor-pointer">Acerca de Mí</a>
              <a href="#habilidades" onClick={(e) => handleClick(e, 'habilidades')} className="cursor-pointer">Tecnologías</a>
              <a href="#proyectos" onClick={(e) => handleClick(e, 'proyectos')} className="cursor-pointer">Proyectos</a>
              <a href="#contacto" onClick={(e) => handleClick(e, 'contacto')} className="cursor-pointer">Contactos</a>
            </div>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button onClick={() => toggleMenu()} className="inline-flex items-center justify-center p-2 rounded-md focus:outline-none focus:bg-gray-700 text-white opacity-100">
              <svg className="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            </button>
          </div>

        </div>
        {isOpen && (
        <div className="md:hidden z-50 fixed top-[60px] right-[20px] rounded-tl-xl rounded-br-xl bg-gray-700 px-3">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 ">
            <a href="#about" onClick={(e) => {handleClick(e, 'about'); toggleMenu()}} className="font-bold block px-3 py-2  text-base text-white">Acerca de Mi</a>
            <a href="#habilidades" onClick={(e) => {handleClick(e, 'habilidades'); toggleMenu()}} className="font-bold block px-3 py-2text-base text-white ">Tecnologías</a>
            <a href="#proyectos" onClick={(e) => {handleClick(e, 'proyectos'); toggleMenu()}} className="font-bold block px-3 py-2 text-base text-white ">Proyecctos</a>
            <a href="#contacto" onClick={(e) => {handleClick(e, 'contacto'); toggleMenu()}} className="font-bold block px-3 py-2 text-base text-white ">Contactos</a>
          </div> 
        </div>
      )}
      </div>
      <div id='portada' className='mt-20'>
        <div className='hidden md:block'>
          <img className='inline border-b-4 border-gray-50' src='https://i.blogs.es/016f69/developers/1366_521.jpg' alt="" />
        </div>
        <div className='md:hidden'>
          <img className='inline border-b-4 border-gray-50 h-[630px]' src={responsive} alt="" />
        </div>
        
        <div className='flex flex-col md:flex-row justify-evenly items-center md:translate-y-[-438px] translate-y-[-600px] absolute w-full '>
          <div id='cuadroText' className='md:mt-24 mt-12 order-2 md:order-1 w-[80%] md:w-auto'>
            <div className={`p-4 rounded-tl-xl rounded-br-xl transform bg-neutral-800 ${valorScroll > 0 ? ' transform transition duration-700' : 'translate-x-[-44rem] duration-700'}`}>
              <p className='text-white font-bold text-xl md:text-4xl'>Desarrollador Full Stack</p>
            </div>
            <div className={`mt-4 p-4 max-w-[35rem] rounded-tl-xl rounded-br-xl transform bg-neutral-800 ${valorScroll > 40 ? ' transform transition duration-700' : 'translate-x-[-44rem] duration-700'}`}>
              <p className='text-white '>
              Desarrollador Full Stack con enfoque en el diseño front-end, utilizando tecnologías como 
              React para crear interfaces de usuario dinámicas e interactivas. Además de WordPress y su 
              constructor Divi.
              </p>
            </div>
          </div>
          <div id='fotoPerfil' className='order-1 md:order-2 skew-y-6 -skew-x-6 bg-[blueviolet]  rounded-full shadow-lg shadow-white '>
            <img className='w-[12rem] md:w-[22rem] ml-2 mt-4 mb-3 mr-7 rounded-full shadow-[10px_10px_5px_0px_rgba(0,0,0,0.75)] border-solid border-4 border-blue-700' src={perfil} alt="" />
          </div>
        </div>
      </div>
      <div id='about' className='p-6 md:mt-5 mt-3 flex justify-center'>
        <div className={`border-white shadow-white shadow-[8px_5px_11px_-1px_rgba(255,255,255)]  border-4 w-[54rem] text-white pt-8 md:pt-16 px-5 md:px-16 pb-10 rounded-2xl ${valorScroll > 280 ? ' opacity-100 duration-1000':'translate-y-[15rem] opacity-0 duration-700'}`}>
          <h2 className='text-3xl md:text-5xl pb-3'>Sobre mi</h2>
          <hr/>
          <div className='md:mt-4 mt-2 text-lg text-justify italic'>
            <p className='pb-2'>
            ¡Hola! Permítanme presentarme, soy Alejandro Tarico, un apasionado de la programación. 
            Como Full Stack Developer, me he desafiado constantemente, trabajando en diversos proyectos que 
            abarcan múltiples lenguajes de programación y frameworks.
            </p> 
            <p className='pb-2'>
            Este viaje por el mundo de la tecnología comenzó en la Universidad Nacional de San Juan, en donde 
            aprendí todas las bases de la programación, pasando por lenguajes como C++ y C#. 
            Hice una pausa en la cursada para poder incursionar en otras tecnologías, tales como PHP, HTML y MySQL 
            realizando un curso en el Instituto ISRI de la Provincia de San Juan.
            </p>
            <p className='pb-2'>
            A finales del año 2022 descubrí Henry y todas las posibilidades de tener una experiencia distinta que me 
            brindaría un conocimiento sólido en desarrollo web y Full Stack, por lo que a principios de 2023 tomé la 
            decisión de realizar el bootcamp, en el aprendí a usar diversas tecnologías y herramientas como HTML, CSS, 
            JavaScript, React.js, Node.js y mucho más. Fue increíble también la experiencia de trabajar en proyectos 
            desafiantes y colaborar con otros apasionados desarrolladores.
            </p>
            <p className='pb-2'>
            Actualmente trabajo de manera freelance diseñando paginas web con Wordpress y el constructor de temas Divi.
            </p>
          </div>
        </div>
      </div>
      <div id='habilidades' className='p-6 flex justify-center'>
        <div className=' text-white pt-8 w-[90%] md:w-[60rem]'>
          <h2 className='text-5xl pb-3'>Técnologias</h2>
          <div className='overflow-hidden'>
            <div className={`grid grid-cols-3 py-3 bg-red-900 mt-5 rounded-xl transform -translate-x-full transition duration-[1300ms] ${valorScroll > 1240 ? ' opacity-100 translate-x-0' : ' opacity-0'}`}>
              {frontEnd.map((imagen, index) => (
                <div key={index} className='flex flex-col justify-center items-center pt-4 pb-3'>
                  <img src={imagen.techno} alt={imagen.titulo} className='expand-animation'/>
                  <p className='mt-2'>{imagen.titulo}</p>
                </div>
              ))}
            </div>
            <div className={`grid grid-cols-3 py-3 bg-red-900 mt-5 rounded-xl transform transition duration-[1300ms] ${valorScroll > 1340 ? ' opacity-100 -translate-x-0' : 'translate-x-full opacity-0'}`}>
              {backAndData.map((imagen, index) => (
                <div key={index} className='flex flex-col justify-center items-center pt-4 pb-3'>
                  <img src={imagen.techno} alt={imagen.titulo} className='expand-animation'/>
                  <p className='mt-2'>{imagen.titulo}</p>
                </div>
              ))}
            </div>
            <div className={`grid grid-cols-3 py-3 bg-red-900 mt-5 rounded-xl transform -translate-x-full transition duration-[1300ms] ${valorScroll > 1440 ? ' opacity-100 translate-x-0' : ' opacity-0'}`}>
              {otherTech.map((imagen, index) => (
                <div key={index} className='flex flex-col justify-center items-center pt-4 pb-3'>
                  <img src={imagen.techno} alt={imagen.titulo} className='expand-animation'/>
                  <p className='mt-2'>{imagen.titulo}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div id='proyectos' className='p-6 flex justify-center'>
        <div className='w-[60rem] text-white'>
          <h2 className='text-5xl pb-1 text-white'>Proyectos</h2>
          <div className={`grid gap-x-5 ${proyect.length > 1 ? 'grid-cols-1 md:grid-cols-2' : 'grid-cols-1'} `}>
            {proyect.map((proj, index) => (
              <div key={index} className=''>
                <p className='text-justify mb-5 mt-8'>
                  {proj.description}
                </p>
                <div className='relative group' onMouseEnter={() => deslizadorMouse(index, true)} onMouseLeave={() => deslizadorMouse(index, false)}>
                  <Carrusel images={proj.images}/>
                  <div className='absolute inset-0 bg-gray-700 opacity-0 group-hover:opacity-50 transition-opacity duration-300'></div>
                    <div className='absolute inset-0 flex justify-center items-center'>
                    {valorMouse[index] && (
                      <div className=''>
                        <button onClick={() => botonClicVideo(index, true)} className={`cursor-pointer
                        shadow-red-400 shadow-[2px_3px_2px_1px] p-3 w-max 
                        rounded-xl transition ease-in-out delay-150 
                        bg-red-600 hover:scale-110 hover:bg-red-800 
                        duration-150 `} >VIDEO DEMO</button>
                      </div>
                    )}
                  </div>
                </div>
                <div className='mt-4 md:hidden'>
                  <p className='italic'>NOTA: Si deseas ver más, puedes hacer clic en la imagen para ver un video demo o el código del proyecto</p>
                </div>
              </div>
            ))}
          </div>
          {proyect.map((proj, index) => (
            <div key={index} className='fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
              {valorClic[index] && (
                <div className=' '>
                  <div className='flex justify-end w-80 md:w-[36rem]'>
                    <video controls src={proj.botonVideo} type="video/mp4"/>
                    <div className={`absolute transition-opacity duration-1000 ease-in-out ${valorClic[index] ? 'opacity-100' : ''}`}>
                      <button className='hover:scale-110 duration-300 py-1 px-3 mt-3 rounded-full' onClick={() => botonClicVideo(index, false)}>
                        <svg class="h-8 w-8 text-red-500"  width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  
                          <path stroke="none" d="M0 0h24v24H0z"/>  
                          <rect x="4" y="4" width="16" height="16" rx="2" />  
                          <path d="M10 10l4 4m0 -4l-4 4" />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              )} 
            </div>
          ))}
        </div>
      </div>
      <div id='contacto' className='p-6 flex justify-center mt-6 pb-28'>
        <div className='w-[61rem]'>
          <h2 className='text-5xl pb-7 text-white'>Contactos</h2>
          <div className='text-white grid grid-cols-3 bg-red-900 py-12 rounded-b-xl'>
          {contacts.map((cont, index) => (
            <div key={index} className='flex justify-center'>
              <a href={cont.link} target="_blank">
                <div className='w-11 flex flex-col justify-center items-center transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 duration-300'>
                  <img src={cont.medios} alt="" className='rounded-[25rem] w-11 h-11'/>
                  <p className='mt-1'>{cont.titulo}</p>
                </div>
              </a>
            </div>
          ))}
          </div>
          {/* <form action="" className='text-white'>
            <div className=' text-left p-4 grid grid-cols-2 '>
              <div className="">
                <label className="ml-4">
                  Tu Nombre
                </label>
                <div className="m-2">
                  <input
                    type="name"
                    name="nombre"
                    id="nombre"
                    autoComplete="given-name"
                    placeholder='Mí nombre'
                    className="w-full rounded-md border-2 border-white focus:border-none py-1.5 px-2 bg-inherit shadow-sm placeholder:text-slate-50"
                  />
                </div>
              </div>
              <div className="">
                <label className="ml-4">
                  Tu correo
                </label>
                <div className="m-2">
                  <input
                    type="email"
                    name="correo"
                    id="correo"
                    autoComplete="given-name"
                    placeholder='usuario@correo.com'
                    className="w-full rounded-md border-2 border-white focus:border-none py-1.5 px-2 bg-inherit shadow-sm placeholder:text-slate-50"
                  />
                </div>
              </div>
            </div>
            <div className="text-left p-4">
              <label className="ml-4">
                Tu Comentario
              </label>
              <div className="m-2">
                <textarea
                  type="text"
                  name="texto"
                  id="texto"
                  autoComplete="given-name"
                  placeholder='Escribe tu comentario'
                  className="w-full rounded-md border-2 border-white focus:border-none py-1.5 px-2 bg-inherit shadow-sm placeholder:text-slate-50"
                />
              </div>
            </div>
            <div className='text-right pr-6'>
              <button className='py-2 px-5 rounded-lg transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300'>
                Enviar
              </button>
            </div>
          </form> */}
        </div>
      </div>
    </div>
  )
}

export default App
