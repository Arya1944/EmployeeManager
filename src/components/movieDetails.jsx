import React, { Component } from 'react';


const MovieDetails = ({match, history}) => {
    //const id = queryString.parse(location.search);

    return (
        <React.Fragment>
    <h1> MovieDetails id ={match.params.id} </h1>
    <button type="button" class="btn btn-primary" onClick={()=> history.push('/movies')}>Save</button> </React.Fragment>);
}
 
export default MovieDetails;

