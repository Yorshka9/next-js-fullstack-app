const MainContent = ({ children }) => {
    return (
      <div className={style.root}>
        <main>{children}</main>
      </div>
    )
  }
  
  export default MainContent