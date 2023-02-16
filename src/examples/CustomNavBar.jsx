const CustomNavBar = ({ btn1, btn2, page }) => {
  return (
    <ul className='nav nav-pills nav-fill'>
      <li className='nav-item'>{btn1}</li>
      <li className='nav-item'>
        <a className='nav-link' style={{ color: 'gray' }}>
          Page: {page}
        </a>
      </li>
      <li className='nav-item'>{btn2}</li>
    </ul>
  );
};

export default CustomNavBar;
