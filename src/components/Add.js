import React from 'react';

class Add extends React.Component {
    //начальные значения:
    state = {
      name: '',
      text: '',
      bigText: '',
      agree: false,
    }
    onBtnClickHandler = (e) => {
      e.preventDefault()
      const { name, text, bigText } = this.state //вытащили значения из стейта (деструкторизация)
      //console.log('Add', name, text, bigText)
      //передаём name & text
      //big text пока отсутствует
  
      //alert(name + '\n' + text)
      this.props.onAddNews({ 
        id: +new Date(),
        author: name, 
        text, 
        bigText 
      })
    }
    //вычисляемое значение ключа:
    handleChange = (e) => {
      const { id, value } = e.currentTarget //currentTarget: Определяет элемент, в котором в данный момент обрабатывается событие, при движении события внутри DOM. Всегда совпадает с текущим элементом
      this.setState({ [id]: value })
    }
    //обработчие кликов по чекбоксу:
    handleCheckboxChange = (e) => {
      this.setState({ agree: e.currentTarget.checked })
    }
    //валидация на клиенте:
    validate = () => {
      const { name, text, agree } = this.state
      if (name.trim() && text.trim() && agree) { //bigText not required field
        return true
      }
      return false
    }
    render() {
      const { name, text, bigText } = this.state
      return (
        <form className='add'>
          <input
            id='name'
            type='text'
            onChange={this.handleChange}
            className='add__author'
            placeholder='Ваше имя'
            value={name}
          />
          <textarea
            id='text'
            onChange={this.handleChange}
            className='add__text'
            placeholder='Заголовок новости'
            value={text}
          ></textarea>
          <textarea
            id='bigText'
            onChange={this.handleChange}
            className='add__text'
            placeholder='Текст новости'
            value={bigText}
          ></textarea>
          <label className='add__checkrule'>
            <input type='checkbox' onChange={this.handleCheckboxChange} /> Я согласен с правилами
          </label>
          <button
            className='add__btn'
            onClick={this.onBtnClickHandler}
            disabled={!this.validate()}> { /* блокировка кнопки если не все поля заполнены */}
            Добавить новость
          </button>
        </form>
      )
    }
  }
  
  /* Add.propTypes = {
    onAddNews: PropTypes.func.isRequired
  } */

export { Add }