const Cube = require('../models/cube')

const newCube = new Cube('First', 'First test for cube', 'https://google.com', 1)

newCube.save()