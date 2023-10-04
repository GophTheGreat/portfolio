// // style Skill grid
// console.log('helloWorld')
// const ulArray = document.querySelectorAll('.skillsWrapper ul')
// const mediaQuery = window.matchMedia('(max-width: 800px)')

// function sizeSkillGrid () {
//   if (window.innerWidth < 801) {
//     console.log('sizng')
//     ulArray.forEach((element) => {
//       let liCount = 0
//       const children = element.children
//       for (const child of children) {
//         if (child.tagName === 'LI') {
//           liCount += 1
//         }
//       }
//       console.log(liCount)
//       console.log(window.innerWidth)
//       console.log(element)
//       const skillWidth = (window.innerWidth / liCount)
//       console.log(skillWidth)
//       element.style.backgroundColor = 'red'
//       element.style.gridTemplateRows = '30px'
//       element.style.gridTemplateColumns = `repeat(auto-fit, minmax(${skillWidth}px, 1fr))`
//     })
//   } else {
//     console.log('no joy')
//     console.log(window.innerWidth)
//   }
// }

// window.onresize = sizeSkillGrid
