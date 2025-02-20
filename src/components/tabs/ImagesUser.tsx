/* eslint-disable react/prop-types */
import React, { useState, MouseEvent } from 'react';
import * as helper from '../helper/commands';
import { ImagesProps } from '../../../types';

/**
 * Render Images of the user has
 * 
 * @param {*} props
 */
const Images = (props: ImagesProps) => {
  const [repo, setRepo] = useState('');

  const handleClick = (e: MouseEvent) => {
    e.preventDefault();
    helper.pullImage(repo);
  };

  const renderImagesList = props.imagesList.map((ele, i) => {
    return (
      <div className="box" key={`imageBox${i}`}>
        <div className="box-label">
          <h3>{ele['reps']}</h3>
          <p>{ele['tag']}</p>
        </div>
        <div className="stopped-info">
          <ul>
            <li>
              <strong>ID: </strong>{ele['imgid']}
            </li>
            <li>
              <strong>Size: </strong>{ele['size']}
            </li>
          </ul>
        </div>
        <br/><br/>
      </div>
    );
  });

  return (
    <div className="renderContainers">
      <div className="header">
        <h1 className="tabTitle">Images</h1>
        <div className="runByButton">
          <label>Enter Image Repo</label>
          <span>
            <input
              type="text"
              value={repo}
              onChange={(e) => {
                setRepo(e.target.value);
              }}
            ></input>
          </span>
          <button className="run-btn" onClick={(e) => handleClick(e)}>
            Pull
          </button>
        </div>
      </div>
      <div className="containers">{renderImagesList}</div>
    </div>
  );
};

export default Images;
