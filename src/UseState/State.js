import { useState } from 'react';

export const CustomHook = () => {
  const [user, setUser] = useState({ name: 'mirekj', secName: 'sad' });
  return (
    <>
      <div>Elemet</div>

      <b>name: {user.name}</b>
      <b>name: {user.secName}</b>
      <input
        value={user.name}
        onChange={(e) => setState({ ...user, name: e.target.value })}
      />
    </>
  );
};
