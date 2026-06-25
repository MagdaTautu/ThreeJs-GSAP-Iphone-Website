import {useGSAP} from "@gsap/react"
import gsap from 'gsap'
import {watchImg} from "../utils"
import {rightImg} from "../utils"
import { VideoCarousel } from "./VideoCarousel"

const Highlights = () => {

  useGSAP(()=>{
    gsap.to('#title', {
      opacity:1,
      y:0
    })
    gsap.to(".link",{
      opacity:1,
      y:0,
      duration:1,
      stagger:0.25
    })
  },[])


  return (
    <section className="w-screen overflow-hidden h-full py-20 bg-zinc">
      <div className="screen-max-width  mb-10">
        <div className=" md:flex w-full items-end justify-between" >
          <h1 id="title" className="section-heading ">Get the highlights.</h1>
          <div className="flex flex-wrap align-baseline justify-start gap-1 mt-2">
            <p className="link ">Watch the film
              <img src={watchImg} alt="watch" className="ml-2" />
            </p>
            <p className="link">Watch the event
              <img src={rightImg} alt="right" className="ml-2" />
            </p>
          </div>
        </div>
      </div>
      <VideoCarousel/>
    </section>
  )
}

export default Highlights
