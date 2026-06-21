import portfolio from '/src/assets/img/portfolio.png';
import spotify from '/src/assets/img/Minimal-Music-Player.png';
import toDo from '/src/assets/img/Microsoft-To-Do.png';

const projectsData = [
    { title: 'Microsoft To Do', discription: 'Microsoft inspired to do with basic feature', techStack: 'React & Tailwind CSS', image: toDo , mode: '🟢 Online', demoLink: 'https://vinayaksharmadev.github.io/Microsoft-To-Do/', github: 'https://github.com/VinayakSharmaDev/Microsoft-To-Do/', id: crypto.randomUUID() },

    { title: 'Spotify - Home Page', discription: 'A minimal Spotify-inspired music player.', techStack: 'HTML, CSS, and JavaScript', image: spotify, mode: '🟢 Online', demoLink: 'https://vinayaksharma-minimal-music-player.netlify.app/', github: 'https://github.com/VinayakSharmaDev/minimal-music-player', id: crypto.randomUUID() },

    {
        title: 'First Portfolio', discription: 'My first ever Portfolio', techStack: 'HTML, CSS, and JavaScript',
        image: portfolio, mode: '🟢 Online', demoLink: 'https://vinayaksharmadev.netlify.app/', github: 'https://github.com/VinayakSharmaDev/VinayakSharmaDev', id: crypto.randomUUID()
    }
]

export default projectsData;