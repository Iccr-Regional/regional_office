import React, { Component } from "react";
import { Consumer } from "./context";
import SuperAdminNavigation from "./SuperAdminNavigation";
import axios from "axios";
import Footer from './footer';
import SimpleMDE from "react-simplemde-editor";




class AddRegionalOffice extends Component {

  constructor(props){
    super(props);
    this.state = {
      rimage: "",
    rname: "",
    submitMessage: "",
    submitMessageTextColor: "", 
    rid:"",
    rdesc:"",
    rbudget:"",
    rlocation:"",
    perbudget:"",
    curbudget:""
    };
  }


  publishData=()=> {
    
      axios.post('http://localhost:3001/create',{
      rid:parseInt(this.state.rid,10),
      rname:this.state.rname,
      rimage:this.state.rimage,
      rlocation:this.state.rlocation,
      rdesc:this.state.rdesc,
      perbudget:parseInt(this.state.perbudget),
      curbudget:parseInt(this.state.perbudget)
    }).then(()=>{
      console.log("success");
    })
    .catch(err =>{
      console.log(err)
    });  
}
  state = {
    rimage: "",
    rname: "",
    rid:"",
    rdesc:"",
    rbudget:"",
    rlocation:"",
    submitMessage: "",
    submitMessageTextColor: "",
  };

  handleonChange = (event) => {
    console.log(event.target.value);
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  onSubmit = event  => {
    event.preventDefault();
    console.log(this.state.rid);
    console.log("on submited");
    this.publishData();
    let isSuccessful = true;
    if (isSuccessful) {
      this.setState({
        submitMessage: `Project published successfully`,
        submitMessageTextColor: "text-info",
      });
    } else {
      this.setState({
        submitMessage: "Publish failed :(",
        submitMessageTextColor: "text-danger",
      });
    }

    const newRegionalOffice = {
      rid: this.state.rid,
      rimage: this.state.rimage,
      rname: this.state.rname,
    };

   // handler("ADD_REGIONAL_OFFICE",newRegionalOffice);
  };

  render() {
    return (
      <Consumer>
        {(value) => {
          const {
            rimage,
            rname,
            submitMessage,
            submitMessageTextColor,
          } = this.state;
      

          return (
            <div>
            <video loop autoPlay muted id="bg-video">
                <source src={require("./pink.mp4")} type="video/mp4"/>
            </video>
            <div className="container-fluid">
              <SuperAdminNavigation/>
              <br/>
              <br/>
              <br/>
              
              <h1 className="text-center my-5 font-weight-light">
                Add Regional Office
              </h1>
              <div className="row px-3 px-lg-5">
                <div className="col-12 col-lg-6 px-lg-5">
                  <form onSubmit={this.onSubmit}>
                  
                  <div className="form-group">
                      <label htmlFor="rid" style={{color:'white'}}>Id *</label>
                      <input
                        type="number"
                        name="rid"
                        id="rid"
                        value={this.state.rid}
                        className="form-control"
                        onChange={this.handleonChange}
                        required
                      />
                    </div>

                    <div className="form-group">
                      <label htmlFor="rname" style={{color:'white'}}>Name *</label>
                      <input
                        type="text"
                        name="rname"
                        id="rname"
                        value={this.state.rname}
                        className="form-control"
                        onChange={this.handleonChange}
                        required
                      />
                    </div>
                    <div className="form-group">

                      <label htmlFor="rdesc" 
                      style={{color:'white'}}>About *</label>
                      <textarea name="rdesc"
                       id="rdesc" 
                       className="form-control" 
                       onChange={this.handleonChange} 
                       rows="10" cols="20" 
                       required/>

                    </div>
                    <div className="form-group">
                      <label htmlFor="perbudget">Permenant Budget *</label>
                      <input
                        type="text"
                        name="perbudget"
                        id="perbudget"
                        value={this.state.perbudget}
                        className="form-control"
                        onChange={this.handleonChange}
                        required
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="rimage" style={{color:'white'}}>Image Url *</label>
                      <a href="https://postimages.org/" target="_blank" className=" text-right">Click here to upload images</a>
                      <p className="text-left" style={{color:'white'}}>Click on choose images and select the image you want to upload. You can also change the size of the image if you want. After uploading you will be given the links for image. Copy the link and paste it below.</p>
                      <input
                        type="url"
                        name="rimage"
                        id="rimage"
                        value={this.state.rimage}
                        className="form-control"
                        onChange={this.handleonChange}
                        required
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="rlocation" style={{color:'white'}}>Location *</label>
                      <input
                        type="url"
                        name="rlocation"
                        id="rlocation"
                        value={this.state.rlocation}
                        className="form-control"
                        onChange={this.handleonChange}
                        required
                      />
                    </div>                   
                    <div className="d-flex justify-content-around">
                    <button
                      type="submit"
                      className="btn btn-dark"
                      style={{ backgroundColor: "black" }}
                    >
                      Publish
                    </button>
                    <button
                      type="reset"
                      className="btn btn-dark"
                      style={{ backgroundColor: "black" }}
                    >
                      Cancel
                    </button>
                   </div>
                  </form>
                  <div className="text-center">
                    <h5 className={submitMessageTextColor}>{submitMessage}</h5>
                  </div>
                </div>
                <div className="col-12 col-lg-6 markdown">
                  <div className="justify-content-center">
                    <img src={rimage} alt={rname} className="img-fluid"/>
                  </div>
                  <h1 className="font-weight-light text-center my-5">
                    {rname}
                  </h1>
                  </div>
              </div>
            </div>
            <Footer/>
            </div>
          );
        }}
      </Consumer>
    );
  }
}

export default AddRegionalOffice;