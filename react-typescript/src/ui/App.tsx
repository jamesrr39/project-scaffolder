import { useDispatch, useSelector } from "react-redux";
import { add } from "src/counter";
import { RootState } from "src/store";

function App() {
  const count = useSelector((state: RootState) => {
    return state.counter.count;
  });

  const dispatch = useDispatch();

  return (
    <div>
      <p>Current count: {count}</p>
      <button
        type="button"
        onClick={() => {
          dispatch(add({ amount: 1 }));
        }}
      >
        Add one
      </button>
    </div>
  );
}

export default App;
