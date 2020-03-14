import React, { Component } from 'react';



const urlBookTab = 'https://anapioficeandfire.com/api/books/'

class Book extends Component {
    
    constructor(props){
        super(props)
        this.state = {
            url : ''
        }
    }
    
    componentDidMount(){
        fetch(urlBookTab)
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

        
        function setMonth(val){
            var month = [];
            month[0] = "January";
            month[1] = "February";
            month[2] = "March";
            month[3] = "April";
            month[4] = "May";
            month[5] = "June";
            month[6] = "July";
            month[7] = "August";
            month[8] = "September";
            month[9] = "October";
            month[10] = "November";
            month[11] = "December";
            
            return month[val];
        }
        
        function getFormatDate(dd, mmm, yyyy){
            return dd + ' ' + setMonth(mmm) + ' ' + yyyy
        }
     
        if(!datas)   return <div className="loader"></div>
        
        if(this.state.url === ''){  //Show Main

            return (
                <div className="Books-container">
                <h1>The World of ASOIAF</h1>
            
                <div className="main">
                    

                   {
                        datas.map((data, index) =>
                        
                                  <div key={index} className="col-md-4 col-sm-12">
                                      <div className="main-box col-sm-12" onClick={this.handleClickShowMore.bind(this, data.url, index)}>
                                          <h2>{data.name}</h2>
                                          <div>
                                              <h5>by {data.authors}</h5><br />
                                          </div>
                                          <div>
                                              <h5><i>
                                              {
                                                  getFormatDate(
                                                      new Date(data.released).getDate(),
                                                      new Date(data.released).getMonth(),
                                                      new Date(data.released).getFullYear()
                                                  )
                                              }
                                              </i></h5>
                                          </div>
                                          <br />
                                      </div>
                                    </div>
                                 )
                   }
                </div>
                </div> 
            ) 
           
        } else {    //Show more
             return (
            
                 <div className="col-sm-6">
                    <br />
                     
                     <br /><br />
                     
                     <div className="main-table">
                        <table className="table table-striped">
                            <tbody>
                                <tr>
                                    <td className='show-more-col-4'>Title</td>
                                    <td className='show-more-col-4'>{datas[this.state.id].name}</td>
                                </tr>
                                <tr>
                                    <td className='show-more-col-4'>ISBN</td>
                                    <td className='show-more-col-4'>{datas[this.state.id].isbn}</td>
                                </tr>
                                <tr>
                                    <td className='show-more-col-4'>Author</td>
                                    <td className='show-more-col-4'>{datas[this.state.id].authors}</td>
                                </tr>
                                <tr>
                                    <td className='show-more-col-4'>Publisher</td>
                                    <td className='show-more-col-4'>{datas[this.state.id].publisher}</td>
                                </tr>
                                <tr>
                                    <td className='show-more-col-4'>Released date</td>
                                    <td className='show-more-col-4'>{getFormatDate(
                                                  new Date(datas[this.state.id].released).getDate(),
                                                  new Date(datas[this.state.id].released).getMonth(),
                                                  new Date(datas[this.state.id].released).getFullYear()
                                              )
                                        }</td>
                                </tr>
                                <tr>
                                    <td className='show-more-col-4'>Country</td>
                                    <td className='show-more-col-4'>{datas[this.state.id].country}</td>
                                </tr>
                                <tr>
                                    <td className='show-more-col-4'>No. of characters</td>
                                    <td className='show-more-col-4'>{datas[this.state.id].characters.length}</td>
                                </tr>
                                <tr>
                                    <td className='show-more-col-4'>No. of POV characters</td>
                                    <td className='show-more-col-4'>{datas[this.state.id].povCharacters.length}</td>
                                </tr>
                                <tr>
                                    <td className='show-more-col-4'>No. of pages</td>
                                    <td className='show-more-col-4'>{datas[this.state.id].numberOfPages}</td>
                                </tr>
                            </tbody>
                        </table> 
                        
                        <br />
                    </div>
                    <div className="main-image"></div> 
                    </div>
              
            )
        }   
        
    }
  
}

export default Book;


