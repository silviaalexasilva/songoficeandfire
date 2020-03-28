import React, { Component } from 'react';
import "./Card.css";

    

    const urlCharacterTab = 'https://www.anapioficeandfire.com/api/characters'
    
    class Character extends Component {
        
        constructor(props){
            super(props)
            this.state = {
                url : ''
            }
        }
        
        componentDidMount(){
            fetch(urlCharacterTab)
                .then(data => data.json())
                .then( (data) =>  
                    {
                    this.setState({data})
                    }
                ) 
        }
        
        handleClickShowMore(val,index){
            if(val === ''){
                this.setState({url : ''})
            } else {
                this.setState({url : val})
                this.setState({id : index})
            }
        }
        
        render() {
            let datas = this.state.data
            
            function checkIsEmpty(val){
                if(val === ''){
                    return 'Not available'
                }
                if(val === 'undefined'){
                    return 'Not available'
                }
                return val
            }
            
            function genderIcon(val){
                if(val === 'Male'){
                    return <i className="fa fa-mars fa-2" aria-hidden="true"></i>
                }
              else  {
                return <i className="fa fa-venus fa-2" aria-hidden="true"></i>
            }
        }
            if(!datas)   return <div className="loader"></div>
            
            if(this.state.url === ''){  //Show Main
    
                return (
                    <div className="app">
                  <div className="ContainerCharacters">
                  <h1>Characters of ASOIAF</h1>
                  <div className="main">
                     
                       {
                            datas.map((data, index) =>
                                        <div key={index} className="col-md-4 col-sm-12">
                                            <div className="main-box col-sm-12" onClick={this.handleClickShowMore.bind(this, data.url, index)}>
                                              <h4>{checkIsEmpty(data.name)}</h4>
                                                <small>[ {genderIcon(data.gender)} ]</small>
                                                <div><small><i>Culture of {checkIsEmpty(data.culture)}</i></small></div>
                                              <br />
                                          </div>
                                        </div>
                                     )
                       }
                    </div>
                    </div>
                    </div>
                )
            } else {    //Show more
                
                 return (
                    <div className="appl">
                     <div className="col-sm-6">
                        <br />
                        
                        <div className='cursor-pointer' onClick={this.handleClickShowMore.bind(this, '', '')}>
                            <i className="fa fa-chevron-left fa-2" aria-hidden="true"></i><p>Back to main</p>
                         </div>
                        <br /><br />
                         
                        <div className="main-table">
                            <table className="table table-striped">
                                <tbody>
                                    <tr className='show-more-col-4'>
                                        <td>Name</td>
                                        <td>{checkIsEmpty(datas[this.state.id].name)}</td>
                                    </tr>
                                    <tr>
                                        <td>Gender</td>
                                        <td>{checkIsEmpty(datas[this.state.id].gender)}</td>
                                    </tr>
                                    <tr>
                                        <td>Culture</td>
                                        <td>{checkIsEmpty(datas[this.state.id].culture)}</td>
                                    </tr>
                                    <tr>
                                        <td>Aliases</td>
                                        <td>{checkIsEmpty(datas[this.state.id].aliases[0])}</td>
                                    </tr>
                                    
                                    <tr>
                                        <td>Father</td>
                                        <td>{checkIsEmpty(datas[this.state.id].father)}</td>
                                    </tr>
                                    <tr>
                                        <td>Mother</td>
                                        <td>{checkIsEmpty(datas[this.state.id].mother)}</td>
                                    </tr>
                                    <tr>
                                        <td>Spouse</td>
                                        <td>{checkIsEmpty(datas[this.state.id].spouse)}</td>
                                    </tr>
                                    <tr>
                                        <td>Played By</td>
                                        <td>{checkIsEmpty(datas[this.state.id].playedBy[0])}</td>
                                    </tr>
                                </tbody>
                            </table> 
                             
                            <br />
                        </div>
                
                    </div>
                
                      </div> 
                )
            }
        }
    
       
    }
    
    export default Character;
    