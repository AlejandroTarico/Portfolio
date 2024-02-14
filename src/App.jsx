import { useEffect, useState } from 'react'
import perfil from './assets/perfil.jpg'
import './App.css'
import css from './assets/css.png'
import git from './assets/git.png'
import html from './assets/html.png'
import javaScript from './assets/javascript.png'
import react from './assets/react.png'
import postgre from './assets/postgresql.png'
import mysql from './assets/mysql.png'
import php from './assets/php.png'
import node from './assets/node-js.png'
import photoshop from './assets/photoshop.png'
import github from './assets/github.png'
import redux from './assets/redux.png'
import tailwind from './assets/tailwind.png'
import Wordpress from './assets/wordpress.png'


function App() {
  const [count, setCount] = useState(0)

  const frontEnd = [
    { techno: css, titulo: 'CSS3' },
    { techno: html, titulo: 'HTML5' },
    { techno: javaScript, titulo: 'JavaScript' },
    { techno: tailwind, titulo: 'Tailwind.css' },
    { techno: react, titulo: 'React.js' },
    { techno: redux, titulo: 'Redux' },
  ];
  const backAndData = [
    { techno: node, titulo: 'Node.js' },
    { techno: php, titulo: 'PHP' },
    { techno: postgre, titulo: 'PostgreSQL' },
    { techno: mysql, titulo: 'MySQL' },

  ];
  const otherTech = [
    { techno: Wordpress, titulo: 'WordPress' },
    { techno: photoshop, titulo: 'Photoshop' },
    { techno: git, titulo: 'Git' },
    { techno: github, titulo: 'Github' },
  ];
  
  const [valorScroll, setValorScroll] = useState(0); // Estado para almacenar el valor de scroll

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
  
  console.log("este es el scroll: ", valorScroll);
 
  return (
    <div className='bg-stone-800 min-h-[1760px] font-josefin'>
      <div id='header' className='h-24 border-b-2 border-white flex justify-around items-center'>
        <div>
          <h1 className='text-white text-5xl text-left'>Alejandro Tarico</h1>
        </div>
        <div className=' text-white flex justify-between w-[35rem] pt-4'>
          <a href='' className=' cursor-pointer'>Acerca de Mí</a>
          <a href='' className=' cursor-pointer'>Habilidades</a>
          <a href='' className=' cursor-pointer'>Proyectos</a>
          <a href='' className=' cursor-pointer'>Contactos</a>
        </div>
      </div>
      <div id='portada' className=''>
        <img className='inline border-b-4 border-gray-50' src='https://i.blogs.es/016f69/developers/1366_521.jpg' alt="" />
        
        <div className='flex justify-evenly items-center translate-y-[-438px] absolute w-full'>
          <div id='cuadroText' className='mt-24'>
            <div className={`p-4 w-max rounded-tl-xl rounded-br-xl transform bg-neutral-800 ${valorScroll > 30 ? ' transform transition duration-700' : 'translate-x-[-40rem] duration-700'}`}>
              <p className='text-white font-bold text-4xl'>Desarrollador Full Stack</p>
            </div>
            <div className={`mt-4 p-4 max-w-[35rem] rounded-tl-xl rounded-br-xl transform bg-neutral-800 ${valorScroll > 110 ? ' transform transition duration-700' : 'translate-x-[-45rem] duration-700'}`}>
              <p className='text-white '>
              Desarrollador Full Stack con enfoque en el diseño front-end, utilizando tecnologías como 
              React para crear interfaces de usuario dinámicas e interactivas. Además de WordPress y su 
              constructor Divi.
              </p>
            </div>
          </div>
          <div id='fotoPerfil' className='skew-y-6 -skew-x-6 bg-[blueviolet] opacity-85 rounded-full shadow-lg shadow-white w-[400px] h-[400px] '>
            <img className='w-[22rem] ml-3 mt-6 rounded-full shadow-[10px_10px_5px_0px_rgba(0,0,0,0.75)] border-solid border-4 border-blue-700' src={perfil} alt="" />
          </div>
        </div>      
      </div>
      <div id='about' className='p-6 mt-5 flex justify-center'>
        <div className={`border-white shadow-white shadow-[8px_5px_11px_-1px_rgba(255,255,255)]  border-4 w-[54rem] text-white pt-16 px-16 pb-10 rounded-2xl ${valorScroll > 280 ? ' opacity-100 duration-1000':'translate-y-[15rem] opacity-0 duration-700'}`}>
          <h2 className='text-5xl pb-3 '>Sobre mi</h2>
          <hr />
          <div className='mt-4 text-lg text-justify italic'>
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
        <div className=' text-white pt-16 w-[60rem]'>
          <h2 className='text-5xl pb-3'>Habilidades</h2>
          <div className={`grid grid-cols-3 py-3 bg-red-900 mt-5 rounded-xl ${valorScroll > 1210 ? ' transform transition duration-1000' : 'translate-x-[-85rem] duration-1000'}`}>
            {frontEnd.map((imagen, index) => (
              <div key={index} className='flex flex-col justify-center items-center pt-4 pb-3'>
                <img src={imagen.techno} alt={imagen.titulo} className='expand-animation'/>
                <p className='mt-2'>{imagen.titulo}</p>
              </div>
            ))}
          </div>
          <div className={`grid grid-cols-3 py-3 bg-red-900 mt-5 rounded-xl ${valorScroll > 1310 ? ' transform transition duration-1000' : 'translate-x-[85rem] duration-1000'}`}>
            {backAndData.map((imagen, index) => (
              <div key={index} className='flex flex-col justify-center items-center pt-4 pb-3'>
                <img src={imagen.techno} alt={imagen.titulo} className='expand-animation'/>
                <p className='mt-2'>{imagen.titulo}</p>
              </div>
            ))}
          </div>
          <div className={`grid grid-cols-3 py-3 bg-red-900 mt-5 rounded-xl ${valorScroll > 1410 ? ' transform transition duration-1000' : 'translate-x-[-85rem] duration-1000'}`}>
            {otherTech.map((imagen, index) => (
              <div key={index} className='flex flex-col justify-center items-center pt-4 pb-3'>
                <img src={imagen.techno} alt={imagen.titulo} className='expand-animation'/>
                <p className='mt-2'>{imagen.titulo}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div id='proyectos' className='p-6 flex justify-center'>
        <div className='w-[60rem]'>
          <h2 className='text-5xl pb-3 text-white'>Proyectos</h2>
          
        </div>
      </div>
      <div id='contacto' className='p-6 flex justify-center'>
        <div className='w-[60rem]'>
          <h2 className='text-5xl pb-3 text-white'>Contactos</h2>
          <form action="" className='text-white'>
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
          </form>
        </div>
      </div>
    </div>
  )
}

export default App
