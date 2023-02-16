const Button = ({ text, onClick, disable = false }) => {
  return (
    <button className='btn btn-primary' disabled={disable} onClick={onClick}>
      {text}
    </button>
  );
};

export default Button;
