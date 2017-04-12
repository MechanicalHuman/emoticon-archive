'use strict'

const SOURCESDIR = './sources'

const fs = require('fs')
const path = require('path')
const lodash = require('lodash')
const async = require('async')
// Create an empy array to hold the emojis
let list = []

async.waterfall([], returnZero)

function returnZero (err, results) {
  if (err) {
    console.log(err.message)
    return
  }
  console.log(results)
}

// fs.readdir(SOURCESDIR, 'utf8', sourcesCallback)

function sourcesCallback (err, files) {
  if (err) {
    console.log(err.message)
    return
  }
  aggregateFiles(files)
}

function aggregateFiles (fileArray, done) {
  lodash.each(fileArray, appendToList)
}

function appendToList (filename) {
  let filepath = path.join(__dirname, SOURCESDIR , filename)
  console.log(filepath)
}
// // Load the archive Syncronically
// const archive = fs.readFileSync('emotiocons.md', 'utf8')

//
// let list = []
// list = archive.split('\n') // Split the file using the EOL
// list = lodash.map(list, lodash.trim) // clean up the EOL whitespace
// const total = list.length // store the total specimens

// list = lodash.uniq(list) // duplicate-free version of the specimens, using SameValueZero
// const uniques = list.length // store new total specimens
// console.log(`Removed ${total - uniques} duplicates`)

// let finalList = list.sort().join('\n')
// fs.writeFileSync('./clean-emoticons.md', finalList, 'utf8')
// console.log(finalList)
