import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;500&display=swap');

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
    font-size: 22px;
    color: white;
  }


  img{
    width: 9vh;
    height: 16vh;
    margin: 0;
  }

  .img {
    cursor: pointer;
  }

  .article{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }

  .names {
    background: yellowgreen;
    display: flex;
    justify-content: space-around;
    padding: 10px;
  }

  .check-box {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .check-box span{
    padding: 10px;
  }
  .isModal{
    height: 100%;
    width: 100%;
    background: rgba(0, 0, 0, 0.4);
    position: fixed;
    top: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    opacity: 0;
    transition: 0.5s;
    pointer-events: none;
  }

  .isModal.active {
    opacity: 1;
    pointer-events: all;
  }

  .abv-col {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .abv-col span{
    padding: 16px;
  }
  .name {
    width: 35%;
    text-align: center;
  }
  .tagline {
    width: 35%;
    text-align: center;
  }

  .photo {
    width: 15%;
    text-align: center;
  }

  .abv {
    width: 15%;
    text-align: center;
  }
  .show-buttons {
    display: none;
  }

  .hide-buttons {
    display: inline;
  }

  .modal__content {
    padding: 20px;
    border-radius: 12px;
    background: white;
    height: 80vh;
    width: 90vh;
    transform: scale(0.5);
    transition: 0.4s all;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background-image: url("https://oir.mobi/uploads/posts/2021-03/1616542700_10-p-pivo-fon-12.jpg");
  }

  .picture{
    height: 25vh;
    width: 13vh;
  }
  .picture-column {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .tr-more-info {
    cursor: pointer;
  }

  .modal__content.active {
    transform: scale(1);
  }

  .kek {
    transition: width 1s, height 1s, transform 1s;
  }

  .kek:hover {
    transform: rotate(360deg);
  }

`