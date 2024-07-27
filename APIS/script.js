const requestURL = 'https://api.github.com/users/Akhilkhatri10'
    const xhr = new XMLHttpRequest()
    xhr.open('GET', requestURL)
    xhr.onreadystatechange = () => {
        console.log(xhr.readyState)
    }
    xhr.send()

