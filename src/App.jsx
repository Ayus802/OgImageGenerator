import { useEffect, useMemo, useRef, useState  } from 'react'
import React from 'react'
import Input from './components/Input'
import Navbar from './components/Navbar'
import Documentation from './components/Documentation'

function App() {
  const [title,setTitle] = useState('')
  const [content,setContent] = useState('')
  const [img,setImg] = useState(null)
  const [link, setLink] = useState(null)
  const imgG = useRef(null)

  useEffect(()=>{
    const  c = imgG.current;
    const ctx = c.getContext("2d");
    
    var grd = ctx.createLinearGradient(0, 0, 200, 0);
    grd.addColorStop(0, "red");
    grd.addColorStop(1, "white");
    ctx.fillStyle = grd;
    ctx.fillRect(0, 0, c.width, c.height);
  },[])

  useEffect(()=>{
    const c = imgG.current;
    const ctx = c.getContext("2d");
    
    ctx.font = "70px Arial";
    ctx.fillStyle = "black";
    ctx.fillText(title, 10, 70);
    if (content.substring(content.length -4,content.length)=="..."){
      return
    }
    
    ctx.font = "50px Arial";
    ctx.fillText(content, 10,140)
    
    if (img){
      const image = new Image();
      image.onload = () => {
        ctx.drawImage(image, 0,160,1200,1000);
      };
      image.src = URL.createObjectURL(img);
    }
  const canva = imgG.current;
  const canvaURL = canva.toDataURL("image/png");
  const canvaDown = document.getElementById('down')
  canvaDown.href = canvaURL;
    
  },[title,content,img]) 

  const Clear = () => {
    location.reload();
  }

  const LinkGenerate = () => {
    const c = imgG.current;
    const cLink = c.toDataURL("image/png");
    setLink(cLink);
  }
  
  function HandleContent (e) {
    if (content.length<65){
      return e.target.value
    }
    else{
      return content.substring(0,content.length) + '.'
    }
  }
  
  
  return (
    <React.Fragment>
      <header>
        <Navbar />
      </header>
      <main className="bg-slate-950 min-h-screen w-screen">
      <div className='flex items-center justify-around flex-wrap space w-screen h-screen   pt-20 text-white'>
        <div className=' border border-blue-700 rounded-lg flex flex-col p-5  w-96 mb-5 '>
          <Input 
            type="text"
            label="Title" 
            onChange={(e)=>setTitle(e.target.value)}
            placeholder="eg. Realme A10"
          />
          <Input 
            type="text"
            label="Content" 
            onChange={(e)=>setContent(HandleContent(e))}
            placeholder="eg. 8GB RAM || 64GB Internal Memory"
          />


          <div className='flex mb-4'>
            <Input 
              type="file"
              label="Image" 
              onChange={(e)=>setImg(e.target.files[0])}
            />
            {img? <img id='abc'  src={URL.createObjectURL(img)} alt="" height='100px' className='h-24' />: <h1>No image</h1> }
          </div>

          <div className='flex justify-between items-center mb-3 '>
            <button 
              type="button" 
              onClick={Clear}
              className='border-white border w-1/2 py-2 px-8 rounded rounded-r-none border-r-red-500 bg-red-500 text-white hover: shadow-red-600 hover:shadow-2xl '
              >
                Clear
            </button>
            <button 
              type="button"
              onClick={LinkGenerate}
              className='border-white border w-1/2 py-2 px-8 rounded rounded-l-none border-l-orange-500 bg-orange-500 text-white'
              >
                Generate Link
            </button>
          </div>
          {link ? <a href={link} 
                    target='_blank'
                    className='border w-full py-2 px-4 rounded bg-blue-700 text-white mb-3 text-center'
                    >
                      Link ( Plz refresh the New Tab )
                  </a>: <></>}
          <a 
            href="#" 
            id='down' 
            download
            className='border w-full py-2 px-4 rounded bg-green-700 text-white mb-3 text-center'
            >
              Download
          </a>
        </div>
        <div className='p-4 border border-blue-700 w-80 lg:w-1/2 h-auto rounded-lg mb-5'>
          <canvas 
            ref={imgG} 
            width='1200px' 
            height='350px' 
            id='my' 
            className=' w-full bg-blue-100   '></canvas>
        </div>
        
      </div>
      <Documentation/>
      </main>
    </React.Fragment>
  )
}

export default App
