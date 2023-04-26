import React from 'react'
import Wave from 'react-wavify'

const Seas = () => {
  return (
      <div className='flex justify-center items-center -z-0'>
           <Wave fill="url(#gradient)"
              paused={false}
              options={{
                  height: 20,
                  amplitude: 60,
                  speed: 0.15,
                  points: 3
              }}
              style={{ transform: 'scaleY(-1)' }}
          >
        <defs>
          <linearGradient id="gradient" gradientTransform="rotate(90)">
            <stop offset="10%" stopColor="#0096d8" />
            <stop offset="90%" stopColor="#e3f5ff" />
          </linearGradient>
        </defs>
      </Wave>
    </div>
  )
}

export default Seas



{/* <div className="w-screen flex justify-center ">
        <div className="">
          <div className="flex justify-center items-end gap-x-28">
    
            <div className="mb-4 flex gap-x-4">
              <InstagramIcon />
              <FacebookIcon />
            </div>

            <div className="mb-4 flex gap-x-4">
              <TiktokIcon />
              <WhatsappIcon />
            </div>
          </div>

          
        </div>
      </div> */}