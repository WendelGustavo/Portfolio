

const language = {
    pt : {
        title: 'Português',
        Home : {
            introdctionText : 'Olá, sou',
            nameText : 'Wendel Gustavo',
            jobText : 'Desenvolvedor Full Stack',
            TextAbout : `Sou um Desenvolvedor Full Stack com 1 ano de experiência.
            Estou cursando Ciência da Computação na Faculdade Feevale 2º Semestre.
            Focado em evoluir meus conhecimentos sempre visando o meu crescimento profissional.`,
            TextButton : 'Currículo',
            TextButton2 : 'Projetos',
        },
        NavBar : {
            HomeText : 'Home',
            formationText : 'Formação',
            ProjectsText : 'Projetos',
            SkillsText : 'Habilidades',
            ContactText : 'Contato',
        },
        
    },
    en: {
        title: 'English',
        Home : {
            introdctionText : 'Hello, I am',
            nameText : 'Wendel Gustavo',
            jobText : 'Full Stack Developer',
            TextAbout : `I am a Full Stack Developer with 1 year of experience.
            I am studying Computer Science at Faculdade Feevale 2nd Semester.
            Focused on evolving my knowledge always aiming at my professional growth.`,
            TextButton : 'Resume',
            TextButton2 : 'Projects',
        },
        NavBar : {
            HomeText : 'Home',
            formationText : 'Formation',
            ProjectsText : 'Projects',
            SkillsText : 'Skills',
            ContactText : 'Contact',
        },
    },
};

if (localStorage.getItem('language') === null) {
    localStorage.setItem('language', 'pt');
}

export default language[localStorage.getItem('language') || language['pt']];
