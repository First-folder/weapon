import React from "react"
import { connect } from "react-redux"

class TestRef extends React.Component{
    constructor(props) {
        super(props);
        // создадим реф в поле `textInput` для хранения DOM-элемента
       
       this.myTESTref = React.createRef();  
       this.myConst = 10;
       this.testingRef=this.testingRef.bind(this)
      }
     testingRef(){
        this.myTESTref.current.innerHTML="93";
     }
    render(){
        let arrayREF = []
       let myoneref= React.createRef();
       arrayREF[0] = React.createRef();
       arrayREF[1] = React.createRef()
       let testRef=()=>{
        console.log("TestRef hy");
        console.log(arrayREF[0].current.innerHTML="78");
        console.log(arrayREF[1].current.innerHTML="8");
        this.myTESTref.current.innerHTML="90";
       }
        return(
            <div>
               <div onClick={testRef}>click button and see result</div>
               <div ref={ arrayREF[0]}> 1 </div>
               <div ref={arrayREF[1]}> 1 </div>
               <div ref={this.myTESTref}> 1 </div>
            </div>
    )}
}
let mapStatetoProps=(state)=>({})
 export default connect(mapStatetoProps,{})(TestRef)