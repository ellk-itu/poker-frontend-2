export default (name: string) => `
from poker_game_runner.state import Observation
from poker_game_runner.utils import Range, HandType

BOT_NAME = ${name}

class Bot:
    @classmethod
    def get_name_class(cls, path):
        return BOT_NAME

    def get_name(self):
        return BOT_NAME
`;
