import styled from 'styled-components'

export const Button = styled.button`
  display: flex;
  justify-content: center;
  margin: 0;
  padding: 16px 24px;
  color: ${props =>
    props.primary || props.secondary ? 'white' :
    'inherit'
  };
  font-size: 1rem;
  font-weight: 500;
  background-color: ${props => 
    props.primary ? 'hsl(3, 89%, 64%)' : 
    props.secondary ?  'hsl(305, 17%, 28%)' : 
    'transparent'
  };
  border: ${props => 
    props.primary || props.secondary ? '2px solid inherit' : 
    '2px solid ' + props.theme.borderColor
  };
  border-radius: 8px;
  cursor: pointer;
  transition: background-color .2s ease-in-out;
  &:hover {
    background-color: ${props => 
      props.primary ? 'hsl(3, 89%, 61%)' : 
      props.secondary ? 'hsl(305, 17%, 23%)' : 
      'rgba(0, 0, 0, 0.03)'
    };
  };
  &:active {
    outline: 2px solid blue;
  }
`