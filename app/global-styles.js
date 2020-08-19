import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  html,
  body {
    height: 100%;
    width: 100%;
  }

  body {
    font-family: 'Roboto', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  }

  body.fontLoaded {
    font-family: 'Roboto', 'Open Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  }

  #app {
    background-color: #f3f4f7;
    min-height: 100%;
    min-width: 100%;
    position: relative;
  }

  p,
  label {
    font-family: 'Roboto', Georgia, Times, 'Times New Roman', serif;
    /* line-height: 1.5em; */
  }
  form{
    background: #fff;
    box-shadow: 0px 3px 3px -2px rgba(0,0,0,0.2), 0px 3px 4px 0px rgba(0,0,0,0.14), 0px 1px 8px 0px rgba(0,0,0,0.12);
    max-width: 500px;
    margin: auto;
  }

input{
  display: block;
    width: 100%;
    height: 34px;
    padding: 10px 12px;
    font-size: 14px;
    line-height: 1.42857143;
    background-color: #fff;
    background-image: none;
    color: #555;
    border: 1px solid #ccc;
    border-radius: 4px;
    -webkit-box-shadow: inset 0 1px 1px rgba(0,0,0,.075);
    box-shadow: inset 0 1px 1px rgba(0,0,0,.075);
    -webkit-transition: border-color ease-in-out .15s,-webkit-box-shadow ease-in-out .15s;
    -o-transition: border-color ease-in-out .15s,box-shadow ease-in-out .15s;
    transition: border-color ease-in-out .15s,box-shadow ease-in-out .15s;
  &:focus {
    outline: none;
    border: 2px solid #4134FF;
  }
  &:focus ~ label{
    transform: translate(-12px,-23px) scale(0.75);
    color: #4134FF;
  }
}

input[type='date'] + label, .floating-label {
  transform: translate(-12px,-23px) scale(0.75);
  color: #4134FF;
}
label{
  color: rgba(0, 0, 0, 0.6);
  font-size: 16px;
  font-weight: normal;
  position: absolute;
  transition: 300ms ease all;
  left: 16px;
  right: initial;
  top: 50%;
  transform: translateY(-50%);
  pointer-events: none;
}
.required-label{
  color: rgba(0, 0, 0, 0.54);
  font-size: 10px;
}
.label-error{
  color: #b00020;
}
.hidden{
  display: none;
}

  .error-message{
    color: red;
    font-size: 12px;
  }
  .input-warning{
    font-size: 12px;
    color: orange;
  }
  .field-wrapper{
    position: relative;
  }
  .field-wrapper input{
    padding-left: 35px;
  }
  .field-flag{
    display: inline-block;
    width: 20px;
    position: absolute;
    top: 11px;
    left: 9px;
  }
  .field-flag.hide{
    opacity:0;
  }
  .dropdown-menu-skeleton{
    color: #555;
    border: 1px solid #ccc;
    border-radius: 4px;
    -webkit-box-shadow: inset 0 1px 1px rgba(0,0,0,.075);
    box-shadow: inset 0 1px 1px rgba(0,0,0,.075);
    position: relative;
    padding-right: 60px;
    padding-left: 20px;
  }

  .dropdown-menu{
    z-index: 1000;
    min-width: 160px;
    padding: 10px;
    margin: 2px 0 0;
    font-size: 14px;
    text-align: left;
    list-style: none;
    background-color: #fff;
    -webkit-background-clip: padding-box;
    background-clip: padding-box;
    border-radius: 4px;
    -webkit-box-shadow: 0 6px 12px rgba(0,0,0,.175);
    box-shadow: 0 6px 12px rgba(0,0,0,.175);
    max-height: 200px;
    overflow-y: scroll;
    border-radius: 4px;
  }
  .dropdown-menu>li {
    display: block;
    padding: 0 20px;
    clear: both;
    font-weight: 400;
    line-height: 1.42857143;
    color: #333;
    white-space: nowrap;
    position: relative;
  }
  .dropdown-menu>li a{
    display: block;
    cursor: pointer;
    padding: 5px 0;
    padding-left: 14px;
    width:100%;
  }
  .dropdown-menu >li:hover, .dropdown-menu >li:focus {
    text-decoration: none;
    color: #4134FF;
}
.dropdow-menu-flag{
  display: block;
    width: 15px;
    position: absolute;
    left: 8px;
    top: 0;
    bottom: 0;
    margin: auto;
}
.dropdown-menu-chevron{
  position: absolute;
  right: 20px;
  top: 0;
  bottom: 0;
  margin: auto;
  color: #ccc;
}

`;

export default GlobalStyle;
