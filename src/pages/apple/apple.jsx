import React, { useState } from 'react'
import FactApple from '../../Components/FactApple/FactApple'
import './apple.scss'

const Apple = () => {
  const accordionData = [{
    title: 'Fact 1',
    content: `First: Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis sapiente
          laborum cupiditate possimus labore, hic temporibus velit dicta earum
          suscipit commodi eum enim atque at? Et perspiciatis dolore iure
          voluptatem.`,

  },
  {
    title: 'Fact 2',
    content: `Second: Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis sapiente
          laborum cupiditate possimus labore, hic temporibus velit dicta earum
          suscipit commodi eum enim atque at? Et perspiciatis dolore iure
          voluptatem.`,

  },
  {
    title: 'Fact 3',
    content: `Third: Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis sapiente
          laborum cupiditate possimus labore, hic temporibus velit dicta earum
          suscipit commodi eum enim atque at? Et perspiciatis dolore iure
          voluptatem.`,

  },
  {
    title: 'Fact 4',
    content: `Fourth: Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis sapiente
          laborum cupiditate possimus labore, hic temporibus velit dicta earum
          suscipit commodi eum enim atque at? Et perspiciatis dolore iure
          voluptatem.`,

  },
  {
    title: 'Fact 5',
    content: `Fifth: Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis sapiente
          laborum cupiditate possimus labore, hic temporibus velit dicta earum
          suscipit commodi eum enim atque at? Et perspiciatis dolore iure
          voluptatem.`,

  }
]
  const [accord, setAccord] = useState(accordionData)
  console.log(accord)
//   const { title, content } = accordionData;



  return (
    <div className={'apple'}>
       {accord.map((item) => (
        <FactApple key={item.title} item={item}/>
       ))}
    </div>
  )
}

export default Apple
