import React from 'react'
import {connect} from 'react-redux';

const TodoList = (props)=>{
    const {
      inputValue,
      list,
      changeInputValue,
      handleClick,
      handleDelete
    }=props

    return (
      <div>
        <div>
          <input value={inputValue} onChange={changeInputValue}/>
          <button onClick={handleClick}>Submit</button>
        </div>
        <ul>
          {
            list.map((item, index)=>{
              return <li onClick={()=>handleDelete(index)} key={index}>{item}</li>
            })
          }
        </ul>
      </div>
    )

  // handleInputChange(e){
  //   console.log(e.target.value);
  // }

}
const mapStateToProps=(state)=>{
  return {
    inputValue: state.inputValue,
    list:state.list
  }
}

//store.dispatch, props 
const mapDispatchToProps=(dispatch)=>{
  return {
    changeInputValue(e){
      const action ={
        type:'change_input_value',
        value:e.target.value
      }
      dispatch(action)
    },
    handleClick(){
      const action ={
        type:'add_item'
      }
      dispatch(action);
    },
    handleDelete(index){
      const action ={
        type:'delete_item',
        value:index
      }
      dispatch(action);
    }
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(TodoList);
