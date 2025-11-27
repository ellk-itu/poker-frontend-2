# Getting Started

## Basics

The function called 'act' has to return either:

- 0 is to fold, or check if no previous bot has raised
- 1 is to call, or check if no previous bot has raised
- > 1 is for raising a specific amount

If your program raises an exception it will be the equivalent to returning 0.

## Get current cards

This will put the bots current hand, with the table taken into account, into a variable called current_bot_hand:

```python
current_bot_hand_type = obs.get_my_hand_type()
```

This will put the boards hand type, with the bots hand excluded:

```python
current_board_hand_type = obs.get_board_hand_type()
```

Both variables will be of type HandType (enum), which looks like this:

| Hand          | Value |
| ------------- | ----- |
| STRAIGHTFLUSH | 9     |
| FOUROFAKIND   | 8     |
| FULLHOUSE     | 7     |
| FLUSH         | 6     |
| STRAIGHT      | 5     |
| THREEOFAKIND  | 4     |
| TWOPAIR       | 3     |
| PAIR          | 2     |
| HIGHCARD      | 1     |
| ERROR         | 0     |

If you want to match the current handtype to a specific hand type, you can do it like this:

```python
if current_bot_hand == HandType.STRAIGHTFLUSH:
    some_action()
```

Or you can check if the current hand is better than a specific handtype:

```python
if current_bot_hand >= HandType.PAIR:
    some_action()
```

You can get your current cards in hand like this

```python
my_hand = obs.my_hand
```

This returns a list of strings, representing cards. For each card string, the first character is the rank and the second character is the suit. For example, the ace of spades is represented as 'As' and 9 of hearts is '9h'.  
Note that the ranks, 10 to ace is represented as 'T', 'J', 'Q', 'K', 'A', and the suits are represented as 's', 'h', 'd', and 'c' for spades, hearts, diamonds, and clubs respectively.

If you want to match your hand to specific hands, you can do it like this:

```python
if (Range("77+, A8s+, K9s+, QTs+, AJo+, KQo").is_hand_in_range(my_hand)):
    some_action()
```

The list above is a list of hands that are generated with the help of [openpokertools.com](https://openpokertools.com/)

When you have created the wanted hand range you can copy the range string into your script.

## Get current round

If you want to base some action on the specific round of the current game, you can do it like this:

```python
if obs.current_round == 2:
    some_action()
```

The current round is an int and can be interpreted like this:

- 0 = Preflop (no cards on board)
- 1 = Flop (three cards on board)
- 2 = Turn (four cards on board)
- 3 = River (five cards on board)
- 4 = Showdown (last chance to raise)

### Players and big blinds

If you want to know the current blinds, you can do it like this:

```python
big_blind = obs.big_blind
 small_blind = obs.small_blind
```

At any point in the game, the small blind will be index 0, big blind will be index 1, and the rest of the players will be index 2 and onwards.

You can get the current player's index like this:

```python
my_index = obs.my_index
```

# Testing your bot

If you have any questions just ask us at the event.  
Good luck with your bot and have fun!

# Full Documentation (Only in python)

## Class: `poker_game_runner.state.Observation`

A class representing the state of the game.

### Attributes:

- **small_blind** (`int`): The current small blind.
- **big_blind** (`int`): The current big blind.
- **my_hand** (`Tuple[str]`): The cards in the current player's hand.
- **my_index** (`int`): The index of the current player out of all players in the game.
- **board_cards** (`Tuple[str]`): The community cards on the board.
- **player_infos** (`Tuple[[PlayerInfo](https://www.pokerbot.dk/docs/#state-playerinfo)]`): Current state of all players.
- **history** (`Tuple[Tuple[[ActionInfo](https://www.pokerbot.dk/docs/#state-actioninfo)]]`): The history of all actions taken so far grouped by game round.
- **current_round** (`int`): The current game round.
- **legal_actions** (`Tuple[int]`): All legal actions.

### Methods:

- `get_my_player_info()` → `[PlayerInfo](https://www.pokerbot.dk/docs/#state-playerinfo)`: Returns the PlayerInfo of the current player.
- `get_my_hand_type()` → `[HandType](https://www.pokerbot.dk/docs/#state-handtype)`: Returns the hand type of the current player.
- `get_board_hand_type()` → `[HandType](https://www.pokerbot.dk/docs/#state-handtype)`: Returns the hand type of the board cards.
- `get_player_count()` → `int`: Returns the number of players in the tournament.
- `get_active_players()` → `Tuple[[PlayerInfo](https://www.pokerbot.dk/docs/#state-playerinfo)]`: the number of players that are active in the hand (have not folded).
- `get_actions_this_round()` → `Tuple[[ActionInfo](https://www.pokerbot.dk/docs/#state-actioninfo)]`: Returns the ActionInfo’s from the current round.
- `get_actions_in_round(round_num: int)` → `Tuple[[ActionInfo](https://www.pokerbot.dk/docs/#state-actioninfo)]`: Returns the ActionInfo’s from the given round. Parameters: round_num (int) – the round to fetch actions from (0,1,2 or 3)
- `get_max_spent()` → `int`: Returns the max spent by any player.
- `get_call_size()` → `int`: Returns the amount to call.
- `get_pot_size()` → `int`: Returns the amount in the pot.
- `can_raise()` → `bool`: Returns true if the player can raise.
- `get_min_raise()` → `int`: Returns the minimum possible raise. Will return 1 (call) if the current player cannot raise.
- `get_max_raise()` → `int`: Returns the maximum possible raise (all in). Will return 1 (call) if the current player cannot raise.
- `get_fraction_pot_raise(frac: float)` → `int`: Returns the raise size in relation to the pot. Parameters: frac (float) – The relative size of the pot to raise

## Class: `poker_game_runner.state.PlayerInfo`

A class to represent the state of a player.

- **spent** (`int`): The amount the player has spent in this game.
- **stack** (`int`): The amount the player has left.
- **active** (`bool`): True if the player has not folded in this game.

## Class: `poker_game_runner.state.ActionInfo`

A class to represent a player's action.

- **player** (`int`): The index of the player taking this action.
- **action** (`int`): The action of the player.

## Enum: `poker_game_runner.state.HandType`

Enumeration of poker hand types.

- STRAIGHTFLUSH = 9
- FOUROFAKIND = 8
- FULLHOUSE = 7
- FLUSH = 6
- STRAIGHT = 5
- THREEOFAKIND = 4
- TWOPAIR = 3
- PAIR = 2
- HIGHCARD = 1
- ERROR = 0

## Class: `poker_game_runner.utils.Range`

A class representing a range of hands.

- **rangeStr** (`str`): The range string representing a range of hands. The range string can be generated at ‘https://www.pokerhandrange.com/’.

### Methods:

- `is_hand_in_range(handCards: Tuple[str])` → `bool`: Returns true if the given hand is in this range. Parameters: handCards (Tuple[str]) – The hand cards to check for

If you want to view the original documentation you can follow this [link](https://poker-game-runner.readthedocs.io/en/latest/poker_game_runner.html).
