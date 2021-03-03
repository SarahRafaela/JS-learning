const approved = ['Sirius', 'James', 'Lupin', 'Lily']

approved.forEach(function (name, index) {
    console.log(`${index + 1}) ${name}`)
})

approved.forEach(name => console.log(name))

// defined on a constant
const showApproved = approved => console.log(approved)

approved.forEach(showApproved)