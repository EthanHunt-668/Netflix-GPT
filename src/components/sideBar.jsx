import css from "./sideBar.module.css"
const SideBar=()=>{
    return(
<div className="offcanvas offcanvas-start" data-bs-scroll="true" tabIndex="-1" id="offcanvasWithBothOptions" aria-labelledby="offcanvasWithBothOptionsLabel">
  <div className={`offcanvas-header ${css.header}`}>
    <div className={css.idInfo} >
       <img className="idLogo" alt="id logo"/> 
       <h5 className="offcanvas-title" id="offcanvasWithBothOptionsLabel">Student Name</h5>
    </div>
    <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
  </div>

  <div className="offcanvas-body">
    <nav>
      <a>Dash Board</a> <hr />
      <a>Study Material</a> <hr />
      <a>Doubts</a> <hr />
      <a>Preparation Strategy</a> <hr/>    
    </nav>
  </div>

</div>

    );
}
export default SideBar;