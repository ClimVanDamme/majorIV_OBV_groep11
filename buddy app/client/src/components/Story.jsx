import React, { Component } from "react";
import { observer, inject } from "mobx-react";
import styles from "./Story.module.css";

class Story extends Component {
  constructor(props) {
    super(props);
    this.state = { edit: false, succesMessage: false };
  }

  setEditMode = value => this.setState({ edit: value });
  setSuccesMessage = value => this.setState({ succesMessage: value });

  render() {
    const { edit, succesMessage } = this.state;
    const { addStory, connection } = this.props;
    const textInput = React.createRef();

    const handleSubmit = e => {
      e.preventDefault();
      addStory({
        show_id: connection.showId,
        character_id: connection.characterId,
        text: textInput.current.value
      });
      this.setSuccesMessage(true);
    };

    if (succesMessage === false) {
      return edit ? (
        <form onSubmit={handleSubmit}>
          <textarea
            className={styles.textarea}
            ref={textInput}
            cols="10"
            name="story"
            id="story"
            defaultValue=""
          />
          <div className={styles.buttonWrapper}>
            <input className={styles.submit} type="submit" value="klaar" />
          </div>
        </form>
      ) : (
        <div className={styles.buttonWrapper}>
          <button
            className={styles.button}
            onClick={() => this.setEditMode(true)}
          >
            Vertel het ons
          </button>
        </div>
      );
    } else {
      return (
        <p className={styles.succesMessage}>Bedankt om je verhaal te delen!</p>
      );
    }
  }
}

export default inject(`storyStore`)(observer(Story));
