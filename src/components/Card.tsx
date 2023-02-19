import Image from 'next/image'
import { useApp } from '../contexts/AppContext'
import { Slide } from 'react-awesome-reveal'

const Card = ({ability}: any) => {
    const { themeClass, isDark} = useApp()
    const cardClass = isDark ? 'cardb' : 'carde'
  return (
      <Slide
        triggerOnce
        direction='up'
        className={`${cardClass} w-4/5 mx-auto min-w-[320px] h-full flex p-2 max-w-[400px] flex-col  mt-[5px] shadow-lg `}
        >   
        <div className="aspect-square">
            <div className="w-full h-[24vh] overflow-hidden">
                <Image height={1080} width={1920} className='min-h-full min-w-full object-fill' src={ability.image} alt="" />
            </div>
            <div className="flex w-full flex-col">
                <h2 className='text-xl my-2 font-semibold text-center'>{ability.title}</h2>
                <div
                >
                    <p className='text-lg'>{ability.description}</p>
                </div>
            </div>
        </div>
        </Slide>
  )
}

export default Card