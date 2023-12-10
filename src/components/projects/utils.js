import project1 from '../../img/project1.png'
import project2 from '../../img/project2.png'
import project3 from '../../img/project3.png'
import project4 from '../../img/project4.png'
import project5 from '../../img/project5.png'
import project6 from '../../img/project6.png'

const WorkCardData = [
    {
        imgsrc: project1,
        title: 'Gpt-UI' ,
        description: 'This is a modern GPT UI that i made to showcase my React, CSS, and Html skills',
        viewUrl: 'https://gptui-new.netlify.app/',
        sourceUrl: 'https://github.com/RAMESH189/modern-gpt-ui',
    },
    {
        imgsrc: project2,
        title: 'MovieFlix' ,
        description: "This is a project that i've created using React, CSS the TMDB Api",
        viewUrl: 'https://thefilmsapp.netlify.app/',
        sourceUrl: 'https://github.com/RAMESH189/MovieFlix',
    },
    {
        imgsrc: project3,
        title: 'CartList' ,
        description: 'This is a simple website i creeated as part of my redux studies.',
        viewUrl: 'https://cart-list-basic.netlify.app/',
        sourceUrl: 'https://github.com/RAMESH189/cartList--redux',
    },
    {
        imgsrc: project4,
        title: 'the-movie-db' ,
        description: "This is a project that i've created using Next js and Tailwind CSS with the TMDB Api",
        viewUrl: 'https://the-movie-db-v1.vercel.app/',
        sourceUrl: 'https://github.com/RAMESH189/Imdb-clone',
    },
    {
        imgsrc: project5,
        title: 'Social-media-API' ,
        description: "This is a social media api i developed using NodeJS and express.",
        viewUrl: 'https://github.com/RAMESH189/PostNow---API',
        sourceUrl: 'https://github.com/RAMESH189/PostNow---API',
    },
    {
        imgsrc: project6,
        title: 'Fitness-App' ,
        description: "Fitness App made utilising Meterial UI and Rapid API",
        viewUrl: 'https://gymbro-app.netlify.app/',
        sourceUrl: 'https://github.com/RAMESH189/gym-app',
    }
]

export default WorkCardData;

export const sliderSettings = {
    slidesPerView: 1,
    spaceBetween: 60,
    grabCursor: true,
    breakpoints: {
        480: {
            slidesPerView:1
        },
        600: {
            slidesPerView:2
        },
        960: {
            slidesPerView:3
        },
        1100: {
            slidesPerView:4
        }
    }
        
}