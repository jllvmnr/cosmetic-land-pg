import './Services.css'
import React from 'react';
import img1 from '../assets/neauthy-skincare.jpg'
import img2 from '../assets/pexels.jpg'

const Card = ({ title, text, imageUrl, buttonText }) => {
    return (
      <>
      <div className="card">
            <img className='servicesImg' src={imageUrl} alt={title}/>
            <h2>{title}</h2>
            <p>{text}</p>
            <button>{buttonText}</button>
        </div>
      </>
    );
};

export default function Services({ title, text, imageUrl,buttonText }){
    const cardsData = [
        {
          title: 'Cosmetology',
          text: 'It is a long established fact that a reader will be distracted by the readable normal distribution of letters as opposed of using..',
          imageUrl: 'https://i.pinimg.com/564x/03/3c/45/033c45df2fa99bd56f69ae4907e73bc8.jpg',
          buttonText:'Learn More',
        },
        {
          title: 'Make-up',
          text: 'It is a long established fact that a reader will be distracted by the readable normal distribution of letters as opposed of using..',
          imageUrl: 'https://images.unsplash.com/photo-1616750819456-5cdee9b85d22?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
          buttonText:'Learn More',
        },
        {
          title: 'Beauty',
          text: 'It is a long established fact that a reader will be distracted by the readable normal distribution of letters as opposed of using..',
          imageUrl:'https://i.pinimg.com/564x/b0/01/d7/b001d75aa24268d25fdc5bb84c367ec1.jpg',
          buttonText:'Learn More',
        },
      ];
    return(
        <>
        <h1 className='PointH'>Our Services</h1>
        <div className='container'>
        <div className="Services">
            {cardsData.map((card, index) => (
            <Card key={index} {...card} />
            ))}
        </div>
        </div>
        </>
    )
}