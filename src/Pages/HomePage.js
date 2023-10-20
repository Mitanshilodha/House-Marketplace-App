import React from 'react'
import {useNavigate} from 'react-router-dom'
import Layout from '../components/Layout'
import Slider from '../components/Slider';
import "../styles/homepage.css";

const HomePage = () => {
  const navigate= useNavigate();
  const img1= "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cHJvcGVydHl8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
  const img2= "https://images.unsplash.com/photo-1626178793926-22b28830aa30?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cHJvcGVydHl8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
  return (
    <Layout>
      <Slider/>
      <div className="home-cat row d-flex align-items-center justify-content-center">
      <h1>Category</h1>
        
      
            <div className="col-md-5">
              <div className="Imagecontainer">
                <img src={img1} alt="rent" style= {{width: '100%'}}/>
                <button className="btn"
                 onClick={()=>navigate('/Category/rent')}
                >FOR RENT</button>
              </div>
            </div>
            <div className="col-md-5">
            <div className="Imagecontainer">
                <img src={img2} alt="Sale" style= {{width: '100%'}}/>
                <button className="btn"
                onClick={()=>navigate('/Category/sale')}
                >FOR SALE</button>
              </div>
              
            </div>
          </div>
    </Layout>
  )
}

export default HomePage