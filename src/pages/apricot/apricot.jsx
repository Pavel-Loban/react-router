import React, { useState } from 'react'
import "./arpicot.scss"
const Apricot = () => {

    const images = [{
        src: 'https://ksk.by/media/image/cache/data/product/images_0713/pd-00176044_p_l-400x400.jpg',
        active: true,
        id:1
    },
    {
        src: 'https://calorizator.ru/sites/default/files/imagecache/product_512/product/apple-6.jpg',
        active: false,
        id:2
    },
    {
        src: 'https://produits.bienmanger.com/33467-0w600h600_Organic_Fresh_Lychee.jpg',
        active: false,
        id:3
    },
    {
        src: 'https://e2.edimdoma.ru/data/ingredients/0000/1087/1087-ed4_wide.jpg?1487747194',
        active: false,
        id:4
    },

]


    const [arrImages, setArrImages] = useState(images);
    const [firstImage, setFirstImage] = useState(arrImages[0].src)

    const getSrc = (e,id) => {
        setFirstImage(e.target.src)
        const newArr = arrImages.map((item) =>
      item.id === id ? { ...item, active: true } : { ...item, active: false }
    )
    setArrImages(newArr);
    }

    return (
        <div className="container">
        <div className="photo">
     <img src={firstImage} alt="example"/>
        </div>
        {arrImages.map((i) =>
            <div className="image" key={i.id} style={{
                border: i.active ? '2px solid #5ca6ec' : 'none'}}>
            <img src={i.src} alt="example" onClick={(e) => getSrc(e,i.id)} />
            </div>
        )}
    </div>
    );
};

export default Apricot;