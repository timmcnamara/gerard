import React, { Component } from "react";
import "./style.css";
import Nav from "../Nav";
import Banner from "../Banner";
import Content from "../Content";
import Footer from "../Footer";
import cards from "../CardsArray/cards";

class Page extends Component {
  // Setting Page component's initial state
  state = {
    score: 0,
    canClick: true,
    cards: cards,
    topScore: 0,
    gotTopScore: false,
    text:
      "Click on an Image to earn points, but don't click on any more than once!"
  };

  // function storing the card id and clicked boolean as variables.
  // using a ternary statement to execute the correct function depending on the
  // clicked status of the card.
  // added canClick to prevent clicks on cards when no desired
  handleClick = card => {
    if (this.state.canClick) {
      this.setState({ canClick: false });
      const { id, clicked } = card;
      clicked
        ? this.state.score > this.state.topScore
          ? this.incorrectGuess(true)
          : this.incorrectGuess(false)
        : this.correctGuess(id);
    } else {
      return;
    }
  };

  // uses a map function to reset the clicked status of each card and returns the deck to be
  // stored as a variable, then setting the state for a new game.
  resetGame = () => {
    const resetClick = this.state.cards.map(card => {
      card.clicked = false;
      return card;
    });

    this.setState({
      score: 0,
      canClick: true,
      cards: this.shuffleCards(resetClick),
      gotTopScore: false,
      text:
        "Click on an Image to earn points, but don't click on any more than once!"
    });
  };

  // function that takes a boolean which is set to true if the player has clicked
  // incorrectly, but set a top score - and to false if no top score.
  // the state is then set accordingly, then reset for new game.
  incorrectGuess = result => {
    const text = result
      ? "You didn't reMEMEber them all, but you did set the Top Score. Nice one."
      : "Better luck next time. Always reMEMEber the good times.";
    const scoreResult = result ? this.state.score : this.state.topScore;
    const gotTop = result ? true : false;
    this.setState({
      topScore: scoreResult,
      gotTopScore: gotTop,
      text: text
    });

    setTimeout(() => {
      this.resetGame();
    }, 2500);
  };

  // determines whether this is the winning correct guess, if so the wonGame sequence plays out
  // if not, set the cards clicked boolean to true, shuffle the cards and set the state with shuffled cards
  // and score + 1
  correctGuess = id => {
    if (this.state.score === 11) {
      this.wonGame();
    } else {
      const newCards = this.state.cards.map(card => {
        if (card.id === id) {
          card.clicked = true;
        }
        return card;
      });
      const shuffledCards = this.shuffleCards(newCards);
      this.setState({
        canClick: true,
        cards: shuffledCards,
        score: this.state.score + 1
      });
    }
  };

  // sets winning state, then resetGame function.
  wonGame = () => {
    this.setState({
      score: 12,
      topScore: 12,
      gotTopScore: true,
      text: "You reMEMbered them all! Well done, legend!"
    });
    setTimeout(() => {
      this.resetGame();
    }, 2500);
  };

  // function that returns a shuffled deck of cards
  shuffleCards = cards => {
    for (let i = cards.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [cards[i], cards[j]] = [cards[j], cards[i]];
    }
    return cards;
  };

  render() {
    return (
      <div className="pageContent">
        <Nav score={this.state.score} topScore={this.state.topScore} />
        <Banner text={this.state.text} topScore={this.state.gotTopScore} />
        <Content cards={this.state.cards} handleClick={this.handleClick} />
        <Footer />
      </div>
    );
  }
}

export default Page;
