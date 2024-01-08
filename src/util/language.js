

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
        Education : {
            sectionTitle : 'Minha ',
            sectionTitle2 : 'Jornada',
            title : 'Formação',
            formationArray : [
                {
                    title : 'Ciência da Computação - Bacharelado (FEEVALE)',
                    date : '2023 - ATUALMENTE (CURSANDO)',
                    description : 'Cursando o 2º Semestre de Ciência da Computação na Faculdade Feevale.',
                },
                {
                    title : 'Ensino Médio Técnico - Informática (CIMOL)',
                    date : '2020 - 2023',
                    description : 'Ensino Médio Técnico no curso de Informática, em conjunto com estágio de 400 horas, uma experiência que agregou um valor significativo à minha formação acadêmica e profissional.',
                },
            ],
            titleJobs : 'Experiência',
            jobsArray : [
                {
                    title : 'Desenvolvedor Full Stack - Kabupi ( FREELANCE )',
                    date : ' Ago de 2023 - ATUALMENTE',
                    description : 'Desenvolvimento de um sistema de Voucher, descontos e cashbacks, direcionado ao turismo da serra gaúcha.',
                },
                {
                    title : 'Desenvolvedor Full Stack - CONSEPRO',
                    date : ' Jan de 2021 - ATUALMENTE',
                    description : 'Desenvolvimento de um sistema de gestão de estacionamento rotativo da cidade de Taquara.',
                },
            ],
        },
        Skills: {
            sectionTitle : 'Minhas ',
            sectionTitle2 : 'Habilidades',
        },
        Contact : {
            sectionTitle : 'Entre em',
            sectionTitle2 : 'Contato!',
            placHolders : {
                name : 'Nome',
                email : 'Seu Email',
                title : 'Título',
                message : 'Sua Mensagem',
            },
            buttonSend : 'Enviar',
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
        Education : {
            sectionTitle : 'My ',
            sectionTitle2 : 'Journey',
            title : 'Formation',
            formationArray : [
                {
                    title : 'Computer Science - Bachelor (FEEVALE)',
                    date : '2023 - CURRENTLY (STUDYING)',
                    description : 'Studying the 2nd Semester of Computer Science at Faculdade Feevale.',
                },
                {
                    title : 'Technical High School - Computer Science (CIMOL)',
                    date : '2020 - 2023',
                    description : 'Technical High School in the Computer Science course, together with an internship of 400 hours, an experience that added significant value to my academic and professional training.',
                },
            ],
            titleJobs : 'Experience',
            jobsArray : [
                {
                    title : 'Full Stack Developer - Kabupi ( FREELANCE )',
                    date : ' Aug 2023 - CURRENTLY',
                    description : 'Development of a Voucher, discounts and cashbacks system, aimed at tourism in the Serra Gaúcha.',
                },
                {
                    title : 'Full Stack Developer - CONSEPRO',
                    date : ' Jan 2021 - CURRENTLY',
                    description : 'Development of a parking lot management system for the city of Taquara.',
                },
            ],
        },
        Skills: {
            sectionTitle : 'My ',
            sectionTitle2 : 'Skills',
        },
        Contact : {
            sectionTitle : 'Get in',
            sectionTitle2 : 'Contact!',
            placHolders : {
                name : 'Name',
                email : 'Your Email',
                title : 'Title',
                message : 'Your Message',
            },
            buttonSend : 'Send',
        },
    },
};

if (localStorage.getItem('language') === null) {
    localStorage.setItem('language', 'pt');
}

export default language[localStorage.getItem('language') || language['pt']];
