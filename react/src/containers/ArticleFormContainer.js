import React, { Component } from 'react';
import TitleField from '../components/TitleField';
import BodyField from '../components/BodyField';

class ArticleFormContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      articleTitle: '',
      articleBody: ''
    }
    this.handleClearForm = this.handleClearForm.bind(this);
    this.handleTitleChange = this.handleTitleChange.bind(this);
    this.handleBodyChange = this.handleBodyChange.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);

  }
  handleClearForm(event) {
    event.preventDefault();
    this.setState({
      articleTitle: '',
      articleBody: ''
    })
  }
  handleFormSubmit(event) {
    event.preventDefault();
      let formPayload = {
        articleTitle: this.state.articleTitle,
        articleBody: this.state.articleBody
      };
      this.props.addNewArticle(formPayload);
      this.handleClearForm(event);
    }
  

  handleTitleChange(event) {
    this.setState({ articleTitle: event.target.value })
  }
  handleBodyChange(event) {
    this.setState({ articleBody: event.target.value })
  }
  render() {
    return(
      <form className="new-article-form callout" onSubmit={this.handleFormSubmit}>
        <TitleField
          content={this.state.articleTitle}
          label="Article Title"
          name="article-title"
          handlerFunction={this.handleTitleChange}
        />
        <BodyField
          content={this.state.articleBody}
          label="Article Body"
          name="article-body"
          handlerFunction={this.handleBodyChange}
        />

        <div className="button-group">
          <button className="button" onClick={this.handleClearForm}>Clear</button>
          <input className="button" type="submit" value="Submit" />
        </div>
      </form>
    )
  }
}

export default ArticleFormContainer;
