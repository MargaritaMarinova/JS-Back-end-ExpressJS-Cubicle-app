// TODO: Require Controllers...
const {Router} = require('express')
const router = Router()
const {getCubes} = require('../controllers/cubes')

router.get('/', (req, res) => {
        res.render('index', {
            title: 'Home | Cube Workshop',
            cubes: getCubes()
        })
    })

    router.get('/about', (req, res) => {
        res.render('about', {
            title: 'About | Cube Workshop'
        })
    })

    router.get('/create', (req, res) => {
        res.render('create', {
            title: 'Create cube | Cube Workshop'
        })
    })

    router.get('/details/:id', (req, res) => {
        res.render('details', {
            title: 'Details | Cube Workshop'
        })
    })

    router.get('*', (req, res) => {
        res.render('404', {
            title: 'Error | Cube Workshop'
        })
    })
    

module.exports = router