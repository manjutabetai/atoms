export const PrimaryButton = (props) => {
  const { children } = props;

  return <SButton>{children}</SButton>;
};

const SButton = styled.button`
background-color: #405142;
color:#fff;
padding: 6px 24px;
border: none;
outline: none;
&:hover{
  cursor: pointer;
  pachity: 0.8;
}

`;
