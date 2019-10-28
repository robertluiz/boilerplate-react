import styled from 'styled-components';

export const Container = styled.header`
  display: block;
  height: 49px;
  margin: 0;
  padding: 0 13px 0 0;
  background-color: #f3f3f3;
  background-image: -moz-linear-gradient(top, #f3f3f3, #e2e2e2);
  background-image: -webkit-gradient(
    linear,
    0 0,
    0 100%,
    from(#f3f3f3),
    to(#e2e2e2)
  );
  background-image: -webkit-linear-gradient(top, #f3f3f3, #e2e2e2);
  background-image: -o-linear-gradient(top, #f3f3f3, #e2e2e2);
  background-image: linear-gradient(to bottom, #f3f3f3, #e2e2e2);
  background-repeat: repeat-x;
  position: relative;
  z-index: 905;

  header > :first-child,
  aside {
    width: 220px;
  }
  header > div {
    display: inline-block;
    vertical-align: middle;
    height: 49px;
    float: left;
  }
  #logo-group > span {
    display: inline-block;
    height: 39px;
    float: left;
  }
  #logo {
    display: inline-block;
    width: 175px;
    margin-top: 13px;
    margin-left: 9px;
  }
  #logo img {
    width: 110px;
    height: auto;
    padding-left: 3px;
    vertical-align: middle;
  }
  .btn-header.pull-right {
    margin-left: 6px;
  }

  .btn-header > :first-child > a {
    -moz-border-radius: 2px;
    -webkit-border-radius: 2px;
    border-radius: 2px;
    cursor: default !important;
    display: inline-block;
    font-weight: 700;
    height: 30px;
    line-height: 24px;
    min-width: 30px;
    padding: 2px;
    text-align: center;
    text-decoration: none !important;
    -moz-user-select: none;
    -webkit-user-select: none;
    background-color: #f8f8f8;
    background-image: -webkit-gradient(
      linear,
      left top,
      left bottom,
      from(#f8f8f8),
      to(#f1f1f1)
    );
    background-image: -webkit-linear-gradient(top, #f8f8f8, #f1f1f1);
    background-image: -moz-linear-gradient(top, #f8f8f8, #f1f1f1);
    background-image: -ms-linear-gradient(top, #f8f8f8, #f1f1f1);
    background-image: -o-linear-gradient(top, #f8f8f8, #f1f1f1);
    background-image: linear-gradient(top, #f8f8f8, #f1f1f1);
    border: 1px solid #bfbfbf;
    color: #6d6a69;
    font-size: 17px;
    margin: 10px 0 0;
  }
  svg {
    margin: auto;
    padding: auto;
  }
`;
