const React = require('react');

class Index extends React.Component {
    render() {
        const { hazbinCharacters } = this.props;
        return (
                <div>
                    <h1>Hazbin Hotel Characters Index Page</h1>
                    <nav>
                    <a href="/characters/new">Create a New Fruit</a>
                    </nav>
                    <ul>
                        {hazbinCharacters.map((character, i) => {
                            return (
                                <li key={i}>
                                    <a href={`/characters/${i}`}>
                                        {character.name}'s favorite color is
                                    </a>{' '}
                                    is {character.color} and he/she <br></br>
                                    {character.mainCharacter
                                        ? ` is "Hazbin's" main character`
                                        : ` is "Hazbin's" main character`}
                                    <br />
                                </li>
                            );
                        })}
                    </ul>
                </div>
        );
    }
  }
  module.exports = Index;