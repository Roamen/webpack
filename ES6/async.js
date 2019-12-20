function getName() {
    return '游荡de蝌蚪'
}

function getAge() {
    return 18
}

async function getInfo() {
    // let name = await getName()
    // let age = await getAge()

    let [name, age] = await Promise.all([getName(), getAge()])
    
    return {
        name,
        age
    }
}

getInfo().then(res => {
    console.log(res)
})