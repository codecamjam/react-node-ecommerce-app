import { useState } from 'react';

const Radiobox = ({ prices }) => {
  const [value, setValues] = useState(0);

  const handleChange = () => {};

  return prices.map((p, i) => (
    <div key={i}>
      <input
        onChange={handleChange}
        value={`${p._id}`}
        type="radio"
        className="form-check-input"
      />
      <label htmlFor="" className="form-check-label">
        {p.name}
      </label>
    </div>
  ));
};

export default Radiobox;
