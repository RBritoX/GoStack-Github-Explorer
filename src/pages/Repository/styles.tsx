import styled from 'styled-components';

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  a {
    display: flex;
    align-items: flex-end;
    text-decoration: none;
    color: #a8a8b3;
    transition: color 0.2s;

    &:hover {
      color: #666666;
    }

    svg {
      font-size: 20px;
      margin-right: 8px;
    }
  }
`;

export const RepositoryInfo = styled.section`
  margin-top: 80px;

  header {
    display: flex;
    align-items: center;

    img {
      width: 120px;
      height: 120px;
      border-radius: 50%;
    }

    div {
      margin-left: 24px;

      strong {
        font-size: 36px;
        color: #3d3d4d;
      }

      p {
        font-size: 18px;
        color: #737380;
        margin-top: 4px;
      }
    }
  }

    ul {
      display: flex;
      margin-top: 40px;

      li {
        & + li {
          margin-left: 80px;
        }

        strong {
          display: block;
          font-size: 36px;
          color: #3d3d4d;
        }

        span {
          display: block;
          margin-top: 4px;
          color: #6c6c80;
        }
      }
    }
  }
`;

export const Issues = styled.section`
  margin-top: 80px;

  a {
    background: #ffffff;
    border-radius: 5px;
    width: 100%;
    padding: 24px;
    display: block;
    text-decoration: none;
    display: flex;
    align-items: center;
    transition: transform 0.2s;

    & + a {
      margin-top: 16px;
    }

    &:hover {
      transform: translate(5px, -5px);
      box-shadow: -5px 5px 10px #999999;
    }

    div {
      margin: 0 16px;
      flex: 1;

      strong {
        font-size: 20px;
        color: #3d3d4d;
      }

      p {
        font-size: 18px;
        color: #a8a8b3;
        margin-top: 4px;
      }
    }

    svg {
      color: #cbcbd6;
      font-size: 20px;
      margin-left: auto;
    }
  }
`;
