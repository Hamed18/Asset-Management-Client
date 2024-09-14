// import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
// import React, { useEffect, useState } from 'react';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import { Navigation } from 'swiper/modules/navigation/navigation';
// import 'swiper/swiper-bundle.min.css'; // Ensure correct Swiper styles are imported
// import { Rating } from '@smastrom/react-rating';
// import '@smastrom/react-rating/style.css';

// const Testimonials = () => {
// 	const [reviews, setReviews] = useState([]);

//     useEffect(() => {
//         fetch('reviews.json')
//             .then(res => res.json())
//             .then(data => setReviews(data))
//     }, [])

// 	return (
//         <section className="my-20">
//             <SectionTitle
//                 subHeading="What Our Client Say"
//                 heading={'Testimonials'}
//             ></SectionTitle>

//             <Swiper navigation={true} modules={[Navigation]} className="mySwiper">

//                 {
//                     reviews.map(review => <SwiperSlide
//                         key={review._id}
//                     >
//                         <div className="flex flex-col items-center mx-24 my-16">
//                             <Rating
//                                 style={{ maxWidth: 180 }}
//                                 value={review.rating}
//                                 readOnly
//                             />
//                             <p className="py-8">{review.details}</p>
//                             <h3 className="text-2xl text-orange-400">{review.name}</h3>
//                         </div>
//                     </SwiperSlide>)
//                 }
//             </Swiper>
//         </section>
// 	);
// };

// export default Testimonials;


const Testimonials = () => {
	return (
		<div>
			
		</div>
	);
};

export default Testimonials;