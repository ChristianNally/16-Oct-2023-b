import useToggle from "../hooks/useToggle";

const Toggle = () => {
  const [isSunny, toggleIsSunny] = useToggle();

  return (
    <div>
      <h2>Toggle Component</h2>

      <button onClick={toggleIsSunny}>Click me!</button>

      { isSunny && <h2>🌞</h2> }
      { !isSunny && <h2>🌚</h2> }
    </div>
  );
};

export default Toggle;
