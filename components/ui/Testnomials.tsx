import { testimonials } from '@/data'
import { MovingCards } from './MovingCards'
const Testnomials = () => {
  
  return (
    <div className=' py-20'>
      <MovingCards items={testimonials} speed="slow" direction="right"/>
    </div>
  )
}

export default Testnomials;