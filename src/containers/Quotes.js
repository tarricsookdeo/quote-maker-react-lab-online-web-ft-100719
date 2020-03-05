import React, { Component } from 'react';
import { connect } from 'react-redux';
import QuoteCard from '../components/QuoteCard';
import { removeQuote, downvoteQuote, upvoteQuote } from '../actions/quotes';

class Quotes extends Component {
  state = { quotes: [] };

  removeQuote = quoteId => this.props.removeQuote(quoteId);
  downvoteQuote = quoteId => this.props.downvoteQuote(quoteId);
  upvoteQuote = quoteId => this.props.upvoteQuote(quoteId);

  render() {
    return (
      <div>
        <hr />
        <div className='row justify-content-center'>
          <h2>Quotes</h2>
        </div>
        <hr />
        <div className='container'>
          <div className='row'>
            <div className='col-md-4'>
              {this.props.quotes.map(quote => (
                <QuoteCard
                  quote={quote}
                  removeQuote={() => this.removeQuote(quote.id)}
                  downvoteQuote={() => this.downvoteQuote(quote.id)}
                  upvoteQuote={() => this.upvoteQuote(quote.id)}
                  key={quote.id}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { quotes: state.quotes };
};

const mapDispatchToProps = dispatch => {
  return {
    removeQuote: quoteId => dispatch(removeQuote(quoteId)),
    downvoteQuote: quoteId => dispatch(downvoteQuote(quoteId)),
    upvoteQuote: quoteId => dispatch(upvoteQuote(quoteId))
  };
};
//add arguments to connect as needed
export default connect(mapStateToProps, mapDispatchToProps)(Quotes);
