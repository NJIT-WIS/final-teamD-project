const Footer = (props) => {
  const styles = {
    height: '50px',
    backgroundColor: '#ffffff',
    textAlign: 'center',
    marginLeft: '20px',
    marginRight: '20px',
    marginBottom: '20px'
  }
  return (
    <>
      <div style={styles} className="flex flex-row justify-center rounded">
        <span className="inline-flex items-center">&copy; 2023 Coffee Outlets. All rights reserved.</span>
      </div>
    </>
  )
}

export default Footer;