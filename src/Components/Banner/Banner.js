import React from 'react';
import p4 from '../../assets/planes/5.jpg'
import p1 from '../../assets/planes/7.jpg'
import p2 from '../../assets/planes/8.jpg'
import p3 from '../../assets/planes/10.jpg'
import BannerItem from './BannerItem';


const Banner = () => {


    const bannerData = [
        {
            image: p1,
            prev: 4,
            id: 1,
            next: 2
        },
        {
            image: p2,
            prev: 1,
            id: 2,
            next: 3
        },
        {
            image: p3,
            prev: 2,
            id: 3,
            next: 4
        },
        {
            image: p4,
            prev: 3,
            id: 4,
            next: 1
        },
        
    ]


    return (
        <div className='carousel widthh mx-auto '>
            {
                bannerData.map(banner => <BannerItem
                    key={banner.id}
                    banner={banner}
                ></BannerItem>)
            }
        </div>
    );
};

export default Banner;