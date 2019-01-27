import React from 'react'

const parser = new DOMParser()

fetch(proxyurl + url)
.then(function(response) {
  return response.text()
})
.then(function(data) {
  const xmlDoc = parser.parseFromString(data,"text/xml")
  console.log(xmlDoc)
  console.log(data)
})

const App = () => {
  return (
    <div className="App">
      <h1>Hello React!</h1>
    </div>
  )
}

export default App