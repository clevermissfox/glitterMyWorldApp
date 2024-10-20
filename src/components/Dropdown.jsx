import { useMemo } from "react";
import { generateUniqueId } from "../utils/uuid";

export default function Dropdown({ children, onChange, label }) {
  const id = useMemo(() => generateUniqueId("dropdown"), []);
  return (
    <>
      <label className="small margin-be-quarter" htmlFor={id}>
        {label}
      </label>
      <select id={id} className="dropdown" onChange={onChange}>
        {children}
      </select>
    </>
  );
}
