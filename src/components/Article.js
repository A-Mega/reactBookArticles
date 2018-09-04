import React from 'react';

class Article extends React.Component {
    state = {
      visible: false, //!!! Я БЫ ПОМЕНЯЛ НА TRUE И ПЕРЕДЕЛАЛ В render
    }
    handleReadMoreClck = (e) => {
      e.preventDefault() //preventDefault: Отменяет событие, если оно отменяемое, без остановки дальнейшего распространения этого события.
      this.setState({ visible: true })
    }
    render() {
      const { author, text, bigText } = this.props.data
      //console.log('Article', author, text, bigText)
      const { visible } = this.state
      return (
        <div className='article'>
          <p className='news__author'>{author}:</p>
          <p className='news__text'>{text}</p>
          <hr />
          {
            !visible && <a onClick={this.handleReadMoreClck} href="#readmore" className='news__readmore'>Подробнее</a>
          }
          {
            visible && <p className='news__big-text'>{bigText}</p>
          }
        </div>
      )
    }
}
  
  //структура
  /* Article.propTypes = {
    data: PropTypes.shape({
      id: PropTypes.number.isRequired,
      author: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
      bigText: PropTypes.string.isRequired
    })
  } */

export { Article } //именнованный экспорт