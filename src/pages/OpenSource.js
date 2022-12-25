import React from 'react'

function OpenSource() {
    
    const [pulls, setPulls] = React.useState()

    React.useEffect(() => {
        const url = 'https://api.github.com/repos/vasucp1207/linkfree/pulls?state=all'
        fetch(url)
            .then(res => res.json())
            .then(data => setPulls(data))
    }, [])
    console.log(pulls)
  return (
    <div>
        
    </div>
  )
}

export default OpenSource