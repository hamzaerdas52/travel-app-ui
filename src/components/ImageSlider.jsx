import React, { useState } from 'react'
import icons from '../assets/icons'

const ImageSlider = () => {

    const [imageIndex, setImageIndex] = useState(0);

    const slideImages = [
        {
            url: 'https://images.unsplash.com/photo-1464093515883-ec948246accb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2659&q=80',
            title: 'Lobster',
        },
        {
            url: 'https://images.unsplash.com/photo-1512132411229-c30391241dd8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80',
            title: 'Sushi',
        },
        {
            url: 'https://images.unsplash.com/photo-1473093295043-cdd812d0e601?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80',
            title: 'Pasta',
        },
        {
            url: 'https://images.unsplash.com/photo-1539136788836-5699e78bfc75?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80',
            title: 'Salmon',
        }
    ];

    const prevSlide = () => {
        const isFirstSlide = imageIndex === 0;
        const newIndex = isFirstSlide ? slideImages.length - 1 : imageIndex - 1;
        setImageIndex(newIndex);
    }

    const nextSlide = () => {
        const isLastSlide = imageIndex === slideImages.length - 1;
        const newIndex = isLastSlide ? 0 : imageIndex + 1;
        setImageIndex(newIndex);
    }

    const goToIndexSlide = (slideIndex) => {
        setImageIndex(slideIndex);
    }

    return (
        <div className='max-w-[1200px] h-[500px] w-full m-auto py-16 px-2 relative group'>
            <div className='w-full h-full rounded-3xl bg-cover bg-center duration-500' style={{ backgroundImage: `url(${slideImages[imageIndex].url})` }}>
            </div>

            <div className='bottom-[15%] w-[20%] flex relative m-auto bg-white/60 rounded-xl font-bold p-2 max-w-[200px] justify-center items-center'>{slideImages[imageIndex].title}</div>

            <div className='slider-arrow left-5' onClick={prevSlide}><icons.left size={24} /></div>
            <div className='slider-arrow right-5' onClick={nextSlide}><icons.right size={24} /></div>

            <div className='flex relative justify-center items-center bottom-[5%]'>
                {slideImages.map((images, index) => (
                    <div className='text-xl cursor-pointer hover:text-3xl' key={index} onClick={() => goToIndexSlide(index)}>
                        <icons.dot />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default ImageSlider


