import React from "react";
import Screen from "./Screen";

const App = () => {
  const user = {
    name: "mallang",
  };

  return (
    <div>
      <Screen user={user} />
    </div>
  );
};

export default App;
