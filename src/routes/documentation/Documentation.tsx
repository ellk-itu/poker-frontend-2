import { useState } from "react";

export default function Documentation() {
  const [language, setLanguage] = useState<"python" | "java">("python");

  return (
    <div className="flex flex-col items-center">
      <article className="max-w-1/2">
        <h1>{language === "python" ? "Python" : "Java"} Documentation</h1>
        <div className="flex gap-2">
          <button
            className="btn btn-neutral"
            onClick={() => {
              setLanguage("java");
            }}
          >
            Show java
          </button>
          <button
            className="btn btn-neutral"
            onClick={() => {
              setLanguage("python");
            }}
          >
            Show python
          </button>
        </div>
        <h2>Getting Started</h2>
        <h3>Basics</h3>
        <p>The function called 'act' has to return either:</p>
        <ul>
          <li>0 is to fold, or check if no previous bot has raised</li>
          <li>1 is to call, or check if no previous bot has raised</li>
          <li>&gt;1 is for raising a specific amount</li>
        </ul>
        <p>
          If your program raises an exception it will be the equivalent to
          returning 0.
        </p>
        <h3>Get current cards</h3>
        <p>
          This will put the bots current hand, with the table taken into
          account, into a variable called current_bot_hand:
        </p>
        <div className="mockup-code ">
          {language === "python" ? (
            <pre data-prefix={"|"}>
              current_bot_hand_type = obs.get_my_hand_type()
            </pre>
          ) : (
            <pre data-prefix={"|"}>
              HandType currentBotHandType = obs.getMyHandType();
            </pre>
          )}
        </div>
        <br />
        <p>This will put the boards hand type, with the bots hand excluded:</p>
        <div className="mockup-code">
          {language === "python" ? (
            <pre data-prefix={"|"}>
              current_board_hand_type = obs.get_board_hand_type()
            </pre>
          ) : (
            <pre data-prefix={"|"}>
              HandType currentBoardHandType = obs.getBoardHandType();
            </pre>
          )}
        </div>
        <p>
          Both variables will be of type HandType (enum), which looks like this:
        </p>
        <table className="table">
          <tr>
            <th>Hand</th>
            <th>Value</th>
          </tr>
          <tr>
            <td>STRAIGHTFLUSH</td>
            <td>9</td>
          </tr>
          <tr>
            <td>FOUROFAKIND</td>
            <td>8</td>
          </tr>
          <tr>
            <td>FULLHOUSE</td>
            <td>7</td>
          </tr>
          <tr>
            <td>FLUSH</td>
            <td>6</td>
          </tr>
          <tr>
            <td>STRAIGHT</td>
            <td>5</td>
          </tr>
          <tr>
            <td>THREEOFAKIND</td>
            <td>4</td>
          </tr>
          <tr>
            <td>TWOPAIR</td>
            <td>3</td>
          </tr>
          <tr>
            <td>PAIR</td>
            <td>2</td>
          </tr>
          <tr>
            <td>HIGHCARD</td>
            <td>1</td>
          </tr>
          <tr>
            <td>ERROR</td>
            <td>0</td>
          </tr>
        </table>
        <p>
          If you want to match the current handtype to a specific hand type, you
          can do it like this:
        </p>
        <div className="mockup-code">
          {language === "python" ? (
            <pre data-prefix={"|"}>
              current_board_hand_type = obs.get_board_hand_type()
            </pre>
          ) : (
            <pre data-prefix={"|"}>
              HandType currentBoardHandType = obs.getBoardHandType();
            </pre>
          )}
        </div>
        <div className="mockup-code">
          {language === "python" ? (
            <>
              <pre data-prefix="|">
                if current_bot_hand == HandType.STRAIGHTFLUSH:
              </pre>
              <pre data-prefix="|">{"   some_action()"}</pre>
            </>
          ) : (
            <>
              <pre data-prefix={"|"}>
                {"if (currentBotHand == HandType.STRAIGHTFLUSH) {"}
              </pre>
              <pre data-prefix={"|"}>{"  someAction();"}</pre>
              <pre data-prefix={"|"}>{"}"}</pre>
            </>
          )}
        </div>
        <p>
          Or you can check if the current hand is better than a specific
          handtype:
        </p>
        <div className="mockup-code">
          {language === "python" ? (
            <>
              <pre data-prefix="|">
                {"if current_bot_hand >= HandType.PAIR:"}
              </pre>
              <pre data-prefix="|">{"   some_action()"}</pre>
            </>
          ) : (
            <>
              <pre data-prefix={"|"}>
                {"if (currentBotHand.getValue() >= HandType.PAIR.getValue()) {"}
              </pre>
              <pre data-prefix={"|"}>{"  someAction();"}</pre>
              <pre data-prefix={"|"}>{"}"}</pre>
            </>
          )}
        </div>
        <p>You can get your current cards in hand like this</p>
        <div className="mockup-code">
          {language === "python" ? (
            <pre data-prefix={"|"}>my_hand = obs.my_hand</pre>
          ) : (
            <pre data-prefix={"|"}>
              ArrayList&lt;String&gt; myHand = obs.getMyHand();
            </pre>
          )}
        </div>
        <p>
          This returns a list of strings, representing cards. For each card
          string, the first character is the rank and the second character is
          the suit. For example, the ace of spades is represented as 'As' and 9
          of hearts is '9h'.
          <br />
          Note that the ranks, 10 to ace is represented as 'T', 'J', 'Q', 'K',
          'A', and the suits are represented as 's', 'h', 'd', and 'c' for
          spades, hearts, diamonds, and clubs respectively.
        </p>
        <p>
          If you want to match your hand to specific hands, you can do it like
          this:
        </p>
        <div className="mockup-code">
          {language === "python" ? (
            <>
              <pre data-prefix="|">
                {
                  'if (Range("77+, A8s+, K9s+, QTs+, AJo+, KQo").is_hand_in_range(my_hand)):'
                }
              </pre>
              <pre data-prefix="|">{"   some_action()"}</pre>
            </>
          ) : (
            <>
              <pre data-prefix={"|"}>
                {
                  'if (new Range("77+, A8s+, K9s+, QTs+, AJo+, KQo").isHandInRange(myHand)) {'
                }
              </pre>
              <pre data-prefix={"|"}>{"  someAction();"}</pre>
              <pre data-prefix={"|"}>{"}"}</pre>
            </>
          )}
        </div>
        <p>
          The list above is a list of hands that are generated with the help of{" "}
          <a
            className="link"
            href="https://openpokertools.com/"
            target="_blank"
          >
            openpokertools.com
          </a>
        </p>
        <p>
          When you have created the wanted hand range you can copy the range
          string into your script.
        </p>
        <h3>Get current round</h3>
        <p>
          If you want to base some action on the specific round of the current
          game, you can do it like this:
        </p>
        <div className="mockup-code">
          {language === "python" ? (
            <>
              <pre data-prefix="|">{"if obs.current_round == 2:"}</pre>
              <pre data-prefix="|">{"   some_action()"}</pre>
            </>
          ) : (
            <>
              <pre data-prefix={"|"}>{"if (obs.getCurrentRound() == 2) {"}</pre>
              <pre data-prefix={"|"}>{"  someAction();"}</pre>
              <pre data-prefix={"|"}>{"}"}</pre>
            </>
          )}
        </div>
        <ul>
          <li>0 = Preflop (no cards on board)</li>
          <li>1 = Flop (three cards on board)</li>
          <li>2 = Turn (four cards on board)</li>
          <li>3 = River (five cards on board)</li>
          <li>4 = Showdown (last chance to raise)</li>
        </ul>
        <h3>Players and big blinds</h3>
        <p>If you want to know the current blinds, you can do it like this:</p>
        <div className="mockup-code">
          {language === "python" ? (
            <>
              <pre data-prefix="|">{"big_blind = obs.big_blind"}</pre>
              <pre data-prefix="|">{"small_blind = obs.small_blind"}</pre>
            </>
          ) : (
            <>
              <pre data-prefix="|">{"int bigBlind = obs.getBigBlind();"}</pre>
              <pre data-prefix="|">
                {"int smallBlind = obs.getSmallBlind();"}
              </pre>
            </>
          )}
        </div>
        <p>
          At any point in the game, the small blind will be index 0, big blind
          will be index 1, and the rest of the players will be index 2 and
          onwards.
        </p>
        <p>You can get the current player's index like this:</p>
        <div className="mockup-code">
          {language === "python" ? (
            <>
              <pre data-prefix="|">{"my_index = obs.my_index"}</pre>
            </>
          ) : (
            <>
              <pre data-prefix="|">{"int myIndex = obs.getMyIndex();"}</pre>
            </>
          )}
        </div>
        <h2>2. Testing your bot</h2>
        <p>
          If you have any questions just ask us at the event.
          <br />
          Good luck with your bot and have fun!
        </p>
        <h2>Full Documentation (Only in python)</h2>
        <div className="" id="state-observation">
          <h2>
            Class: <code>poker_game_runner.state.Observation</code>
          </h2>
          <p>A class representing the state of the game.</p>
          <h3>Attributes:</h3>
          <ul>
            <li>
              <strong>small_blind</strong> (<code>int</code>): The current small
              blind.
            </li>
            <li>
              <strong>big_blind</strong> (<code>int</code>): The current big
              blind.
            </li>
            <li>
              <strong>my_hand</strong> (<code>Tuple[str]</code>): The cards in
              the current player's hand.
            </li>
            <li>
              <strong>my_index</strong> (<code>int</code>): The index of the
              current player out of all players in the game.
            </li>
            <li>
              <strong>board_cards</strong> (<code>Tuple[str]</code>): The
              community cards on the board.
            </li>
            <li>
              <strong>player_infos</strong> (
              <code>
                Tuple[<a href="#state-playerinfo">PlayerInfo</a>]
              </code>
              ): Current state of all players.
            </li>
            <li>
              <strong>history</strong> (
              <code>
                Tuple[Tuple[<a href="#state-actioninfo">ActionInfo</a>]]
              </code>
              ): The history of all actions taken so far grouped by game round.
            </li>
            <li>
              <strong>current_round</strong> (<code>int</code>): The current
              game round.
            </li>
            <li>
              <strong>legal_actions</strong> (<code>Tuple[int]</code>): All
              legal actions.
            </li>
          </ul>
          <h3>Methods:</h3>
          <ul>
            <li>
              <code>get_my_player_info()</code> →{" "}
              <code>
                <a href="#state-playerinfo">PlayerInfo</a>
              </code>
              : Returns the PlayerInfo of the current player.
            </li>
            <li>
              <code>get_my_hand_type()</code> →{" "}
              <code>
                <a href="#state-handtype">HandType</a>
              </code>
              : Returns the hand type of the current player.
            </li>
            <li>
              <code>get_board_hand_type()</code> →{" "}
              <code>
                <a href="#state-handtype">HandType</a>
              </code>
              : Returns the hand type of the board cards.
            </li>
            <li>
              <code>get_player_count()</code> → <code>int</code>: Returns the
              number of players in the tournament.
            </li>
            <li>
              <code>get_active_players()</code> →{" "}
              <code>
                Tuple[<a href="#state-playerinfo">PlayerInfo</a>]
              </code>
              : the number of players that are active in the hand (have not
              folded).
            </li>
            <li>
              <code>get_actions_this_round()</code> →{" "}
              <code>
                Tuple[<a href="#state-actioninfo">ActionInfo</a>]
              </code>
              : Returns the ActionInfo’s from the current round.
            </li>
            <li>
              <code>get_actions_in_round(round_num: int)</code> →{" "}
              <code>
                Tuple[<a href="#state-actioninfo">ActionInfo</a>]
              </code>
              : Returns the ActionInfo’s from the given round. Parameters:
              round_num (int) – the round to fetch actions from (0,1,2 or 3)
            </li>
            <li>
              <code>get_max_spent()</code> → <code>int</code>: Returns the max
              spent by any player.
            </li>
            <li>
              <code>get_call_size()</code> → <code>int</code>: Returns the
              amount to call.
            </li>
            <li>
              <code>get_pot_size()</code> → <code>int</code>: Returns the amount
              in the pot.
            </li>
            <li>
              <code>can_raise()</code> → <code>bool</code>: Returns true if the
              player can raise.
            </li>
            <li>
              <code>get_min_raise()</code> → <code>int</code>: Returns the
              minimum possible raise. Will return 1 (call) if the current player
              cannot raise.
            </li>
            <li>
              <code>get_max_raise()</code> → <code>int</code>: Returns the
              maximum possible raise (all in). Will return 1 (call) if the
              current player cannot raise.
            </li>
            <li>
              <code>get_fraction_pot_raise(frac: float)</code> →{" "}
              <code>int</code>: Returns the raise size in relation to the pot.
              Parameters: frac (float) – The relative size of the pot to raise
            </li>
          </ul>
        </div>

        <div className="section" id="state-playerinfo">
          <h2>
            Class: <code>poker_game_runner.state.PlayerInfo</code>
          </h2>
          <p>A class to represent the state of a player.</p>
          <ul>
            <li>
              <strong>spent</strong> (<code>int</code>): The amount the player
              has spent in this game.
            </li>
            <li>
              <strong>stack</strong> (<code>int</code>): The amount the player
              has left.
            </li>
            <li>
              <strong>active</strong> (<code>bool</code>): True if the player
              has not folded in this game.
            </li>
          </ul>
        </div>

        <div className="section" id="state-actioninfo">
          <h2>
            Class: <code>poker_game_runner.state.ActionInfo</code>
          </h2>
          <p>A class to represent a player's action.</p>
          <ul>
            <li>
              <strong>player</strong> (<code>int</code>): The index of the
              player taking this action.
            </li>
            <li>
              <strong>action</strong> (<code>int</code>): The action of the
              player.
            </li>
          </ul>
        </div>

        <div className="section" id="state-handtype">
          <h2>
            Enum: <code>poker_game_runner.state.HandType</code>
          </h2>
          <p>Enumeration of poker hand types.</p>
          <ul>
            <li>STRAIGHTFLUSH = 9</li>
            <li>FOUROFAKIND = 8</li>
            <li>FULLHOUSE = 7</li>
            <li>FLUSH = 6</li>
            <li>STRAIGHT = 5</li>
            <li>THREEOFAKIND = 4</li>
            <li>TWOPAIR = 3</li>
            <li>PAIR = 2</li>
            <li>HIGHCARD = 1</li>
            <li>ERROR = 0</li>
          </ul>
        </div>

        <div className="section" id="utils-range">
          <h2>
            Class: <code>poker_game_runner.utils.Range</code>
          </h2>
          <p>A class representing a range of hands.</p>
          <ul>
            <li>
              <strong>rangeStr</strong> (<code>str</code>): The range string
              representing a range of hands. The range string can be generated
              at ‘https://www.pokerhandrange.com/’.
            </li>
          </ul>
          <h3>Methods:</h3>
          <ul>
            <li>
              <code>is_hand_in_range(handCards: Tuple[str])</code> →{" "}
              <code>bool</code>: Returns true if the given hand is in this
              range. Parameters: handCards (Tuple[str]) – The hand cards to
              check for
            </li>
          </ul>
        </div>
        <p>
          If you want to view the original documentation you can follow this
          <a href="https://poker-game-runner.readthedocs.io/en/latest/poker_game_runner.html">
            link
          </a>
          .
        </p>
      </article>
    </div>
  );
}
