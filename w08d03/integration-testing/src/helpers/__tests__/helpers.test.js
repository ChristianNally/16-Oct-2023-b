import { calcStatus, checkForCheating } from '../helpers';

describe('announceResult function', () => {
  let fakeState;

  beforeEach(() => {
    fakeState = {
      compSelection: null,
      playerSelection: null,
      status: 'Waiting',
      cheating: false
    };
  });
  
  test('returns "Won" if player is "Axe" and comp is "Tree"', () => {
    fakeState.playerSelection = 'Axe';
    fakeState.compSelection = 'Tree';
    expect(calcStatus(fakeState.playerSelection, fakeState.compSelection)).toBe('Won');
  });

  test('returns "Tied" if player is "Axe" and comp is "Axe"', () => {
    fakeState.playerSelection = 'Axe';
    fakeState.compSelection = 'Axe';
    expect(calcStatus(fakeState.playerSelection, fakeState.compSelection)).toBe('Tied');
  });

  test('returns "Lost" if player is "Axe" and comp is "Moai"', () => {
    fakeState.playerSelection = 'Axe';
    fakeState.compSelection = 'Moai';
    expect(calcStatus(fakeState.playerSelection, fakeState.compSelection)).toBe('Lost');
  });

  test('returns "Waiting" if nothing is passed in', () => {
    expect(calcStatus()).toBe('Waiting');
  });
});

describe('checkForCheating function', () => {

  test('if isCheating is true, returns the winning choice', () => {
    const playerSelection = 'Axe';
    const isCheating = true;
    const actual = checkForCheating(playerSelection, isCheating);

    const expected = 'Moai';

    expect(actual).toBe(expected);
  });

  test('if isCheating is false, returns a valid choice', () => {
    const playerSelection = 'Axe';
    const isCheating = false;
    const actual = checkForCheating(playerSelection, isCheating);

    const options = ['Moai', 'Axe', 'Tree'];

    // expect(false).toBe(true);
    expect(options).toContain(actual);
  });

});
