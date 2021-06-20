import React from 'react'
import { Link } from 'react-router-dom';
import './selectFilter.min.js'

function CardItem2(props) {
  return (
    <>
      <li className='cards__item'>
        <div className='cards__item__link' to={props.path}>
          <figure className='cards__item__pic-wrap v2' data-category={props.label}>
          <h2>hl</h2>
            {/* <select data-target="secondList" class="firstList selectFilter">
                <option value="-1">Select</option>
                <option data-ref="one" >First One</option>
                <option data-ref="two" >First Two</option>
                <option data-ref="three">First Three</option>
            </select>
            <br />
            <br />
            <select data-target="thirdList" class="secondList selectFilter">
                <option value="-1">Select</option>
                <option data-ref="A" data-belong="one" >First One</option>
                <option data-ref="B" data-belong="two">First Two</option>
                <option data-ref="C" data-belong="three">First Three</option>
                <option data-ref="D" data-belong="one">Second One</option>
                <option data-ref="E" data-belong="two">Second Two</option>
                <option data-ref="F" data-belong="three">Second Three</option>
            </select>
            <br />
            <br />
            <select class="thirdList selectFilter">
                <option value="-1">Select</option>
                <option data-belong="A" >First One</option>
                <option data-belong="B">First Two</option>
                <option data-belong="C">First Three</option>
                <option data-belong="D">Second One</option>
                <option data-belong="E">Second Two</option>
                <option data-belong="F">Second Three</option>
                <option data-belong="A">Third One</option>
                <option data-belong="B">Third Two</option>
                <option data-belong="C">Third Three</option>

            </select> */}
          </figure>
          <div className='cards__item__info'>
            <button type="button" class="btn btn-primary card_btn">{props.text}</button>
          </div>
        </div>
      </li>
      
    </>
  );
}

export default CardItem2;
