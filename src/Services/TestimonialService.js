import axios from 'axios';

const RootPath = 'http://localhost:3000';

const testimonial=[
    { "id": 1, "name":"John Doe", "title": "Lorem ipsum dolor sit amet, consectetur adipiscing elit", "url": "https://placeimg.com/100/100/people/grayscale"},
    { "id": 2, "name":"Elsa", "title": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.", "url": "https://placeimg.com/100/100/people/sepia"},
    { "id": 3, "name":"Peter Stanbridge", "title": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", "url": "https://placeimg.com/100/100/people"}
]

const Get = (path) => {
    const promise = new Promise((resolve, reject) => {
        axios.get(`${RootPath}/${path}`)
        .then((result) => {
            resolve(result.data);
        }, (err) => {
            reject(err);
        })
    })
    return promise;
}

const getNewTestimonial = () => Get('testimonial');

const API = {
    getNewTestimonial,
}

export default API;