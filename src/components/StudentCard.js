import React, { Component } from 'react'
import axios from 'axios'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

class StudentCard extends Component {
  constructor(props) {
    super(props)
    this.state = {
      students: []
    }
  }

  componentDidMount() {
    this.getAllStudents()
  }

  getAllStudents() {
    axios.get('http://localhost:5000/students/')
          .then(res => {
            this.setState({
              students: res.data
            })
          })
          .catch(err =>{
            console.log(err)
          })
        }

  render() {
    return (
      <div className='card'>
      {
        this.state.students.map((res,index) => (
          <>
          <Card style={{ width: '18rem' }} key={res._id}>
            <Card.Img variant="top" src="https://www.macmillandictionary.com/us/external/slideshow/full/Grey_full.png" />
            <Card.Body>
              <Card.Title>{res.code}</Card.Title>
              <Card.Text>
                {res.firstname}{' '}{res.lastname}<br/>
                {res.email}
              </Card.Text>
              <Button variant="dark">View</Button>
            </Card.Body>
          </Card>
          </>
        ))
      }
      </div>
    )
  }
}

export default StudentCard