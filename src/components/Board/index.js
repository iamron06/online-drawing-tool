import { MENU_ITEMS } from "@/constants"
import { useEffect, useLayoutEffect, useRef } from "react"
import { UseDispatch, useSelector } from "react-redux"

const Board = () => {
    const canvasRef = useRef(null)
    const shouldDraw = useRef(false)
    const {activeMenuItem , actionMenuItem } = useSelector((state) => state.menu)
    const {color , size } = useSelector((state) => state.toolbox[activeMenuItem])

     useEffect(()=>{
        if (!canvasRef.current) return
        const canvas = canvasRef.current
        const context = canvas.getContext('2d')

        if (actionMenuItem === MENU_ITEMS.DOWNLOAD) {
            const URL = canvas.toDataURL()
            console.log(URL)
        }
        console.log("action menu Item" , actionMenuItem );
     },[actionMenuItem])


    // update the stroke style by using the color and size 
        useEffect(()=>{
            if (!canvasRef.current) return
        const canvas = canvasRef.current
        const context = canvas.getContext('2d')

        const changeConfig = () => {
            context.strokeStyle = color
            context.lineWidth = size
        }
        
        changeConfig();
        
       
        },[color , size])
    //  Mount side 
    useLayoutEffect(()=>{
        if (!canvasRef.current) return
        const canvas = canvasRef.current
        const context = canvas.getContext('2d')

        // When mounting 
        canvas.width = window.innerWidth
        canvas.height = window.innerHeight

        const beginPath = (x , y) => {
            context.beginPath()
          context.moveTo(x,y)
        }

        const drawLine =  (x , y) => {
            context.lineTo(x , y)
            context.stroke()
        }

      // 3 event listeners - when i click it remains in the clicked state , when i am moving the mouse , when i am releasing the mouse    
       const handleMouseDown =(e)=> {
          shouldDraw.current=true
          beginPath(e.clientX , e.clientY)
       }
       const handleMouseMove =(e)=> {
          if (!shouldDraw.current) return
          drawLine(e.clientX , e.clientY)
          
       }
       const handleMouseUp =(e)=> {
        shouldDraw.current=false
       }

      canvas.addEventListener('mousedown' , handleMouseDown)
      canvas.addEventListener('mousemove' , handleMouseMove)
      canvas.addEventListener('mouseup' , handleMouseUp)

           return () =>{
            canvas.removeEventListener('mousedown' , handleMouseDown)
      canvas.removeEventListener('mousemove' , handleMouseMove)
      canvas.removeEventListener('mouseup' , handleMouseUp)
           }

    },[])

console.log(color, size);
    return (
   <canvas ref={canvasRef}></canvas>
    )
}

export default Board