// Підключаємо технологію express для back-end сервера
const express = require('express')
// Cтворюємо роутер - місце, куди ми підключаємо ендпоїнти
const router = express.Router()

// ================================================================
var header = {
  name: {
    firstname: 'Khodan',
    lastname: 'Mariia',
  },
  position: 'Junior Fullstack JS Developer',
  salary: '600$ в місяць',
  address:
    'Україна, Чернівецька обл., Глибоцька ТГ, смт Глибока',
}
var footer = {
  social: {
    email: {
      text: 'dmytro@mail.com',
      href: 'mailto:dmytro@mail.com',
    },
    phone: {
      text: '+380670000123',
      href: '"tel:+380670000123',
    },
    linkedin: {
      text: 'LinkedIn',
      href: 'https://www.linkedin.com/in/dmytro-test',
    },
  },
}

// ================================================================

// router.get Створює нам один ентпоїнт

//           ↙ тут вводимо шлях (PATH) до сторінки
router.get('/', function (req, res) {
  // res.render генерує нам HTML сторінку

  //            ↙ cюди вводимо назву файлу з сontainer
  res.render('index', {})
  //                  ↑↑ сюди вводимо JSON дані
})

// ================================================================

//              ↙ тут вводимо шлях (PATH) до сторінки
router.get('/summary', function (req, res) {
  //             ↙ cюди вводимо назву файлу з сontainer
  res.render('summary', {
    // ↙ сюди вводимо JSON дані
    page: {
      title: 'Resume | summary',
    },

    header,

    main: {
      summary: {
        title: 'Summary',
        text: `Open-minded for new technologies, with 1 years of experience in development. Whenever I start to
      work on a new project I learn the domain and try to understand the idea of the project. Good team
      player, every colleague is a friend to me.`,
      },

      experience: {
        title: 'Other experience',
        text: `
      Pet project for parsing sport betting data from different platforms ( odds ) and sport statistics (
      tournament position, goals etc), analyzing by simple mathematics models and preparing probability
      for such events like: money line - first win / draw / second win, totals etc.`,
      },
    },
    footer,
  })
})

// ================================================================

//              ↙ тут вводимо шлях (PATH) до сторінки
router.get('/skills', function (req, res) {
  //             ↙ cюди вводимо назву файлу з сontainer
  res.render('skills', {
    // ↙ сюди вводимо JSON дані
    page: {
      title: 'Resume | skills',
    },

    header,

    main: {
      skills: [
        {
          name: 'HTML',
          point: 10,
          isTop: true,
        },
        {
          name: 'Handlebars',
          point: 8,
          isTop: true,
        },
        {
          name: 'VS Code & Git',
          point: 7,
        },
        {
          name: 'Terminal & NPM',
          point: 5,
        },
        {
          name: ' REACT.JS',
          point: 0,
        },
        {
          name: 'PHP',
          point: null,
        },
      ],
      hobbies: [
        {
          name: 'Готувати смачну їжу',
          isMain: true,
        },
        {
          name: 'Вести своє господарство',
          isMain: true,
        },
        {
          name: 'Їздити за кермом',
          isMain: false,
        },
      ],
    },

    footer,
  })
})

//              ↙ тут вводимо шлях (PATH) до сторінки
router.get('/education', function (req, res) {
  //             ↙ cюди вводимо назву файлу з сontainer
  res.render('education', {
    // ↙ сюди вводимо JSON дані
    page: {
      title: 'Resume | education',
    },

    header,

    main: {
      education: [
        {
          name: 'Неповна середня школа смт Глибока ',
          isEnd: true,
        },
        {
          name: 'Глибоцьке ПТУ спеціальність бухгалтер с.г',
          isEnd: true,
        },
        {
          name: 'Основи WEB UI розробки м.Чернівці 2021p',
          isEnd: false,
        },
        {
          name: 'IT-Banda курс: full stack web developer 2022p',
          isEnd: false,
        },
        {
          name: 'IT Brains курс: FULLSTACK(01.05.2023p) ',
          isEnd: false,
        },
      ],
      certificates: [
        {
          name: 'Web UI',
          id: 1,
        },
        {
          name: 'IT-Banda ',
          id: 2,
        },
        {
          name: 'IT Brains ',
          id: 3,
        },
      ],
    },

    footer,
  })
})

//              ↙ тут вводимо шлях (PATH) до сторінки
router.get('/work', function (req, res) {
  //             ↙ cюди вводимо назву файлу з сontainer
  res.render('work', {
    // ↙ сюди вводимо JSON дані

    layout: 'big',

    page: {
      title: 'Resume | work',
    },

    header,

    main: {
      works: [
        {
          position: 'junior fullstack developer',
          company: {
            name: 'IT Brains',
            url: null,
          },
          duration: {
            from: '10.10.2022',
            to: null,
          },
          projectAmount: 3,
          projects: [
            {
              name: 'Resume',
              url: 'https://resume.com.ua/',
              about: 'About la la la',
              stacks: [
                {
                  name: 'React.js',
                },
                {
                  name: 'HTML & CSS',
                },
                {
                  name: 'Nodejs',
                },
              ],
              stackAmoGnt: 5,
              awardAmoGnt: 4,
              awards: [
                {
                  name: 'super',
                },
                {
                  name: 'clas',
                },
              ],
            },
          ],
        },
      ],
    },

    footer,
  })
})

// Підключаємо роутер до бек-енду
module.exports = router
