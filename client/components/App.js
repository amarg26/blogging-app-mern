//client/components/App.js
import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import Add from './Add';
export default class App extends React.Component {
constructor() {
    super();
    this.state = {data: []};
    this.getData = this.getData.bind(this);
  }

getData =() =>{
    axios.get('/')
      .then((response) => {
        this.setState({data: response.data});
      });
  }
render() {
    return (
      <div>
        <Add  />
        <div>
        {
         this.state.data.map((blog) => (
               // <div key={i}>       
          <table>       
            <tr>              
                <td className='desc-col'>{blog.title}</td>
                <td className='button-col'>{blog.auther}</td>
                <td className='button-col'>{blog.description}</td>
                <td className='button-col'>{blog.date}</td>
                <td className='button-col'>{blog.comments}</td>
            </tr>
                
          </table>
           // </div>
              ))}
        </div>
      </div>
    );
  }
}


