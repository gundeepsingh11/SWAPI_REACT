import Theme from './theme';

export default `
* {
  box-sizing: border-box;
}

.clearfix:after {
  content: "";
  display: block;
  clear: both;
}
.overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0,0,0,0.7);
}

body {
  height: 100vh;
  font-family: ${Theme.fontFamilyPrimaryLight}, Helvetica, Arial, sans-serif;
  font-size: ${Theme.fontLarge};
  font-weight: ${Theme.fontNormal};
  letter-spacing: ${Theme.letterSpacing}
  padding-top: ${Theme.minHeightHeaderMobile};
  -webkit-tap-highlight-color:rgba(0,0,0,0);
  
  // &:before {
  //   content: '';
  //   opacity: 0.2;
  //   position: absolute;
  //   top: calc(50% - 50vh);
  //   left: calc(50% - 1500px);;
  //   background-color: #FFE918;
  //   width: 1040px;
  //   height: 100vh;
  //   min-height: 640px;
  //   transform: skewX(-15deg);
  // }
}

#root {
  height: 100%;
}


input[type=text]::-ms-clear {
  display: none;
}

.select-box {
  .checkmark {
    &::before {
      content: '';
    }
  }
}

.right {
  float: right;
}

.center-align{
  text-align: center;
}

.margin-0 {
  margin:0;
}

.padding-0 {
  padding:0;
}

.select-box{
  position:relative;
  width:100%;
}

.select-box .arrow-down4{
  position:absolute;
  right: 8px;
  top: 14px;
}

select{
  -webkit-appearance: none;
  -moz-appearance: radio-container;
  appearance: none;
  background: transparent;
  padding: 12px;
  padding-right: 40px;
  border-radius: 0;
  border: 1px solid;
  width:100%;
}

button,
input,
optgroup,
select,
textarea {
  border-radius: 0;
  font-family: ${Theme.fontFamilyPrimaryLight};
  letter-spacing: inherit;
  -webkit-appearance: none;
}

.is-hidden {
  display: none !important;
}

.is-visible {
  display: block;
}

strong {
  font-family: ${Theme.fontFamilyPrimaryBold};
}

.row-negitive {
  margin-right: -.5rem;
  margin-left: -.5rem;
}

h1 {
  margin: 0;
  padding: 0;
}

.hover-animation {
  span {
    position: relative;
    display: inline-block;

    &:after {
      transform: scaleX(0);
      transform-origin: bottom right;
      transition: transform 0.25s ease-out;
      content: "";
      position: absolute;
      height: 1px;
      bottom: -3px;
      left: -2px;
      right: 2px;
      background-color: currentColor;
    }
    &:hover {
      &:after {
        transform: scaleX(1);
        transform-origin: bottom left;
      }
    }
  }
}


.strike-through {
  display: flex;
  align-items: center;
  justify-content: center;

  &::before, &::after {
    content: '';
    width: 10px;
    height: 2px;
    background: ${Theme.brandPrimaryColor};
    margin: 0 20px;
  }
}

  
    .comp-loader,
.comp-loader:before,
.comp-loader:after {
  border-radius: 50%;
  width: 2.5em;
  height: 2.5em;
  -webkit-animation-fill-mode: both;
  animation-fill-mode: both;
  -webkit-animation: load7 1.8s infinite ease-in-out;
  animation: load7 1.8s infinite ease-in-out;
}
.comp-loader {
  color: #39e7b3;
  font-size: 10px;
  margin: -25px 0 0 0;
  position: relative;
  top: 50%;
  left: 50%;
  text-indent: -9999em;
  z-index: 99999;
  -webkit-transform: translateX(-50%) translateY(-50%);
  -ms-transform: translateX(-50%) translateY(-50%);
  transform: translateX(-50%) translateY(-50%);
  -webkit-animation-delay: -0.16s;
  animation-delay: -0.16s;
}
.comp-loader:before,
.comp-loader:after {
  content: '';
  position: absolute;
  top: 0px;
}
.comp-loader:before {
  left: -3.5em;
  -webkit-animation-delay: -0.32s;
  animation-delay: -0.32s;
}
.comp-loader:after {
  left: 3.5em;
}
@-webkit-keyframes load7 {
  0%,
  80%,
  100% {
    box-shadow: 0 2.5em 0.5px -1.3em;
  }
  40% {
    box-shadow: 0 2.5em 0.5px 0;
  }
}
@keyframes load7 {
  0%,
  80%,
  100% {
    box-shadow: 0 2.5em 0.5px -1.3em;
  }
  40% {
    box-shadow: 0 2.5em 0.5px 0;
  }
}

.ReactModal__Overlay {
    opacity: 0;
    transition: opacity 1000ms ease-in-out;
        background-color: rgba(0, 0, 0, 0.83) !important

}

.ReactModal__Overlay--after-open{
    opacity: 1;
}

.ReactModal__Overlay--before-close{
    opacity: 0;
}


`;
