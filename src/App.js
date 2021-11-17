import React, { useEffect, useState } from 'react';
import "bootstrap/dist/css/bootstrap.min.css"
import axios from "axios"
import './App.css';

const App = () => {

  const [data, setData] = useState([])
  var final = [];
  var crousels = 0
  if ((data.length % 6) === 0) {
    crousels = data.length // 6
  } else {
    crousels = data.length // 6
    crousels += 1
  }


  const looping = () => {
    for (let i = 0; i < crousels; i++) {
      final.push(
        <div>
          <div class="card mb-3" style={{ maxWidth: `900px`, marginLeft: `50px` }}>
            <div class="row g-0">
              <div class="col-md-8">
                <div class="card-body">
                  <h5 class="card-title">{data[i].title}</h5>
                  <p class="card-text">{data[i].body}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    }
    console.log();
  }


  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/posts')
      .then(response => {
        setData(response.data)
        console.log(data[50]);
        looping()
      })
  }, [])

  let count = 0





  console.log(data[50])
  return (
    <>
      <div div class="vertical-nav" id="sidebar" >
        <div class="pt-4 px-3 mb-4">
          <div class="card text-dark bg-light mb-3" style={{ maxWidth: `18rem` }}>
            <div class="card-body">
              <h5 class="card-title">Hi Reader</h5>
              <p class="card-text">Here's your news</p>
            </div>
          </div>
        </div>
        <div class="px-3 mb-4">
          <div class="card text-dark bg-light mb-3" style={{ maxWidth: `18rem` }}>
            <div class="card-body">
              <h5 class="card-title text-center">View Toggle</h5>
              <div class="buttonLeft"></div>
              <div class="buttonRight"></div>
            </div>
          </div>
        </div>
        <div class="px-3 mb-4">
          <div class="card text-dark bg-light mb-3" style={{ maxWidth: `18rem` }}>
            <div class="card-body">
              <h5 class="card-title text-center">Have a Feedback?</h5>
              <div class="buttonFeedback">We're Listening!</div>
            </div>
          </div>
        </div>
      </div >



      <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
        <div class="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div class="carousel-inner">
          <div class="carousel-item active">
            {
              data.map((item, index) => (
                <>
                  {count += 1}
                  <div class="card mb-3" style={{ maxWidth: `900px`, marginLeft: `50px` }}>
                    <div class="row g-0">
                      <div class="col-md-8">
                        <div class="card-body">
                          <h5 class="card-title">{item.title}</h5>
                          <p class="card-text">{item.body}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              ))
            }
          </div>
          <div class="carousel-item">
            <img src="..." class="d-block w-100" alt="..." />
          </div>
          <div class="carousel-item">
            <img src="..." class="d-block w-100" alt="..." />
          </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>


      <div style={{ marginTop: `30px` }}>
        {
          data.map((item, index) => (
            <>
              <div class="card mb-3" style={{ maxWidth: `900px`, marginLeft: `50px` }}>
                <div class="row g-0">
                  <div class="col-md-8">
                    <div class="card-body">
                      <h5 class="card-title">{item.title}</h5>
                      <p class="card-text">{item.body}</p>
                    </div>
                  </div>
                </div>
              </div>
            </>
          ))
        }
      </div>
    </>
  )
}

export default App;
